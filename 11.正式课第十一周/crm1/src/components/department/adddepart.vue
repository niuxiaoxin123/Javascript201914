<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="myform">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="form.name" style="width:400px;"></el-input>
      </el-form-item>
      <el-form-item label="部门描述">
        <el-input type="textarea" v-model="form.desc"  rows="5" style="width:400px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {addDpList,updateDpList} from "@/api/index.js"
export default {
  name: "",
  data() {
    return {
      form: {
          name: '',
          desc: ''
        },
        rules:{
           name:[{required:true,message:"请输入部门名称",trigger:"blur"}]
        }
    };
  },
  created(){
     
      let id = this.$route.query.id;
      // 通过id过滤出对应id相同的那一项
      let obj = this.$store.state.departmentList.filter(item=>item.id==id)[0]
      // 这个赋值需要分情况：1.从部门列表带着id过来  2.直接点击
      this.form =obj?obj:this.form;
  },
  beforeRouteUpdate(){
    this.form = {
          name: '',
          desc: ''
    }
    // console.log(window.location.hash)
    window.location.hash="/org/addDepartment"
    this.$route.query.id="";
  },
  methods:{
    onSubmit(){
      console.log(this.$route.query.id);
        this.$refs.form.validate(flag=>{
            // 如果flag参数是true，那么代表验证成功
            if(flag){
                let id = this.$route.query.id;
                this.form.departmentId = id;// 当更新数据时后端需要这个参数
                (id?updateDpList:addDpList)(this.form).then(data=>{
                  if(data.code==0){
                    this.$confirm((id?"更新":"添加")+"成功","提示")
                  }
                }).then(()=>{
                  this.$router.push("/org/department")
                })
            }
        })
    }
  }
};
</script>

<style lang="less" scoped>
</style>