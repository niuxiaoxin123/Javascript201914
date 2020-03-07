<template>
  <div class="itemBox">
      <div class="numBox">  
          {{index+1}}
      </div>
      <div class="contentBox">
          <h4>{{data.title}}</h4>
          <p>{{data.author}}</p>
      </div>
      <div class="imgBox">
          <img  :src="data.image_field?data.image_field.url:''" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'itemBox',
  data() { 
    return {

    }
  },
  props:["data","index"]
 }
</script>

<style lang="less" scoped>
  .itemBox{
      display: flex;
      border-bottom:1px solid #eee;
      padding:2vw 0;
      margin:auto;
      width:90vw;
      .numBox{
          width:8vw;
      }
      .contentBox{
          width:60vw;
         overflow-wrap: break-word;
      }
      .imgBox{
          width:20vw;
          height:18vw;
          border-radius:10px;
          overflow: hidden;
          img{
              width:100%;
          }
      }
  }
</style>