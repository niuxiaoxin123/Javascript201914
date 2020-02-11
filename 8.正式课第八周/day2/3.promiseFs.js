let fs = require("fs");
let path = require("path");
console.log(path.resolve("2.html"));// 输出绝对路径
let obj = {};
// 根据文件的后缀名返回编码格式：utf8  /  null
function suffixName(pathname){
    let suffixReg = /\.([0-9a-zA-Z]+)$/;
    let suffix = suffixReg.test(pathname)?suffixReg.exec(pathname)[1]:"";
    let encoding = "utf8";
    let picReg = /^(png|gif|jpg|webp|ico|svg|mp3|mp4)$/;
    picReg.test(suffix)?encoding=null:null;
    return encoding;
}

["readFile","readdir","mkdir","rmdir","unlink"].forEach(item=>{
    obj[item]=function(pathname){
        pathname = path.resolve(pathname);
        return new Promise((resolve,reject)=>{
            // 如果后缀名是图片，不需要让encoding是utf8;
            let encoding =suffixName(pathname);
            let callBack=function(err,result){
                if(err!==null){
                    reject(err);
                    return;
                }
                resolve(result);
            }
            if(item!=="readFile"){
                encoding=callBack;
                callBack=null;
            }
            fs[item](pathname,encoding,callBack);
        })
    }
});
//往obj新增两个键值对；分别是writeFile appendFile
["writeFile","appendFile"].forEach(item=>{
    console.log(100)
    obj[item]=function(pathname,content){
        
        pathname = path.resolve(pathname);
        // 如果是对象，转换成JSON格式的字符串
        typeof content ==="object"&&content!==null?content=JSON.stringify(content):null;
        typeof content!=="string"?content+="":null;
        return new Promise((resolve,reject)=>{
            let encoding =suffixName(pathname);
            let callBack=function(err,result){
                if(err!==null){
                    reject(err);
                    return;
                }
                resolve(result);
            }
            fs[item](pathname,content,encoding,callBack);
        })
    }
})
obj["copyFile"]=function(pathname1,pathname2){
    pathname1=path.resolve(pathname1);
    pathname2=path.resolve(pathname2);
    return new Promise((resolve,reject)=>{
        fs['copyFile'](pathname1,pathname2,err=>{
            if(err!==null){
                reject(err);
                return;
            }
            resolve();
        })
    })

}
// obj 中有readFile  writeFile  copyFile
module.exports=obj;