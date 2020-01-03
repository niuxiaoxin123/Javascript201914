let timer;
// 1.请求数据，并绑定
let send=()=>{
    $.ajax({
        url:"banner.json",// 请求路径
        type:"get",// 请求方式
        async:false,// 同步还是异步
        success:function(data){
            // 当数据请求成功以后，会执行这个回调函数，会把请求回来的数据以参数形式传给这个函数
            // 在这封装的方法中，自动转成了JSON格式的对象
            bindHtml(data);
            timer=setInterval(autoMove,2000);
            changeTip();// 数据绑定成功以后，进行判断
        }
    });
}
// 2. 绑定数据
// 项目重构： 把原来的项目用最新的代码重新构建一遍；
let  bindHtml=(data)=>{
    // ajax和each都在$的私有属性上；
    // 还有一些方法在$原型上；$===jQuery
    let imgs=``;
    let lis = ``;
    $.each(data,function(index,item){
        // 第一个参数是索引，第二个是成员
        imgs+=`<img src="${item.img}">`
        lis+=`<li></li>`
    });
    $("#wrapper").html(imgs);
    $("#list").html(lis);
}
// 3.自动切换
// fadeIn  fadeOut
let step=0;
let  autoMove=()=>{
    // 通过控制step的值来显示对应的图片
    step++;
    step===5?step=0:null;// 如果当前step为5时，要显示第6张没有第 6张，所以将step为0；显示第一张；
    $("img").eq(step).fadeIn().siblings().fadeOut();
    changeTip();
}
// 4. 实现焦点跟随
let changeTip=()=>{
    console.log(step);
    
    // 找到step对应的li,给其加上class为select；清除兄弟的所有的class；
    $("#list li").eq(step).addClass("select").siblings().removeClass("select");
}
// 5. 鼠标划上停止动画
$("#outer").hover(function(){
    // 第一个是划上
    clearInterval(timer);
},function(){
    // 第二个是划出
    timer = setInterval(autoMove,2000);
});
// 6.划上li，显示对应的图片
// jquery获取的DOM元素不存在映射关系，原生的DOM获取存在映射；当后期元素对象会随着页面数据拼接而发生改变；
// console.log(document.getElementsByTagName("li"));
// console.log($("#list li"));
send();
// 为什么？代码执行有先后
$("#list li").hover(function(){
    step=$(this).index()-1; 
    autoMove();
});
// 7.实现左右点击
$("#right").click(function(){
    autoMove();
})
$("#left").click(function(){
    step-=2;
    step===-2?step=3:null;
    autoMove();
});







