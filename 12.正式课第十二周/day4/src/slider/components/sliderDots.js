import React from "react";
export default class SliderDots extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <ul className="focus">
            {this.props.imgs.map((item,index)=>{
                // 循环到最后一次时，返回一个null;
                if(index===this.props.imgs.length-1){
                    return null;
                }
                // this.props.index 和index的差值
                return  <li key={index} className={this.props.index===index||this.props.index-index===3?"active":""} onClick={()=>{this.props.turn(index-this.props.index)}}></li>
                // this.props.index : 代表的当前显示的图片对应的index;
                // index : 当前li的index；
                //  目的从当前的index 调到liindex对应的图片下；index-this.prop.index;然后和slider.js中this.state.index 求和，最终index和当前li的index相等；正好显示li对应的图片；
            })}
        </ul>
    }
}