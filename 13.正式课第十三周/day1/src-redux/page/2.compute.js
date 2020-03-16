import React from "react";
// import store from "../store";
import {connect} from "react-redux";
// import actions from "../store/actions/counter";
class Compute extends React.Component{
    // constructor(){
    //     super();
    //     this.state={num:store.getState().counter.num}
    // }
    // componentDidMount(){
    //     // react中更新视图： setState props
    //     store.subscribe(()=>{
    //         this.setState({num:store.getState().counter.num})
    //     })
    // }
    render(){
        return <div>
            {this.props.num%2===0?"偶数":"奇数"}
        </div>
    }
}
export default  connect(state=>({...state.counter}))(Compute)