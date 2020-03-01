// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    painting: {},
    shareImage: '',
    patientInfo: {
      name: '邱主任',
      phone: '18888888888',
      time: '2020-02-23',
      addr: '武汉中心广场武汉中心广场武汉中心广场',
      desc: '救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命救命',
    },
    helpKeyWrod: [
      '血浆求助',
      '病床求助',
      '药物求助',
      '物资求助',
      '生活求助',
      '扩散求助',
      '运输求助',
      '政府部门求助'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('share--', options)
    let patientInfo = {
      name: options.name,
      phone: options.phone,
      time: options.time,
      addr: options.addr,
      desc: options.desc,
    }
    this.setData({
      patientInfo: patientInfo
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
    this.eventDraw()
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

  },
  eventDraw: function () {
    let _this = this
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })

    this.setData({
      painting: {
        width: 640,
        height: 1008,
        views: [{
          type: 'image',
          url: '/images/bg.png',
          top: 0,
          left: 0,
          width: 640,
          height: 1008
        },
        // {
        //   type: 'image',
        //   url: '/images/mabg.png',
        //   top: 900,
        //   left: 530,
        //   width: 100,
        //   height: 100
        // },
        {
          type: 'image',
          url: '/images/ma.jpeg',
          top: 905,
          left: 515,
          width: 100,
          height: 100
        },
        {
          type: 'text',
          content: this.data.helpKeyWrod[0],
          color: '#ffffff',
          top: 460,
          fontSize: 32,
          left: 260,
          width: 140,
        },
        {
          type: 'text',
          content: '求助人：',
          color: '#ffffff',
          top: 530,
          fontSize: 22,
          left: 70,
          width: 140,
        },
        {
          type: 'text',
          content: _this.data.patientInfo.name,
          color: '#ffffff',
          top: 530,
          fontSize: 22,
          left: 190,
          width: 400,
        },
        {
          type: 'text',
          content: '联系电话：',
          color: '#ffffff',
          top: 560,
          fontSize: 22,
          left: 70,
          width: 140,
        },
        {
          type: 'text',
          content: _this.data.patientInfo.phone,
          color: '#ffffff',
          top: 560,
          fontSize: 20,
          left: 190,
          width: 400,
          breakWord: true
        },
        {
          type: 'text',
          content: '发布时间：',
          color: '#ffffff',
          top: 590,
          fontSize: 22,
          left: 70,
          width: 140,
        },
        {
          type: 'text',
          content: _this.data.patientInfo.time,
          color: '#ffffff',
          top: 590,
          fontSize: 20,
          left: 190,
          width: 400,
          breakWord: true
        },
        {
          type: 'text',
          content: '地址：',
          color: '#ffffff',
          top: 620,
          fontSize: 22,
          left: 70,
          width: 140,
        },
        {
          type: 'text',
          content: _this.data.patientInfo.addr,
          color: '#ffffff',
          top: 620,
          fontSize: 20,
          left: 190,
          lineHeight: 30,
          width: 440,
          breakWord: true,
          // MaxLineNumber: Math.ceil(_this.data.patientInfo.addr.length / 10)
        },
        {
          type: 'text',
          content: '病情描述：',
          color: '#ffffff',
          top: 650,
          fontSize: 22,
          left: 70,
          width: 140,
        },
        {
          type: 'text',
          content: _this.data.patientInfo.desc,
          color: '#ffffff',
          top: 710,
          lineHeight: 30,
          fontSize: 20,
          left: 90,
          width: 500,
          breakWord: true,
          MaxLineNumber: 6
        }
        ]
      }
    })
  },
  eventSave: function () {
    let _this = this;
    wx.saveImageToPhotosAlbum({
      filePath: _this.data.shareImage,
      success(res) {
        wx.showModal({
          icon: 'success',
          content: '图片保存成功',
          showCancel: 'false',
          success (smRes) {
            if (smRes.confirm) {
              wx.previewImage({
                urls: [_this.data.shareImage]
              })
            }
          }
        })
      }
    })
  },

  eventGetImage(event) {
    console.log(event)
    wx.hideLoading()
    const { tempFilePath, errMsg } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  }
})