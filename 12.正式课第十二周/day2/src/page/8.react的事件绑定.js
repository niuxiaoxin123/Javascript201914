import React,{Component} from "react";
import ReactDOM from "react-dom";
// function 和 class定义组件：
class Bar extends Component{
    constructor(){
        super();
    }
    add(e){
        // 元素的事件一般放在当前组件的原型上
        // this是指向undefined；但是一般希望指向组件的实例
        // 如果事件箭头函数，那么该函数中的this指向实例
        // 通过bind的方法更改当前函数体中的this指向
        console.log(100)
        console.log(this)
        console.log(e.target)

    }
    render(){
        // this ==> 实例
        // 事件绑定：1.on+事件；事件的首字母需要大写 2. 事件放原型
        return <div>
            <button onClick={this.add}>按钮</button>
        </div>
    }
}
ReactDOM.render(<Bar></Bar>,document.getElementById("root"));