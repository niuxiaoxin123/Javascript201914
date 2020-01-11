let music = $("#music")[0];
let timer;
//1. 计算出内容区的高度，动态设置
function computedMain(){
    // 用屏幕的高度-header的高度-footer的高度来计算main的高度；
    let winH = document.documentElement.clientHeight;
    let headerH = $(".header")[0].offsetHeight;
    let footerH = $(".footer")[0].offsetHeight;
    // 获取最新的fontSize值；
    let fontSize = parseFloat(document.documentElement.style.fontSize);
    // debugger
    let mainH  = (winH-headerH-footerH)/fontSize+"rem"; 
    // console.log(mainH);
    $(".main").css("height",mainH);
}
computedMain();

// 2.请求数据，并绑定数据
$.ajax({
    url:"./json/lyric.json",
    type:"get",
    async:false,
    success:function(data){
        // 将data中属性名是lyric的属性值传递给bindHtml;
        bindHtml(data.lyric);
    }
});

// 3.数据绑定
function bindHtml(data){
    data=data.replace(/&#(\d+);/g,function(res,a){
        switch(a){
            case "32":
                return " ";
            case "40":
                return "(";
            case "41":
                return ")";
            case "45":
                return "-";
        }
        return res;
    });
    let arr = [];
    data.replace(/\[(\d+)&#58;(\d+)&#46;\d+\]([^&#]+)(?:(&#\d+))/g,function(res,a,b,val){
        arr.push({
            a,
            b,
            val
        });
    });
    // 循环准备好的数组，拼接字符串，并放入wrap这个元素中；
    let str=``;
    for(let i=0;i<arr.length;i++){
        let cur = arr[i];
        str+=`<p data-min="${cur.a}" data-sec="${cur.b}">${cur.val}</p>`
    }
    $(".wrap").html(str);
    music.addEventListener("canplay",function(){
        // 当音频加载完毕，会执行这个元素的canplay事件；
        $("#right").html(formate(music.duration));
    });
}
// 3.给按钮绑定点击事件；如果当前是暂停状态，就让其播放，如果是播放状态，就让其暂停
// tap： 没有延迟；
$("#musicBtn").tap(function(){
    if(music.paused){
         music.play();
         $(this).addClass("select");
         timer=setInterval(computedTime,100);
         return;
    }else{
        music.pause();
        $(this).removeClass("select");
        clearInterval(timer);
        return;
    }
});
function formate(time){// time : 是秒；返回一个分钟:秒
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60);
    min = min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    return min+":"+sec;
}
// audio :currentTime
let curT = 0;
let flag = 0;
function computedTime(){
    let curTime = music.currentTime;
    let duration = music.duration;
    let cur = formate(curTime);// "00:16"
    if(curTime>=duration){
        // 播放完以后的执行
        clearInterval(timer);
        $("#musicBtn").removeClass("select");
        return;
    }
    $("#left").html(cur);
    $(".lineBg").css("width",curTime/duration*100+"%");
    let min = cur.split(":")[0];
    let sec = cur.split(":")[1];
    // 获取到所有的p元素；
    let allP = document.getElementsByTagName("p");
    for(let i=0;i<allP.length;i++){
        let curP = allP[i];
        // 获取当前行分钟以及秒数
        let minP = curP.getAttribute("data-min");// 00  01
        let secP = curP.getAttribute("data-sec");
        // 让左下角的时间和这个行上的时间进行比较，如果相同，音乐已经播放到了这一行，加颜色
        if(min===minP&&sec===secP){
            // 只要这一行加
            //curP.removeAttribute("data-min");
            if(curP.className!=="select"){
                //console.log(curP.className);
                //flag++;
                $(curP).addClass("select").siblings().removeClass("select");
                // i : 第几个p元素；
                if(i>=6){
                    curT-=0.84;
                    $(".wrap").css("top",curT+"rem");
                }
            }
            
        }
    }

}
