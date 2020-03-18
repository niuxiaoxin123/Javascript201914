import {combineReducers} from "redux";
import * as types from "../action-types.js";
let initState = {num:0};
function counter(state=initState,action){
    switch(action.type){
        case types.ADD_NUM:
            return {...state,num:state.num+action.n};
        case types.MIN_NUM:
            return {...state,num:state.num-action.m}
    }
    return state;
}
let reducer = combineReducers({
    counter
});
export default reducer;