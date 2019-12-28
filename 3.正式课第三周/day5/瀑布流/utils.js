var utils  = (function(){
    function offset(curEle){
        var  l = curEle.offsetLeft;
        var t = curEle.offsetTop;
        var parent = curEle.offsetParent;
        while(parent){
            l+=parent.clientLeft+parent.offsetLeft;
            t+=parent.clientTop+parent.offsetTop;
            parent=parent.offsetParent;
        }
        return {l:l,t:t}
    }
    function win(attr,val){ 
        if(typeof val==="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=val;
        document.body[attr]=val;
    }
    return {
        offset,
        win
    }
})()