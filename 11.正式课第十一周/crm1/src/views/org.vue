<template>
    <el-container>
        <my-aside :ary="ary"></my-aside>
        <el-main class="my-main">
            <!-- 凡是切换的地方，使用router-view -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import ary from "@/router/org.js"
import nav from "@/components/nav.vue";
export default {
    name: 'org',
    data() { 
        return {
            ary:ary
        } 
    },
    components:{
        'my-aside':nav
    }
}
</script>

<style lang="less" scoped>
 
</style>