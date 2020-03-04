// 这个会默认找到department文件夹下的index.vue;
import department from "@/components/department";
import addDepartment from "@/components/department/adddepart.vue";
import job from "@/components/job";
import addJob from "@/components/job/addjob.vue";
import user from "@/components/user"
import addUser from "@/components/user/add.vue";
// userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword
// [[],[],[]]
export default [
    {
        path:"/org/department",
        name:"department",
        component:department,
        meta:{
            type:"department",
            rootTil:"部门管理",
            til:"部门列表",
            icon:"el-icon-s-operation",
            power:'departhandle'
        }
    },
    {
        path:"/org/addDepartment",
        name:"addDepartment",
        component:addDepartment,
        meta:{
            type:"department",
            rootTil:"部门管理",
            til:"新增部门",
            icon:"el-icon-s-operation",
            power:'departhandle'
        }
    },
    {
        path:"/org/job",
        name:"job",
        component:job,
        meta:{
            type:"job",
            rootTil:"职务管理",
            til:"职务列表",
            icon:"el-icon-user",
            power:'jobhandle'
        }
    },
    {
        path:"/org/addJob",
        name:"addJob",
        component:addJob,
        meta:{
            type:"job",
            rootTil:"职务管理",
            til:"新增职务",
            icon:"el-icon-user",
            power:'jobhandle'
        }
    },
    {
        path:"/org/user",
        name:"user",
        component:user,
        meta:{
            type:"user",
            rootTil:"员工管理",
            til:"员工列表",
            icon:"el-icon-user",
            power:'userhandle'
        }
    },
    {
        path:"/org/addUser",
        name:"addUser",
        component:addUser,
        meta:{
            type:"user",
            rootTil:"员工管理",
            til:"新增员工",
            icon:"el-icon-user",
            power:'userhandle'
        }
    }
]