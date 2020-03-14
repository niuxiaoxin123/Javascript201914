// state  getState   dispatch   subscribe
// redux : 数据的公共管理;实现组件之间数据的相互调用；和vuex一样；数据传递的一种解决方案；
// 既然各个组件都能使用，存储到一个公共的位置；
function createStore(reducer){// reducer : 是combineReducers返回的小函数
    let state;
    // 外界无法访问这个state;
    // 在redux中规定，只有dispatch能更改数据，通过dispatch派发的动作找到相应的更改数据的reducer;执行reducer
    let getState=()=>JSON.parse(JSON.stringify(state));
    let dispatch=(action)=>{
        state=reducer(state,action);
        // 循环订阅的事件池；让池子的方法执行
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
            //typeof(item)==="function"?item():null;
            //1==1?console.log(1):console.log(2);
            // let a = 1==2?89:67;
            // (1==1)?100:200
            // 100;
        })
    }
    let listeners = [];
    dispatch({});// 为了初始化store中的state；
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    }
    return {
        // 把getState这个空间地址暴露出去
        getState,
        dispatch,
        subscribe
    }
}

 export default createStore;