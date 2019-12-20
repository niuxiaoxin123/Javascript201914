var utils = (function(){
    function toArray(likeAry){
        var ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry);
        }catch(e){
            for(let i=0;i<likeAry.length;i++){
                ary.push(likeAry[i]);
            }
        }
        return ary;
    }
    return {toArray:toArray}
})();