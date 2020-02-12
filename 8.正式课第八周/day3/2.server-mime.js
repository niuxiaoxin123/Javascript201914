// mime :是第三方模块
// 内置模块跟随下载安装Node时，就下载完毕了;
let http = require("http");
let mime = require("mime");
let fs = require("fs");
let url = require("url");
http.createServer(function(req,res){
    let  {pathname}=url.parse(req.url,true);
    // mime : 在mime模块有一个getType方法，会根据文件的后缀名，返回对应的content-type类型
    res.setHeader("content-type",mime.getType(pathname));
    fs.readFile("."+pathname,function(err,data){
        res.end({a:1});// 把对应的数据返回给客户端
    })
    if(pathname==="/login"){
        
    }
    if(pathname==="/list"){

    }
}).listen(8080);