

// only awesome-skeleton
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoSkeleton = require('./auto-skeleton/index')

let tpl = ''
autoSkeleton(['home', 'user', 'detail'], 'hash', function(res) {
  console.log("==================")
  tpl = res;
})

// console.log("tpl", tpl)

// // 读文件
// let skeletonTpl = ''
// const filePath = path.join(__dirname, './skeleton-output/home/skeleton-home.html');
// console.log('filepath:', filePath)
// try {
//   // 判断文件是否存在
//   const stat = fs.statSync(filePath)
//   console.log('stat:', stat)
//   skeletonTpl = fs.readFileSync(filePath, 'utf-8');
// } catch (err) {
//   console.log('err', '文件不存在')
// }

// const tpl = `<style>@keyframes flush{0%{left:-100%}50%{left:0}100%{left:100%}}</style>
// <div class="skeleton-remove-after-first-request" style="animation:flush 2s linear infinite;position:absolute;top:0;bottom:0;width:100%;z-index:9999;background:linear-gradient(to left,rgba(255,255,255,0) 0,rgba(255,255,255,.85) 50%,rgba(255,255,255,0) 100%)"></div>  
// <div class="skeleton-remove-after-first-request" style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:9998;background-repeat:no-repeat!important;background-size:100% auto!important;background-image:url(data:image/png;base64,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)!important;background-color:#fff!important;background-position:center 0!important"></div>
// <script class="skeleton-remove-after-first-request">window.SKELETON={destroy:function(){for(var e=document.body.querySelectorAll(".skeleton-remove-after-first-request"),o=0;o<e.length;o++){var t=e[o];t&&document.body.removeChild(t)}}},window.addEventListener("load",function(){setTimeout(function(){window.SKELETON&&SKELETON.destroy()},0)})</script>
// `



module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '依然范特西'
      args[0].hasSkeleton = tpl
      return args
    }) 
  }
}

// awesome+vue-skeleton
// const SkeletonPlugin = require('vue-skeleton-webpack-plugin')
// const path = require('path')

// module.exports = {
//   configureWebpack: (config) => {
//     const plugins = [
//       new SkeletonPlugin({
//         webpackConfig: {
//           entry: {
//             app: path.join(__dirname, './src/components/skeleton/index.js')
//           }
//         },
//         // SPA 下是压缩注入 HTML 的 JS 代码
//         minimize: true,
//         // 服务端渲染时是否需要输出信息到控制台
//         quiet: true,
//         // 根据路由显示骨架屏, router 的配置决定了我们各个路由路径所对应的骨架屏。
//         router: {
//           mode: 'hash',
//           routes: [
//             // 其中 path 对应着页面在 vue-router 中的 path ，skeletonId 是骨架屏的 id，后面马上会说明
//               {
//                   path: '/',
//                   skeletonId: 'skeleton-home'
//               },
//               {
//                   path: '/user',
//                   skeletonId: 'skeleton-user'
//               }
//           ]
//         }
//       })
//     ]
//     config.plugins = [...config.plugins, ...plugins];
//   },
//   css: {
//     // 使用 css 分离插件 mini-css-extract-plugin，不然骨架屏组件里的 <style> 不起作用，
//     extract: true,
//   }
// }

