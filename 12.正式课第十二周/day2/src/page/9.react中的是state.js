import React,{Component} from "react";
import ReactDOM from "react-dom";
// 组件的数据来源有两个地方，一个是props 属性  state  :状态
// props : 是从组件外面传递过来的
// state : 是组件自己私有的

// 在react中： 数据更新视图
// 在react只有属性或者state发生改变，才会引发视图的更新；
class Bar extends Component{
    constructor(){
        super();
        this.state={num:100,a:999}// 初始化该组件的状态
    }
    add=(val)=>{
            // this.state.num=101;
            // console.log(this);
            // 在react中，想要更新视图，那么需要调用render，调用需要更新状态，通过组件实例setState执行，同时会让render执行，那么视图就可以得到更新
            // 当想多次更改状态时，更改状态会发生合并；后面一次会把前面那一次覆盖掉；
            // this.setState({num:this.state.num+1});
            // this.setState({num:this.state.num+2});
            
            this.setState((prevState)=>{
                // prveState : 代表上一次的状态；为了防止更新状态发生合并，这个时候可以使用函数的写法；
                // 当前的状态依赖上一次状态的时候，使用函数
                // 这个函数的返回值就会覆盖原有的state
                return {num:prevState.num+1}
            });
            this.setState((prevState)=>{
                // 这个函数的返回值就会覆盖原有的state
                return {num:prevState.num+1}
            })
    }
    render(){
        console.log(100);
        return  <div>
            {/* 如果需要传参，需要在事件外层套一个函数， */}
            <p>{this.state.num}</p>
            <p>{this.state.a}</p>
            {/* <button onClick={()=>{this.add(2)}}>新增</button> */}
            {/* 因为bind默认返回一个函数，并且已经准备好了参数 */}
            <button onClick={this.add.bind(null,2)}>按钮</button>  
        </div>
    }
}
ReactDOM.render(<Bar></Bar>,document.getElementById("root"));