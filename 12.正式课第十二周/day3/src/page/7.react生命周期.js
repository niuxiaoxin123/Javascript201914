import React from "react";
import ReactDOM from "react-dom";
// 生命周期： 在生成组件这个实例时，不同的时间阶段会默认调用一些函数；这些钩子函数就是生命周期函数；
// 这个生命周期钩子函数可以让生成实例的过程中，让咱们可以添加一些自己的逻辑；、
class Parent extends React.Component{
    static defaultProps={
        abc:"China"
    }
    // constructor 和 render都是react生命周期的一个钩子函数；
    constructor(props){
        super(props);
        //1. 一般在constructor 初始化状态 2. 也可以获取到外界传递进来的属性
        console.log("contructor")
        this.state={num:66}
        //console.log(this.props.abc)
    }
    componentWillMount(){
        // 组件挂载之前，会执行这个钩子函数;可以在这个钩子函数中修改状态，当render渲染时，直接获取到最新的状态，不用再次调用render了；
        // 在render之前把数据改掉，不会再次出发render；
        console.log("componentWillMount")
        this.setState({num:88});
    }
    componentDidMount(){
        // 当组件挂载完成之后执行的钩子函数
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps,nextState){
        // 在componentWillUpdate之前执行
        // 这个钩子函数中return true，会继续向下更新执行；如果return false，不再触发下面的钩子函数
        // 这个钩子函数经常用于react性能优化；在视图或数据更新之前，加了一层拦截，返回true，就继续更新，返回false，不更新

        // nextProps : 代表下一次的属性 nextState： 代表下一次的状态
        //console.log(nextState) 
        // console.log(nextProps.abc)
        // 可以根据下一次props或state值判断是否要刷新视图；如果需要返回true，不需要返回false;
        // 第一个参数： 代表的是下一次的属性 
        // 第二个参数： 代表的是下一次的状态
        // console.log("shouldComponentUpdate");
        // if(nextState.num%2===0){
        //     return true
        // }else{
        //     return false;
        // }
        return true;
    }
    componentWillUpdate(){
        // 当属性或状态发生改变，会引发视图的更新，同时也会调用这个钩子函数，在render之前
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        // 组件更新后
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        // 组件卸载
        console.log("componentWillUnmount")
    }
    add=()=>{
        this.setState({num:this.state.num+1})
        // 卸载元素root上的组件
       // ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
    }
    render(){
        console.log("render")
        // 会返回一个react元素，而且只能有一个根元素；这个返回的元素最终会渲染到root元素中
        // 调用一次setState就会执行一次render;默认也会执行一次
        return <div>
                    {this.state.num}
                    <button onClick={this.add}>新增</button>
                    <Child val={this.state.num}></Child>
                </div>
    }
}
// 页面第一次加载defaultProps==> constructor ==> componentWillMount ==> render ==> componentDidMount
// 页面数据更新：shouldComponentUpdate==>componentWillUpdate===> render==>componentDidUpdate
// 生命周期的顺序：defaultProps==> constructor ==> componentWillMount ==> render ==> componentDidMount==> componentWillUnmount
// 当组件的属性或state发生改变以后，都会触发视图的更新

class Child extends React.Component{
    constructor(){
        super();
        console.log("子组件：constructor")
    }
    componentWillReceiveProps(){
        // 第一次解析时不执行，当后面的属性发生改变，就会执行这个钩子函数；
         console.log("子组件：componentWillReciveProps")
    }
    // 当父组件数据更新时，父组件执行重新渲染函数render时，这三个钩子函数也会跟着执行，不过父组件componentDidUpdate最后执行；
    shouldComponentUpdate(){
        console.log("子组件：shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        console.log("子组件：componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("子组件：componentDidUpdate")
    }
    render(){
        return <div>
            子组件：{this.props.val}
        </div>
    }
}
ReactDOM.render(<Parent time="20200311" abc="中国"></Parent>,document.getElementById("root"));