Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    "list": [{
      "text": "首页",
      "pagePath": "pages/index/main",
      "iconPath": "static/tabs/index.png",
      "selectedIconPath": "static/tabs/index-active.png"
    },{
      "text": "赚钱",
      "pagePath": "pages/mkmoney/main",
      "iconPath": "static/tabs/mkmoney.png",
      "selectedIconPath": "static/tabs/mkmoney-active.png"
    },{
      "text": "分类",
      "pagePath": "pages/classify/main",
      "iconPath": "static/tabs/classify.png",
      "selectedIconPath": "static/tabs/classify-active.png"
    },{
      "text": "购物车",
      "pagePath": "pages/cart/main",
      "iconPath": "static/tabs/cart.png",
      "selectedIconPath": "static/tabs/cart-active.png"
    }, {
      "text": "我的",
      "pagePath": "pages/user/main",
      "iconPath": "static/tabs/user.png",
      "selectedIconPath": "static/tabs/user-active.png"
    }],
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})