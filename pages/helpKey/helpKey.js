const app = getApp();
Page({
  data: {
    keys: ['康复血浆', '病床入住', '宠物照看', '缺少药物', '运输车辆', '政府支持', '血液透析', '独居老人'],
    currentIndex: null
  },
  saveHelpKey() {
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.setData({
      key: this.data.keys[this.data.currentIndex]
    });
    prePage.changeData();
    wx.navigateBack({
      delta: 1
    })
  },
  // 求助关键词目前仅支持单选
  chooseKey(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  }
})

