import React from "react";
import ReactDOM from "react-dom";
import Counter from "./page/1.counter";
import Compute from "./page/2.compute.js";
// 将store注入到每一个组件；需要从react-redux解构出Provider这个组件，然后将所有的组件嵌套在Provider组件里面；
import {Provider} from "react-redux";
import store from "./store/index";
ReactDOM.render(
    <Provider store={store}>
        <Counter></Counter>
        <Compute></Compute>
    </Provider>
,document.getElementById("root"));