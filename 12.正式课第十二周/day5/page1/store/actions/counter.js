// actions: 这是一个动作，存放dispatch派发的参数；这个要用到常量
// 把action-type.js中的常量都导进来，放在当前页面types这个变量上
import * as types from "../action-type.js";
export default {
    add(val){
        // add是个函数，其返回值才是dispatch的实参；
        // 因为在项目需要在action发送请求，所以需要写成函数的形式；
        return {type:types.ADD_COUNT,val:val};
    },
    min(){
        return {type:types.MIN_COUNT}
    }
}