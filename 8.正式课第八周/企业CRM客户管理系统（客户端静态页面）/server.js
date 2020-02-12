let express = require("express");
let promiseFs = require("./promiseFS");
let bodyParser = require("body-parser");
let session = require("express-session");
let app = express();
app.listen(8888,function(){
    console.log("8888已经启动成功");
});
// 把处理session的中间件设置上，req.session就可以直接来操作session；
// 在session中会生成一个session-id;客户端使用了cookie来保存这个session-id的加密信息，当客户端发送请求会把cookie携带到请求头中，服务器接收到cookie中的session-id和自己session-id进行对比，匹配一致，允许访问，为了防止cookie被篡改；
app.use(session({
    // 里面包含一些固定的属性名
    secret:"ZFPX",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*60*24*30
    }
}));
// 将post请求的信息放到req.body属性上；
app.use(bodyParser.urlencoded({
    extended:true
}));
// 启动服务之后，发送请求之前；
app.use(function(req,res,next){
    let p1 = promiseFs.readFile("./json/user.json"),
        p2 = promiseFs.readFile("./json/customer.json"),
        p3 = promiseFs.readFile("./json/visit.json"),
        p4 = promiseFs.readFile("./json/department.json"),
        p5 = promiseFs.readFile("./json/job.json");
    Promise.all([p1,p2,p3,p4,p5]).then(results=>{
        let [$userdata,$customerdata,$visitdata,$departmentdata,$jobdata]=results;
        //把json读出来的数据都放到请求信息req上;
        req.$userdata=JSON.parse($userdata);
        req.$customerdata=JSON.parse($customerdata);
        req.$visitdata=JSON.parse($visitdata);
        req.$departmentdata=JSON.parse($departmentdata);
        req.$jobdata=JSON.parse($jobdata);
        next();
    }).catch(err=>{
        res.status(500);// 服务器的未知错误
        res.send(err);
    })
})

// 构建express 路由;
app.use("/user",require("./routes/user"));
// app.use("/customer",require("./routes/customer"));
// app.use("/department",require("./routes/department"));
// app.use("/job",require("./routes/job"));
// app.use("/visit",require("./routes/visit"));

// 静态资源文件的请求处理
app.use(express.static("./client"));

// 
app.use((req,res)=>{
    res.status(404);
    res.send("您请求的资源文件不存在");
})

