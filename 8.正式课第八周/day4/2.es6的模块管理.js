// require  module.exports={}  common.js规范  AMD  CMD  ES6模块
// 模块 export  import
// export：用于该模块向其他模块到处的接口
// import : 用于接收其他模块导入的值
// export var a = 100;
// export var b = 200;


// export ：可以导出变量，还可以导出函数、class 
// var c = 1;
// var d = 2;
// export {c,d};

// as  : 可以对导出的变量进行重新命名；
// export 导出的接口中变量和值有一一对应的关系；

// var a = {};
// var c = 1;
// var d = 2;
// export {c as e,d as f,a};
export function f(){}
export function a(){

}
// export default{
//     f:f,
//     a:a
// }
import * as type from "./";
type.f();


