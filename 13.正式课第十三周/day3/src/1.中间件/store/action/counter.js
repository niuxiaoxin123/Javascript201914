import * as types from "../action-types";
import { StrictMode } from "../../../../../day2/node_modules/@types/react";
export default {
    add(n){
        // 为了在action中发送请求；
        // 在action中不支持异步的派发动作；
        // 在真实的工作中，异步的请求数据，把请求回来的数据放到store中的state中，在redux想更改数据只能dispatch；
        // let t;
        // setTimeout(()=>{
        //     t={type:types.ADD_NUM}
        // },2000)
        // return t;
        // 有了redux-thunk,action方法可以返回一个函数，并且这个函数执行时，传递两个实参
        return function(dispatch,getState){
            // dispatch==>store.dispatch  getState==>store.getState
            // 在项目中，在action中发送异步的请求，等请求回来以后再去修改store中的state值；
            setTimeout(()=>{
                dispatch({type:types.ADD_NUM,n:n})
            },2000)
        }
    },
    min(m){
        // payload可以是一个promise的实例；
        // payload :代表的是promise中resolve的结果；
        // resolve是多少，那么payload的值就是多少
        // return {
        //     type:types.MIN_NUM,
        //     payload:new Promise(function(resolve,reject){
        //         // 这里支持异步的请求；
        //         // 如果payload返回一个promise实例，那么会默认pengding状态到成功态；
        //         // 如果该promise实例没有then，那么会将resolve或reject的实参传递过去
        //         // 如果promise的实例调用了then方法，那么根据then方法中返回的数据作为payload的值；
        //         setTimeout(()=>{
        //            reject(100)
        //         },2000)
        //     }).then(function(val){
        //         // 这个函数是执行的，但是该函数没有返回值；默认返回undefined；
        //         // 把这个函数的执行结果赋值给了当前对象的payload属性
        //         //console.log(val);
        //         //return val+1;
        //     },function (val){
        //         console.log(val);
        //         return val;
        //     })
        // }
        // redux-promise 两种写法；
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                // resolve的对象就是dispatch传递的action；
                resolve({type:types.MIN_NUM,m})
            },2000)
        })
    }
}

// let  store = createStore(reducer);
// let dispatch = store.dispatch;
// store.dispatch  =function(){
//     console.log(store.getState().num);
//     dispatch(action);
//     console.log(store.getState().num);
// }