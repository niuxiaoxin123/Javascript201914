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