var utils = (function () {
    function offset(curEle) {
        var  l = curEle.offsetLeft;
        var  t = curEle.offsetTop;
        var p = curEle.offsetParent;
        while(p.nodeName !=="BODY"){
            l+=p.offsetLeft +p.clientLeft;
            t+=p.offsetTop+p.clientTop;
            p = p.offsetParent;
        }
        return {
            left:l,top:t
        }
    };
    function getCss(curEle,attr) {
        var  val;
        if("getComputedStyle" in window){
            // 先判断是否支持getComputedStyle;
            val = getComputedStyle(curEle)[attr];
        }else{
            val = curEle.currentStyle[attr];
        }
        // 去单位
        var reg = /^(width|height|margin|padding|left|top|right|bottom|fontZise|opacity)$/;
        // 校验当前属性是否带有单位
        if(reg.test(attr)){
            // 判断是否为空；
            if(!isNaN(parseFloat(val))){
                val = parseFloat(val);
            }
        }
        return val;
    }
// setCss : 每执行一次，都会设置元素一个属性样式；
    function setCss(curEle,attr,val) {
        var  reg = /^(width|height|top|left|right|bottom|padding|margin)$/;
        if(reg.test(attr)){
            if(typeof val==="number"){
                val = val + "px";
            }
        }
        curEle.style[attr]=val;// 设置行内样式；
    }
    function setGroupCss(curEle,obj) {
        // 遍历obj;调用封装的setCss，设置元素的单个样式；
        for(var key in obj){
            setCss(curEle,key,obj[key])
        }
    }
    function css(...arg) {// 在函数定义的括号中，... 是剩余运算符；将所有的实参放入到一个数组中；
        //
        if(arg.length===3){
            // [oBox,"height",300]
            setCss(...arg);
        }else if(arg.length===2){
            if(toString.call(arg[1])==="[object Object]"){
                setGroupCss(...arg)
            }else{
                return getCss(...arg)
            }
        }
    }
    function win(attr,val) {
        // 如果是两个实参，那么一定是设置；如果是一个实参，是获取；
        if(val===undefined){
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = val;
        document.body[attr] = val;


    }
    return {
        offset:offset,
        getCss:getCss,
        setCss:setCss,
        setGroupCss:setGroupCss,
        css:css,
        win:win
    }
})();
// 单例模式
/*
var utils= {
    offset:function offset(curEle) {
        var  l = curEle.offsetLeft;
        var  t = curEle.offsetTop;
        var p = curEle.offsetParent;
        while(p.nodeName !=="BODY"){
            l+=p.offsetLeft +p.clientLeft;
            t+=p.offsetTop+p.clientTop;
            p = p.offsetParent;
        }
        return {
            left:l,top:t
        }
    }
}*/
