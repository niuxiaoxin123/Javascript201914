import React,{Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class Student extends Component{
    static propTypes={
        // 校验属性的方法
        age:PropTypes.number,
        // name:PropTypes.array
        // PropTypes.bool 
        // PropTypes.func  
        // PropTypes.number   
        // PropTypes.object  
        // PropTypes.string 
    }
    static defaultProps={
        // 定义默认属性，如果行间没有传递，会解析出默认值来；
        // 如果传递会解析传递来的值，默认值会被覆盖
        age:100
    }
    constructor(){
        super();
    }
    render(){
        // 传递过来的属性不可以进行修改； 只读
        this.props.age=100;
        return <div>
            {this.props.age}
        </div>
    }
}
ReactDOM.render(<Student age={1} name="hello"></Student>,document.getElementById("root"));