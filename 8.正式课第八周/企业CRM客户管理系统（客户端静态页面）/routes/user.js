let  express= require("express");
let route = express.Router();
let promiseFs = require("../promiseFS");
route.post("/login",function(req,res){
    // post请求的参数会放到req.body上；
    let {account,password}=req.body; 
    // 2.把用户传递进来的md5加密的密码进行二次加密；把字符串删去前面四个，删除后面四个，然后再把字符串倒序排
    password = password.substring(4).split("").reverse().join("").substring(4);
    // 3. 到user数据库中查找是否有符合该用户名和密码的这一项；
    let result = req.$userdata.find(item=>{
        return item.phone===account && item.password===password;
    });
    if(result){
        // 根据result中的jobId这个属性，去找到job.json对象的对象，然后获取到这个对象power属性的属性值；
        let curUser = req.$jobdata.find(item=>{
            return parseFloat(item.id)===parseFloat(result.jobId)
        });
        let power = curUser.power;
        // session : 用于服务器存储；存储当前用户的登录状态；
        req.session.userId = result.id;
        req.session.userPower = power;
        //console.log(power);
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
            power:power
        })
    }else{
        res.end({
            code:1,
            codeText:"账号密码不匹配"
        })
    }
})
// 用来检验是否登录
route.get("/login",function(req,res){
    let userId = req.session.userId;
    if(userId){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK"
        })
    }else{
        res.send({
            code:1,
            codeText:"当前用户没有登录"
        })
    }
});
// 安全退出
route.get("/signout",function(req,res){
    res.session.userId = null;
    res.session.userPower=null;
    res.send({
        code:0,
	    codeText:'OK'
    })
})
module.exports=route;