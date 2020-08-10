const SkeletonPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: (config) => {
    const plugins = [
      new SkeletonPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/components/skeleton/index.js')
          }
        },
        // SPA 下是压缩注入 HTML 的 JS 代码
        minimize: true,
        // 服务端渲染时是否需要输出信息到控制台
        quiet: true,
        // 根据路由显示骨架屏, router 的配置决定了我们各个路由路径所对应的骨架屏。
        router: {
          mode: 'hash',
          routes: [
            // 其中 path 对应着页面在 vue-router 中的 path ，skeletonId 是骨架屏的 id，后面马上会说明
              {
                  path: '/',
                  skeletonId: 'skeleton-home'
              },
              {
                  path: '/detail',
                  skeletonId: 'skeleton-detail'
              }
          ]
        }
      })
    ]
    config.plugins = [...config.plugins, ...plugins];
  },
  css: {
    // 使用 css 分离插件 mini-css-extract-plugin，不然骨架屏组件里的 <style> 不起作用，
    extract: true,
  }
}