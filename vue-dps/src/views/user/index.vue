<!--
 * @Author: Helijun
 * @Date: 2020-08-10 14:27:49
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-11 18:11:10
 * @Description: 
--> 
<template>
  <div class="page" v-if="playList.length > 0">
  <!-- <div class="page"> -->
    <div class="header">
      <div class="bg"  :style="{backgroundImage: `url(${profile.backgroundUrl})`}"></div>
      <div class="top">
        <div class="avater">
          <img :src="profile.avatarUrl" alt="">
        </div>
        <div class="nickname">
          <div>{{profile.nickname}}</div>
          <div>{{profile.signature}}</div>
        </div>
      </div>
      <div class="fn-list">
        <div class="item">
          <div></div>
          <div>本地音乐</div>
        </div>
        <div class="item">
          <div></div>
          <div>下载管理</div>
        </div>
        <div class="item">
          <div></div>
          <div>电台</div>
        </div>
        <div class="item">
          <div></div>
          <div>我的收藏</div>
        </div>
      </div>
    </div>

    <div class="list-wrapper">
      <div class="title">我的歌单</div>
      <div class="list">
        <div class="item" v-for="(item, index) in playList" :key="index">
          <div class="left">
            <img :src="item.coverImgUrl" alt="">
          </div>
          <div class="right">
            <div class="list-name">{{item.name}}</div>
            <div class="total">{{item.trackCount}}首</div>
          </div>
        </div>
      </div>
    </div>

     <div class="bottom">
      <div class="tab" @click="gotoIndex">首页</div>
      <div class="tab active">个人中心</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = "https://music.lsqy.tech/api";
export default {
  data() {
    return {
      // 用户信息
      profile: {},
      playList: []
    }  
  },
  mounted() {
    this.init();
    this.getPlayList()
  },
  methods: {
    init() {
      axios.get(`${baseUrl}/user/detail?uid=32953014`).then((res) => {
        // console.log(res)
        const {profile} = res && res.data
        this.profile = profile
      })
    },
    getPlayList() {
      axios.get(`${baseUrl}/user/playlist?uid=32953014`).then((res) => {
        // console.log(res)
        const { playlist } = res && res.data
        this.playList = playlist
      })
    },
    gotoIndex() {
      this.$router.push({
        path: '/'
      })
    }
  },
}
</script>

<style lang="less" scoped>
.page {
  padding-bottom: 100px;
}
.header {
  height: 420px;
  padding: 50px 40px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
  color: #ffffff;
  .bg {
    filter: blur(30px) brightness(.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .top {
    text-align: center;
    margin-bottom: 40px;
    .avater {
      width: 120px;
      height: 120px;
      border-radius: 120px;
      overflow: hidden;
      margin: 0 auto 20px;  
      img {
        width: 100%;
      }
    }
    .nickname {
      font-size: 30px;
      div:first-of-type {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
  }

  .fn-list {
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      font-size: 24px;
      div:first-of-type {
        width: 28px;
        height: 28px;
        background: RGBA(254,255,253,0.40);
        
        margin: 0 auto 10px;
      }
    }
  } 
}

.list-wrapper {
  padding: 20px 40px;
  box-sizing: border-box;
  .title {
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      display: flex;
      width: 48%;
      margin-right: 10px;
      margin-bottom: 40px;
      .left {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        border-radius: 8px;
        overflow: hidden;
        flex-shrink: 0;
        img {
          width: 100%;
        }
      }
      .right {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}

.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    box-shadow: 0 2px 15px 0px gray;
    background: #ffffff;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tab {
      width: 50%;
      text-align: center;
      &.active {
        color: RGBA(254,90,53,1.00);
      }
    }
  }

</style>