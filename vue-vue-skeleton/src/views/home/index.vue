<!--
 * @Author: Helijun
 * @Date: 2020-07-31 15:35:48
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-10 17:19:45
 * @Description: 首页
--> 
<template>
  <div class="page index-page">
    <div class="header">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-list">
        <swiper-slide v-for="(item, index) in bannerList" :key="index">
          <a :href="item.url" class="swiper-list-item">
            <img :src="item.imageUrl" alt="" class="swiper-list-item-img">
          </a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

    <div class="box-wrapper recommend-list">
      <div class="title">推荐歌单</div>
      <div class="recommend-list-content">
        <div class="recommend-list-content-item" v-for="(item, index) in recommendList" :key="index">
          <div class="recommend-list-content-item-img">
            <img :src="item.picUrl" />
          </div>
          <div class="recommend-list-content-item-name">{{item.name}}</div>
          <div class="recommend-list-content-item-tag">
            {{item.playCount > 10000 ? `${Number(item.playCount / 10000).toFixed(0)}万` : item.playCount}}
          </div>
        </div>
        
      </div>
    </div>
    <div class="bottom">
      <div class="tab active">首页</div>
      <div class="tab "  @click="gotoIndex">个人中心</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

const baseUrl = "https://music.lsqy.tech/api";

export default {
  data() {
    return {
      bannerList: [],
      recommendList: [],
      swiperOption: {
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        },
        slidesPerView: 1,
        watchOverflow: true,
        centeredSlides: true, // 选中tab居中
        spaceBetween: 1, // tab间距
        initialSlide: 0,
        observer: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      
    }
  },

  components: {
    Swiper,
    SwiperSlide
  },

  directives: {
    swiper: directive
  },

  created() {
    this.getBannerList();
    this.getRecomendList();
  },

  methods: {
    getBannerList() {
      axios.get(`${baseUrl}/banner`).then((res) => {
        // console.log(res)
        const { banners } = res && res.data
        this.bannerList = banners;
        console.log(this.bannerList)
      }).catch((e) => {
        console.log(e)
      })
    },

    getRecomendList() {
      axios.get(`${baseUrl}/personalized`).then((res) => {
        const { result } = res && res.data
        this.recommendList = result;
      })
    },

    // gotoDetail(item) {
    //   this.$router.push({
    //     path: '/detail',
    //     query: {
    //       item: JSON.stringify(item)
    //     }
    //   })
    // },

    gotoIndex() {
      this.$router.push({
        path: '/detail'
      })
    }

  },
}
</script>

<style lang="less" scoped>
.index-page {
  min-height: 100vh;
  padding: 20px 30px;
  box-sizing: border-box;
  .header {
    height: 300px;
    margin-bottom: 40px;
  }
  .swiper-list {
    height: 300px;
    .swiper-list-item {
      .swiper-list-item-img {
        width: 100%;
        max-height: 300px;
      }
    }
  }

  .box-wrapper {
    margin-bottom: 20px;
    .title {
      font-size: 30px;
      line-height: 1.2;
      height: 36px;
      margin-bottom: 20px;
    }
  }

  .recommend-list {
    .recommend-list-content {
      // display: grid;
      // grid-template-columns: repeat(auto-fill, 220px);
      // grid-row-gap: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // justify-content: space-around;
      .recommend-list-content-item {
        width: 220px;
        position: relative;
        margin-bottom: 20px;
        .recommend-list-content-item-img {
          width: 220px;
          height: 220px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
          img {
            width: 100%;
          }
        }
        .recommend-list-content-item-name {
          font-size: 24px;
          line-height: 34px;
          color: #666666;
          text-align: center;
          height: 68px;
          overflow: hidden;
          width: 100%;
        }
        .recommend-list-content-item-tag {
          position: absolute;
          top: 6px;
          right: 6px;
          font-size: 20px;
          color: #ffffff;
        }
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