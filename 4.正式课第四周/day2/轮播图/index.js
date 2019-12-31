
let wrapper = document.getElementsByClassName("wrapper")[0];
let list = document.getElementById("list");
let outer = document.getElementById("outer");
// 请求数据，并绑定数据
let data;
let xhr = new XMLHttpRequest();
xhr.open("get","./banner.json",false);
xhr.onreadystatechange  = function(){
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        // 默认读取的是一个JSON格式的字符串；
        // [{"id":"1"}]
        data = JSON.parse(xhr.responseText);
    }
};
xhr.send();
// 循环并绑定数据
let  bindHtml=()=>{
    let divs=``;
    let lis=``;
    data.map((item,index)=>{
        // 利用数组的map方法遍历数组，把每一项拼接起来放到对应的元素中；
        // react绑定数据都是用map;
        divs+=`<div><img src="${item.img}"></div>`;
        lis+=`<li></li>`;
    });
    // 当循环完成以后，再字符串最后再拼一张第一张；
    divs+=`<div><img src="${data[0].img}"></div>`
    wrapper.innerHTML=divs;
    list.innerHTML=lis;
}
bindHtml();

// 3. 实现自动轮播 2000ms滑动一张
// 让wrapper这个元素向左移动800px;
let step=0;
let autoMove=(n)=>{
    step++;
    // 如果不是undefined，说明是点击li操作执行的autoMove;直接把li的索引赋值给step;
    typeof n!=="undefined"?step=n:null;
    // 当显示最后一张时，应该让它直接left为0；
    if(step===5){
        wrapper.style.left="0px";
        step=1;// 如果是最后一张，瞬间变成第一张，那么下一章应该直接让第二张显示，所以step重置为1；
    }
    changeTip();
    utils.animate(wrapper,{left:-800*step},300);
}
// 让图片每隔2000ms切换一张
let timer = setInterval(autoMove,2000)

//4. 鼠标划上，停止轮播，离开，继续轮播；
outer.onmouseover=function(){
    clearInterval(timer)
}
//离开，继续轮播；
outer.onmouseout=function(){
     timer = setInterval(autoMove,2000)
}

// 5.焦点跟随； 显示哪一张图片，给对应的li加上class名select;
let  oLis = document.getElementsByTagName("li");
let changeTip=()=>{
    for(let i=0;i<oLis.length;i++){
        //oLis[i].classList.remove("select");
        if(step===i){
            // 如果step 和li的索引相同，那么给当前的li加上select;
            oLis[i].classList.add("select");
        }else{
            oLis[i].classList.remove("select");
        }
        // 如果step为4，那么让第一个li加上class；
        if(step===4){
            oLis[0].classList.add("select");
        }
    }
    // if(step===4){
    //     oLis[0].classList.add("select");
    //     return;
    // }
    // oLis[step].classList.add("select");
}
changeTip();

// 6.点击焦点，图片跟随
let  focus=()=>{
    // 给每一个li绑定点击事件；当点击对应的li时，让动画运动到对应的位置上；根据li的索引，计算step值；
    for(let i=0;i<oLis.length;i++){
        oLis[i].onclick = function(){
            // utils.animate(wrapper,{left:-800*i},300)
            // step=i;
            // changeTip();
            autoMove(i);
        }
    }
}
focus();
//7.点击左右，实现切换轮播；
let left = document.getElementById("left");
let right = document.getElementById("right");
right.onclick = function(){
    autoMove();
}
left.onclick = function(){
    step--;
    if(step===-1){
        // 当step=-1时，让其瞬间回到最后一张，也是第一张上；
        wrapper.style.left="-3200px";
        step=3;
    }
    utils.animate(wrapper,{left:-800*step},300);
    changeTip();
}
