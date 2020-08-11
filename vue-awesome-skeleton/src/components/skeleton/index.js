// src/components/skeleton/index.js
import Vue from 'vue'

// 引入的骨架屏组件
import skeletonHome from './home.vue'
import skeletonUser from './user.vue'

// 组件的 id 对应之前在 vue.config.js 里 skeletonId 。
export default new Vue({
    components: {
        skeletonHome,
        skeletonUser
    },
    template: `
        <div>
            <skeletonHome id="skeleton-home" style="display:none"/>           
            <skeletonUser id="skeleton-user" style="display:none"/>         
        </div>
    `
})
