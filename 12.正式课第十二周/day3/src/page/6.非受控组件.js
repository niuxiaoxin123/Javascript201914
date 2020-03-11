import React from "react";
import ReactDOM from "react-dom";
// 非受控组件： 不受状态控制的组件
class Sum extends React.Component{
    constructor(){
        super();
        this.state={result:""}
    }
    add=()=>{
        // 获取到
        // 如果给组件行间属性加上一个ref属性，那么会把该元素放在组件实例的refs这个属性上
        // ref ：字符串或函数；如果是函数，会默认将此元素传递给当前函数的参数
        //console.log(this.refs); 
        let result = Number(this.refs.a.value) + Number(this.b.value);
        this.setState({result})
    }
    render(){
        return  <div>
                    <input type="text" onChange={this.add} ref="a"></input>+
                    {/* x这个参数就是当前的元素 */}
                    <input type="text" onChange={this.add} ref={(x)=>{this.b=x}}
                    ></input>={this.state.result}
                </div>
    }
}

ReactDOM.render(<Sum></Sum>,document.getElementById("root"));