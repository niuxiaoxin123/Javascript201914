import React, { Component } from "react";
let Local=(key)=>(Component)=>{
    // key : 传参  Component:组件
    // A最后渲染的是传递进来的组件
    return class A extends React.Component{
        constructor(){
            super();
            this.state={[key]:""}
        }
        componentDidMount(){
            this.setState({[key]:localStorage.getItem(key)})
        }
        render(){
            // Component 就是Local传进来的第二个参数；
            return <Component {...this.state}></Component>
        }
    }
}
export default Local;
// function a(b){
//     return function (c){
//         return function(d){
//             return b+c+d;
//         }
//     }
// }
// let a =b=>c=>d=>(b+c+d);
//connect(fn1,fn2)(Component)