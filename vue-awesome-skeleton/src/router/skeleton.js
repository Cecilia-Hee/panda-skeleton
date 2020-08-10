/*
 * @Author: Helijun
 * @Date: 2020-08-10 15:52:22
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-10 18:46:36
 * @Description: 
 */ 

const loadingTemp = {
  template: '<div>loading</div>'
}
const errorTemp = {
  template: '<div>error</div>'
}

import loadingVue from './loading.vue'

export function lazyLoadView (AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: loadingVue,
    error: errorTemp,
    delay: 0,
    timeout: 3000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      console.log(data, children)
      // 这里用 vue 内部的渲染机制去渲染真正的异步组件
      return h(AsyncHandler, data, children)
    }
  })
}