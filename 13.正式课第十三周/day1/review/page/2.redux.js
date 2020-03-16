// state  getState  dispacth  subscribe
function createStore(reducer){
    let state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    let dispacth=(action)=>{
        state=reducer(state,action);
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        })
    }
    let listeners=[];
    dispacth({});
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    }
    return {
        getState,
        dispacth,
        subscribe
    }
}
let combineReducers=(reducers)=>{
    return (state,action)=>{// 这个函数会传给createStore，就是createStore中的reducer方法
        let obj = {};
        for(let key in reducers){
            obj[key]=reducers[key](state[key],action)
        }
        return obj;// obj会将store中的state覆盖；
    }
}
export default {
    createStore,
    combineReducers
}