// 三种：内置模块   第三方模块  自定义模块；
// 1. fs ： 文件操作系统
// Node中的js文件都是运行在Node环境下，不是运行在浏览器下；
// let  fs = require("fs");
//1 . readdir :异步读取指定的文件目录;读取完毕触发第二个参数，第二个参数必须是一个回调函数；会给回调函数传入两个参数，err:读取的错误信息，result:读取的结果，如果读取成功，err是null;读取成功返回一个数组；
// let  result = fs.readdir("../../",function(err,result){
//     console.log(result);
// })
// console.log(100);

// 2. readdirSync: 同步读取指定的目录，返回一个数组，数组中包含了目录的字符串  当读取完成以后，执行下面的方法；
// let result = fs.readdirSync("./");
// console.log(result);

// 3. readFileSync : 读文件;
// 在Node读取文件内容默认是一个buffer的文件流；0-9a-f；每一个汉字或字母都有其固定对应一个buffer数据；
// readFileSync(path,encoding) 默认得到的是buffer文件流编码格式，设置成utf8,得到JSON，html;但是对于图片，音频，视频，我们读取和传输的过程就是buffer格式的，所以不需要设置utf8;
// let content = fs.readFileSync("./2.html")
// console.log(content.toString());
// Buffer.from(): 把字符串转成buffer格式
// toString();把buffer格式转成utf8格式


// 4.readFile
//readFile(path,encoding,函数) 
// fs.readFile("./2.html","utf8",function(err,result){
//     console.log(result);
// });

// 5.writeFileSync
// writeFileSync(path,内容,编码格式)
// 向某个文件中写入内容，把之前内容的全部覆盖
//fs.writeFileSync("./3.txt","好好听课，不睡觉","utf8")

// 6.writeFile
// fs.writeFile("./3.txt","好好听课","utf8",function(err){
//     console.log(100);// 当写入文件成功以后，就会触发这个回调  
// })

// 7.appendFileSync : 向文件某位追加内容
// fs.appendFileSync("./3.txt","不许睡觉","utf8")
// 8.appendFile

// 9.copyFileSync : 把文件里面的内容拷贝新的文件中，并且替换掉原来的内容；覆盖
//fs.copyFileSync("./2.html","./3.txt")
// 10.copyFile

// 11. mkdir : 创建文件目录
// fs.mkdir("./js",err=>{

// });

// 12. rmdir :删除文件夹目录
// fs.rmdir("./js",err=>{

// })
// 13.unlink : 删除文件
// fs.unlink("./3.txt",err=>{

// })
// fs.link("./3.txt",err=>{

// })

// let {readFile,readdir} = require("./promiseFs");
// readFile("./3.txt").then(result=>{
//     // result: 就是读出来的数据
// }).catch(res=>{

// })
// readdir("./js").then(result=>{

// })
// fs.readFile("./2.js","utf8",function(err,result){
//     console.log(result);
// })
// writeFile("/1.js","")
// fs.writeFile("./2.json",{a:1},"utf8",function(){

// })
let {writeFile} =require("./3.promiseFs");
writeFile("./2.json","我的").then(function(){

})




