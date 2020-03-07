module.exports = {
  lintOnSave: false,
  publicPath:"./",
  devServer:{
    // proxy代理；实现跨域；前端项目部署在本地的8080端口，向知乎域名请求数据，是跨域，需要配置proxy;在前端看似访问8080，实际在node环境下会将访问的地址代理到知乎的服务器上；
    proxy:'https://www.zhihu.com/api'
  }
}
