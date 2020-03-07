import {hotList} from "@/api/index.js";
export function getHotList({commit},option){
    // 在action应该调用api文件中的请求数据的方法；
    return hotList(option).then(data=>{
        // dispatch:派发的action中的方法
        // 在action中commit永远是mutations中的方法
        // 在mutations中更改state；
        // console.log(data.data);
        commit("changeHotList",{
            oldType:option.oldType,
            newType:option.newType,
            data:data.data
        })
    })
}

