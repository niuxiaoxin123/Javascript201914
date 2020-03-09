import React from "react";
import ReactDOM from "react-dom";
let obj = {name:"zhufeng"}
let  a =<div>{obj.name}</div>
let  b =<div>{3>1?"珠峰":"培训"}</div>
let  c =<div>{100+100}</div>
function  fn(params) {
    var num =100;
    return {num};
}
let o={};
let  ary =[<span>1</span>,<span>2</span>,<span>3</span>]
let d = <div>
    <div>{obj.name}</div>
    <div>{3>1?"珠峰":"培训"}</div>
    <div>{100+100}</div>
    <div>{null}</div>
    <div>{undefined}</div>
    <div>{true}</div>
    <div>{false}</div>
    <label htmlFor="a"></label>
    {/* <div>{NaN}</div> */}
    {/* <div>{fn()}</div> */}
    {/* <div>{o}</div> */}
    {/* <div>{ary}</div> */}
    <div className="abc" studentclass="a" style={{backgroundColor:"red"}}>1234</div>
    <div>{"abc"}</div>
</div>
// JSX语法：
// 1. 通过{}去取值,取得是当前作用域下的值
// 2. 大括号中支持三元运算符以及表达式
// 3. 函数和对象的空间地址不能直接作为react的子元素，不能放在{}中,可以放函数的执行结果
// 4.大括号中可以直接放入数组,数组的每一项可以是react元素，最后会被遗弃渲染到页面上
// 5.不能直接放函数的空间地址，但是可以放函数的执行结果；
// 6.行间属性不能直接使用class关键字，在react中有特殊意义;在react元素label使用for属性，把for换成htmlFor
// 7.在JSX元素中，行间属性style的属性值需要用{{}}包起来,如果样式中有"-",需要将其样式转成驼峰的方式，margin-right==> marginRight
ReactDOM.render(d,document.querySelector("#root"));