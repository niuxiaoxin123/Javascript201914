import React from "react";
import ReactDOM from "react-dom";
// React 的核心库，在每个js中都要导入react;

// ReactDOM.render : 将react元素挂载到root的元素上
// 为什么这里可以直接写js呢；
// 这叫JSX语法：在react中支持jsx语法，后缀名是jsx的文件；那么可以在这个文件中直接写标签，那么这个标签就代表了一个react元素；当真正编译这个标签时，其实是一个react元素对象；
// 浏览器只支持html,css,js文件，不支持后缀名是.jsx的文件，因为在打开浏览器通过babel已经将jsx编译成了js;
//let  a= <span></span>;
let  bar = <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
//console.log(a);// 对象；虚拟的DOM对象

ReactDOM.render(bar,document.querySelector("#root"));// root元素就是public中index.html中id为root的元素；
// ReactDOM.render 
// 1. react元素，将虚拟的DOM对象转成真实的DOM
// 2. 要挂载的真实的DOM元素到root这个根元素中