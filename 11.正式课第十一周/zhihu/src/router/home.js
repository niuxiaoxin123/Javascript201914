import Home from "@/components/home/home.vue"
export default [{
    path:"/home",
    name:"home",
    component:Home,
    children:[{
            path:"/home/focus",
            // 如果是函数中通过import导入组件，按需加载多应的组件
            component:()=>import("../components/home/focus.vue")
        },
        {
            path:"/home/recommend",
            component:()=>import("../components/home/recommend.vue")
        },{
            path:"/home/hot",
            component:()=>import("../components/home/hot/hot.vue")
        }
    ]
}]