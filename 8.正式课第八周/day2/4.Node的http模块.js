// fs   path:resolve(将相对路径转成绝对路径) http   url
// http 模块
// 服务器一直处在监听的状态，监听前端发过来的请求，把前端发过来的请求进行相应的数据处理，再把数据返回给客户端；
// 服务器的代码要启动一个服务，让服务器处在监听的状态，那么如果关闭服务，那么服务器就不再提供响应；

let http = require("http");
let url = require("url");// 用来处理路径的模块；
// createServer : 创建一个监听的服务
let server = http.createServer(function(req,res){
     console.log(999);
    // req
    // console.log(req.url);//代表是端口号后面的路径
    // url.parse: 处理url地址；里面有两个属性pathname:请求的路径 query代表请求的参数  ；true : 可以参数解析成对象
    console.log(url.parse(req.url,true));

    // req: 请求信息  res:响应信息
    // 每当访问一次8080端口，该函数就会执行一次；
    // 通过res.end这个方法，把参数里的内容传输给客户端
    // res 设置响应头的content-type类型；当客户端发送请求，服务器先把响应头返回给客户端，在这个响应头content-type就是告诉浏览器按什么格式解析当前返回的数据；
    // 每一种文件都有其对应的content-type类型
    res.setHeader("content-type","text/plain;charset=utf8");
    res.end("中国");// 直接响应中文会出现乱码
    //res.end("北京");
});
// 将该服务部署在一个对应的端口上，一台服务器可以启动65535个端口号，一个端口号只能启动一个服务
server.listen(8080,function(){
    // 让当前服务监听8080端口上，当监听成功以后，会默认调用这个回调函数
    console.log("8080端口已经启动成功");
});