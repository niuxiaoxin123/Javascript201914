import Vue from 'vue'
import App from './App.vue'
// /index.js是可以省略的；
import router from './router'
import store from './store'


// element-UI :基于vue再次封装；
// 需要全局引入element-UI;还要引入element-ui的css样式
import ele from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ele);


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  // render: h => h(App)
  render:(h)=>{
    // h： 传组件
    return h(App)
  }
}).$mount('#app');
// src的结构：大家的代码全部在src里面；
// assets : 静态资源文件；一般放图片和一些css;
// components : 组件；页面的一部分
// router : 配置的路由
// store : vuex仓库
// views : 页面级组件
// App.vue : 只有一个;所有的组件的入口文件
// main.js : 是webpack 打包的入口文件
// 可以在main.js配置一些全局的组件，filter过滤器，或指令，全局的路由钩子函数；
// 引入第三方组件；elment-Ui;

// admin 作为后端；启动的端口号3000
// crm ： 是部署在8080端口；如果需要请求一定会跨域；跨域的配置在vue.config.js



