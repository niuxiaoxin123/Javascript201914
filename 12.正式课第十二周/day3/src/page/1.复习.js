// .vue  .jsx[支持在js中直接写标签的]==> babel
import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";
// 
//let  obj = {m:100}
// render的参数1 ： 渲染一个react元素；
//let a = <div>{[]}</div>;// 是React.createElement的语法糖
// React.createElement(type,attr,children)
// JSX 语法：
// 组件：函数声明 类声明
// 1. this  2. 有状态   3.有生命周期
// function Fn(){
//     // 普通函数这样是执行undefined
//     console.log(this);
//     return <div></div>
// }
let Fn=(props)=>{
    console.log(this);
    console.log(props);
    return <div></div>
}
// 当渲染一个静态的组件结构时，可以采用普通函数创建的组件
class Bar extends React.Component{
    constructor(props){
        super(props);
        // 当解析constructor时，不能直接拿到实例上props上的数据；
        // 把当前组件数据放到state属性上，当state发生改变以后，会 让视图重新渲染 setState
        // setState => 可以再次启动render方法，让视图进行更新
        this.state={num:1}
    }
    render(){
        // 行间传递过来的数据都是属性
        // 1. 不能更改
        // 2. 会把行间的属性打包成对象放到当前组件实例的props属性上
        return <div></div>
    }
}
ReactDOM.render(<Fn a="100"></Fn>,document.getElementById("root"));