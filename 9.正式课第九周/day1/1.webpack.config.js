// 浏览器支持module  common.规范    导出 module.exports   导入require
// ES6 import  export  export default 
let WebpackHtmlPlugins = require("html-webpack-plugin");
module.exports = {
    mode:"development",// "production",
    devtool:"eval-source-map",
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",// 导出的文件放入的文件路径
        filename:"build.js"// 导出的文件的名字
    },
    devServer:{
        contentBase:"./public",
        inline:true,
        port:8080,
        proxy:{
            "api":{
                target:"http://localhost:9000"
            }
        }
    },
    module:{
        // loader: 
        rules:[{
            test:/\.js$/,
            use:["babel-loader"],
            exclude:/node_modules/
        }]
    },
    plugins:[
        new WebpackHtmlPlugins({
            template:'/index.html'
        })
    ]
}