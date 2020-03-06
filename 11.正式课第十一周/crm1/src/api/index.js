import http from "./http";
export function judgeLogin(){
    return http.get("/user/login").then(data=>{
        return data;
    })
}
// 请求部门列表的接口
export function getDpList(){
    return http.get("/department/list")
}
// 删除部门列表中的数据
export function delDpList(departmentId){
    return http.get("/department/delete",{
        params:{departmentId}
    })
}

// 更新部门的数据
export function updateDpList(option){
    return http.post("/department/update",option)
}
// 新增部门
export function addDpList(option){
    return http.post("/department/add",option)
}
// 获取职务的数据
export function getJobList(){
    return http.get("/job/list")
}

// 删除职务的方法
export function delJobList(jobId){
    return http.get("/job/delete",{params:{jobId}})
}

// 新增职务
export function addJob(option){
    return http.post("/job/add",option)
}

// 更新职务
export function updateJob(option){
    return http.post("/job/update",option)
}
// 获取用户信息
 export function getUserList(option){
     return http.get("/user/list",{
         params:option
     })
 }
