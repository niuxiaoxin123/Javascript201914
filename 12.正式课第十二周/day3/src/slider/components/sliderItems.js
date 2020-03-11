import React from "react";
export default class SliderItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <ul className="wrapper">
            {this.props.imgs.map((item,index)=>{
                return <li key={index}>
                    <img src={item}></img>
                </li>
            })}
        </ul>
    }
}