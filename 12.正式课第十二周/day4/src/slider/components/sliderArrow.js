import React from "react";
export default class SliderArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        // 点击右箭头更新视图，执行turn 
        return <div className="arrow">
                <span onClick={()=>{this.props.turn(-1)}}> ＜ </span>
                <span onClick={()=>{this.props.turn(1)}}> ＞</span>
        </div>
    }
}