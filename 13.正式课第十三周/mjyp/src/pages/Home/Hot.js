import React from "react";
import "./Hot.less";
import actions from "../../store/actions/index.js"
import {connect} from "react-redux";
function Hot(props){
    let {hotData,queryHot}=props;
    if(!hotData)queryHot();
    console.log(hotData);
    return <div>
        
    </div>

}
export default connect(state=>state.homeReducer,actions.home)(Hot);
