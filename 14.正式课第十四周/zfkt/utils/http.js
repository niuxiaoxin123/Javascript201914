let baseUrl="http://localhost:3000";
function http(option){
    let {url,method="GET",data={}}=option;
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            method:method,
            data:data,
            success(data){
                resolve(data.data);
            }
        })
    })
}
http.post=function(url,data){
    return http({url:url,data:data,method:"post"})
}
http.get=function(url,data){
    return http({url:url,data:data,method:"get"})
}
export default http;    