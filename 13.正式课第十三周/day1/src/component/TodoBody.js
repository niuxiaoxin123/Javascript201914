import React from "react";
import {connect} from "react-redux";
class TodoBody extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <ul className="list-group">
                {this.props.todos.map((item,index)=>{
                    return <li className="list-group-item" key={index}
                    >
                        <input type="checkBox" checked={item.isSelected}></input>
                        {item.val}
                        <button className="btn-danger btn  pull-right btn-xs">×</button>
                    </li>
                })}
            </ul>
        </div>
    }
}
// state.todo ： combineReducer中叫什么名，这个就叫什么
export default connect(state=>({...state.todo}))(TodoBody);