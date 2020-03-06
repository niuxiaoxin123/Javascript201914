<template>
  <el-table :data="tableData" border  stripe style="width: 100%">
    <el-table-column type="index" label="编号" width="100" align="center"></el-table-column>
    <el-table-column prop="name" label="职务" width="100" align="center"> 
    </el-table-column>
    <el-table-column prop="desc" label="描述"></el-table-column>
    <el-table-column  label="权限">
       <template slot-scope="scope">
         <span>{{scope.row.power | trans}}</span>
      </template> 
    </el-table-column>
    <el-table-column  label="操作" width="200" align="center">
      <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {delJobList} from "@/api/index.js"
export default {
  name: '',
  data() { 
    return {

    }
  },
  filters:{
    trans(val){
        let arr = val.split("|");// 按|隔开，放到数组中；// ["userhandle","departhandle"]
        // userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword
        let obj = {
           userhandle:"员工操作权",
           departhandle:"部门操作权",
           jobhandle:"职务操作权",
           departcustomer:"部门全部客户",
           allcustomer:"公司全部客户",
           resetpassword:"重置密码"
        }
        //["员工操作权","部门操作权"]
        return arr.map(item=>obj[item]).join("|")
    }
  },
  created(){
    this.$store.dispatch("changeJobList")
  },
  computed:{
    tableData(){
      return this.$store.state.jobList;
    }
  },
  methods:{
    handleEdit(row){
      // 点击编辑，把当前行的id传到新增职务组件
      this.$router.push({path:"/org/addJob",query:{id:row.id}})
    },
    handleDelete(row){
       this.$confirm("此操作将永久删除，是否继续","提示").then(()=>{
            delJobList(row.id).then(data=>{
              if(data.code==0){
                this.$message({type:"success",message:"删除成功"})
              }
              this.$store.dispatch("changeJobList")
            })
       })
    }
  }
 }
</script>

<style lang="" scoped>
  
</style>