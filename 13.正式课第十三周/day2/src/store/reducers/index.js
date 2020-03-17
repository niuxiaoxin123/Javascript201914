import {combineReducers} from "redux";
import * as Types from "../action-type";
// createStore  combinereducers => redux
// connect  Provider  => react-redux;
let initState={
    type:"all",
    todos:[{id:1,isSelected:false,val:"要跑步"},
            {id:2,isSelected:false,val:"看电影"}]
}
function todo(state=initState,action){
    switch(action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,{id:Date.now(),isSelected:false,val:action.val}]}
        case Types.DEL_TODO:
            let newTodo=state.todos.filter(item=>item.id!==action.id);
            return {...state,todos:newTodo}
        case Types.CHANGE_TYPE:
            // 找到id匹配的那一项，把这项的isSelected进行取反重新赋值；
            let newTodos =state.todos.map((item,index)=>{
                if(item.id===action.id){
                    item.isSelected=!item.isSelected;
                }
                return item;
            })
            return {...state,todos:newTodos}
        case Types.CHANGE_VAL:
            return {...state,type:action.v}
            
    }
    return state;
}
let reducer = combineReducers({
    todo:todo
});
export default reducer;