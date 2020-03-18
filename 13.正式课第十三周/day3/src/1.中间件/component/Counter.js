import React from "react";
import {connect} from "react-redux";
import actions from "../store/action/counter.js";
// react-redux :解决的问题是将store中的state和action中的方法放在了当前组件的属性上
class Counter extends React.Component{
    constructor(){
        super();
    }
    add=(n)=>{
        // this.props.add 就是action中的add方法
        this.props.add(n);
    }
    min=()=>{
        this.props.min(3);
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
            {this.props.num}
            <button onClick={this.min}>-</button>
        </div>
    }
}
export default connect(state=>({...state.counter}),actions)(Counter);
// export default connect(state=>{return {...state.counter}})