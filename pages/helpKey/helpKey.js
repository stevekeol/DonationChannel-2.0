const app = getApp();
Page({
  data: {
    keys: ['康复血浆', '病床入住', '宠物照看', '缺少药物', '运输车辆', '政府支持', '血液透析', '独居老人'],
    resKey: [false, false, false, false, false, false]
  },
  saveHelpKey() {
    let test = [];
    this.data.resKey.forEach((item, index) => {
      item && test.push(this.data.keys[index])
    })
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.setData({
      key: test.join(',')
    })
    wx.redirectTo({
      url: "../../pages/publishDemand/publishDemand"
    })
  },
  chooseKey(e) {
    this.setData({
      ['resKey[' + e.currentTarget.dataset.index + ']']: !this.data.resKey[e.currentTarget.dataset.index]
    })
  }
})

