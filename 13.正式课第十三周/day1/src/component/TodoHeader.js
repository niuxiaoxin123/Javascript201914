import React from "react";
import {connect} from "react-redux";
class TodoHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <h2>您还有几件事未完成</h2>
            <input type="text" className="form-control"></input>
        </div>
    }
}
export default connect(state=>({...state}))(TodoHeader);