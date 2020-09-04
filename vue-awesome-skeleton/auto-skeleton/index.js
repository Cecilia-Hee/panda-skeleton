// 步骤：
// 1. 读文件；没有配置，只能规定目录名称与路由一致
// 2. 判断当前是hash路由，还是history路由，根据不同的路由，显示不同的骨架屏
// 3. 销毁的事件，使用awesome中方法。

// 方法的参数：mode, routes[]，

const path = require('path')
const fs = require('fs')


function getContent(skeletons, mode) {
  const skeletonClass = 'skeleton-remove-after-first-request';
  const skeletonDomList = [];
  const matchList = [];
  const skeletonsRoutes = [];

  skeletons.forEach((item, index) => {
    const dom = `<div class="${skeletonClass}" id="${item.id}" style="
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9998;
      background-repeat: no-repeat !important;
      background-size: 100% auto !important;
      background-image: url(${item.base64}) !important;
      background-color: #FFFFFF !important;
      background-position: center 0 !important;
      display: none;
    "></div>`

    const jsStr = (index === 0 ? '' : `else `) + `if(isMatched('^\/${item.id}(?:\/)?', '${mode}')) {
      showSkeleton('${item.id}')
    }`

    skeletonDomList.push(dom);
    matchList.push(jsStr)
    skeletonsRoutes.push({id: `${item.id}`}); 
  })


  // console.log(skeletonDomList)
  // console.log(isMatchList)

  const content = `
  <style>
    @keyframes flush {
      0% {
        left: -100%;
      }
      50% {
        left: 0;
      }
      100% {
        left: 100%;
      }
    }
  </style>
  <div class="${skeletonClass}" style="
    animation: flush 2s linear infinite;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    background: linear-gradient(to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, .85) 50%,
      rgba(255, 255, 255, 0) 100%);
  "></div>

  ${skeletonDomList.join("")}
    
  <script class="${skeletonClass}">
    // 判断路由
    var pathname = window.location.pathname;
    var hash = window.location.hash;

    var skeletons = ${JSON.stringify(skeletonsRoutes)}

    var isMatched = function (pathRegStr, mode) { 
      var pathReg = new RegExp(pathRegStr, 'i');
      return "hash" === mode 
      ? pathReg.test(hash.replace("#", "")) 
      : "history" === mode && pathReg.test(pathname) };
      
     var showSkeleton = function (skeletonId) { 
      for (var t = 0; t < skeletons.length; t++) { 
        var skeleton = skeletons[t]; 
        var dom = document.querySelector('#' + skeleton.id);
        if(skeletonId === skeleton.id) {
          dom.style.display = "block"
        } else {
          dom.style.display = "none"
        }
      } 
     }; 

     ${matchList.join("")}

    
    // Define hooks
    window.SKELETON = {
      destroy: function () { // Manually destroy the skeleton
        if(!Array.from){
            Array.from = function (el) {
                return Array.apply(this, el);
            }
        }
        var removes = Array.from(document.body.querySelectorAll('.${skeletonClass}'));
        removes && removes.map(function(item){
          document.body.removeChild(item);
        });
      }
    };

    // destroy after the onload event by default
    // window.addEventListener('load', function(){
    //   setTimeout(function(){
    //     window.SKELETON && SKELETON.destroy()
    //   }, 0);
    // });
  </script>
  `

  return content;
}

function autoSkeleton(routes = [], mode = 'hash', callback) {
  const arr = [];
  routes.forEach((route) => {
    // 读文件
    const filePath = path.join(__dirname, `../skeleton-output/${route}/base64-${route}.txt`);
    // console.log(filePath)
    let skeletonTpl = '';
    try {
      // 判断文件是否存在
      skeletonTpl = fs.readFileSync(filePath, 'utf-8');
      
      arr.push({
        id: route, base64: skeletonTpl});
      // console.log(skeletonTpl)
    } catch (error) {
      // console.log('err', '文件不存在，请先生成骨架屏')
      callback && callback('');
    }
  })
  // 将拿到的所有骨架屏传入到getContent中
  callback && callback(getContent(arr, mode));
  // return getContent(arr, mode);    // 这样不起作用
}

module.exports = autoSkeleton