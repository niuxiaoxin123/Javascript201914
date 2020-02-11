let  a = require("./a");
console.log(a);

let avg = (...arg)=>{
    let ary = arg.sort((a,b)=>a-b).slice(1,arg.length-1);
    return a.sum(...ary)/ary.length
}
module.exports = {
    avg
}