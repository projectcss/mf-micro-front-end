# 基于邦联模块的插件化机制 V2版本 Demo

## 启动指令

构建

```shell
yarn workspaces foreach run build
```

启动所有静态资源server

```shell
yarn workspaces foreach -p run serve
```

## demo查看方式

使用浏览器打开并浏览http://localhost:3000/

## 基本解释

package/application 文件夹下为最终的产品， html中包含插件配置， 可以调整删改。 达到定制化和功能增减。 理论上支持热插拔。

## 特点

- 所有的插件均需要使用webpack构建
- 所有的由第一方提供的能力， 均无需使用webpack构建， 使用任意compiler编译即可
- 提供本地开发工具，对标 single-spa 的 imports-map-overrides

