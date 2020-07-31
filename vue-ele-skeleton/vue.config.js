const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: (config) => {
    const plugins = [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './shell/'), // 生成的骨架屏的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好的output.path一致
        routes: ['/'],  // 需要生成骨架屏的页面， 这里只能是首页，如果是多入口，只要将多入口的首页配置在这里就可以了
      })
    ]
    
    config.plugins = [...config.plugins, ...plugins];
  },

  chainWebpack: (config) => {
    // 这一步是为了防止在Vue-cli3中，
    // 创建的项目压缩HTML，去掉了<!--shell-->导致骨架屏不生成
    if (process.env.NODE_ENV !== 'development') {
      console.log(config.plugin('html'))
      config.plugin('html').tap(opts => {
        opts[0].minify.removeComments = false
        return opts
      })
    }
  }
}