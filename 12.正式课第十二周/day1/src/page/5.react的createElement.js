import React from "react";
import ReactDOM from "react-dom";

// let a = <div>
//     <span>中国</span>
// </div>// 这是一个react元素，也叫jsx元素；
// 
//console.log(a);// 对象：当js解析时，会把这个标签通过React.createElement转成真实的DOM
// createElement(type)
// 1. 标签类型  2.行间属性  3.文本内容   4.是子节点
// MVC ：M:model   v：view   C:controller
// 虚拟的DOM  DOM-diff
let a = React.createElement(
    "div",
    {a:"北京"},
    "回龙观",
    React.createElement("p",null,"东大街",React.createElement("span",null,"珠峰培训"))
    );
let b =<div a="北京">
    回龙观
    <p>东大街</p>
</div>
// JSX语法其实是React.createElement的语法糖；

ReactDOM.render(a,document.getElementById("root"));