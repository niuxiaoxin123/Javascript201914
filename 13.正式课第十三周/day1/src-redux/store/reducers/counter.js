import * as types from "../action-type";
let initState ={num:0};
// 因为counter和compute共用一个数据；所以不能放在counter自己的私有属性上，而且它们没有父子关系，没办法直接通过props进行传递，所以将数据放在公共的store上，实现数据共享；
function counter(state=initState,action){
    switch(action.type){
        case types.ADD_COUNT:
            return {...state,num:state.num+1};
        case types.MIN_COUNT:
            return {...state,num:state.num-1}
    }
    return state;// 初始化默认值；
}
export default counter;