// 这个文件时针对vue/cli的项目的配置文件；这个项目没有了webpack.config.js;所有的配置在这个文件中配置就可以了
module.exports={
    // 配置的跨域端口
    // proxy 代理跨域
    publicPath:"./",
    lintOnSave:false,// 如果是false，那么eslint代码校验就不再报错了
    devServer:{
        proxy:"http://localhost:3000"
    },
    // 将把这个对象和内置的进行合并；
    // configureWebpack:{
    //     modules:{
    //         rules:[{
    //             test:/\.(png|jpg|gif)$/,
    //             use:['url-loader']
    //         }]
    //     }
    // }
}