//登录：获取用户名和密码，然后发送请求请求成功以后，跳转到首页，不成功，弹出用户名或密码错误
$(function(){
    // 避免全局变量的干扰；
    let $userName = $(".userName"),
    $userPass = $(".userPass"),
    $submit=$(".submit");
    // 给登录绑定点击事件
    $submit.click(function(){
        let userName = $userName.val().trim(),// 去空格
            userPass = $userPass.val().trim();
            // 进行表单校验
            if(userName==""||userPass==""){
                alert('用户名和密不能空，请输入');
                return;
            }
            // 密码需要MD5加密，会生成32位的字符串；在后端也有一个md5,那么会解析该加密之后的密码和后端存储的是否一致；如果一致，说明密码正确的
            userPass = md5(userPass);
            // 发送登录请求
            
            axios.post('/user/login',{
                account:userName,
                password:userPass
            }).then(result=>{
                // 当请求成功以后，会执行这个函数,会把数据给当前result参数
                // 解构赋值
                let {code,codeText,power}=result;
                // power : 是一个字符串，包含了一些信息；
                console.log(power);
                // 需要将power存储到localStorage中，方便在首页使用这个字段进行判断
                if(parseFloat(code)===0){
                    alert("恭喜您登录成功",{
                        handled:function(){
                            // alert的回调函数，当alert弹出框消失时，执行的回调函数
                            localStorage.setItem("power",encodeURIComponent(power));
                            // 模态框消失以后，跳转到首页
                            window.location.href="index.html";
                        }
                    })
                }else{
                    alert("当前用户名和密码不匹配，请重试")
                }
            })
        
    })
})