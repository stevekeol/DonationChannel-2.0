const app = getApp();
Page({
  data: {
    helpList:[]
  },
  onLoad(options) {
    this.getHelpList()
  },
  /**
   * 获取求助信息列表
   */
  getHelpList: function() {
    wx.request({
      url: 'https://ncp.xuedaojia.net/checkout',
      method: 'GET',
      success: res => {
        console.log(res.data.result)
        this.setData({
          helpList:res.data.result
        })
      }
    })
  },
  toDetail: function(e) {
    console.log(e.currentTarget.dataset.id)
  }
})

