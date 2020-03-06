import { apiGetCheckout } from '../../utils/api.js';
const app = getApp();
Page({
  data: {
    helpList:[]
  },
  onLoad(options) {
    // this.getHelpList()
    apiGetCheckout()
      .then((res) => {
        this.setData({
          helpList:res.result
        })
      })
  },
  toDetail: function(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `../helpHome/helpHome?id=${e.currentTarget.dataset.id}`
    })
  }
})

