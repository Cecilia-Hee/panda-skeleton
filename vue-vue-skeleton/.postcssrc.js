module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {},
    
    // 配置rem
    "postcss-pxtorem": {
      rootValue: 37.5,    // 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
      selectorBlackList  : [], // 忽略转换正则匹配项（选择器）
      propList: ['*']
    },  
    "postcss-viewport-units":{
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    }, 
    // "cssnano": { 
    //   // preset: "advanced", 
    //   autoprefixer: false, 
    //   "postcss-zindex": false 
    // }
  }
}