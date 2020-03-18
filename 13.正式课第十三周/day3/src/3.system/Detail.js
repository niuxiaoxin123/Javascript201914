import React from "react";
// Link  
export default class Detail extends React.Component{
    constructor(){
        super();
    }
    render(){
        let user = JSON.parse(localStorage.getItem("users"));
         console.log(this.props);
        let  curId = this.props.match.params.id;
        let curUser = user.filter((item)=>item.id==curId);
        
        return <div>
            {curUser[0].name}
        </div>
    }
}