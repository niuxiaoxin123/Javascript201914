<template>
    <div class="searchBox">
      <van-icon name="search" size='20px' class='icon_search' />{{placeholder||''}}
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'searchBox',
    props:['placeholder'],
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

.searchBox {
  width: 95%;
  margin: 10px auto;
  text-align: center;
  background: #fff;
  height: 30px;
  line-height: 30px;
  background: #eee;
  color: rgb(133, 131, 131);
  border-radius: 40px;
  .icon_search {
    font-size: 17px;
    position: relative;
    top: 4px;
  }
}
</style>