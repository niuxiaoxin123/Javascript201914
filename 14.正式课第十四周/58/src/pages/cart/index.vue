<template>
  <div class="cartBox">
    <div class='allBox'>
      <van-checkbox :value="all" @change="onChangeALl" checked-color="#07c160">极速达</van-checkbox>
    </div>
    <div class="listBox" v-for="(item,index) in data" :key="index">
      <div class="checkBox">
        <van-checkbox :value="item.isChecked" @change='changeone($event,item)' checked-color="#07c160" />
      </div>
      <div class="goodsBox">
        <div class="imgBox">
          <img :src="item.img" alt="">
        </div>
        <div class="textBox">
          <div class="title">{{item.title}}</div>
          <div class="price_count">
            <div class='price'>￥{{item.price}}</div>
            <van-stepper :value="item.count" @change="changeCount($event,item)" />
          </div>
        </div>
      </div>
    </div>
    <div class='bot'>
      <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" />
    </div>
    <span v-show='false'>{{t}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          isChecked: false,
          img: "",
          price: 12,
          count: 1
        }
      ],
      all: true,
      t:0,
      total:0
    };
  },

  components: {},

  methods: {
    onChangeALl(event) {
      console.log(event.mp.detail);
      this.all = event.mp.detail;
      this.data.forEach(item => {
        item.isChecked = event.mp.detail;
      });
      this.getTotal();
    },
    changeone(event,item){
      item.isChecked = !item.isChecked;
      this.all = this.data.every(item=>item.isChecked);
      this.t = Math.random();
      this.getTotal();
    },
    changeCount(event, item) {
      console.log(item);
      item.count = event.mp.detail;
      console.log(event.mp.detail);
      this.getTotal();
    },
    onSubmit() {},
    getTotal(){
      this.total = this.data.reduce((prev,next)=>{
        if(next.isChecked){
          return prev + next.price*100*next.count
        }else{
          return prev
        }
      },0);   
    }
  },

  onShow() {
    let app = getApp();
    console.log(app.globalData.cartList)
    this.data = app.globalData.cartList;
    this.getTotal();
  }
};
</script>

<style scoped lang='less'>
.cartBox {
  padding: 10px;
  .listBox {
    display: flex;
    padding: 10px 0;
    .checkBox {
      width: 25px;
      display: flex;
      align-items: center;
    }
    .goodsBox {
      flex: auto;
      display: flex;
      .imgBox {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .textBox {
        flex: auto;
        padding-left: 5px;
      }
    }
  }
  .bot {
    position: fixed;
    bottom: 0;
  }
}
</style>
