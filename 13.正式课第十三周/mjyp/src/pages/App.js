import React from "react";
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./Home/Home.js";
import Classify from "./Classify/Classify";
import Taste from "./Taste/Taste";
import Personal from "./Personal/Personal";
import Cart from "./Cart/Cart";
import Tab from "../components/Tab.js";
import "../assets/css/reset.min.css";
import "../assets/css/common.less";
class App extends React.Component{
    render(){
        return <HashRouter>
            <Switch>
                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/classify" component={Classify}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/taste" component={Taste}></Route>
                <Route path="/personal" component={Personal}></Route>
                {/* 当上面路由都没有匹配成功，通过Redirect这个组件，把路由重定向到/上 */}
                <Redirect to="/"></Redirect>
            </Switch>
            {/* 公共的底部导航 */}
            <Tab/>
        </HashRouter>
    }
}
export default App;
// 是所有文件的入口
// 1.文件和模块的对应关系
// 2.路由和组件的对应关系
// 3.一个完整的请求是怎么发送的；
// 4.如何更改一条数据
