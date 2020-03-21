// axios在真实项目中一般会进行二次封装；
import axios from "axios";
import qs from "qs";
// 配置基础路径
axios.defaults.baseURL="http://127.0.0.1:9999";
axios.defaults.timeout=10000;// 超时；
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 把前端请求的参数对象转成字符串的url,并且用&连接起来；
axios.defaults.transformRequest=data=>qs.stringify(data);
// axios.incerceptors.response:响应拦截器
// axios.incerceptors.request:响应拦截器
axios.defaults.validateStatus=status=>{
    // 如果返回true，继续向下执行，返回结果，如果这返回false，不再向下执行
    return /^(2|3)\d{2}$/.test(status);
}
axios.interceptors.response.use(response=>{
    return response.data;
});
export default axios;



