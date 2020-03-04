<template>
    <el-aside width="200px" style='background:#545c64;overflow:hidden'>
        <div class="asideBox">
            <el-row>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="transparent">
                  <el-submenu v-for="(item,index) in menuList" :key="index" :index="index+''">
                      <template slot="title">
                        <i :class="item[0].meta.icon"></i>
                        <span>{{item[0].meta.rootTil}}</span>
                      </template>
                      <router-link v-for="(a,b) in item" :key='b' :to="a.path" tag="span">
                          <el-menu-item>{{a.meta.til}}</el-menu-item>
                      </router-link>
                  </el-submenu>
                </el-menu>
            </el-row>
        </div>
    </el-aside>
</template>

<script>
export default {
  name: 'nav1',
  props:["ary"],
  // 当打开组织结构时，传来的数组有6项；部门 职务  用户
  data() { 
    return {
        menuList:[],
        power:localStorage.getItem("power")
    }
  },
  created(){
    this.init();// 初始化menuList
  },
  methods:{
    init(){
        // 对menulist进行过滤；
        let a ;
        a= this.ary.filter(item=>{
            return this.power.includes(item.meta.power)
        });
         let newAry = [this.ary[0]]
        // 最终menulist包含了三个数组，每个数组对应一个模块；
        a.reduce((prev,next)=>{
            if(prev.meta.type===next.meta.type){
              newAry.push(next);
            }else{
                this.menuList.push(newAry);
                newAry=[next];
            }
            return next;
        });
        // 当循环最后一次时，56项已经放到了newAry,但是并没有放进menuList里面；
        this.menuList.push(newAry);
    }
  }
 }
</script>

<style lang="less" scoped>
  .asideBox{
      height:100%;
      width:100%;
      overflow-x: hidden;
      span,li{
        color:white;
      }
  }
</style>