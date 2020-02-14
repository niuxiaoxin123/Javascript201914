// webpack 是基于node运行的；这个文件最终要运行在node环境下；
// 入口和出口文件
module.exports={
    // __dirname: 当前simple文件夹的绝对路径
    mode:"development",// 开发模式（不压缩）  production :生产环境（压缩的）默认是压缩的；
    devtool :'eval-source-map',
    entry:__dirname+"/app/main.js",//webpack打包的入口
    output:{
        path:__dirname+"/public",// 打包之后的文件存放路径
        filename:"bundle.js"// 打包之后的js的文件名
    },
    // 配置dev-server的选项
    devServer:{
        contentBase:"./public",// 启动服务的根目录
        inline:true,// 实时刷新
        port:8080// 让当前项目在8080端口下启动
    }
}