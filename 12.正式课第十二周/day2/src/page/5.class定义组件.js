import React from "react";
import ReactDOM from "react-dom";
// 让FOO这个类继承React上面的Component
// 类声明组件
// 和function声明组件的区别
// 类声明是有状态的，有this，还有生命周期；
// 在react中，属性和状态变化都可以引发视图的更新；
class Foo extends React.Component{
    constructor(props){
        // contructor和render都是react组件的一个生命周期钩子函数
        // 先执行constructor 再执行render函数；
        // 如果想在constructor这个钩子函数中获取到行间属性传递过来的数据，可以在constructor传递一个参数接收
        // 如果需要放在当前的实例上，需要在super把这个props传递过去；
        super();
        // props在实例this上
        console.log(1);
        //console.log(this)// 空间地址；
        // 当执行constructor时，实例上默认的props是undefined，后期会往实例props赋值，但是如果在super传递，那么会将super的值赋值给props,就可以在实例直接获取了
        //console.log(this.props);// undefined
    }
    render(){
        // react 中定义类必须在原型上放一个render函数；并且这个render函数的返回值，最后会放到根元素；
        console.log(2);
        // 类组件通过行间属性，可以把数据以对象的方式放在实例props属性上，这个函数下的this指向当前的组件实例
        // 组件每调用一次，那么render 就会执行一次；
        return <div>{this.props.a}</div>
    }
}
let obj = {c:1,d:2}
let  a = <div>
    <Foo a="100" b="eee"></Foo>
    <Foo a="200" {...obj}></Foo>
</div>
ReactDOM.render(a,document.getElementById("root"));