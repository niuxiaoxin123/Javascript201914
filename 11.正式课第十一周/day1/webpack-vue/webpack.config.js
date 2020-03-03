
let path  = require("path");
let WebpackHtmlPlugin = require("html-webpack-plugin");
let VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports={
    mode:"development",
    devtool :'eval-source-map',// 用于浏览器的调试
    entry:__dirname+"/src/main.js",//webpack打包的入口
    output:{
        path:__dirname+"/public",// 打包之后的文件存放路径
        filename:"bundle.js"// 打包之后的js的文件名
    },
    devServer:{
        contentBase:"./public",// 启动服务的根目录
        inline:true,// 实时刷新
        port:8080,// 让当前项目在8080端口下启动
        proxy:{// 代理；用于跨域的参数配置
            "/api":{// 如果接口中函数api,那么这个接口就要跨域；
                // target : 将要跨域请求的服务器地址；
                target:"http://localhost:9000",
                secure:false,// 目标服务器是否是安全协议
                changeOrigin : false,// 是否修改请求的源头
            }
        }
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:["babel-loader"],
                exclude:"/node_modules/"
            },{
                test:/\.css$/,
                use:["style-loader","css-loader","postcss-loader"],
            },
            {
                test:/(\.png|\.jpg|.gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:8192
                    }
                }]
            },{
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.vue$/,
                use:["vue-loader"]
            }
        ]
    },
    plugins:[
        new WebpackHtmlPlugin({
            template:__dirname+"/src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}