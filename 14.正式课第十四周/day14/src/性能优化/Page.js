
import React from "react";

class Page extends React.Component{
  constructor(){
    super();
    this.state={header:"hello zfpx",footer:"珠峰培训"}
  }
  changeHeader=()=>{
    this.setState({header:"hello beijing"});
  }
  changeFooter=()=>{
    this.setState({footer:"北京回龙观"});
  }
  render(){
    return <div>
        {this.state.header}
        <button onClick={this.changeHeader}>change</button>
        <button onClick={this.changeFooter}>changeFooter</button>
        <Demo footer={this.state.footer}></Demo>
    </div>
  }
}
// React.PureComponent : 只要该组件依赖的属性没有发生变化，那么就不会默认调用render方法
class Demo extends React.PureComponent{
    // constructor(){
    //     super();
    //     console.log("constructor Demo");
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     // 定制shouldComponentUpdate
    //     // 返回true，就继续向下执行，返回false，不再向下执行
    //     if(nextProps.footer===this.props.footer){
    //        return false;
    //     }
    //     return true;
    // }
    render(){
      // 当父组件更新时，不管父组件中数据与该子组件的属性是否有关联，只要父组件调用了setState，那么都会重新执行子组件的render渲染函数；
        console.log("Demo render");
        return <div>{this.props.footer}</div>
    }
}
export default Page;