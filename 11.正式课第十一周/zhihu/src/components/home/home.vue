<template>
  <div class="home">
      <my-header></my-header>
      <van-tabs v-model="a" @change="change">
          <van-tab
           v-for="item in ary" 
           :key="item.to" 
           :title="item.title">
    <!--       // 用于显示组件的 -->
             
          </van-tab>
      </van-tabs>
       <router-view></router-view>
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
  name: '',
  data() { 
    return {
      a:0,
      ary:[{title:"关注",to:"/home/focus"},{title:"推荐",to:"/home/recommend"},{title:"热榜",to:"/home/hot"}]
    }
  },
  components:{
      "my-header":Header
  },
  methods:{
    change(n){// n 会默认接收到一个索引n;
    ///点击tab,就会执行对应的change事件，并且把这个点击的tab索引传递过来
      this.$router.push(this.ary[n].to)
    }
  }

 }
</script>

<style lang="" scoped>
  
</style>