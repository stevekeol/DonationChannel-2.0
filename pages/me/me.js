import request from '../../utils/request.js';
import { apiGetClients, apiGetEmployees } from '../../utils/api.js';
const app = getApp();
Page({
  data: {
    test: '123123',
    userInfo:{
      nickName: '未登录用户',
      avatar: 'https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/',
    }
  },
  enterAllOrders() {
    wx.navigateTo({
      url: '../allOrders/allOrders'
    })
  },
  enterMemberCardInfo() {
    wx.navigateTo({
      url: '../memberCardInfo/memberCardInfo'
    })
  },
  onLoad(options) {
    let app = getApp();
    if (app.globalData.isAuth) {
      console.log('已经验证')
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }else{
      console.log('未验证')
    }
   
  }  
})