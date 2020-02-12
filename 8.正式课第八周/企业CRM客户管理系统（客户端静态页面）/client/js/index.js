// 这个函数执行形成一个闭包，里面都是私有作用域
$(function(){
    let  power = localStorage.getItem("power");
    if(power===null){
        alert("当前操作属于非法进入，请重新登录！",{
            handled:()=>{
                window.location.href="login.html"
            }
        })
    }

    power=decodeURIComponent(power);
    console.log(power);
    
    // power : 存储权限的信息，根据power信息可以控制元素是否隐藏
    let str=`<div class="itemBox">
        <h3>
            <i class="iconfont icon-yuangong">员工管理</i>
        </h3>
        <nav class="item">
            <a href="page/userlist.html" target="_iframe">员工列表</a>
            ${power.includes("userhandle")?`<a href="page/useradd.html" target="_iframe">新增员工</a>`:``}
        </nav>

    </div>
    <div class="itemBox">
        <h3>
            <i class="iconfont icon-guanliyuan">部门管理</i>
        </h3>
        <nav class="item">
            <a href="page/departmentlist.html" target="_iframe">部门列表</a>
            ${power.includes("departhandle")?`<a href="page/departmentadd.html" target="_iframe">新增部门</a>`:``}
        </nav>
    </div>
    <div class="itemBox">
        ${power.includes("jobhandle")?`<h3>
            <i class="iconfont icon-zhiwuguanli">职务管理</i>
        </h3>
        <nav class="item">
            <a href="page/joblist.html" target="_iframe">职务列表</a>
            <a href="page/jobadd.html" target="_iframe">新增职务</a>
        </nav>`:``}
    </div>
    
    <div class="itemBox">
        <h3>
            <i class="iconfont icon-kehuguanli">客户管理</i>
        </h3>
        <nav class="item">
            <a href="page/customerlist.html?lx=my" target="_iframe">我的客户</a>
            ${power.includes("allcustomer")?`<a href="page/customerlist.html?lx=all" target="_iframe">全部客户</a>`:``}
            <a href="page/customeradd.html" target="_iframe">新增客户</a>
        </nav>
    </div>`;
    $(".menuBox").html(str);
});

// 首页的业务处理
$(function(){
    let $header = $(".headerBox"),
    $baseBox=$header.find(".baseBox"),
    $signoutBtn = $baseBox.children("a"),
    $spanName=$baseBox.children("span"),
    $footer = $(".footerBox"),
    $container=$(".container"),
    $menuBox = $(".menuBox"),
    $itemBox=$menuBox.find(".itemBox"),
    $navList = $(".navBox a"),
    $iframeBox = $(".iframeBox");

    // 动态计算出container的高度
    function computed(){
        let winH = $(window).height();
        $container.css("height",winH-$header.outerHeight()-$footer.outerHeight());
    }
    computed();
    $(window).on("resize",computed);

    // 每一次进入首页都需要验证用户是否登录；
    axios.get("/user/login").then(result=>{
        if(parseFloat(result.code)===0){
            // 如果登录成功，再发一个请求，获取该用户的信息；
            return axios.get("/user/info")
        }
        alert("您还没有登录，请先登录",{
            handled:function(){
                // 为了防止直接通过更改浏览器url直接访问首页，如果直接访问，直接跳转到登录页
                window.location.href="login.html";
            }
        })
        return Promise.reject();
    }).then(result=>{
        if(parseFloat(result.code)===0){
            let data = result.data;
            $spanName.html(`欢迎：${data.name}`);
        }
    })

    // 安全退出
    $signoutBtn.click(function(){
        axios.get("/user/signout").then(result=>{
            if(parseFloat(result.code)===0){
                // 需要把本地存储的power信息清除掉
                localStorage.removeItem("power");
                window.location.href="login.html";
                return;
            }
        })
    })

    // 基于时间委托实现折叠菜单  
    $menuBox.click(function(e){
        let  target = e.target,
             tarTag = target.tagName,
             $target = $(target);
        if(tarTag==="I"){
            $target.parent().next().stop().slideToggle(300);
        }
    })
    let $organize=$itemBox.filter(":lt(3)"),
        $customer=$itemBox.eq(3),
        initIndex = 0,
        // 为了第一次进页面来显示对应的导航
        HASH=window.location.href.queryURLParams()["HASH"]||'organize';
        HASH==="customer"?initIndex=1:null;
        //window.location.href 获取当前浏览器url地址栏中地址，是一个字符串
        //console.log(window.location.href);
    // console.log(initIndex);
    function change(index){
        $navList.eq(index).addClass('active').siblings().removeClass("active");
        if(index===0){
            $organize.css("display","block");
            $customer.css("display","none");

            $iframeBox.attr("src","page/userlist.html")
        }else{
            $organize.css("display","none");
            $customer.css("display","block");
            $iframeBox.attr("src","page/customerlist.html")
        }
    }
    change(initIndex);
    //实现切换组织和客户
    $navList.click(function(){
        let index = $(this).index();// 0 1;
        change(index)
    })

})

