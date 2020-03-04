<template>

</template>

<script>
export default {
  name: '',
  data() { 
    return {

      }
  },
  created(){
    // 这个dispatch会触发actions中的方法
      this.$store.dispatch("changeDpList")
      // 流程： created发送请求==> dispatch==>actions中方法执行==> api中请求方法==> commit==>mutations中方法==> 更改了store中的state；
  }
 
 }
</script>

<style lang="" scoped>
  
</style>