import React from "react";
import SliderItems from "./sliderItems";
import SliderDots from "./sliderDots";
import SliderArrow from "./sliderArrow";

export default class Slider extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="container">
                <SliderItems imgs={this.props.imgs}></SliderItems>
                <SliderArrow></SliderArrow>
                <SliderDots  imgs={this.props.imgs}></SliderDots>
            </div>
    }
}