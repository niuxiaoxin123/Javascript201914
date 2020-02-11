let fs = require("fs");
let http= require("http");
let url = require("url");
http.createServer(function(req,res){
    // 每请求一次，执行一次该函数
    let {pathname}=url.parse(req.url);
    // /8.正式课第八周/day2/2.html
    // 服务器并没有直接把index.html这个文件返回，而是把文件里面内容返回，先通过fs的readFile进行读取，然后把读取内容响应回来
    // 当解析html中的link href,或script的js时，img的src属性，音视频src属性，都会再次向服务器发送请求
    // 当第一次请求时，pathname = "/5.index.html"
    // 当第二次请求时，pathname ="/5.index.css"
    // console.log(pathname)
    // 如果请求的资源是图片的话，需要通过响应头提前告诉浏览器content-type的类型
    // 由于谷歌浏览器可以根据响应回来的内容，自动识别该文件的格式；但是IE浏览器不能够根据文件的类型，做对应的content-type类型的设置；所以不能正常的解析html和css和js;
    // console.log(pathname);
    // 告诉浏览器按什么类型进行解析该数据；
    if(pathname==="/5.index.css"){
        res.setHeader("content-type","text/css")
    }
    if(pathname==="/5.index.html"){
        console.log(100);
        res.setHeader("content-type","text/html")
    }
    if(pathname==="/5.png"){
        
        res.setHeader("content-type","image/jpeg");
    }
    if(pathname==="5.index.js"){
        res.setHeader("content-type","application/javascript");
    }
    fs.readFile("."+pathname,function(err,data){
        res.end(data);
    })
}).listen(8000,function(){
    // 当监听成功以后会执行该函数
})