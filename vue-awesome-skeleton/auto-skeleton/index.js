// 步骤：
// 1. 读文件；没有配置，只能规定目录名称与路由一致
// 2. 判断当前是hash路由，还是history路由，根据不同的路由，显示不同的骨架屏
// 3. 销毁的事件，使用awesome中方法。

// 方法的参数：mode, routes[]，

const path = require('path')
const fs = require('fs')

function autoSkeleton(routes = ['user'], mode = 'hash', callback) {
  routes.forEach((route) => {
    // 读文件
    const filePath = path.join(__dirname, `../skeleton-output/${route}/skeleton-${route}.html`);
    let skeletonTpl = '';
    try {
      // 判断文件是否存在
      skeletonTpl = fs.readFileSync(filePath, 'utf-8');
      callback && callback(skeletonTpl)
    } catch (error) {
      console.log('err', '文件不存在')
      return ''
    }

    
    
    
  })
}

module.exports = autoSkeleton