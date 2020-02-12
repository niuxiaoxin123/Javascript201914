let  express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.listen(8080,function(){
    console.log("8080端口已启动");
})
// 中间件：在创建完服务以后和处理请求之前，我们提前做一些事情
// 服务器可以提前将json中的数据读取出来，提前准备好，当真正的请求来临之时，不需要再去花费时间读取，直接取到返回就好；一般情况下，把数据放到请求体上 req.body这个属性上，或者请求主体的信息也一般当道req.body上；因为每个请求都可以直接从req.body获取；

app.use(function(req,res,next){
    // req:请求信息
    // res : 响应信息
    // next: 下一步
    // console.log(666);
    req.a=1999;
    next();
})

// 通过执行不同的方法把客户端POST请求传递的内容转化为对象存放在了req.body上
//
app.use(bodyParser.urlencoded({
    extended:true
}));
// 为了处理静态资源文件；就是html css
app.use(express.static("./client"));
// 路由: 前端一个请求，后台就对应一个路由
app.post("/login",function(req,res){
    console.log(req.body)
})
app.post("/list",function(req,res){
    console.log(req.body)
})

// 一个完整项目： 包含了前端和后端的代码，整个项目要最后要部署在服务器的某个端口下；【0-65535】；
// 前端： 前端的
// 后端： 要做监听；启动服务；运行一段固定的后台代码，就能启动一个服务