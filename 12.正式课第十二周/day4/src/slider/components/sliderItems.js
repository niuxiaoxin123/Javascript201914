import React from "react";
export default class SliderItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        // index : 是父组件的状态值；根据index来控制样式的显示；
        let style={
            left : -this.props.index*400+"px",
            transition:"left 0.5s linear"
        }
        return <ul className="wrapper" ref="a" style={style} ref={this.props.slider}>
            {this.props.imgs.map((item,index)=>{
                return <li key={index}>
                    <img src={item}></img>
                </li>
            })}
        </ul>
    }
}