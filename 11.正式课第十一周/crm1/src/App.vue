<template>
  <div id="app">
       <!--如果用vue/cli，不需要再对router-view，是内置的，这个router-view用于显示视图  -->
       <!-- <router-link></router-link> -->
       <!-- a标签  手动更改url -->
       <!-- 根据hash值来显示的 -->
       <router-view></router-view>
       <!-- 显示：login.vue  index.vue -->
  </div>
</template>

<style lang="less">
    // 这个地方可以放全局的公共样式
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    *{
        margin:0;
        padding:0;
        list-style:none
    }
    .lt{
      float:left;
    }
    .rt{
      float:right;
    }
    .clear::after{
      content:'';
      display: block;
      clear: both;
    }
</style>
