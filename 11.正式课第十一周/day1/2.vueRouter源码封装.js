
class VueRouter{
    constructor(options){
        const {routes}=options;
        // 监听当前页面的hash值的切换
        // 当第一次解析页面时，会有一个默认的hash值
        /// 循环遍历routes,把path和component重新放入一个新的对象中
        // {"/home/:id":home}
        this.routeMap = routes.reduce((prev,next)=>{
            prev[next.path]=next.component;
            return prev;
        },{});
        // 
        // this ==> VueRouter的实例，也是每一个组件上的_router
        Vue.util.defineReactive(this.route={},'path',"/");
        window.addEventListener("load",()=>{
            // 如果没有hash值，那么给其赋默认值/;如果本来就有hash，什么也不做；
            location.hash?null:location.hash="/";
        })
        window.addEventListener("hashchange",()=>{
            // 当页面hash值发生改变以后，会触发这个方法；1.a标签  2.手动
            // 获取当当前页面的hash值，获取到#后面的字符串；
            let path = location.hash.slice(1);
            this.route.path = path;
        })
    }
}
//在Vuex注入了$store,在路由注入_router
VueRouter.install=function(_Vue){

    _Vue.mixin({
        // 给每一个组件新增一个_router的属性，这个属性的属性值是VueRouter的实例
        beforeCreate(){
            // this==> 每一个组件实例
            if(this.$options&&this.$options.router){
                // 给每一个组件实例新增_router属性，属性值就是VueRouter的实例； 这是给Vm这个Vue实例新增
                this._router=this.$options.router;
            }else{
                // 给vm的组件的实例新增
                this._router=this.$parent && this.$parent._router;
            }
            // 给每一个实例添加$route属性，
            Object.defineProperty(this,"$route",{
                value:{
                    route:this._router.route// ? 这个route
                }
            });

            // 注册两个内置组件
            // router-link  router-view
            // 注册全局组件
            <router-link to="/home"></router-link>
            let child = {}
            Vue.component("router-link",{ 
                props:{
                    to:String
                },
                // template:"<div></div>",
                render(createElement){// h是一个createdElement,这个方法可以直接接受一个组件；createElement 用来创建虚拟的DOM
                    //return createElement("a",{},首页)
                    // render : 渲染函数
                    // render: 将虚拟DOM可以转成真实的DOM；这个函数返回什么，那么最终router-link就渲染成什么
                    // this==> 当前的组件实例
                    // return + 组件；可以把组件渲染成一个真实的DOM；
                    // return h(child);
                    // return <child></child>
                    // $slots
                    return <a href={`#${this.to}`}>this.$slots.default</a>
                }
            });
            // router-view : 根据页面的hash值显示对应的组件
            Vue.component("router-view",{
                render(createdElement){
                    // 这个传递一个动态的组件名字
                    return createElement(this._router.routeMap[this._router.route.path])
                }
            })
        }
    })
};
let router=new VueRouter({
    routes:[]
})
let vm = new Vue({
    router,
    render(){

    }
})
export default VueRouter;