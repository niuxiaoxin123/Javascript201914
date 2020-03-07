import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/less/common.less";// 引入公共样式
import "@/less/font.less"// 引入字体图标样式

// 专门用于开发移动端组件的框架；和element-ui 类似
// 在项目运行之前，会vant所有的组件加载；
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

// 性能优化；
import "vant/lib/index.css";
import {Button,Icon,Search,Tabs,Tab} from 'vant';
Vue.use(Button).use(Icon).use(Search).use(Tabs).use(Tab);


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
