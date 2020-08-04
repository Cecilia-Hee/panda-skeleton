let rem, dpr;
const doc = window.document,
  docEl = doc.documentElement,
  viewport = doc.querySelector('meta[name="viewport"]');
let zoomScale,
  zoomScaleNum;
if (viewport) {
  //console.warn("灏嗘牴鎹凡鏈夌殑meta鏍囩鏉ヨ缃缉鏀炬瘮渚�");
  zoomScale = viewport.getAttribute("content").match(/initial-scale=(["']?)([\d.]+)\1?/);
  if (zoomScale) {
    zoomScaleNum = parseFloat(zoomScale[2]);
    dpr = parseInt(1 / zoomScaleNum);
  }
}
if (!dpr && !zoomScaleNum) {
  const os = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi));
    dpr = window.devicePixelRatio;
  dpr = os ? dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1 : 1;
  zoomScaleNum = 1 / dpr;
}

// 设置 rem 函数
function setRem() {
  //   // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  //   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  // //得到html的Dom元素
  //   let htmlDom = document.getElementsByTagName('html')[0];
  // //设置根元素字体大小
  //   htmlDom.style.fontSize= htmlWidth/20 + 'px';

  let docWidth = docEl.getBoundingClientRect().width;
  if (docWidth / dpr > 750) {
    docWidth = 750 * dpr;
  }
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  rem = docWidth / 320 * 16;
  //console.log(dpr);
  //console.log(rem);
  docEl.style.fontSize = rem + "px";

}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}