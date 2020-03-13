function createStore(reducer){
    let state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    // action : type   要改的数据
    function  dispatch(action) {
        state =reducer(state,action);
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        })
    }
    let listeners=[];// 存储订阅的事件的一个容器；当调用dispatch的时候，让这个事件池中的方法执行；
    dispatch({});// 为了初始化数据
    let subcribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    }
    return {
        getState,
        dispatch
    }
}
export default createStore;