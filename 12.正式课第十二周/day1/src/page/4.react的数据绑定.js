import React from "react";
import ReactDOM from "react-dom";
import "./4.less";
// 在react中需要引入css样式；
// import 语法需要放在当前js的最上面；
let ary = [{name:"贾延楷",age:20},{name:"刘胜",age:21},{name:"刘文甜",age:18}];
// let obj={name:"海维"};
// let {name}=obj;
// let a = <div>{name}</div>
// 默认配置文件中是不支持less的；
// 在react中的数据绑定，需要使用数组的map方法，将数据一一映射成一个react元素，并且需要在每一个react元素上加上key属性，key一般的属性值是当前的索引，代表唯一性
let list = <ul>
    {ary.map((item,index)=>{
        // map: 映射把return出的值进行一一映射
        return <li key={index}>{item.name}{item.age}</li>
    })}
</ul>
ReactDOM.render(list,document.getElementById("root"));

