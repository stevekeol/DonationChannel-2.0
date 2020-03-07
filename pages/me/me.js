import request from '../../utils/request.js';
import { apiGetClients, apiGetEmployees } from '../../utils/api.js';
const app = getApp();
Page({
  data: {
    userInfo:{
      nickName: '未登录用户',
      avatar: 'https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/',
    }
  },
  onLoad(options) {
    let app = getApp();
    if(app.globalData.isAuth) {
      console.log('已经验证')
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      console.log('未验证')
    }
  },
  onShareAppMessage: function () {
    return {
      title: '有更多的人，需要你们的帮助！',
      path: '/pages/home/home',
      imageUrl: 'https://wechat-miniprogram-cdn.oss-cn-shanghai.aliyuncs.com/share-world-map.png',
    }
  }
})
