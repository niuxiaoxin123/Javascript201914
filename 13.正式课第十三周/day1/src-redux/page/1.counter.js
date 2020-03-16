import React from "react";
// import store from "../store/index.js";
import actions from "../store/actions/counter";
// react-redux： 将store的公共数据放到组件的属性上；
// 属性和状态的更新都能引发视图的更新；
// react-redux要求返回一个连接后的组件；
import {connect} from "react-redux";
// 可以将store中的数据和action的动作以属性的方式传递给该组件

class Counter extends React.Component{
    // constructor(){
    //     super();
    //     this.state={num:store.getState().counter.num}
    // }
    // componentDidMount(){
    //     // 在redux中，A组件通过dispatch更新了store中的数据，同时B组件也使用了store中这个数据，但是B组件不会自动更新；
    //     store.subscribe(()=>{
    //         this.setState({num:store.getState().counter.num})
    //     })
    // }
    add=()=>{
        // store.dispatch(actions.add());
        //当使用方法时，保持和action中的add一致；
        this.props.add();
    }
    min=()=>{
        // store.dispatch(actions.min());
        this.props.min();
    }
    render(){
        // 1. 组件事件 ==> 2. action-type==>3.actions==> 4.reducer==>5.组件
        //想更新视图，需要调用render方法，那么执行setState就会调用render；
        // 每当dispatch时，都要更新视图的；那么把setState方法进行订阅；
       return  <div>
            <button  onClick={this.add}>+</button>
            {this.props.num}
            <button onClick={this.min}>-</button>
        </div>
    }
}
// connect : 第一个参数： 函数 第二个参数： 是当前组件
// actions : 是一个返回类型的对象；
// mapStateToProps\mapDisPatchToProps都是在connect函数内部调用的
let mapStateToProps=state=>({...state.counter}); // 当执行connect时，会默认调用这个箭头函数，并且将store中的state数据传给当前的函数state参数；返回当前组件对应的数据，并且放在了当前组件的行间属性上；
let mapDisPatchToProps=(dispatch)=>{// dispatch==>store.dispatch
    return {// 这个对象会放在组件的属性上；
        add:()=>{dispatch(actions.add())},
        min:()=>{dispatch(actions.min())}
    }
}
// 都是将这两个函数的返回值放到组件的属性上；
export default connect(mapStateToProps,actions)(Counter);
//在执行connect时，判断第二个参数是否是一个函数，如果是函数，则将函数的执行结果放在组件的行间属性上，如果是一个对象，那么会默认调用一个bindActionsCreator这个方法，将该方法的返回值放在组件行间属性上当前属性传给组件
// action 就是connect传入的action  dispatch是store中的dispatch方法
// let bindActionCreator=(action,dispatch)=>{
    
//     let obj ={};
//     for(let key in action){
//         obj[key]= ()=>{
//             dispatch(action[key]())
//         }
//     }
//     return obj;
// }


