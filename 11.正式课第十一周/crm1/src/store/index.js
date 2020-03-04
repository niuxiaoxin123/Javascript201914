import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state.js";
import * as mutations from "./mutations";
import * as actions from "./actions";
Vue.use(Vuex);
// 把state,mutation,actions都单独放到一个js文件中，方便模块的管理；
export default new Vuex.Store({
  state,
  mutations: mutations,
  actions:actions
})
