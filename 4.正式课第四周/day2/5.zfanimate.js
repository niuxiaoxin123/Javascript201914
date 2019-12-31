var utils = (function(){
    function linear(t,b,c,d){
        return c/d*t+b;
    }
    function animate(curEle,target,duration,callBack){
        let begin={};
        let change={};
        for(let key in target){
            begin[key]=parseFloat(getComputedStyle(curEle)[key])
            change[key]=target[key]-begin[key]
        }
        let t=0;
        let timer = setInterval(() => {
            t+=20;
            for(let key in change){
                let cur = linear(t,begin[key],change[key],duration)
                curEle.style[key]=cur+"px";
            }
            if(t>=duration){
                clearInterval(timer);
                typeof callBack==="function"?callBack():null;
            }
        }, 20);
    }
    return {animate}
})();