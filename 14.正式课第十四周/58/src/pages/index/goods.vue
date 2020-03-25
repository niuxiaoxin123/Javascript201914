<template>
  <div class="goods_list">
    <div class='goods_item' v-for='(item,index) in data' :key="index">
      <div class="img_box">
        <img :src="item.img" alt="">
      </div>
      <h2>
        {{item.title}}
      </h2>
      <p class="desc">{{item.desc}}</p>
      <div class="bot">
        <div class="price">￥{{item.price}}</div>
        <div class="add">
          <van-icon name="add" color="#c59ff3" size='20px' @click='add(item)' />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
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
  components: {}
};
</script>
<style lang="less" scoped>
.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
  box-sizing: border-box;
  .goods_item {
    width: 49%;
    background: #fff;
    box-sizing: border-box;
    margin: 5px 0;
    padding: 5px 0;
    .img_box {
      width: 80%;
      margin: auto;
      img {
        width: 100%;
        height: 200px;
      }
    }
    .bot {
      overflow: hidden;

      .price {
        float: left;
        color: "#c59ff3";
      }
      .add {
        float: right;
      }
    }
  }
}
</style>