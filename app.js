App({
  globalData: {
    isAuth: '123',
    userInfo: null,
    openid: null
  },
  globalConf: {
    StatusBar: null,
    Custom: null,
    CustomBar: null,
    url: 'https://ncp.xuedaojia.net',
    AppID: 'wx798762e7a42acb20',
    ps: '76ec183f1e8b8c7179a03f7affa7ea8e'
  },
  setStatusBar: function() {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalConf.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalConf.Custom = capsule;
          this.globalConf.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalConf.CustomBar = e.statusBarHeight + 50;
        }
      }
    });
  },
  onLaunch: function() {
    this.setStatusBar();
      let that = this;
      wx.login({
        success: function(res) {
          if(res.code) {
            wx.request({
              //此处逻辑有点问题，应该将code发到第三方服务器，由第三方服务器将appid和appsecrect和code再发送到微信服务器
              url: `https://api.weixin.qq.com/sns/jscode2session?appid=${that.globalConf.AppID}&secret=${that.globalConf.ps}&js_code=${res.code}&grant_type=authorization_code`,
              data: {
                code: res.code
              },
              success: function(res) {
                that.globalData.openid = res.data.openid;
              }
            })
          } else {
            console.log('get openid err');
          }
        }
      }) 
  }
})
