import React from 'react';

export interface IRouteData {
    path: string;
    component: React.ReactNode
}

class ShareStore {
    constructor() {
        console.log('constructor');
    }

    promises: Array<Promise<any>> = [];

    routes: Array<IRouteData> = [];

    addRoute = (routeData: IRouteData) => {
        this.routes.push(routeData);
    };

    /**
     * 告知主程序注册一个插件， 因为有些插件具有异步特性， 所以接受的参数是promise, 待所有promise进入fulfilled状态后， 程序将启动
     */
    register = (p: Promise<any>) => {
        this.promises.push(p);
    };
}

export default new ShareStore();
