// JSX语法：HTML和JS混合在一个文件中
// JSX 语法：{}
import React from "react";
import ReactDOM from "react-dom";
// react 元素 也是jsx元素
let  a = <div></div>;// a 是一个对象
// a : 是React.createElement
// createElement render
// 组件
let a = {name:"zhufeng"};
// 在元素里面的大括号中不能直接放对象，但是行间属性是可以的；
function Fn(){
    return <div b={a}>
        {a}
    </div>
}
class Bar extends React.Component{
    constructor(){
        super();// this  state   生命周期
    }
    render(){

    }
}
// 在公司中一般静态的解构可以使用function定义组件；如果该组件是数据渲染出来的，那么需要使用class定义组件
// 初始化组件： defaultProps ==> constructor==> componentWillMount==>render==>componentDidMount
// shouldComponentUpdate(nextProps,nextState) ==>componentWillUpdate==>render==> componentDidUpdate
// componentWillUnmount
// 父组件中的数据传给了子组件， componentWillReceiveProps
// 受控组件 ： state和input关联到一起；
// redux 
ReactDOM.render(<Fn a="100"></Fn>,document.getElementById("root"));