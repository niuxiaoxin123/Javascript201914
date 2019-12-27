var utils = (function(){
    function offset(curEle){
        var left = curEle.offsetLeft;
        var top= curEle.offsetTop;
        var parent =  curEle.offsetParent;
        while(parent){
            left+=parent.clientLeft+parent.offsetLeft;
            top+=parent.clientTop + parent.offsetTop;
            parent=parent.offsetParent;
        }
        return {left,top};
    }
    function win(attr,val){
        if(typeof val==="undefined"){
            return document.documentElement[attr]||document.body[attr]
        }
        document.documentElement[attr]=val;
        document.body[attr]=val;
    }
    return {offset,win}
})();