import Vue from 'vue'
import VueRouter from 'vue-router';
import org from "./org";
import customer from "./customer";
// import 需要写在页面的最上端
import index from "../views/index.vue"
Vue.use(VueRouter);

const routes = [
    {
      path:"/login",
      name:"login",
      // 懒加载的方式，引入路由，当只有访问这个路由时，组件才会被加载；
      component:()=>import('../views/login.vue')
    },
    {
      path:"/",
      component:index,
      redirect:"/org",
      children:[
        {
          path:"/org",
          name:"org",
          component:()=>import("../views/org.vue"),
          children:org
        },
        {
          path:"/crm",
          name:"crm",
          component:()=>import("../views/crm.vue"),
          children:customer
        }
      ]

    }
]
const router = new VueRouter({
  routes
})
export default router
