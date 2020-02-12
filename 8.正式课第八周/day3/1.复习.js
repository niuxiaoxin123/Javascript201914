// Node  : Fs模块  核心模块  读写文件
// readdir readdirSync
// readFile  readFileSync 
// writeFile  writeFileSync
// appendFile appendFileSync
// copyFile   copyFileSync
// mkdir  rmdir  unlink
// 读写文件一定会消耗时间
let a = fs.readFileSync("./1.js");
fs.readFile("/1.js","utf8",function(err,result){
    // 这是异步的，当同步执行完再执行这个回调
})
fs.readFile("/2.js","utf8",function(err,result){
    // 这是异步的，当同步执行完再执行这个回调
})

// 封装了proimse的fs库
// http 
// 启动一个服务，部署了当前电脑的8080端口上；
let  http = require("http");
let server = http.createServer(function(req,res){
    // 前端请求一次，执行一次；req:请求信息   res :响应信息
    // req.url
    // url.parse(req.url,true) pathname  query
    // mime 类型； content-type :通过响应头设置不同文件的content-type:服务器通过设置响应头告诉浏览器当前返回文件的格式
    res.end(123)
});
server.listen(8080);
// 这台电脑IP地址，端口号；
