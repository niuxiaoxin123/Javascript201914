import React from "react";
class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>{this.props.children} 100</div>
    }
}
export default App;