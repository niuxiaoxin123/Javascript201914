<template>
     <!-- 这个结构将替换掉index.html外层的App元素 -->
    <div id="app">
        <bar></bar>
        {{msg}}
         <button @click="add">点击</button>
    </div>
</template>
<script>
    //  把每个组件放到一个.vue 文件中；这个文件中包含了该组件的HTML结构，css,以及这个组件的对应的对象信息；
    // 导出
    // 利用webpack中的vue-loader第三方插件把后缀名是.vue的文件编译成正常的js文件，供HTML来识别；
    import bar from "./bar.vue";
    export default{
        data(){
            return {msg:100}
        },
        methods:{
            add(){
                this.msg++;
            }
        },
        components:{
            bar
        }
    }
</script>
<style>
    div{
        width:100px;
        height:200px;
        background: red;
    }
</style>