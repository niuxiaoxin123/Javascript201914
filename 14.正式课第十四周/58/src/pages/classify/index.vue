<template>
  <div class="classifyBox">
    <div class="topBox">
      <searchBar placeholder="红颜草莓39.9/350g"></searchBar>
    </div>
    <div class="contentBox">
      <van-sidebar :active-key="activeKey" class='slideBar'>
        <van-sidebar-item @click='getData(item)' v-for="(item,index) in tabsAry" :title="item.text" :key='index'></van-sidebar-item>
      </van-sidebar>
      <div class="slideContent">
        <div class="swiperBox">
          <swiper :indicator-dots="false" :autoplay="true" :circular='true'>
            <block v-for="(item,index) in imgs" :key="index">
              <swiper-item>
                <!-- <view :class="'swiper-item '+item"></view> -->
                <img :src="item" alt="" class='imgBox'>
              </swiper-item>
            </block>
          </swiper>
        </div>
        <div class="goodsBox">
          <van-card v-for='(item,index) in list' :key="index" :price="item.price" :centered='true' :desc="item.desc" :title="item.title" :thumb="item.img">
            <view slot="footer">
              <van-icon name="add" color="#c59ff3" size='20px' @click='add(item)' />
            </view>
          </van-card>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import searchBar from "@/components/searchBar";
import { http } from "@/utils";
export default {
  data() {
    return {
      activeKey: 0,
      tabsAry: [
        {
          id: "fruit",
          text: "时令水果"
        },
        {
          id: "vegetables",
          text: "新鲜蔬菜"
        },
        {
          id: "meat",
          text: "肉蛋熟食"
        },
        {
          id: "fish",
          text: "活鲜产品"
        },
        {
          id: "youx",
          text: "优鲜超市"
        },
        {
          id: "home",
          text: "在家火锅"
        },
        {
          id: "milk",
          text: "品质乳品"
        },
        {
          id: "foods",
          text: "悠闲食品"
        }
      ],
      imgs: [
        "https://j-image.missfresh.cn/img_20190528192621669.jpg",
        "https://j-image.missfresh.cn/img_20190524230020655.jpg",
        "https://j-image.missfresh.cn/img_20190522223030516.jpg",
        "https://j-image.missfresh.cn/img_20190523222548600.png"
      ],
      list: []
    };
  },

  components: {
    searchBar
  },

  methods: {
    onChange(event) {
      console.log(event);
      wx.showToast({
        icon: "none",
        title: `切换至第${event.mp.detail}项`
      });
    },
    getData(item) {
      console.log(item);
      http.get("/classify", { type: item.id }).then(data => {
        this.list = data.data.data;
      });
    },
    add(item) {
      let list = getApp().globalData.cartList;
      let data = item;
      wx.hideToast();
      wx.showToast({
        title: "添加成功",
        icon: "success",
        duration: 1000
      });
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === data.id) {
          console.log(list[i].count);
          ++list[i].count;
          return;
        }
      }
      data.isChecked = true;
      data.count = 1;
      list.push(data);
    }
  },

  created() {
    // let app = getApp()
    this.getData({ id: "fruit" });
  }
};
</script>

<style lang='less' >
.classifyBox {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  .topBox {
    height: 50px;
  }
  .contentBox {
    display: flex;
    flex: auto;
    .slideBar {
      .van-sidebar {
        width: var(--sidebar-width, 85px);
      }
      width: var(--sidebar-width, 85px);
    }
    .slideContent {
      flex: auto;
      background: #fff;
      height: 100%;
      overflow-y: scroll;
      .swiperBox {
        height: 100px;
        padding: 8px;
        box-sizing: border-box;
        swiper {
          border-radius: 10px;
          height: 100px;
          overflow: hidden;
        }
      }
      .van-card {
        background: #fff;
        border-bottom: 1rpx solid #eee;
      }
    }
  }
}
</style>
