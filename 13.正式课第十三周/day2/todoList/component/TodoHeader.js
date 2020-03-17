import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/todolist.js";
class TodoHeader extends React.Component{
    constructor(){
        super();
    }
    add=(e)=>{
        // 给store中的todos新增对象
        // 组件的事件==> action-type==>actions==> reducer==> 组件
        if(e.keyCode===13){
            this.props.addTodo(e.target.value);
            e.target.value="";
        }
    }
    render(){
        return <div>
            <h2>您还有{this.props.todos.filter(item=>!item.isSelected).length}件事未完成</h2>
            <input type="text" className="form-control" onKeyUp={this.add}></input>
        </div>
    }
}
// 这个state后面跟combineReducers中的对象属性名对应
// 
export default connect(state=>({...state.todo}),actions)(TodoHeader);