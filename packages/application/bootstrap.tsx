import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';

import shareStore from 'share-store';
import 'mobx';
import 'mobx-react';

function loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const newScript = document.createElement('script');
        newScript.onerror = reject;
        newScript.onload = () => resolve();
        newScript.async = true;
        document.head.appendChild(newScript);
        newScript.src = url;
    });
}

interface IPluginData {
    name: string;
    url: string;
}

declare global {
    interface Window {
        // webpack对于这里没有定义， 所以暂时any
        _Plugin: any;
    }
}

/**
 * 引入并执行一个插件， 注意理论上是支持热加载的
 */
async function loadPlugin(url: string, scope: string): Promise<void> {
    await loadScript(url);

    // 动态加载邦联模块并初始化
    await __webpack_init_sharing__('default');
    const container = window._Plugin[scope];
    await container.init(__webpack_share_scopes__.default);

    // 执行远程模块
    const init = await window._Plugin[scope].get('.');
    init();
}

(async () => {
    // 读取插件配置， 确定当前程序有哪些插件， 然后加载使用
    const plugins = document.querySelectorAll('script[id="plugins"]') as unknown as HTMLScriptElement[];
    // 合并plugins中的配置
    let mergePluginsObject: Record<string, string> = {};
    plugins.forEach(item => {
        const configArr: IPluginData[] = JSON.parse(item?.textContent || '[]');
        configArr.forEach(config => {
            mergePluginsObject = {
                ...mergePluginsObject,
                [config.name]: config.url
            };
        });

    });

    // 加载、执行插件
    const promises = Object.entries(mergePluginsObject).map(([name, url]) => loadPlugin(url, name));
    await Promise.all(promises);

    // 在所有插件注册完成后， 正式启动程序， 渲染页面
    Promise.all(shareStore.promises).then(() => {
        render(
            <HashRouter>
                {
                    shareStore.routes.map(r => (
                        <div key={r.path}>
                            <Link to={r.path}>查看{r.path}提供的路由页</Link>&nbsp;&nbsp;
                            <Link to="/">返回主页</Link>
                        </div>
                    ))
                }
                <Routes>
                    {
                        shareStore.routes.map(r => <Route path={r.path} key={r.path} element={r.component} />)
                    }
                </Routes>
            </HashRouter>,
            document.getElementById('app')
        );
    });
})();
