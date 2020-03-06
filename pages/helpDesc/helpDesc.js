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
    console.log(prePage.data);
    let test = this.data.value;
    prePage.setData({
      desc: 'test123'
    }, () => {
      console.log(prePage.data);
    })
    wx.redirectTo({
      url: "../../pages/publishDemand/publishDemand"
    })
  }
})
