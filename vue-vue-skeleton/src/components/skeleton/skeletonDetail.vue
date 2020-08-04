<!--
 * @Author: Helijun
 * @Date: 2020-08-04 16:33:54
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-04 16:56:10
 * @Description: 详细页的
-->  
<template>
  <div class="skeleton-block page">
    <div class="rec"></div>
    <div class="text"></div>
    <div class="para"></div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.page {
  padding-top: 100px;
  .rec {
    width: 400px;
    height: 400px;
    margin: 0 auto 100px;
    background: #efefef;
  }
  .text {
    margin: 0 40px 40px;
    background: #efefef;
    height: 50px;
  }
  .para {
    margin: 0 40px 40px;
    font-size: 24px;
    line-height: 34px;
    background: #efefef;
    min-height: 34px; 
  }
}

</style>