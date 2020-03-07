import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/index.vue"
Vue.use(VueRouter)
import home from "./home"
const routes = [{
  // 父组件的路由path会和子组件的path拼接到一起
      path:"/",
      name:"index",
      component:Index,
      children:home
      }
  ]
const router = new VueRouter({
  routes
})

export default router
