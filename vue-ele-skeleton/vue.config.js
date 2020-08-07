const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
  configureWebpack: (config) => {
    const plugins = [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './shell/'), // 生成的骨架屏的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好的output.path一致
        routes: ['/'],  // 需要生成骨架屏的页面， 这里只能是首页，如果是多入口，只要将多入口的首页配置在这里就可以了
        port: '7890',
        loading: 'chiaroscuro',
        // text: {
        //   color: 'red'
        // },
        svg: {
          color: '#EFEFEF',
          shape: 'circle',
          // shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
        },
        image: {
          shape: 'rect', // `rect` | `circle`
          color: '#EFEFEF',
          // shapeOpposite: ['.mint-swipe-items-wrap img']
        },
        pseudo: {
          color: '#EFEFEF', // or transparent
          shape: 'circle', // circle | rect
          // shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
        },
        button: {
          color: '#EFEFEF',
          // excludes: ['.mint-swipe-items-wrap a']
        },
        defer: 5000,
        // device: 'iPhone 6',
        // minify: {
        //   minifyCSS: { level: 2 },
        //   removeComments: true,
        //   removeAttributeQuotes: true,
        //   removeEmptyAttributes: false
        // },
        minify: false,
        excludes: [],
        remove: [],
        // hide: ['.index-dashedline_7B79b3W', '.Rating-actived_GBtiHkB_0'],
        // grayBlock: ['#app'],
        // cssUnit: 'vw',
        cssUnit: 'rem',
        headless: true,
        
        // cookies: [{
        //   name: 'SID',
        //   value: 'a495vvmEPEE4DZi083dr8yR3EAPYqW40HaWA',
        //   url: 'https://h5.ele.me'
        // }, {
        //   name: 'USERID',
        //   value: '273745271',
        //   url: 'https://h5.ele.me'
        // }],
        noInfo: false,
        // storagies: {
        //   test: '1234'
        // }
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