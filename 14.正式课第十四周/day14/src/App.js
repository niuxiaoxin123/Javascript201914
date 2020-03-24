
import React from "react";
import { func } from "prop-types";
class App extends React.Component{
  constructor(){
    super();
    this.state={num:0};
    // 在constructor中更改add方法的this指向，这个constructorthis指向实例；
    //this.add=this.add.bind(this);
    this.color={color:"red"};
  }
  add(){
    // 如果不是箭头函数；那么里面的this指向undefined
      this.setState({num:this.state.num+1});
      // let obj  ={
      //     fn:function(){

      //     }
      // }
      // let f = obj.fn;
      // f();
      // obj.fn();
  }
  // react： 属性和状态发生改变引发视图的更新；
  // shouldComponentUpdate(nextProps,nextState) [返回值是true或false]==> componentWillUpdate==> render 
  render(){
    // this==> 实例
    // render由于数据更新可能会导致多次执行该方法，所以尽可能提前对里面的方法内容作出处理；
    return <div>
      {this.state.num}
      <button onClick={this.add}>添加</button>
      <button onClick={this.add.bind(this)}>添加1</button>
      <button onClick={()=>{this.add()}}>添加2</button>
      <div style={this.color}></div>
    </div>
  }
}
export default App;