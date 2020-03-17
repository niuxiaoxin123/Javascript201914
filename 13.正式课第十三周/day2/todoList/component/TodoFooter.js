import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/todolist"
class TodoFooter extends React.Component{
    constructor(){
        super();
    }
    changeVal=(e)=>{
        // 由于事件有冒泡的传播机制，所以当点击li时，会触发ul上的onClick事件
        // a : 事件源 事件源身上有个dataset属性，其属性值时是事件源行间属性data-属性，设置的属性
        this.props.changeVal(e.target.dataset.type);
        // console.log(e.target.dataset);
        
    }
    render(){
        return <div>
                <ul className="nav nav-pills" onClick={this.changeVal}>
                    <li role="presentation" className={this.props.type==="all"?"active":""} ><a href="#" data-type="all">全部任务</a></li>
                    <li role="presentation"  className={this.props.type==="finish"?"active":""}><a href="#" data-type="finish">已完成</a></li>
                    <li ro="presentation"  className={this.props.type==="unfinish"?"active":""}><a href="#" data-type="unfinish">未完成</a></li>
                </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoFooter);