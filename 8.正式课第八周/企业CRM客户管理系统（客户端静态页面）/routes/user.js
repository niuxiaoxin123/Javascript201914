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
        return (item.phone===account ||item.name===acount||item.email==account) && item.password===password;
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
route.get("/list",function(req,res){
    // 当前端发送请求后，该函数会执行；
    let {departmentId,search} = req.query;// 解构参数信息\
    departmentId=parseFloat(departmentId);

    if(departmentId!==0){
        req.$userdata=req.$userdata.filter(item=>{
            return parseInt(item.departmentId)===departmentId;
        })
    };
    // 前后端联调；
    if(search!==""){
        req.$userdata=req.$userdata.filter(item=>{
            return item.name.includes(search)||item.phone.includes(search)||item.email.includes(search);
        })
    };
    req.$userdata=req.$userdata.map(item=>{
        let departmentId=item.departmentId;
        let jobId = item.jobId;
        return {
            id:item.id,
            name:item.name,
            sex:item.sex,
            email:item.email,
            phone:item.phone,
            departmentId:departmentId,
            department:req.$departmentdata.find(item=>parseFloat(item.id)===parseFloat(departmentId)).name,
            jobId:jobId,
            job:req.$jobdata.find(item=>parseFloat(item.id)===parseFloat(jobId)).name,
            desc:item.desc
        }
    });
    // 返回给客户端；后台的数据串联关系；处理数据；
    // 后端：处理数据的；
    if(req.$userdata&&req.$userdata.length>0){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
            data:req.$userdata
        });
        return;
    }else{
        res.send({
            code:1,
            codeText:"没有找到匹配的项",
        });
    }
});
route.get("/info",function(req,res){
    let {userId=req.session.userId}=req.query;
    // 通过用户的id找到对应的用户；
    let data = req.$userdata.find(item=>parseFloat(item.id)===parseFloat(userId));
    data={
        id: data.id,
		name: data.name,
		sex: data.sex,
		email: data.email,
        phone: data.phone,
        departmentId:data.departmentId,
		department:req.$departmentdata.find(item=>parseFloat(item.id)===parseFloat(data.departmentId)).name,
        jobId:data.jobId,
        job:req.$jobdata.find(item=>parseFloat(item.id)===parseFloat(data.jobId)).name,
        desc:data.desc
    }
    if(data.id){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
            data:data
        });
        return; 
    }else{
        res.status(200);
        res.type("application/json");
        res.send({
            code:1,
            codeText:"没有找到对应的信息",
        });
    } 
});
// 删除员工
route.get("/delete",function(req,res){
    // 获取登录用户的权限校验，对于重要的操作，服务器进行二次权限校验；
    let  power = req.session.userPower;
    if(!power.includes("userhandle")){
        // 
        res.status(401);// 没有权限；
        res.send({
            code:1,
            codeText:"您无权限删除"
        });
        return;
    }
    let  {userId}=req.query;
    let  flag= req.$userdata.find(item=>{
        return parseFloat(item.id)===parseFloat(userId)  
    })

    if(flag){
       // 如果存在，需要把这一项过滤出去，再把最新的数据写入user.json中
       req.$userdata=req.$userdata.filter(item=>parseFloat(item.id)!==parseFloat(userId)); 
       promiseFs.writeFile("./json/user.json",req.$userdata).then(()=>{
            res.status(200);
            res.type("application/json");
            res.send({
                code:0,
                codeText:"OK",
            });
       }).catch(err=>{
            res.status(200);
            res.type("application/json");
            res.send({
                code:1,
                codeText:"删除失败",
            });
       })
    }
})
// 新增用户
route.post("/add",function(req,res){
    let  {name,sex,email,phone,departmentId,jobId,desc}=req.body;
    req.$userdata.push({
        //让新增一项id是最后一项的索引+1；如果当前为空，那么给其默认值1；
        id:req.$userdata.length===0?1:req.$userdata[req.$userdata.length-1]['id']+1,
        name,
        password:"8376ac810bb9f231d28fcf1f",
        sex,
        email,
        phone,
        departmentId,
        jobId,
        desc,
        time:new Date().getTime(),
        state:0
    });
    promiseFs.writeFile("./json/user.json",req.$userdata).then(()=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
        });
    }).catch(err=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:1,
            codeText:"新增失败",
        });
    })
})
// 修改员工信息

route.post("/update",function(req,res){
    let {userId}=req.body;
    req.$userdata=req.$userdata.map(item=>{
        if(parseFloat(item.id)===parseFloat(userId)){
            return {
                ...item,
                ...req.body
            }
        };
        return item;
    });
    promiseFs.writeFile('./json/user.json',req.$userdata).then(()=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
        });
    }).catch(err=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:1,
            codeText:"修改失败",
        });
    })
})

module.exports=route;