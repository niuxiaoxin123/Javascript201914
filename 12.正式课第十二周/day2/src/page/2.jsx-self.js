// import React from "react";
// let a = React.createElement("div",{a:1},"北京",React.createElement("span",null,"回龙观"));
// console.log(a);

class Element{

    constructor(type,attr,children){
        // 这个里面的this指向当前Element的实例；
        // 给Element的实例新增键值对
        this.type=type;
        this.props = {...attr,children:children}
    }
    // 放到了Element的原型上，实例可以调用
    render(){
        // 把虚拟的DOM转成真实的DOM
        // this --> Elment的实例
        // 
        let ele = document.createElement(this.type);
        // 循环实例上的props属性
        for(let key in this.props){
            if(key!=="children"){
                // key : 设置行间属性
                // 如果遇到的行间属性是关键字，那么转成对应行间属性
                if(key==="className"){
                    key="class"
                }else if(key==="htmlFor"){
                    key="for"
                }
                ele.setAttribute(key,this.props[key]);
            }else{
                for(let i=0;i<this.props.children.length;i++){
                    let cur = this.props.children[i];
                    // 判断cur是否是Element的一个实例；如果是的话，需要再次调用render方法转成真实的DOM；如果不是Element实例，那么用文本节点接收
                    let curEle = cur instanceof Element?cur.render():document.createTextNode(cur);
                    // createTextNode : 把字符串转成文本节点；
                    ele.appendChild(curEle);
                }
            }
        }
        return ele;
    }
}
let obj ={
    // createElement 从第三个参数开始，都是其子节点，把子节点放在一个数组中；
    // createElement 执行会创建一个虚拟的DOM；原型上的不执行
    createElement(type,attr,...children){
        // children : 这是一个数组
        // 返回一个Element的实例
        // 当执行new Element,consturctor会执行，
        return new Element(type,attr,children)
    }
};
// 1. render : 1.将虚拟的DOM转成真实的DOM  2.把真实的DOM插入到container容器中
let objDOM ={
    // ele : 虚拟的DOM对象
    // ele : ele就是Element的一个实例；虚拟的DOM对象
    // container: 将要挂载的DOM元素
    render(ele,container,callback){

        // ele.render ():将虚拟的DOM转成真实的DOM
        container.appendChild(ele.render());
        // callback();
    }
}
let a  = obj.createElement("ul",{a:100,b:200,class:"c"},"珠峰培训",obj.createElement("span",null,"东大街"));// Element的实例；
objDOM.render(a,document.getElementById("root"));
