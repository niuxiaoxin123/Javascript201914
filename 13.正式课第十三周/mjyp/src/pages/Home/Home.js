import React from "react";
import Header from "./Header";
import Banner from "../../components/Swiper";
import {connect} from "react-redux";
import actions from "../../store/actions/index.js";
import "./Home.less";
import Menu from "./Menu";
import Hot from "./Hot.js";
function Home(props){
    // console.log(props);
    // 轮播图数据放在store中，从store中把数据取出来，再传给轮播图组件
    let {sliders,init,activity}=props;
    if(!sliders){// 当sliders没有数据时，发送请求；
        init();
    }
    console.log(sliders);

    return <div className="main-box">
            {/* 头部 */}
            <Header></Header>
            <div className="main-body">
                {/* 轮播图 */}
                <Banner data={sliders}></Banner>
                <Menu activity={activity}></Menu>
                <Hot></Hot>
            </div>
    </div>
}
export default connect(state=>state.homeReducer,actions.home)(Home);