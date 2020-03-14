// 每一个组件都有自己对应的独立的reducer;
let initTodo={
    todo:["跑步","爬山"]
}
function todo(state=initTodo,action){
    return state;
}
export default todo;