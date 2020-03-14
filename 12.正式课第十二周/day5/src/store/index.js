// 这个文件时store的入口；这个里面导入createStore，并且执行生成store;并且返回
// 导入reducers文件夹下的counter的reducer;

import reducer from "./reducers/index.js";
import createStore from "../redux";
// reducer : 一定是一个函数
let store = createStore(reducer);// reducer : 是combineReducers的返回值；就是那个小函数
export default store;

// store 文件： index.js  action-type.js  reducers   actions
// 默认情况下dispatch接收一个对象；但是在actions中需要将dispatch的参数转成函数的返回值，为了可以在
// actions是在dispatch之前执行，一般在actions中请求数据；把请求回来的结果传递给dispatch这个对象，所以在action，需要返回一个对象，返回的对象最后会作为dispatch的实参；