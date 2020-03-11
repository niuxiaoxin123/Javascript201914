import React from "react";
import ReactDOM from "react-dom";
class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state={num:1}
    }
    add=()=>{
        // setState需要将最新的状态传给实例的状态才会引发render执行，不传参，render不会调用；如果setState传递的值上一次和这一次样，同样会调用render方法；
        // this.setState({num:1})
        // this.setState({num:1})
        // 如果有多个状态同时更新，那么setState会发生合并；
        //this.setState(prevState=>({num:prevState.num+1}));
        // 如果是函数就不再合并了；
        // 当下一次的状态依赖上一次的状态时，需要用函数的方法；
        //setState(prevState=>({num:prevState.num+1}));
        // setState 是有时候异步的有时候是同步的
        // 1.在react的事件绑定中或react生命后期钩子函数中，调用了setState更改数据，但是这个setState 是异步；
        // 2.在定时器的延时回调中的setState 是同步更新数据的；

        // this.setState({num:this.state.num+1});
        // console.log(this.state.num); // 
        this.setState({num:this.state.num+1});
        this.setState({num:this.state.num+1});
        // setTimeout(()=>{
        //     this.setState({num:this.state.num+1});
        //     this.setState({num:this.state.num+1});
        //     console.log(this.state.num); // 
        // },2000)
    }
    render(){
        //console.log(199);
        return <div>
            <p>{this.state.num}</p>
            <button onClick={this.add}>增加</button>
        </div>
    }
}
ReactDOM.render(<Bar a="100"></Bar>,document.getElementById("root"));