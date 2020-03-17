import React from "react";
import Local from "./Local"
class Username extends React.Component{
    // constructor(){
    //     super();
    //     this.state={user:""}
    // }
    // componentDidMount(){
    //     this.setState({user:localStorage.getItem("user")})
    // }
    render(){
        return <div>
            <input type="text" value={this.props.user} onChange={()=>{}}></input>
        </div>
    }
}
export default Local("user")(Username);