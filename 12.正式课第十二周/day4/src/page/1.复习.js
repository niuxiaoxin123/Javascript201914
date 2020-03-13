import React from 'react';
import ReactDOM from "react-dom";

// JSX语法  React.createElement 和render的封装；
// 组件 ： function  class [有this，有状态，有生命周期]
// 属性 ： 通过行间传递过去； props
// state : 私有的； setState：设置当前组件的状态；并且不保证是同步；
// 在生命周期和原生的DOM事件中，是异步的；在延迟的回调是同步的；
// 当生成一个组件实例时： defaultProps==> constructor ==> componentWillMount==> render ===> componentDidMount

// 更新数据时 ： shouldComponentUpdate==>componentWillUpdate==> render==> componentDidUpdate

// 卸载的钩子函数 componentWillUnmount
// componentWillReceiveProps

//子组件中使用了父组件的状态；把父组件的状态当做属性传递给了子组件；那么
class Student extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return <div>{this.props.a}</div>
    }
}
ReactDOM.render(<Student a="100"></Student>,document.getElementById("root"));