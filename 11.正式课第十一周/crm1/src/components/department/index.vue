<template>
  <el-table :data="tableData" border  stripe style="width: 100%">
    <el-table-column type="index" label="编号" width="100" align="center"></el-table-column>
    <el-table-column label="名称" width="100" align="center">
        <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
        </template> 
    </el-table-column>
    <el-table-column prop="desc" label="描述"></el-table-column>
    <el-table-column  label="操作" width="200" align="center">
      <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {delDpList} from "@/api/index.js"
export default {
  name: "",
  data() {
    return {
      
    };
  },
  created() {
    // 这个dispatch会触发actions中的方法
    this.$store.dispatch("changeDpList");
    // 流程： created发送请求==> dispatch==>actions中方法执行==> api中请求方法==> commit==>mutations中方法==> 更改了store中的state；
  },
  computed:{
    tableData(){
      // 把异步请求回来的数据放到computed的计算属性上
      return this.$store.state.departmentList;
    }
  },
  methods:{
    handleEdit(row){
        // console.log(row);// 这是当前行的对象数据
        this.$router.push({
           path:"/org/addDepartment",
           query:{id:row.id}
        })
    },
    handleDelete(row){
       this.$confirm("此操作将永久删除数据，是否继续?","提示1",{
           confirmButtonText:"确定",
           cancelButtonText:"取消",
           type:"warning"
       }).then(()=>{
           // 这个回调需要点击确定按钮之后，执行
            delDpList(row.id).then(data=>{
              // 如果数据删除成功，前端也需要更新，需要改数据
               if(data.code==0){
                 this.$message({
                   type:"success",
                   message:"删除成功"
                 });
                 this.$store.dispatch("changeDpList");
               }else{
                 this.$message({
                   type:"error",
                   messgae:"删除失败"
                 })
               }
            })
       })
    }
  }
};
</script>

<style lang="" scoped>
</style>