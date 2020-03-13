import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// slider就是导出来的Slider组件，由于加了default，所以不需要解构；
import Slider from "./components/slider.js"
let imgs = [require("./images/1.jpg"),require("./images/2.jpg"),require("./images/3.jpg"),require("./images/1.jpg")];

ReactDOM.render(<Slider imgs={imgs} tt={2000}></Slider>,document.getElementById("root"));