import React from "react";
import Local from "./Local";
class Password extends React.Component{
    // constructor(){
    //     super();
    //     this.state={pass:''}
    // }
    // componentDidMount(){
    //     // Username 和password都是从本地获取值，然后对input框赋值的；
    //     this.setState({pass:localStorage.getItem("pass")})
    // }
    render(){
        return <div>
            <input type="text" value={this.props.pass} onChange={()=>{}}></input>
        </div>
    }
}
export default Local("pass")(Password);
// 高阶函数
// connect :这就是一个高阶的组件；会返回一个包装后的组件；