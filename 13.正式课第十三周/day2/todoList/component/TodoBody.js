import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/todolist";
class TodoBody extends React.Component{
    constructor(){
        super();
    }
    del=(id)=>{// id 是当前li数据的id值；
        this.props.delTodo(id);
    }
    change=(id)=>{
        this.props.changeType(id);
    }
    filterTodo=()=>{
        // 根据store中的type对todos这个数组进行筛选过滤；
        if(this.props.type==="all"){
            return this.props.todos;
        }else if(this.props.type==="finish"){
            return this.props.todos.filter(item=>item.isSelected)
        }else{
            return this.props.todos.filter(item=>!item.isSelected)
        }
    }
    render(){
        return <div>
            <ul className="list-group">
                {this.filterTodo().map((item,index)=>{
                    return <li className="list-group-item" key={index}
                    >
                        <input type="checkBox" checked={item.isSelected}
                        onChange={()=>{this.change(item.id)}}></input>
                        {item.val}
                        <button className="btn-danger btn  pull-right btn-xs" onClick={()=>{this.del(item.id)}}>×</button>
                    </li>
                })}
            </ul>
        </div>
    }
}
// state.todo ： combineReducer中叫什么名，这个就叫什么
// state中的todos最后一属性的形式放在了该组件上，如果只是更改了属性中的内容，但是不更 新这个空间地址，那么视图不会刷新；如果里面的数据发生更改，视图监听不到，也不能引发视图的更新；
export default connect(state=>({...state.todo}),actions)(TodoBody);