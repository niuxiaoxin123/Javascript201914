<template>
  <div class="header">
    <div>
        <van-icon class="lt" name="tv-o"></van-icon>
        <van-search placeholder="请输入搜索关键词"></van-search>
        <van-icon class="rt" name="calender-o"></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
    .header{
        div{
           display: flex; 
           align-items: center;
           .lt,.rt{
               width:13vw;
               font-size: 8vw;
               text-align: right;
           }
           .rt{
               text-align: left;
           }
           >div{
               // 让宽度适应屏幕；
            flex:auto; 
           } 
        }
    }
</style>