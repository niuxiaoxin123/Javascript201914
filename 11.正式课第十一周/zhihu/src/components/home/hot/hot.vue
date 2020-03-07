<template>
  <div class="hot">
      <van-tabs type="card" v-model="index" @change="getList">
        <van-tab v-for="item in ary" :title="item.title" :key="item.type">
            <my-item v-for="(a,b) in hotList" :key="a.type" :data="a" :index="b"></my-item>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import item from "./item.vue";
import {mapState} from "vuex";
export default {
  name: 'hot',
  data() { 
    return {
          ary:[{
            title:"推荐",
            type:"tuijian"
          },{
            title:"科技",
            type:"keji"
          },{
            title:"教育",
            type:"jiaoyu"
          },{
            title:"娱乐",
            type:"yule"
          },{
            title:"汽车",
            type:"qiche"
          },{
            title:"金融",
            type:"jinrong"
          },{
            title:"体育",
            type:"tiyu"
          }],
          index:0,
          oldType:"",
          flag:true
    }
  },
  created(){
    // 在发送请求，需要传给后端一些参数；
    this.getList();// 会默认请求一次
    window.onscroll=()=>{
      // 当下一次请求没有回到客户端之前，不发送下一次请求
      if(!this.flag)return;
      // 为了减少请求的次数；
      this.getMore();
    }
  },
  methods:{
    getList(){
         this.$store.dispatch('getHotList',{
          // 后端制定接口文档，大家根据接口文档发送请求
          // require:boolean;
          // username:XXX password:XXX;
          newType:this.ary[this.index].type,// 当前请求的type类型
          oldType:this.oldType,// 上一次请求的type;
          count:10,//每次请求10条数据
          reload:true,
          cur_step:0,
          category:this.ary[this.index].type
      }).then(()=>{
        // 当请求回来以后，再把flag变回true；
          this.flag=true;
      });
      this.oldType =this.ary[this.index].type;// 把最新type类型赋值给oldType值；
    },
    getMore(){
        // 获取下面10条数据；
        let app = document.getElementById("app");
        let winH = document.documentElement.clientHeight;
        let scroT = document.documentElement.scrollTop;
        if(app.clientHeight < winH+scroT+50){
             this.flag=false;
             // 在发送下一次请求之前，把flag变成了false;
             this.getList();
        }
    }
  },
  components:{
    "my-item":item
  },
  computed:{
      ...mapState(['hotList'])// 把store中的hotList数据放到当前组件的私有属性上；
  }
 }
</script>

<style lang="less">
  .hot{
    padding-top:3vw;
    .van-tabs__nav--card{
      border:none;
    }
    .van-tabs__nav--card .van-tab{
      border:none;
      border-radius:2px;
      color:#646464;
      background: #f6f6f6;
      line-height: 30px;
      margin:0 1vw;
    }
    .van-tabs__nav--card .van-tab.van-tab--active{
       color:#0084ff;
       font-weight:500;
       background-color:rgba(0, 132, 255, 0.1);
    }
  }
</style>