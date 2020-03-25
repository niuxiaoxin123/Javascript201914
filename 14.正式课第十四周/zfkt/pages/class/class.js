
import http from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      level1:[],
      level2:[],
      level3:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  getData(){
    // level1 : 零基础课程  level2:工程化课程   level3 : 框架课程
      http.get("/classList").then(data=>{
        console.log(data.data);
        // 请求成功数据以后，对当前页面的data中数据进行重新设置
        if(data.code==0){
          let {level1,level2,level3}=data.data;
          this.setData({level1:level1,level2:level2,level3:level3})
        }
      })
  }
})