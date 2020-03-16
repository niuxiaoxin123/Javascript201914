import React from "react";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.css";// 导入bootstrap
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div  className="container col-md-6 col-md-offset-3">
            <div className="row">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <TodoHeader></TodoHeader> 
                    </div>
                    <div className="panel-body">
                        <TodoBody></TodoBody>
                    </div>
                    <div className="panel-footer">
                        <TodoFooter></TodoFooter>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default connect(state=>({...state}))(App);