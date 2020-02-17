let express= require("express");
let app = express();
// 解析静态资源文件的；
app.use(express.static(__dirname));
app.listen(8080,function(){
    console.log("启动成功");
})