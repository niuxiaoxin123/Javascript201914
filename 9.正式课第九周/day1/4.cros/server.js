let  express = require("express");
let app = express();
// 利用cros解决跨域
app.use(function(req,res,next){
    // 设置允许的请求地址， * ： 代表所有的路径
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5501");
    // 设置允许的跨域请求方式
    res.header("Access-Control-Allow-Methods","GET,POST")
    next();
});
// 路由
app.get("/getData",function(req,res){
    res.send("你很帅");
});
app.listen(8080);