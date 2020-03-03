import http from "./http";//后缀名是.js，可以省略;
export function login(option){
    return http.post("/user/login",option).then(data=>{
        // 响应拦截器已经把data进行了处理；
        return data;// 这个data请求回来的数据
    })
}

