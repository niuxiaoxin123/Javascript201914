import * as Types from "../action-types";
import api from "../../api/index";
let homeAction={
    init(){
        return   async dispatch=>{
            //dispatch:store.dispatch 
            let data = await api.home.quertInit();
            // 当promise实例变成成功的状态才会向下执行；并且data就是请求回来的数据；
             console.log(data);
            dispatch({
                type:Types.HOME_INIT,
                initData:data
            });
        }
    },
    queryHot(){
        return async dispatch=>{
            let data = await api.home.queryMain("G0019");
            // 
            dispatch({
                type:Types.HOME_HOT,
                data:data
            });
        }
    }
}
export default homeAction;