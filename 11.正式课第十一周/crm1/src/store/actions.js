import {getDpList,getJobList,getUserList} from "@/api/index.js";
export function changeDpList({commit}){
    // 解构出commit这个方法；然后提交mutations里面的改数据的方法
    getDpList().then(data=>{
        if(data.code==0){
            commit("changeDpList",{data:data.data})
        }
    })
}

export function changeJobList({commit}){
    getJobList().then(data=>{
        if(data.code==0){
            // action中commit的字符串是mutation中的方法
            commit("changeJobList",{data:data.data});
        }
    })
}
export function changeUserList({commit},option){
    getUserList(option).then(data=>{
        if(data.code==0){
            commit("changeUserList",{
                data:data.data
            })
        }
    })
}

