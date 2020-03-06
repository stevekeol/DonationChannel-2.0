import { apiGetUpToken } from '../../utils/api.js';
const qiniuUploader = require("../../utils/qiniuUploader");
const app = getApp();
Page({
  data: {
    openid: '',
    name: '',
    phone: '',
    address: '',
    location: [],
    age: '',
    key: '',
    timeOfIllness: '',
    desc: '',
    imgList: []
  },
  onLoad() {
    this.setData({
      openid: app.globalData.openid
    })
  },
  onShow() {
    // console.log(this.data);
  },
  submit() {
    console.log(this.data);
  },
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getAge(e) {
    this.setData({
      age: e.detail.value
    })
  },
  getIllDay(e) {
    this.setData({
      timeOfIllness: e.detail.value
    })
  },
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
  uploadImgs(filePaths) {
    filePaths.map((path, i) => {
      apiGetUpToken()
        .then(res => {
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
              uptoken: res.upToken,
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
  },
  DelImg(e) {
    wx.showModal({
      title: '求助地图',
      content: '确定要删除该照片吗？',
      cancelText: '再看看',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  }
})

