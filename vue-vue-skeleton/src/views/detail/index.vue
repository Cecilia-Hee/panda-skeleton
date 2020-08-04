<!--
 * @Author: Helijun
 * @Date: 2020-08-04 16:17:55
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-04 16:48:58
 * @Description: 
--> 
<template>
  <div class="page">
    <div class="rec">
      <img :src="detail.picUrl" alt="">
    </div>

    <div class="text">
      {{detail.name}}
    </div>

    <div class="para">
      {{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}{{detail.name}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    this.detail = JSON.parse(this.$route.query.item);
    console.log(this.detail)
  },
}
</script>

<style lang="less" scoped>
.page {
  padding-top: 100px;
  .rec {
    width: 400px;
    height: 400px;
    margin: 0 auto 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    text-align: center;
    font-size: 30px;
    color: black;
    margin-bottom: 20px;
  }
  .para {
    margin: 0 40px 40px;
    font-size: 24px;
    line-height: 34px;
  }
}

</style>