import React from "react";
import ReactDOM from "react-dom";
let a = <div>
    {[<span>1</span>,<span>2</span>,{}]}
</div>;
// JSX : 将HTML和JS 混合在一起进行编程；
// REACT :MVC :数据是单项的； MVVM： 数据是双向的；
// 虚拟的DOM；
// JSX语法：
// 1.花括号支持三元，支持表达式
// 2.花括号中如果是null true undefined false 不显示
// 3. 大括号中不能直接放入对象空间地址和函数空间地址，但是可以函数的执行结果
// 4. 可以放数组，并且如果这个数组中的每一项都是一个react元素，最后这些元素会被一起渲染
// 5. JSX元素不能使用关键字 class==>className for==>htmlFor
// 6. 在行间可以写style样式，如果是-，需要转成驼峰

// 数据绑定： 在react中的数据绑定一般会通过数组的map方法，把数据映射一个带有react元素的数组，放到页面上



// React.createElement： 创建虚拟DOM；
// 1. 元素类型 2. 行间属性  3=>是子节点

ReactDOM.render(a,document.getElementById("root"),function(){

    // 当DOM挂载到页面上之后执行
})
// render 方法执行时，需要将虚拟的DOM转成真实的DOM，然后放入到真实的root根元素中；