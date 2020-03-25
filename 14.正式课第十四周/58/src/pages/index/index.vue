<template>
  <div class='homeBox'>
    <div class="locationBox">
      <van-icon name="location" color='#c59ff3' size='20px'></van-icon>
      送至龙锦苑东五区
      <van-icon name="arrow-down"></van-icon>
    </div>
    <searchBar placeholder="南美白虾19.9元"></searchBar>

    <div class="swiperBox">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular='true'>
        <block v-for="(item,index) in imgs" :key="index">
          <swiper-item>
            <!-- <view :class="'swiper-item '+item"></view> -->
            <img :src="item" alt="" class='imgBox'>
          </swiper-item>
        </block>
      </swiper>
    </div>

    <!-- 广告图部分 -->
    <div class="adBox">
      <img src="https://j-image.missfresh.cn/img_20190311114444266.png" alt="">
    </div>
    <div class="rowBox">
      <van-row gutter="10" class='row'>
        <van-col span="8">
          <van-icon name="logistics" /> 最快30分到达
        </van-col>
        <van-col span="8">
          <van-icon name="fire-o" /> 全球产地直采
        </van-col>
        <van-col span="8">
          <van-icon name="after-sale" /> 天天平价
        </van-col>
      </van-row>
    </div>

    <!-- 导航部分 -->
    <van-grid :gutter="10" :border='false'>
      <van-grid-item use-slot v-for="(item,index) in tabAry" :key='index'>
        <navigator :url="item.url" class='tabItem'>
          <img :src="item.img" alt="">
          <div>{{item.text}}</div>
        </navigator>
      </van-grid-item>
    </van-grid>

    <div class="bg">
      <!-- 商品tab导航 -->
      <van-tabs :active="active" class="van_tabs" sticky @change='tabChange'>
        <van-tab title="全部" name='all'></van-tab>
        <van-tab title="年货节" name='year'></van-tab>
        <van-tab title="在家火锅" name='home'></van-tab>
        <van-tab title="早餐" name='default'></van-tab>
        <van-tab title="一件包邮" name='one'></van-tab>
        <van-tab title="快手菜" name='quick'></van-tab>
        <van-tab title="会员精选" name='vip'></van-tab>
      </van-tabs>
      <div class="van_content">
        <goods :data='listAry'></goods>
      </div>
    </div>

  </div>
</template>

<script>
import searchBar from "@/components/searchBar";
import goods from "./goods";
import { http } from "@/utils";

export default {
  data() {
    return {
      imgs: [],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      tabAry: [
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        },
        {
          url: "",
          text: "新鲜水果",
          img: "https://j-image.missfresh.cn/img_20190523222548600.png"
        }
      ],
      active: 'all',
      listAry: []
    };
  },

  components: {
    searchBar,
    goods
  },
  created() {
    this.getBanner();
    http('/homeList',{type:this.active}).then(data=>{
      this.listAry = data.data.data
    })
  },
  methods: {
    tabChange(e) {
      console.log(e);
      http('/homeList',{type:e.mp.detail.name}).then(data=>{
        this.listAry = data.data.data
      })
      // this.listAry = ary;
    },
    getBanner(){
      console.log(666)
      http('/banner').then((data)=>{
        this.imgs = data.data.data
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
};
</script>

<style lang='less' scoped>
.homeBox {
  text-align: center;
  .bg{
    background: #eee;
  }
  .van_tabs {
    padding: 10px;
  }
  .rowBox {
    background: #fff;
    padding: 15px 5px;
    box-sizing: border-box;
    margin: 10px;
    .row {
      font-size: 12px;
      color: rgb(97, 95, 95);
    }
  }
}
.swiperBox {
  width: 95%;
  margin: auto;
  border-radius: 6px;
  overflow: hidden;
}
.imgBox {
  width: 100%;
}
.adBox {
  width: 95%;
  height: 100px;
  margin: 10px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.tabItem {
  width: 100%;
  img {
    width: 90rpx;
    height: 100rpx;
    border-radius: 80rpx;
    overflow: hidden;
  }
}
</style>
