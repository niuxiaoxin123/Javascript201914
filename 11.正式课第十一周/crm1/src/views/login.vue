<template>
    <div class="loginBox">
        <h2>CRM客户管理系统</h2>
        <h3>为保企业数据的安全，请妥善保管密码</h3>
        <div>
            <el-input v-model="username" class="inp" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
            <el-input type="password" v-model="password" class="inp" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
            <el-button type="primary" class="btn" @click="login">登录</el-button>
        </div>
        <p>北京珠峰世纪计数培训有限公司 京ICP8389303030号 京公安网123456号</p>
    </div>
</template>

<script>
// @ ==> 相当于/src
import  {login} from "@/api/login.js";
// 需要对导入login进行解构赋值
export default {
    name: 'login',
    data() { 
        return {
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            if(!this.username|| !this.password){
                // 如果有一个为空，则不能发送登录请求
                // this==> login这个组件的实例
                // 由于使用了element-ui ;那么ele会默认给每一个组件实例新增这个$message方法；
                // $alert
                this.$message.error("用户名和密码不能为空");
                return;
            }
            // 在真实的工作项目中，会把所有的请求的方法单独封装到api文件夹中；
            let obj = {
                account:this.username,
                password:this.password
            }
            login(obj).then(data=>{
                     console.log(data);
                if(data.code==1){
                    this.$alert("用户名或密码错误","提示",{
                        confirmButtonText:"确定"
                    })
                }
                if(data.code==0){
                    this.$alert("恭喜登录成功","提示",{
                        confirmButtonText:"确定",
                        callback:action=>{
                            // 当点击确定按钮时，会触发这个回调函数；
                            // action
                            // 当登录成功改变hash值；
                            this.$router.push("/");
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
        .loginBox{
            width:100%;
            height:100%;
            text-align: center;
            background: #eee;
            position: fixed;
            left:0;
            top:0;
            h2{
                height:60px;
                line-height: 60px;
                margin-top: 80px; 
            }
            >div{
                width:300px;
                background: #fff;
                margin:auto;
                padding-top:20px;
                .inp{
                    width:80%;
                    margin:5px auto;
                }
                .btn{
                    margin:20px 0;
                    width:80%;
                }
            }
            >p{
                position:absolute;
                bottom: 10px;
                width:100%;
                text-align: center;
            }
        }
</style>