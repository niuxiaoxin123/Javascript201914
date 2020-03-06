<template>
  <div>
    <div>
      <el-select v-model="value" placeholder="请选择部门">
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <el-input
        style="width:300px;margin-left:20px"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
      ></el-input>
      <el-button>全部删除</el-button>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
 
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column  prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="name" label="性别" width="120">
          <template slot-scope="scope">
              <span>{{scope.row.sex==0?"男":"女"}}</span>
          </template>
      </el-table-column>
      <el-table-column prop="department" label="部门"></el-table-column>
      <el-table-column prop="job" label="职务"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column  label="操作" width="200" align="center">
      <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
      input2: ""
    };
  },
  created(){
      this.$store.dispatch("changeUserList")
  },
  computed: {
    options() {
      return this.$store.state.departmentList;
    },
    tableData(){
       return this.$store.state.userList;
    }
  }
};
</script>

<style lang="" scoped>
</style>