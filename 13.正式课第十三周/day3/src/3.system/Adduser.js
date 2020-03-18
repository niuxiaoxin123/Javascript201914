import React from "react";
export default class Adduser extends React.Component{
    constructor(){
        super();
        
    }
    add=()=>{
        let user = JSON.parse(localStorage.getItem("users")) || [];
        user.push({id:Date.now(),name:this.refs.x.value});
        localStorage.setItem("users",JSON.stringify(user));
        // 可以在JS中控制路由；
        // 凡是由路由渲染出来的组件，当前组件的props上会默认新增三个键值对
        // history  location  match 
        console.log(this.props);
        this.props.history.push("/user/list")
    }
    render(){
        return <div>
            <input type="text" className="form-control" ref="x"></input>   
            <button className="btn btn-danger" onClick={this.add}>新增用户</button>  
        </div>
    }
}