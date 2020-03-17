import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "../../../day1/node_modules/redux";
// 上下文；把Provider上store的属性放在上下文上，以便它里面的所有组件都可以获取到这个store；
class Provider extends React.Component{
    constructor(){
        super();
    }
    // 定义上下文的数据类型
    static childContextTypes={
        store:PropTypes.object
    }
    getChildContext(){
        return {store:this.props.store}
    }
    render(){
        return this.props.children;
    }
}
// connect : 传递两个参数  
// mapStateToProps : state=>({...state.counter})
// mapDispatchToProps : dispatch=>return {// 这个对象会放在组件的属性上；
    //     add:()=>{dispatch(actions.add())},
    //     min:()=>{dispatch(actions.min())}
    // }
    // A 组件一定是Provider的子组件

    // function A(b,c){
    //     return function(h){
    //         return class A{

    //         }
    //     }
    // }
    // let A = (b,c)=>(h)=>{
    //     return class A{}
    // }
    // let yy = A()();
    // mapStateToProps :形参用来接收state=>({...state.counter})
let connect=(mapStateToProps,mapDispatchToProps)=>(Component)=>{
    return class A extends React.Component{
        constructor(){
            super();
            // 把getState()的返回值也就是store中的state传给了mapStateToProps
            // mapStateToProps : 这个函数的返回值是找到了store中的state,然后找到了store中该组件对应的数据
            this.state=mapStateToProps(this.context.store.getState())
        }
        static contextTypes={
            store:PropTypes.object
        }
        componentDidMount(){
            // 订阅更新视图的方法；当dispatch时，触发视图的更新；
            this.unscribe=this.context.store.subscribe(()=>{
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }
        componentWillUnmount(){
            this.unscribe();
        }
        render(){
            // 将store中的
            let h;
            // 根据这个mapDispatchToProps形参的数据类型，来进行不同的操作
            if(typeof mapDispatchToProps==="function"){
                h=mapDispatchToProps(this.context.store.dispatch)
            }else{
                h=bindActionCreators(mapDispatchToProps,this.context.store.dispatch)
            }
            return <Component {...this.state} {...h}></Component>
        }
    }
}
// let bindActionCreator=(action,dispatch)=>{
    
//     let obj ={};
//     for(let key in action){
//         obj[key]= ()=>{
//             dispatch(action[key]())
//         }
//     }
//     return obj;
// }
//{counter:{},todo:{}}
export default {Provider,connect}
// connect(state=>({...state.counter}),action)
// connect(state=>({...state.todo}))