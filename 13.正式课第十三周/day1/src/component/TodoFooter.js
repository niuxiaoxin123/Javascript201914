import React from "react";
import {connect} from "react-redux";
class TodoFooter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
                <ul class="nav nav-pills">
                    <li role="presentation" class="active"><a href="#">全部任务</a></li>
                    <li role="presentation"><a href="#">已完成</a></li>
                    <li role="presentation"><a href="#">未完成</a></li>
                </ul>
        </div>
    }
}
export default connect(state=>({...state}))(TodoFooter);