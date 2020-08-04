// src/skeleton/skeleton.js
import Vue from 'vue'

// 引入的骨架屏组件
import skeletonHome from './skeletonHome.vue'
import skeletonDetail from './skeletonDetail.vue'
// import skeletonMessage from './skeleton/skeletonMessage.vue'

// <skeletonMessage id="skeleton-message" style="display:none"/>
// 组件的 id 对应之前在 vue.config.js 里 skeletonId 。
export default new Vue({
    components: {
        skeletonHome,
        skeletonDetail
        // skeletonMessage,
    },
    template: `
        <div>
            <skeletonHome id="skeleton-home" style="display:none"/>           
            <skeletonDetail id="skeleton-detail" style="display:none"/>         
        </div>
    `
})
