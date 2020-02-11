// 求和
// 在Node中，一个js就是一个模块；模块里面的方法变量都是私有的；
let  sum = (...arg)=>{
    // 没有arguments
    return eval(arg.join("+"))
}
// module.exports={
//     sum
// }
// exports={// 不能修改exports的内置的空间地址
//     sum
// }
 exports.sum =sum;
 exports.c = 100;
// module  require  exports  __dirname  __filename