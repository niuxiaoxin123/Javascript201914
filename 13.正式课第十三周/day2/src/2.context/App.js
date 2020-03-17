import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
// APP => header
// Header==> title父组件；
// 把App的状态的数据分别传递给header组件和title组件；
// 1.父传子  2. redux 各个组件之间数据共享  3. context ： 上下文
// 父组件： childContextTypes  :定义子孙组件的数据类型
// 父组件： getChildContext : 这是一个函数，函数中需要返回上下文的数据对象
// 子孙组件：contextTypes : 定义上下文类型的,用于接收数据
class App extends React.Component{
    constructor(){
        super();
        this.state={color:"red",a:100}
    }
    static childContextTypes={
        // 定义上下文的数据类型
        color:PropTypes.string,
        a:PropTypes.number,
        changeColor:PropTypes.func
    }
    getChildContext(){
        // 这是定义上下文的数据；把数据放在对象中返回，那么这个数据子孙组件就可以使用了；
        return {
            color:this.state.color,
            a:this.state.a,
            changeColor:this.changeColor
        }
    }
    changeColor=()=>{
        this.setState({color:"black"});
    }
    render(){
        return <div>
            <Header></Header>
        </div>
    }
}
export default App;