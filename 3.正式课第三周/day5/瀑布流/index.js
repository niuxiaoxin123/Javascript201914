var oUl = document.getElementsByTagName("ul");
var arr = Array.from(oUl);// 把类数组转成真正的数组；
// 获取数据并且绑定数据
var data;
// 1.创建ajax实例
var xhr = new XMLHttpRequest();
// 2. 打开一个路径
xhr.open("get","data.txt",false);
// 3. 监听ajax的状态
xhr.onreadystatechange = function(){
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        data=JSON.parse(xhr.responseText);
    }
}
// 发送请求
xhr.send();

// 绑定数据
function bindHtml(){
    for(var i=0;i<50;i++){
        // 产生一个随机的数字
        var  num = Math.round(Math.random()*7);
        var  cur = data[num];// 随机取一条数据
        var li = document.createElement("li");
        var  a = document.createElement("a");
        a.innerHTML ="采集";
        a.href="javascript:;";
        li.appendChild(a);
        var img = document.createElement("img");
        // 设置图片的高度时200--350之间；
        // 把图片的真实路径给了当前图片的行间属性
        img.setAttribute("trueImg",cur.src);
        img.style.height = Math.round(Math.random()*(350-200)+200)+"px";
        li.appendChild(img);
        var p = document.createElement("p");
        p.innerHTML = cur.title;
        li.appendChild(p);
        // 在li放入ul之前，先对所有的ul进行排序，把最新创建的li插入到高度最小的ul中；
        arr.sort(function(a,b){
            return a.scrollHeight-b.scrollHeight;
        })
        arr[0].appendChild(li);
    }
}
bindHtml();
// 多张图片延迟加载
var  imgs = document.getElementsByTagName("img");
function delay(){
    for(var i=0;i<imgs.length;i++){
        checkImg(imgs[i])
    }
}
// 获取浏览器可视窗口的高度
var winH = utils.win("clientHeight");
// 检验一张图片是否应该显示；
function checkImg(curImg){
    if(curImg.load){
        // 如果该图片的load属性是true,不需要再次加载；
        return;
    }
    var curH = curImg.offsetHeight;
    var curT = utils.offset(curImg).t;
    var winT = utils.win("scrollTop");
    // 如果卷起的高度+可视窗口的高度>当前盒子底边框距离body上边的高度时，让该盒子显示真实的图片；
    if(winH + winT>curH+curT){
        var  address = curImg.getAttribute("trueImg");
        var  img = new Image;// 实例就是一个img的DOM元素对象
        img.src=address;
        // 当图片路径没有问题，会执行下面的onload事件；
        img.onload=function(){
            curImg.src = address;
            curImg.load=true;
        }
    }
}
delay();
var  container = document.getElementsByClassName("container")[0];
// 当滚动条滚动时，不断校验每一张图片；
window.onscroll = function(){
    // console.log(100);
    // 时时刻刻获取最新的container的高度
    var containerH = container.offsetHeight;
    var curT = utils.win("scrollTop");
    if(curT+winH +300 > containerH){
        // 如果滚动条卷起的高度+可视窗口的高度 如果距离页面底端还有300像素，就立即再次执行绑定数据
        bindHtml();
    }
    delay();
}

