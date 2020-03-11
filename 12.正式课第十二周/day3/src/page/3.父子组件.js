import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
    constructor(){
        super();
        // 对于parent组件来说，这个state是私有的；
        this.state={time:"十二点"}
    }
    // {} : 如果行间属性是可以放对象的
    // 但是元素里面的{}不能直接放对象
    render(){
        // this ==> 组件实例
        return <div>
            <p>中午几点吃饭啊</p>
            <Child date={this.state}></Child>
        </div>
    }
}
// 父子组件：将父组件中的数据或状态以行间属性的方式传递给子组件，那么子组件可以通过实例的props属性拿到父组件的数据
class Child  extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.date);
    }
    render(){
        return <div>
            <p>{this.props.date.time}</p>
        </div>
    }
}

ReactDOM.render(<Parent></Parent>,document.getElementById("root"));