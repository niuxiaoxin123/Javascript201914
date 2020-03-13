import React from "react";
import SliderItems from "./sliderItems";
import SliderDots from "./sliderDots";
import SliderArrow from "./sliderArrow";

export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}// index:0,显示的第一张
    }
    componentDidMount(){
        // 当把真正的DOM挂载完毕，开始执行轮播效果
        this.go(this.props.tt);
    }
    turn=(step)=>{
        // index-this.prop.index
        // 因为只有setState才能引发视图的更新
        // this==> 组件的实例
        // slider ： 是子组件的ul元素；
        if(this.state.index===3){
            this.slider.style.left="0px";// 让ul这个元素的left瞬间为零；
            // 由于ul身上有transition属性，所以需要消耗时间；
            this.slider.style.transitionDuration="0s";
            // window.getComputedStyle
            // 让页面重绘；
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration="0.5s";
            this.setState({index:1});
            return;
        }
        if(this.state.index+step===-1){
            this.slider.style.left="-1200px";
            this.slider.style.transitionDuration="0s";
    
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration="0.5s";
            this.setState({index:2});
            return;
        }
        this.setState({index:this.state.index+step});
        // 
    }
    go=(time)=>{
        this.timer=setInterval(()=>{
            this.turn(1);
        },time)
    }
    getSlider=(x)=>{
        // x ： 加了ref属性的元素
        // this : 父组件的实例
        // 当执行这个组件的render时，同时也会编译子组件的结构，这时父组件的方法就会立刻运行
        this.slider=x;
    }
    render(){
        return <div className="container" onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.go()}}>
                <SliderItems imgs={this.props.imgs} index={this.state.index} slider={this.getSlider}></SliderItems>
                <SliderArrow turn={this.turn}></SliderArrow>
                <SliderDots  imgs={this.props.imgs} index={this.state.index} turn={this.turn}></SliderDots>
            </div>
    }
}