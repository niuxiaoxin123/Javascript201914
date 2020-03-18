import React from "react";
import Nav from "./Nav";
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="container">
            <div className="row">
                <Nav></Nav>
                {this.props.children}
            </div>
        </div>
    }
}