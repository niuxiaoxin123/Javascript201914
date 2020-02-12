// express ： 是一个基于node封装的框架 是一个第三方的模块
// npm install express --save/yarn add express 
let  express = require("express");
// express 是一个函数
let app = express();
// app 是express的返回值，可以调用listen监听端口号；
// express的路由
// 登录的请求
// app后面是请求方式，里面是请求的路径，login
app.get("/login",function(req,res){
    //console.log("你登录成功");
    //console.log(req.params);
    // req.params: 获取路径动态的参数
    // req.query:请求的参数
    // req.method : 请求方式
    // req.url
    // res.send()
    res.send("中国加油");//将服务器的数据传递给客户端
});

app.post("/register",function(req,res){

})
// 不管什么请求方式，只要path一样，就会执行
app.all("/order",function(req,res){

})

app.get("/loginout",function(req,res){
    console.log("你登录成功");
});
app.listen(8080,function(){
    console.log("8080端口已经监听成功");
})