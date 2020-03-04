<template>
    <div>
        <el-container>
            <el-header class="clear header">
                <h2 class="lt">CRM管理系统</h2>
                <div class="nav lt">
                    <div class="lt">
                        <router-link to="/org" tag="span">组织结构</router-link>
                    </div>
                    <div class="lt">
                        <router-link to="/crm" tag="span">客户管理</router-link>
                    </div>
                </div>
                <div class="userBox rt">
                    <span>您好，珠峰培训</span>
                    <span @click="signout">安全退出</span>
                </div>
            </el-header>
            <div class="middleBox">
                <router-view></router-view>
            </div>
        </el-container>
    </div>
</template>

<script>
// 首页的接口
// 验证是否登录状态
import { judgeLogin } from "@/api/index.js";
import {loginout } from "@/api/login.js";
export default {
    //  这个是首页的组件
    name: 'index',
    created(){
        judgeLogin().then(data=>{
            // 如果code不是0，那么让其跳转到登录页登录；
            if(data.code!=0){
                this.$router.push("/login")
            }
        })
    },
    data() { 
        return {

        }
    },
    methods:{
        signout(){
            // 发送请求退出
            loginout().then(data=>{
                if(data.code==0){
                    // 如果退出成功，返回到登录页
                    this.$router.push("/login")
                }
            })
        }
    }
 }
</script>

<style lang="less" scoped>
    .el-container .header{
        background: #333;
        color:white;
    }
    .nav{
        padding:0 60px;
       div{
            margin:0 20px;
          
            cursor: pointer;
            box-sizing:border-box;
            &:hover{
                color:#fff;
                &::after{
                    content:"";
                    display: block;
                    width:100%;
                    position: relative;
                    border-bottom: 3px solid rgba(255,255,255);
                    top:-5px;
                }
            }
            >span{
                display: block;
                width:100%;
                height:100%;
                // 如果点击的router-link:会默认给这个标签加上router-link-active;
                &.router-link-active{
                    font-size:20px;
                    font-weight: 700;
                    color:#fff;
                }
            }
            
       } 

    }
    .userBox{
        >span:nth-child(2){
            cursor: pointer;
            padding-left:20px;
        }
    }
    // .el-container{
    //     height:800px;
    // }
    .middleBox{
        position: absolute;
        width:100%;
        left:0;
        right:0;
        top:60px;
        bottom:0;
        overflow: hidden;
        .el-container{
            height:100%;
        }
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;

  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>