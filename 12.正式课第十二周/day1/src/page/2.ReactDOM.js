import React from "react";
import ReactDOM from "react-dom";

let foo = <div id="a">
    你很好
</div>
let bar = <div id="b">
    大家好，才是真的好
</div>

// 1.react 元素，在JSX中写的标签,
// 2.只能有一个render函数，将虚拟的DOM元素通过reactDOM.render渲染到根元素root中；如果有多个，那么后面会把前面的覆盖；如果挂载到不同的元素，是没有问题的；如果挂载到同一个元素下，后面将会把前面的覆盖；
// 3.react元素必须只能有一个根元素；
// render(ele,container,callback)
// 1.ReactDOM是一个对象，里面包含render这个方法，render这个方法时将react元素转成真实的DOM元素，并且把这个真实的DOM元素插入到页面的根元素中；
// 2.当执行render时，会把根元素中的所有的元素进行替换；
// 3. 当把react元素挂载到页面之后才可以获取
// 4.  在render中第三个参数是回调函数，当真实的DOM挂载完以后，才会执行
// 5.ReactDOM.render 是同步渲染DOM，当真正挂载完以后才会继续执行下面的代码；
ReactDOM.render(foo,document.querySelector("#root"),function(){
    // 当真实的DOM挂载完毕，会触发这个回调函数；
    console.log(100);
});
// ReactDOM.render(bar,document.querySelector("#root1"));
// var divs = document.getElementById("a")
// console.log(divs.id);
console.log(ReactDOM)
