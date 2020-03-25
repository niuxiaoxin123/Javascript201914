// pages/user/user.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cartList:[],
      total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function (options) {
     let ary = app.globalData.cartList;
     let t = ary.reduce((prev,next)=>prev+next.count*next.price,0)
     this.setData({
       cartList:ary,
       total:t
     })
  },
  change(e){
    // console.log(e);
    let ary=  app.globalData.cartList;
    ary.forEach(item => {
      item.id==e.target.dataset.item.id?item.count=e.detail.value*1:null;
    });
    let t = ary.reduce((prev,next)=>prev+next.price*next.count,0);
    this.setData({
      cartList:ary,
      total:t
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      let ary = app.globalData.cartList;
      let t = ary.reduce((prev,next)=>prev+next.count*next.price,0)
      this.setData({
       cartList:ary,
       total:t
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})