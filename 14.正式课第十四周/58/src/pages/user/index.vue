<template>
  <div class="userBox">
    <div class="title">
      <div class="imgBox">
        <img :src="userInfo.avatarUrl" alt="">
      </div>
      <div class="userName">{{userInfo.nickName}}</div>
      <div class="tip">
        <van-icon name="comment-o" dot size="20px" />
      </div>
    </div>

    <div class="moneyBox">
      <van-row>
        <van-col span="6">
          <div>￥1.72</div>
          余额
        </van-col>
        <van-col span="6">
          <div>2</div>
          优惠券
        </van-col>
        <van-col span="6">
          <div>0</div>
          商品券
        </van-col>
        <van-col span="6">
          <div>0</div>
          鲜币兑换
        </van-col>
      </van-row>
    </div>

    <div class="taskBox">
      <van-steps :steps="steps" :active="active" />
    </div>

    <!-- 我的订单 -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      steps: [
        {
          text: "已获得",
          // desc: "描述信息"
        },
        {
          text: "下单后解锁",
          // desc: "描述信息"
        },
        {
          text: "未开启",
          // desc: "描述信息"
        }
      ],
      active: 1
    };
  },

  components: {},

  methods: {},

  mounted() {
    let app = getApp();
    console.log(app.globalData);
    let userInfo = app.globalData.userInfo;
    if (!userInfo) {
      wx.getUserInfo({
        success: res => {
          let app = getApp();
          this.userInfo = res.userInfo;
        }
      });
    } else {
      this.userInfo = userInfo;
    }
  }
};
</script>

<style scoped lang='less'>
.userBox {
  background: #eee;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1rpx solid #eee;
    background: #fff;
    > div {
      flex: auto;
      text-align: center;
    }
    .imgBox {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
  .moneyBox {
    background: #fff;
    margin: 5px auto;
    border-radius: 10px;
    text-align: center;
    width: 95%;
    padding: 10px 0;
  }
}
</style>
