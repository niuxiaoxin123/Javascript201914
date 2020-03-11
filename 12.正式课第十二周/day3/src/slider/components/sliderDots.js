import React from "react";
export default class SliderDots extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <ul className="focus">
            {this.props.imgs.map((item,index)=>{
                return  <li key={index}></li>
            })}
        </ul>
    }
}