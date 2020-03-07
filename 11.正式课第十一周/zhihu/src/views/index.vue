<template>
  <div class="mainPage">
      <div>
        <router-view></router-view>
      </div>
      <nav class="navBox">
          <div>
            <router-link to="/home">
              <i class="iconfont icon-11"></i>
              <div>首页</div>
            </router-link>
          </div>
          <div>
            <router-link to="/vip">
              <i class="iconfont icon-huiyuan-"></i>
              <div>会员</div>
            </router-link>
          </div>
          <div>
            <i class="iconfont icon-yingyong-  big"></i>
          </div>
          <div>
              <router-link to="/notify">
                <i class="iconfont icon-tongzhi"></i> 
                <div>通知</div>
              </router-link>
          </div>
          <div>
              <router-link to="/user">
                <i class="iconfont icon-icon-user"></i> 
                <div>我的</div>
              </router-link>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
.mainPage>div:nth-child(1){
  padding-bottom:18vw;
}
nav{
  position: fixed;
  background: #fff;
  bottom:0;
  left:0;
  width:100%;
  height:18vw;// 1vw: 屏幕的1%;
  border-top:1px solid #eee;
  display: flex;
  align-items: center;
  div{
      flex:1;
      text-align: center;
      a{
          text-decoration: none;
          color:#333;
          display: block;
          height:100%;
          width:100%;
          i{
            font-size:7vw;
            font-weight:800;
          }
          font-size:5vw;
      }
      i.big{
        font-size:10vw;
      }
      a.router-link-active{
        color:red;
      }
  }
}
</style>