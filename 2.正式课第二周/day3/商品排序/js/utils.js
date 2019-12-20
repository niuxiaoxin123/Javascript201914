// var utils = (function () {
//     var  a =10;
//     function toArray(likeAry) {
//         var  ary = [];
//         try{
//             ary = Array.prototype.slice.call(likeAry);
//         }catch(e){
//             for(var i=0;i<likeAry.length;i++){
// //                ary.push(likeAry[i])
//                 ary[ary.length] = likeAry[i];
//             }
//         };
//         return ary;
//     };
//     return {
//         toArray:toArray
//     }
// })();

//单例模式
// var  a =10
var utils = {
    toArray : function (likeAry) {
        var  ary = [];
        try{
            ary = Array.prototype.slice.call(likeAry);
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
//                ary.push(likeAry[i])
                ary[ary.length] = likeAry[i];
            }
        };
        return ary;
    }
}




