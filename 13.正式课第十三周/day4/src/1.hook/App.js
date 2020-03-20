import React,{useState,useEffect,useRef,useReducer} from "react";// {useState,Component}
function reducer(state,action){
    // console.log(state)
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "CHANGE_N":
           state.n++;
           break;
    }
    return state;
}
// class : this.props
function App(props){
    //console.log(this);  this 指向undefined；
    console.log(props);// props可以来接收行间的属性；这就是属性；
    let [{n,m},dispatch]=useReducer(reducer,{n:0,m:0});
    // dispatch派发动作让reducer元素，reducer运行，更改state;
    return  <div>
        {n}<br></br>{m}
        <button onClick={(ev)=>{
            // console.log(ev);// 事件对象
            dispatch({type:"CHANGE_N"})
        }}>+N</button>
        <button>+M</button>
    </div> 
}
export default App;

// useRef ：
// function App(){
//     let  spanRef = useRef();// {current:undefined}
//     console.log(spanRef);// 获取元素；
//     return <div>
//         <span ref={spanRef}>0</span>
//         <button onClick={()=>{
//             // 给哪个元素，那么这个对象就把这个元素赋值给对选哪个current属性
//             //console.log(spanRef)
//             spanRef.current.innerHTML++;
//         }}>+</button>
//     </div>
// }
// export default App;

// useEffect:
// function App(){
//     let [state,setState]=useState(function(){
//         return {
//             m:0,
//             n:0
//         }
//     })
//     // 在设置钩子函数
//     // useEffect：接收一个回调函数；这个函数不是立即运行的；设置函数的生命周期：在第一次解析挂载结构会默认一次，相当于componentDidMount ;当后期数据更新，数据更新，相当于componentDidUpdate
//     useEffect(()=>{
//         // 设置依赖项，只有n状态发生改变，才会执行这个钩子函数；
//         console.log("ok1");
//     },[state.n]);
//     useEffect(()=>{
//         console.log("ok");
//     },[]);
//     // console.log("hello");
//     return <div>
//         {state.m}分
//         {state.n}
//         <button onClick={()=>{
//             setState({
//                 ...state,
//                 m:200
//             })
//         }}>+</button>
//     </div>
// }

// useState:

// function App(){
//     // 会把useState传递的第一个参数赋值给state
//     // 当改变state后，视图会更新；
//     // 每一次更改数据，那么就会重新渲染组件，同时赋默认值的操作也会执行，只不过如果后面state已经有值，不再执行这个函数
//     // let a =1
//     let [state,setState]=useState(function(){
//         // 初始值执行一次，后面更新不再执行；
//         // console.log(99);
//         return {
//             m:0,
//             n:0
//         }
//     })
//     return <div>
//         {state.m}分
//         {state.n}
//         <button onClick={()=>{
//             // 这个方法会将原来的值直接覆盖；
//             setState({
//                 ...state,
//                 n:200
//             })
//         }}>+</button>
//     </div>
// }

// function App(){
//     // 会把useState传递的第一个参数赋值给state
//     // 当改变state后，视图会更新；
//     // 每一次更改数据，那么就会重新渲染组件，同时赋默认值的操作也会执行，只不过
//     console.log(100);
//     let [m,setStateM] = useState(0);
//     let [n,setStateN] = useState(0);
//     return <div>
//         {m}分
//         {n}
//         <button onClick={()=>{
//             // 这个方法会将原来的值直接覆盖；
//             setStateM(100);
//             setStateN(200);
//         }}>+</button>
//     </div>
// }

// function App(){
//     // 会把useState传递的第一个参数赋值给state
//     // 当改变state后，视图会更新；
//     let [state,setState] = useState({
//         m:0,
//         n:0
//     });
//     return <div>
//         {state.m}分
//         {state.n}
//         <button onClick={()=>{
//             setState({
//                 ...state,
//                 n:100
//             })
//         }}>+</button>
//     </div>
// }
// function App(){
//     let [num,changeNum] = useState(0);// [这就是定义状态的hook];
//     // [状态，改变状态的方法]
//     return <div>
//         {num}
//         <button onClick={()=>{
//             changeNum(num+1)
//         }}>+</button>
//     </div>
// }

// state   生命周期  this
// class 定义类相对function定义的执行起来比较臃肿；复杂度要高；
// export default class App extends React.Component{
//     constructor(){
//     }
//     render(){
//         return <div>100</div>
//     }
// }