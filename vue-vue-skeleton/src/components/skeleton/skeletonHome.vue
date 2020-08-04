<!--
 * @Author: Helijun
 * @Date: 2020-08-04 15:34:46
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-04 16:15:43
 * @Description: 首页的骨架屏
--> 
// skeletonMessage.vue
<template>
    <div class="skeleton-block">
      <div class="sk-loanList-header-bg"></div>
      <div class="sk-main">
        <div class="sk-title"></div>
        <div class="sk-list-wrapper">
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
          <div class="sk-item">
            <div class="sk-img"></div>
            <div class="sk-text">
              <div class="sk-text-item"></div>
              <div class="sk-text-item"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
// import messageItem from './components/s-messageListItem'
export default {
    name: 'skeletonHome',
    // components: {
    //     's-messageItem': messageItem
    // }
}
</script>

<style scoped lang="less">
.skeleton-block {
    width:100%;
    height: 100vh;
    padding: 40px;
    box-sizing: border-box;
    .sk-main {  
      .sk-title {
        height: 34px;
        margin-bottom: 10px;
      }
      .sk-list-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .sk-item {   
        margin-bottom: 20px;
        .sk-img {
          width: 220px;
          height: 220px;
          background-color: #efefef;
          margin-bottom: 20px;
        }
        .sk-text {
          .sk-text-item {
            background-color: #efefef;
            height: 20px;
            margin-bottom: 4px;
          }
        }
        
      }
    }
}
.sk-loanList-header-bg {
    height:300px;
    background:#efefef;
    margin-bottom: 20px;
}


</style>
