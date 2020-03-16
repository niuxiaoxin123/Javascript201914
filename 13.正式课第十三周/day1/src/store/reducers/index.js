import {combineReducers} from "redux";
// createStore  combinereducers => redux
// connect  Provider  => react-redux;
let initState={
    todos:[{id:1,isSelected:false,val:"要跑步"},
            {id:2,isSelected:false,val:"看电影"}]
}
function todo(state=initState,action){
    return state;
}
let reducer = combineReducers({
    todo:todo
});
export default reducer;