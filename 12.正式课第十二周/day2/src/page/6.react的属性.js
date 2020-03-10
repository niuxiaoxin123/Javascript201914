import React from "react";
import ReactDOM from "react-dom";
class Bar extends React.Component{
    constructor(){
        // constructor:不是必须有的，但是render必须有，render必须有return
        super();
    }
    render(){
        // render 函数里面是一个作用域；可以写正常的代码
        let num =1;
        // toLocaleString 将时间对象转成时间格式字符串
        return <div>{this.props.date.toLocaleString()}</div>
    }
}
let  time = new Date();
// react元素时组件的基本组成单位；
// 在render中，返回一个唯一的react元素；
// 组件名字首字母需要大写；
// render 将虚拟的DOM渲染成真实的DOM
let tt ={a:1}
// 想让视图每隔一秒更新一次
// 如果在行间属性上用大括号取值；
setInterval(()=>{
    time = new Date();
    ReactDOM.render(<Bar date={time} c={tt}></Bar>,document.getElementById("root"));
},1000);
// ReactDOM.render(<Bar date={time}></Bar>,document.getElementById("root"));
// ReactDOM.render : 只执行了一次；
// 视图的更新，需要调用ReactDOM.render方法
