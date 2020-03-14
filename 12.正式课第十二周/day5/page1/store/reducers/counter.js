// 每个组件对应一个reducer；所以需要创建一个文件夹；
// reducer 存储了当前组件的初始状态；
import * as types from "../action-type.js";
let a={num:100};
function reducer(state=a,action){
    switch(action.type){
        case types.ADD_COUNT:
            return {...state,num:state.num+action.val};
        case types.MIN_COUNT:
            return {...state,num:state.num-1};
    }
    return state;// createStore中的state就被赋予了默认值；
}
export default reducer;