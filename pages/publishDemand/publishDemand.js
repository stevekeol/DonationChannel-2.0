// import { apiGetEmployees, apiGetClients } from '../../utils/api.js';
const qiniuUploader = require("../../utils/qiniuUploader");
const app = getApp();
Page({
  data: {
    imgList: [],
    desc: undefined
  },
  onLoad() {},
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        this.uploadImgs(res.tempFilePaths); 
      }
    });
  },
  fetchUptoken() {
    return new Promise((resolve, reject) => {
      // TODO need to be gennerated through API
      setTimeout(
        () => { resolve("Q0FP7bNduQF5tp7TRpuBjeHjBWAoHy33F9OwDUkc:qExcfQB-FhzVKVvnPpA-YiUcYBA=:eyJzY29wZSI6Im5jcCIsImRlYWRsaW5lIjoxNTgzMTQwOTY2fQ==")},
        500
      )
    })
  },
  uploadImgs(filePath) {
    filePath.map((path, i) => {
      this.fetchUptoken().then(uptoken => {
        qiniuUploader.upload(
          path,
          res => {
            this.setData({
              imgList: [...this.data.imgList, res.imageURL]
            })
          },
          null, // ignore error
          {
            region: 'ECN',
            uptoken: uptoken,
            uploadURL: 'http://up.qiniup.com',
            domain: 'http://q6bk6yo6q.bkt.clouddn.com',
          })
      })
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
    console.log(e.currentTarget.dataset.url);
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },  
})

