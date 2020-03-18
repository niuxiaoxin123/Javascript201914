import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route,Switch,Link} from "react-router-dom";
// 解构出来的是react-router-dom封装的一些内置组件
// function Home(){
//     return <div>Home</div>
// }
let Home=()=><div>
        Home
        <Link to="/list">去吧</Link>
    </div>;
let List=()=><div>List</div>;
let Person=()=><div>Person</div>;
let Found=()=><div>Not found</div>;
// Route: 有个path；其属性值对应页面的hash值； 当页面的hash值和这个path属性的属性值匹配成功，就会显示对应的组件，component:该path对应的组件

// exact: 如果给该条路由加上exact这个属性值为true，当前页面的hash值必须和path相同，才显示；如果没有，那么只有包含就会渲染；
// 如果没有给该Route没有设置path属性，那么不管是什么路径，都会匹配到该组件，一般用于404
// switch : 只要匹配到一个符合要求的，都不再向下匹配，同时可以提升组件的性能
ReactDOM.render(<HashRouter>
    <Switch>
        <Route path="/"  exact={true} component={Home}></Route>
        <Route path="/home"  component={Home}></Route>
        <Route path="/home/list" component={List}></Route>
        <Route path="/person" component={Person}></Route>
        <Route  component={Found}></Route>
    </Switch>
</HashRouter>,document.getElementById("root"));