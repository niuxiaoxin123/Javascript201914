import React from "react";

import actions from "../store/actions/counter.js";
import store from "../store/index.js"
// 1. 定义常量
// 2. 派发一个动作
// 3. 编写reducer

// 想更新视图，需要调用setState;
export default class Count extends React.Component{
    constructor(){
        super()
        // getState返回的是整个store；
        this.state={num:store.getState().counter.num}// 需要将store中的数据跟当前组件的state绑定在一起；
    }
    componentDidMount(){
        // 当调用dispatch会执行订阅的方法
        // 订阅更新state的方法；
        store.subscribe(()=>{
           return this.setState({num:store.getState().counter.num})
        })
    }
    add=(val)=>{
        // dispatch 仅仅是让store中的数据发生了变化，但是不会触发组件的render方法，视图也就不会更新；所以需要调用setState方法，执行render；
        store.dispatch(actions.add(val));
    }
    min=()=>{
        // 先写action-type===> 写组件dispatch===> actions==> reducers
        store.dispatch(actions.min())
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
            <span>{this.state.num}</span>
            <button onClick={this.min}>-</button>
        </div>
    }
}
