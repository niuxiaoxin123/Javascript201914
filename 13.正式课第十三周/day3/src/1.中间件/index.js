import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index.js";
import {Provider} from "react-redux";
import Counter from "./component/Counter.js";
ReactDOM.render(<Provider store={store}>
    <Counter></Counter>
</Provider>,document.getElementById("root"));