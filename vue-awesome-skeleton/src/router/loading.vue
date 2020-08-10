<!--
 * @Author: Helijun
 * @Date: 2020-08-10 16:24:49
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-10 18:45:45
 * @Description: 
--> 
<template>
  <div class="loading">0000</div>
</template>

<script>
export default {
  mounted() {
    console.log('loading')
  },
}
</script>

<style lang="less" scoped>
.loading {
  min-height: 100vh;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
}
</style>