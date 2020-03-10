import React from "react";
import ReactDOM from "react-dom";


// react中定义组件有两种方式 ：1.函数声明 2.类声明
// 组件 ： 可复用  可维护；
//  1.创建组件
//  2. 组件的名字必须是大写，为了和内置组件区分开
//  3. 组件每当使用一次，当前组件函数都会执行一次；
//  4. 当使用组件时，会把行间属性组合成一个对象传给当前组件的第一个参数
//  5. 如果需要传入一个对象，那么需要对对象进行...展开，然后放入行间属性
function Foo(props){
    console.log(props);
    return <div>
        <span>{props.a}</span>
    </div>
}
let obj = {a:"你好我好",b:"同学们好"}
let c = [1,2,3]
let day = <div>
        <Foo a="你好我好" b="同学们好"/>
        <Foo a="大家好"></Foo>
        <Foo {...obj}></Foo>
</div>
ReactDOM.render(day,document.getElementById("root"));