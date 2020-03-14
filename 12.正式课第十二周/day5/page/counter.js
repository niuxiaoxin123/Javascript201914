import React from "react";
import ReactDOM from "react-dom";
import createStore from "./redux";
// 1. 定义常量
// 2. 派发一个动作
// 3. 编写reducer

let a={num:100};
const ADD_COUNT="ADD_COUNT";
const MIN_COUNT="MIN_COUNT";
function reducer(state=a,action){
    switch(action.type){
        case ADD_COUNT:
            return {...state,num:state.num+action.val};
        case MIN_COUNT:
            return {...state,num:state.num-1};
    }
    return state;// createStore中的state就被赋予了默认值；
}
let store = createStore(reducer);
// 想更新视图，需要调用setState;
class Count extends React.Component{
    constructor(){
        super()
        this.state={num:store.getState().num}// 需要将store中的数据跟当前组件的state绑定在一起；
    }
    componentDidMount(){
        // 当调用dispatch会执行订阅的方法
        // 订阅更新state的方法；
        store.subscribe(()=>{
           return this.setState({num:store.getState().num})
        })
    }
    add=(val)=>{
        // dispatch 仅仅是让store中的数据发生了变化，但是不会触发组件的render方法，视图也就不会更新；所以需要调用setState方法，执行render；
        store.dispatch({type:ADD_COUNT,val:val})
    }
    min=()=>{
        store.dispatch({type:MIN_COUNT})
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
            <span>{this.state.num}</span>
            <button onClick={this.min}>-</button>
        </div>
    }
}
ReactDOM.render(<Count></Count>,document.getElementById("root"));