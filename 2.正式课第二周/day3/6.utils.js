// function toArray(likeAry){
//     var  ary = [];
//     try{
//         ary= Array.prototype.slice.call(likeAry);// 在IE8及以下是不兼容
//     }catch(e){
//         console.dir(e);
//         for(var i=0;i<likeAry.length;i++){
//             ary.push(likeAry[i]);
//         }
//     }
//     return ary;
// }

// // 单例模式
// var utils = {
//     toArray:function (likeAry){
//         var  ary = [];
//         try{
//             ary= Array.prototype.slice.call(likeAry);
//         }catch(e){
//             console.dir(e);
//             for(var i=0;i<likeAry.length;i++){
//                 ary.push(likeAry[i]);
//             }
//         }
//         return ary;
//     }

// }
// utils.toArray();
// 高级单例模式
var utils = (function(){
    function toArray(likeAry){
        var  ary = [];
        try{
            ary= Array.prototype.slice.call(likeAry);// 在IE8及以下是不兼容
        }catch(e){
            console.dir(e);
            for(var i=0;i<likeAry.length;i++){
                ary.push(likeAry[i]);
            }
        }
        return ary;
    }
    return {toArray:toArray}// 对象给utils;
})()
