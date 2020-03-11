import React from "react";
import ReactDOM from "react-dom";
// 受控组件： 受状态控制的组件
// 表单类的元素受状态值控制，那么这就是一个受控组件
// 受控组件：受状态控制，不能直接修改

class Panel extends React.Component{
    constructor(){
        super();
        this.state={num:100,a:200}
    }
    change=(key,e)=>{
        console.log(key,e);
        // 如果需要修改input的value，需要更改state；那么input就会跟着发生改变
        // 获取到事件对象的value值，对state中的num重新赋值
        // 属性名放了一个变量

        //this.setState({[key]:e.target.value})
    }
    render(){
        return <div>
            <p>{this.state.num}</p>
            {/* 希望把状态的值放到input框中 */}
            <input type="text" value={this.state.num} onChange={(e)=>{this.change("num",e)}}></input>
            <input type="text" value={this.state.a} onChange={(e)=>{this.change("a",e)}}></input>
            {/* 绑定时没有小括号，那么默认会传递事件对象，如果有小括号，那么事件对象需要单独传递过去 */}
            <input type="text" onChange={()=>{this.change(1)}}></input>
        </div>
    }
}

ReactDOM.render(<Panel></Panel>,document.getElementById("root"));