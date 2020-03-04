import {getDpList} from "@/api/index.js";
export function changeDpList({commit}){
    // 解构出commit这个方法；然后提交mutations里面的改数据的方法
    getDpList().then(data=>{
        if(data.code==0){
            commit("changeDpList",{data:data.data})
        }
    })
}