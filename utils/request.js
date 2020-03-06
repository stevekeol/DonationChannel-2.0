/*
 * @Func: 使用Promise封装wx.request
 * @Input: Object
 * 
 */
const app = getApp();
const request = options => {
  return new Promise((resolve, reject) => {
    // options.data = Object.assign({}, {"globalData": app.globalData}, options.data);
    options.data = Object.assign({}, options.data);
    wx.request({
      header: { 'Content-Type': 'application/json' },
      ...options,
      success: function(res) {
        if(res.data.errMsg === 'ok') {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail: function(res) {
        reject(res.data)
      }
    })
  })
}

export default request;
