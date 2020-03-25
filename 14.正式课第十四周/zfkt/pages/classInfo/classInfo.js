// pages/classInfo/classInfo.js
let app  = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    til:"",
    img:"",
    price:0,
    id:"",
    num:app.globalData.cartList.length
  },
  add(){
      let ary= app.globalData.cartList;
      let obj = {
        title:this.data.til,
        img:this.data.img,
        id:this.data.id,
        price:this.data.price,
        // count : 用来形容该商品在购物车cartList数组中有几个
        count:1
      }
      let bol = ary.filter(item=>item.id==this.data.id);
      if(bol.length){
        bol[0].count++;
      }else{
         ary.push(obj);
         this.setData({
           num:ary.length
         })
      }
  },
  goUser(){
    // wx.switchTab : 在js中切换页面；
    wx.switchTab({
      url:"/pages/user/user"
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在onLoad的回调函数的参数中携带了通过url传递过来的参数
    // console.log(options)
    this.setData({
      til:options.til,
      img:options.img,
      id:options.id,
      price:options.price,
      num:app.globalData.cartList.length
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