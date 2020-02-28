// vue : 数据驱动视图
let vm = new Vue({
    el:"#app",
    data:{
        // 属性都会放在vm的实例上
        task:[{isSelected:false,title:"去爬山"},{isSelected:false,title:"跑步"}],
        val:"",
        cur:"",
        hash:"#all"
    },
    created(){
        // 监听页面的hash值，当页面hash值发生变化以后，更改data中的hash属性
        ///window.location.href
        console.log(window.location);
        window.addEventListener("hashchange",()=>{
            this.hash=window.location.hash;
        });
    },
    directives:{
        focus(el){// 自动获取鼠标焦点
            el.focus();
        }
    },
    computed:{
        todo(){// 根据hash值的改变而发生改变；会依赖hash值的变化；
            if(this.hash==="#all"){
                return this.task;
            }else if(this.hash==="#finish"){
                return this.task.filter(item=>item.isSelected);
            }else if(this.hash==="#unfinish"){
                return this.task.filter(item=>!item.isSelected);
            }
        },
        count(){// 如果写函数，默认是执行get方法//过滤出task中对象的属性名isSelected是true的个数
            return this.task.filter(item=>item.isSelected).length;
        }
    },
    methods:{
        addTodo(){// 新增todo
            // this==>vm
            //console.log(this.val);
            this.task.push({isSelected:false,title:this.val});
            this.val="";
        },
        removeTodo(obj){
            // 过滤出去空间地址一模一样的那个对象
            this.task=this.task.filter(item=>item!==obj)
        },
        remember(obj){
            this.cur=obj;
        },
        update(){
            this.cur="";
        }
    }
})


