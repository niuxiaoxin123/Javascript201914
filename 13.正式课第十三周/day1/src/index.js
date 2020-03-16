import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./component/App.js";
import store from "./store/index.js"
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root"));