import * as Types from "../action-type";
export default {
    addTodo(val){
        // return就是reducer中的action
        return {type:Types.ADD_TODO,val}
    },
    delTodo(id){
        return {type:Types.DEL_TODO,id}
    },
    changeType(id){
        return {type:Types.CHANGE_TYPE,id}
    },
    changeVal(v){
        return {type:Types.CHANGE_VAL,v}
    }
}