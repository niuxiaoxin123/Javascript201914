// webpack 是基于node运行的；这个文件最终要运行在node环境下；
// 入口和出口文件
// 在真实项目开发中，我们常常使用Es6进行开发，当上线之前，把es6编译成es5；
let path  = require("path");
let WebpackHtmlPlugin = require("html-webpack-plugin");
module.exports={
    // __dirname: 当前simple文件夹的绝对路径
    mode:"development",// 开发模式（不压缩）  production :生产环境（压缩的）默认是压缩的；
    devtool :'eval-source-map',// 用于浏览器的调试
    entry:__dirname+"/app/main.js",//webpack打包的入口
    output:{
        path:__dirname+"/public",// 打包之后的文件存放路径
        filename:"bundle.js"// 打包之后的js的文件名
    },
    // 多入口多出口的配置方式
    // entry:{
    //     main:__dirname+"/app/main.js",
    //     greeter:__dirname+"/app/greeter.js"
    // },
    // output:{
    //     path:__dirname+"/public",
    //     filename:'[name].js'
    // },
    //"/api/getuser"
    // 配置dev-server的选项
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
                test:/(\.jsx|\.js)$/,// 用正则匹配文件的后缀名，匹配到文件要用loader处理；
                use:["babel-loader"],// 要使用的loader
                exclude:"/node_modules/"// 这个文件夹下的js文件不需要使用loader处理；
            },{
                test:/\.css$/,
                // style-loader :会默认生成一个style标签，将css样式插入到这个style中；
                // 顺序必须是先style-loader,再用css-loader
                // postcss-loader : 可以给浏览器对应的样式自动加前缀
                use:["style-loader","css-loader","postcss-loader"],
                //include:[path.resolve(__dirname,"css")]
            },
            // 1.base64有点： 较少了http请求，加快了页面的加载时间；避免了图片的跨域，不会造成图片缓存的问题；
            // 2.缺点：数据量比较大,可读性不好，Ie8以下不可用；
            // 如果图片的大小超过了url的limit限制，默认就会调用file-loader去处理该图片，此时会生成一个新的图片而不是转base64的编码了；
            {
                test:/(\.png|\.jpg|.gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        // 是限制的意思
                        limit:8192
                    }
                }]
            },{
                test:/\.less$/,
                // 1.这个顺序不能颠倒 ，webpack会从后往前依次进行解析；先用less-loader把less文件解析成css,将css注入到js文件中，style-loader创建style标签，把js中的css放进去；
                use:["style-loader","css-loader","less-loader"]
            }
        ]
    },
    // plugins : 这是一个数组；
    plugins:[
        new WebpackHtmlPlugin({
            template:__dirname+"/index.html"
        })
    ]
}

// vue-cli  