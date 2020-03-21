import React from "react";
import "./Header.less";
import {withRouter} from "react-router-dom";
// let imgSrc= require('../../assets/images/navi_title_v2.png')
// 
function Header(props){
    return <div className="main-header">
        <div className="logo-box">
            <img src={require('../../assets/images/navi_title_v2.png')}></img>
        </div>
        <div className="search-box" onClick={()=>{
            //console.log(this);//undefined
            //console.log(props);
            props.history.push("/search");
        }}>
            <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_search_v5.png"></img>
            <span>年货嗨强,最高直降1000</span>
        </div>
        <div className="msg-box">
            <div className="msg"></div>
        </div>
    </div>
}
// withRouter ： 方法是将路由的一些信息放在该组件的props属性上；
export default withRouter(Header);