export default [
    {
        path:"/crm/my",
        name:"my",
        component:()=>import('@/components/customer/mycustomer.vue'),
        meta:{
            type:"crm",
            rootTil:"客户管理",
            til:"我的客户",
            icon:"el-icon-user",
            power:'userhandle'
        }
    },
    // power : 
    // 普通的销售："userhandle|jobhandle"
    // 销售总监 ： "userhandle|allcustomer|jobhandle|departmenthandle"
    {
        path:"/crm/addcustomer",
        name:"addcustomer",
        component:()=>import('@/components/customer/addcus.vue'),
        meta:{
            type:"crm",
            rootTil:"客户管理",
            til:"新增客户",
            icon:"el-icon-user",
            power:''
        }
    },
    {
        path:"/crm/all",
        name:"all",
        component:()=>import('@/components/customer/allcus.vue'),
        meta:{
            type:"crm",
            rootTil:"客户管理",// 父导航的内容
            til:"全部客户",// 导航的标题
            icon:"el-icon-user",// 图标
            power:'allcustomer'// 控制的是权限
        }
    }
]