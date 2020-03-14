// 这个文件用于合并各个的reducer;
import count from "./counter.js";
import todo from "./todo.js";
// 合并多个reducer；合并成一个；
function combineReducers(reducers){
    return (state={},action)=>{// 返回的这个函数就是createStore中的reducer这个函数；
        // 这个函数的返回值是什么？函数的结果就是给store中的state赋值；
        let obj = {};
        for(let key in reducers){
            // 把reducer的返回值赋值给obj键值对；
            // key : counter  todo 
            obj[key]=reducers[key](state[key],action);
            // obj[counter]={num:100}函数执行的结果
            // obj[todo]={todo:["跑步","爬山"]}
        }
        return obj;
    }
}
// 最后的store中的state的初始值是什么？
// 每个项目都有一个store,但是有多个组件，还想每个组件单独管理自己独立的状态；把所有的组件的状态集中到一个store中；再把各自的状态单独传递给每一个组件的reducer；
// {counter:{num:100},todo:{todo:["跑步","爬山"]}}
let reducer = combineReducers({
    // 前面这个是属性名，后面是属性值；属性值作为值一定要看当前的数据类型
    counter:count,// counter是reducers下counter的函数
    todo:todo// // reducers下todo的函数
});
export default reducer;