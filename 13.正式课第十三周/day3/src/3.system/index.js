import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home";
import Profile from "./Profile";
import User from "./User";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import {HashRouter,Route,Switch,Link} from "react-router-dom";

ReactDOM.render(<HashRouter>
    <Switch>
        <App>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
        </App>
    </Switch>
</HashRouter>,document.getElementById("root"));