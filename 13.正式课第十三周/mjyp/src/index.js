import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.js";
import store from "./store/index.js";
import {Provider} from "react-redux";
// 将store的数据和action中的方法放在组件的属性上；
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>,document.getElementById("root"));

// api: 存放的项目的所有接口
// assets :存放的静态资源
// components : 页面中的组件
// pages: 页面级组件
// store : 存放的是数据

// 前端： localhost:3000   后端 9999；
// 安装一些必备的模块
// yarn add  redux  react-redux  redux-logger  redux-thunk  redux-promise  axios  less  less-loader

// 项目一index.js作为入口 【App和store】