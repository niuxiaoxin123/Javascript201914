(function(){
  let $userdepartment=$(".userdepartment"),
        $userjob=$(".userjob"),
        $username=$(".username"),
        $spanusername=$(".spanusername"),
        $man=$("#man"),
        $woman=$("#woman"),
        $useremail=$(".useremail"),
        $spanuseremail=$(".spanuseremail"),
        $userphone=$(".userphone"),
        $spanuserphone=$(".spanuserphone"),
        $userdesc=$(".userdesc"),
        $submit=$(".submit");  

    // 下拉框内容的绑定
    let selectBind = function(){
        let promise1 = axios.get("/department/list");
        let promise2 = axios.get("/job/list");
        axios.all([promise1,promise2]).then(results=>{
            // 当上面两个请求都成功之后，会执行这个then方法，并且将两次请求的数据被数组包含，传给then的第一个成功的回调函数中；
            let [departmentResult,jobResult]=results;
            // 部门信息绑定
            console.log(results);
            if(parseFloat(departmentResult.code)===0){
                let str=``;
                departmentResult.data.forEach(item => {
                    str+=`<option value="${item.id}">${item.name}</option>`
                });
                $userdepartment.html(str);
            } 
            // 职务信息绑定
            if(parseFloat(jobResult.code)===0){
                let str=``;
                jobResult.data.forEach(item => {
                    str+=`<option value="${item.id}">${item.name}</option>`
                });
                $userjob.html(str);
            } 
        })
    }
    selectBind()


    // 在员工列表中点击编辑跳转过来；每一个用户都对应一个id；

    // 直接点击新增员工
    let  userId = window.location.href.queryURLParams().userId;
    let queryBaseInfo=function(){
        axios.get("/user/info",{
            params:{
                userId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
                let {name,sex,email,phone,departmentId,jobId,desc}=result.data;
                $username.val(name);
                if(parseFloat(sex)===1){
                    $woman.prop("checked",true);
                }
                $useremail.val(email);
                $userphone.val(phone);
                $userdesc.val(desc);
                $userdepartment.val(departmentId);
                $userjob.val(jobId);
                return;
            }
        })
    }
    if(userId){
        queryBaseInfo();
    }
   
   

    // 进行表单验证
    let  checkUserName = function(){
        let usernameVal = $username.val().trim();
        if(usernameVal.length===0){
            $spanusername.html("用户名为必填项，不能为空！");
            return false;
        }
        $spanusername.html("");
        return true;
    }
    $username.on("blur",checkUserName);

    // 邮箱校验
    let checkEmail=function(){
        let useremailVal= $useremail.val().trim();
        let reg =/^[0-9a-zA-Z_\u4E00-\u9FA5]+@[0-9a-zA-Z_]+(\.[0-9a-zA-Z_]+)+$/;
        if(useremailVal.length===0){
            $spanuseremail.html("邮箱为必填项，不能为空！");
            return false;
        }
        if(!reg.test(useremailVal)){
            $spanuseremail.html("邮箱格式不正确！");
            return false;
        }
        $spanuseremail.html("");
        return true;
    }
    $useremail.on("blur",checkEmail);

    // 电话验证

    let checkPhone=function(){
        let userphonelVal= $userphone.val().trim();
        let reg =/^1\d{10}$/;
        if(userphonelVal.length===0){
            $spanuserphone.html("电话为必填项，不能为空！");
            return false;
        }
        if(!reg.test(userphonelVal)){
            $spanuserphone.html("电话格式不正确！");
            return false;
        }
        $spanuserphone.html("");
        return true;
    }
    $userphone.on("blur",checkPhone);


     // 点击确认提交
    
     $submit.click(function(){
        // 先要进行表单验证
        // if(checkUserName()&&checkEmail()&&checkPhone()){
        //     axios.post()
        // }
        if(!checkUserName()||!checkEmail()||!checkPhone())return;
        let url = userId?"/user/update":"/user/add";
        axios.post(url,{
            userId:userId?userId:null,
            name:$username.val().trim(),
            sex:$woman.prop("checked")?1:0,
            email:$useremail.val().trim(),
            phone:$userphone.val().trim(),
            departmentId:$userdepartment.val(),
            jobId:$userjob.val(),
            desc:$userdesc.val().trim()
        }).then(result=>{
            if(parseFloat(result.code)===0){
                alert("当前操作成功，即将返回列表页",{
                    handled:()=>{
                        window.location.href="userlist.html"
                    }
                })
            }
        })
    })
})()