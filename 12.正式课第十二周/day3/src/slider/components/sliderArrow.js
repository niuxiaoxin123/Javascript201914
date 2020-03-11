import React from "react";
export default class SliderArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="arrow">
                <span> ＜ </span>
                <span> ＞</span>
        </div>
    }
}