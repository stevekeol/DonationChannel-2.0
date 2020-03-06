import { apiGetUserHelp } from '../../utils/api.js';
// const qiniuUploader = require("../../utils/qiniuUploader");
Page({
  data: {
    openid: '',
    helpInfo: {}
  },
  onLoad(params) {
    apiGetUserHelp(params.id)
      .then((res) => {
        console.log(res.result);
        this.setData({
          helpInfo: res.result[0]
        })
      })
  }
})

