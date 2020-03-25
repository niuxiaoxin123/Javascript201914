import React from "react";
import "./Hot.less";
import actions from "../../store/actions/index.js"
import {connect} from "react-redux";
import More from "./More";
function Hot(props){
    // 获取属性上的值； props : store的state 和action中方法构成；
    let {hotData,queryHot}=props;
    // 保证只有第一次进来的时候请求一次，防止后期更改store引发组件的再次更新；只请求一次；
    if(!hotData)queryHot();
    // console.log(hotData);
    // 如果是第一次渲染，hotData为null;利用三元进行一个判断；
    return <div className="recommend">
        {hotData ?<div><More title="推荐" link="/recommend"></More>
                <div className="first">
                    <img src={hotData[0].title}></img>
                    <img src={hotData[0].describe}></img>
                </div>
                <ul className="list">
                    {hotData.slice(1).map((item,index)=>{
                        return <li key={index}>
                            <img src={item.url}></img>
                        </li>
                    })}
                </ul>
        </div>:null}
    </div>
}
export default connect(state=>state.homeReducer,actions.home)(Hot);
