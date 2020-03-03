// 在真正的工作中；需要对axios请求进行二次封装；
import axios from "axios";
// http 是生成一个axios发送请求的实例；
const http = axios.create({
    baseUrl:"",
    transformRequest(data){// 
        // console.log(data);
        // data： 就是post请求接受到的参数，需要返回一个字符串
        let str  ="";
        for(let key in data){
            str+=`${key}=${data[key]}&`
        }
        return str;
    },
    // 给每一个请求拼接t，t的值是随机数，防止走缓存
    params:{
        t:Math.random()
    },
    timeout:2000
});
// 添加请求拦截器
http.interceptors.request.use(function(config){
    // 在请求之前可以做做一些事情
    return config;
},function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // response 就是请求回来的响应体
    return response.data;// 那么请求后面then就可以直接接受到响应的数据
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default http;
  