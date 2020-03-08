const app = getApp();
Page({
  data: {},
  _saveHelpInfo(e) {
    this.setData({
      value: e.detail.value
    })
  },
  saveHelpInfo() {
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.setData({
      desc: this.data.value
    });
    prePage.changeData();
    wx.navigateBack({
      delta: 1
    })
  }
})
