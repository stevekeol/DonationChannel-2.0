// import { apiGetEmployees, apiGetClients } from '../../utils/api.js';
const app = getApp();
Page({
  data: {
    qcode: '',
    contact: '',
    isShowMask: false,
    serviceList:[  // type 有web、mini 
      {
        title: '腾讯公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s1.png',
        type: 'h5',
        url: 'https://ssl.gongyi.qq.com/m/weixin/index2_gzzh.htm',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_1.png',
        contact: 'gongyi_TS@tencent.com'
      },
      {
        title: '阿里巴巴公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s2.png',
        type: 'h5',
        url: 'https://pages.tmall.com/wow/gy/act/gongyi?wh_biz=tm',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_2.jpg',
        contact: '0571-88157858'
      },
      {
        title: '支付宝公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s3.png',
        type: 'h5',
        url: 'https://love.alipay.com/donate/index.htm',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_3.png',
        contact: '0571-88158090'
      },
      {
        title: '京东公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s4.png',
        type: 'h5',
        url: 'https://gongyi.m.jd.com/index.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_5.png',
        contact: '010-89126602'
      },
      {
        title: '百度公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s5.png',
        type: 'h5',
        url: 'http://gongyi.baidu.com/index/index.html#/',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_7.png',
        contact: '010-50803597'
      },
      {
        title: '水滴公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s9.png',
        type: 'h5',
        url: 'https://www.shuidigongyi.com/gongyi',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_17.jpg',
        contact: 'gongyi@shuidichou.com'
      },
      {
        title: '美团公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s19.png',
        type: 'h5',
        url: 'https://gongyi.meituan.com/m?fromSource=web&source=vQn6Jz',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_13.png',
        contact: '4000810990'
      },
      {
        title: '善缘公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s8.png',
        type: 'h5',
        url: 'https://www.shanyuanfoundation.com/boc/index.php?act=fhome&op=index',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_15.png',
        contact: 'sygy@17shanyuan.com'
      },
      {
        title: '苏宁公益',
        desc: '',
        iconUrl: 'https://plague.oss-cn-shenzhen.aliyuncs.com/s16.png',
        type: 'h5',
        url: 'https://gongyi.suning.com/',
        qcode: 'https://plague.oss-cn-shenzhen.aliyuncs.com/qcode/fk_ewm_18.jpg',
        contact: 'gongyi@cnsuning.com'
      },
      
    ]
  },
  onLoad() {},
  showMask: function(e) {
    console.log(e.currentTarget.dataset.url)
  },
  /**
   * 解决遮罩层滑动穿透的问题
   */
  preventTouchMove: function(){},
  /**
   * 关闭遮罩
   */
  closeMask: function() {
    this.setData({
      isShowMask: false
    })
  },
  /**
   * 显示遮罩,并渲染联系方式
   */
  showMask: function(e) {
    this.setData({
      qcode: e.currentTarget.dataset.qcode,
      contact: e.currentTarget.dataset.contact,
      isShowMask: true
    })
  }
})

