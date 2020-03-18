import React from "react";
import {Link,HashRouter,Switch,Route} from "react-router-dom";
import Adduser from "./Adduser";
import Userlist from "./Userlist";
import Detail from "./Detail";
export default class User extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
          <div className="col-md-3">
              <ul className="nav">
                  <li><Link to="/user/add">新增用户</Link></li>
                  <li><Link to="/user/list">用户列表</Link></li>
              </ul>
          </div>
          <div className="col-md-9">
                <HashRouter>
                    <Switch>
                        <Route path="/user" exact={true} component={Adduser}></Route>
                        <Route path="/user/add" component={Adduser}></Route>
                        <Route path="/user/list"  exact={true} component={Userlist}></Route>
                        <Route path="/user/list/:id" component={Detail}></Route>
                    </Switch>
                </HashRouter>
          </div>
        </div>
    }
}