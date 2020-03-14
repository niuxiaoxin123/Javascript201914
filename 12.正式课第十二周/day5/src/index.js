import React from "react";
import ReactDOM from "react-dom";
import Count from "./page/counter.js";
import Todo from "./page/todo.js";
// ReactDOM只能有一个根组件
ReactDOM.render(<div>
    <Count></Count>
    <Todo></Todo>
</div>,document.getElementById("root"));