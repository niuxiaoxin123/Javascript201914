import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
    constructor(){
        super();
        // 对于parent组件来说，这个state是私有的；
        this.state={time:"十二点",color:"红色"}
        // color 对于父组件来说是状态；对于子组件来说是属性；
        // 当组件的状态或属性发生改变时，会引发视图的更新；
    }
    changeBg=()=>{
        this.setState({color:"黑色"});
    }
    render(){
        return <div>
            <p>中午几点吃饭啊</p>
            <Child date={this.state.time} bg={this.state.color} chan={this.changeBg}></Child>
        </div>
    }
}
// 父组件的数据儿子不能直接改，父组件自己可以改变自己的数据，所以需要将改变数据的方法传给子组件，当执行子组件的方法时，触发父组件的方法进行更新；
class Child  extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.date);
    }
    change=()=>{
        // 从父组件传递过来的叫属性，属性是不能更改的；
        // this.props.bg="黑色";
        this.props.chan();
    }
    render(){
        return <div>
            <p>{this.props.date}</p>
            <p>{this.props.bg}</p>
            <button onClick={this.change}>改变</button>
        </div>
    }
}
// let  obj = {
//     f:()=>{
//         console.log(this);
//     }
// }
// obj.f();
ReactDOM.render(<Parent></Parent>,document.getElementById("root"));