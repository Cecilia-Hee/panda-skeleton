// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {}, 
    "postcss-px-to-viewport": { 
      viewportWidth: 750, 
      viewportHeight: 1334, 
      unitPrecision: 3, 
      viewportUnit: 'vw', 
      selectorBlackList: ['.ignore', '.hairlines'], 
      minPixelValue: 1, 
      mediaQuery: true //mediaQuery (Boolean)，媒体查询里的单位是否需要转换单位，@keyframes和media里的px默认是不转化的，设置该属性为true，则媒体查询里的单位会转成vw。
    }, 
    "postcss-viewport-units":{
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    }, 
    "cssnano": { 
      // preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false 
    }
  }
}
