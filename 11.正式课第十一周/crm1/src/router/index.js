import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
      path:"/login",
      name:"login",
      // 懒加载的方式，引入路由，当只有访问这个路由时，组件才会被加载；
      component:()=>import('../views/login.vue')
    }
]
const router = new VueRouter({
  routes
})
export default router
