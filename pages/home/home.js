import { apiGetAllHelps, apiPostWechatInfo } from '../../utils/api.js';
const mockData = require('../../utils/mockData.js').default;
// const personnalData = require('../../utils/personnalData.js').default;
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
import { hospital2marker, personal2marker } from 'utils.js';

let mapSDK;
const app = getApp();
Page({
  data: {
    markers: [],    
    mapLevelIsLeft: false,
    hasNextPage: true,
    hasPreviousPage: false ,
    pageCount: 3,
    pageNo: 1,
    totalCount: 113,
    initialLocation: {
      longitude: mockData.initialLocation.longitude,
      latitude: mockData.initialLocation.latitude
    },
    currentHospital: null,
    currentPersonal: {},
    //记得对象转数组
    totalDemands: {
      '12导心电图机': 1,
      '75%酒精': 98050,
      '84消毒液': 3250,
      'N95口罩': 4078230,
      '一次性医用乳胶手套': 4784820,
      '一次性医用外科口罩': 4906530,
      '一次性医用帽': 74000,
      '一次性医用手套': 98000,
      '一次性医用橡胶手套': 41000,
      '一次性医用防护服': 11254180,
      '一次性手术衣': 40000,
      '医用帽': 2820720,
      '医用紫外线消毒车': 20,
      '医用防护服': 208100,
      '心电监护仪': 10,
      '快速手消毒液': 19100,
      '快速检测试剂盒': 300000,
      '手持测温仪': 10,
      '手术衣': 1608150,
      '无创呼吸机': 10,
      '有创呼吸机': 10,
      '正压隔离衣': 102500,
      '消毒凝胶': 500,
      '消毒药品': 20,
      '移动DR': 1,
      '移动彩超': 1,
      '空气消毒仪': 10,
      '过氧化氢': 50,
      '防护眼镜': 454660,
      '防护设备': 60,
      '防护面罩': 44800,
      '防水围裙': 100,
      '防污染鞋套': 105000,
      '除颤仪': 1
    },
    hospitals: mockData.hospitals,
    personalDatas: [],
    // 是否显示遮罩
    isShowMask: false,
    isShowBullet: true,
    testBullet: [{
      "id": 786,
      "sex": 1,
      "content": "转发一下，加油！~",
      "zanNumber": 27
    }, {
      "id": 854,
      "sex": 1,
      "content": "我是山东人，现在在上海工作，在异乡漂泊真的很孤独，很想有个人能陪伴我。过完年我就27岁了，希望你一切后好。",
      "zanNumber": 14
    }, {
      "id": 1022,
      "sex": 1,
      "content": "湖南人氏挺你",
      "zanNumber": 14
    }, {
      "id": 1103,
      "sex": 1,
      "content": "大家似乎都忘了除了疫情，人还可以生很多期他的病",
      "zanNumber": 10
    }, {
      "id": 1005,
      "sex": 0,
      "content": "别理解你的无助，我弟弟也是花样年华得病去世的，生命是平等的，其他病也是生命，为何不救治？救急！",
      "zanNumber": 7
    }, {
      "id": 1214,
      "sex": 1,
      "content": "普通人太难了",
      "zanNumber": 6
    }, {
      "id": 1207,
      "sex": 1,
      "content": "我今年25岁，是来自东北的妹子。加油",
      "zanNumber": 5
    }, {
      "id": 1227,
      "sex": 1,
      "content": "我是川妹子今年23岁~目前在北京打工，加油",
      "zanNumber": 4
    }, {
      "id": 1206,
      "sex": 1,
      "content": "亚心总医院开通了，在沌口，你可以打电话问一下，属于一家大型综合私立医院",
      "zanNumber": 3
    }, {
      "id": 799,
      "sex": 0,
      "content": "武汉人民太苦了，中华儿女团结起来共渡难关，武汉必胜！",
      "zanNumber": 10
    }, {
      "id": 859,
      "sex": 0,
      "content": "望尽快得到救助！",
      "zanNumber": 7
    }, {
      "id": 825,
      "sex": 0,
      "content": "还有这么多非冠状肺炎的病人怎么办！要解决问题啊！",
      "zanNumber": 6
    }, {
      "id": 861,
      "sex": 0,
      "content": "顶上 救救他",
      "zanNumber": 3
    }],
    dmData: []
  },
  onLoad() {
    let _this = this;
    // 实例化API核心类
    mapSDK = new QQMapWX({
      key: 'LTSBZ-2Y7CP-VWLDA-VWFX5-DZ4TK-35FEW'
    });

    // 检测用户授权情况
    wx.getSetting({
      success(res) {
        let app = getApp();
        app.globalData.isAuth = res.authSetting['scope.userInfo'] ? true : false
        _this.setData({
          isShowMask: res.authSetting['scope.userInfo'] ? false : true
        })
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              // console.log(res);
              app.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })

    this.setData({
      // markers: hospital2marker(mockData.hospitals),
      currentHospital: mockData.hospitals[0],
      hospitals: mockData.hospitals,
    })
    
    _this.setDM()
  },
  //应当为获取数据后再执行这里
  onShow: function() {
    let _this = this;
    apiGetAllHelps()
      .then((res) => {
        _this.setData({
          personalDatas: res.result,
          currentPersonal: res.result[0],
          markers: personal2marker(res.result),
        })
      })
  },
  //地图缩放/平移时
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    if(this.data.mapLevelIsLeft) {
      this.setData({
        currentHospital: this.data.hospitals.find((hospital) => e.detail.markerId == hospital.id)
      })
    } else {
      this.setData({
        currentPersonal: this.data.personalDatas.find((personal) => e.detail.markerId == personal.id)
      })      
    }
  },
  changeMapContent(){
    this.setData({
      markers: !this.data.mapLevelIsLeft ? hospital2marker(mockData.hospitals) : personal2marker(this.data.personalDatas),
      mapLevelIsLeft: !this.data.mapLevelIsLeft
    })
  },
  genPoster: function() {
    let info = this.data.currentPersonal
    let param = `?name=${info.name}&phone=${info.contact}&addr=${info.community}&time=${info.timeOfIllness}&desc=${info.desc}`
    wx.navigateTo({
      url: '/pages/share/share' + param,
    })
  },
  /**
   * 获取用户信息
   */
  zmGetUserInfo: function(e) {
    let app = getApp();
    let _this = this;
    app.globalData.isAuth = true;
    e.detail.userInfo.openid = app.globalData.openid;
    app.globalData.userInfo = e.detail.userInfo;

    wx.getLocation({
     type: 'wgs84',
     success(res) {
        app.globalData.userInfo.location = [res.latitude, res.longitude];
        apiPostWechatInfo(app.globalData.userInfo)
          .then((res) => {
            _this.setData({
              isShowMask: false
            })
          })
     },
     fail(err) {
       console.log(err);
     }
    })


  },
  /**
   * 关闭遮罩层
   */
  closeMask: function(e) {
    this.setData({
      isShowMask: false
    })
  },
  /**
   * 显示弹幕
   */
  showBullet() {
    let d = !this.data.isShowBullet
    console.log(d)
    this.setData({
      isShowBullet: d
    })
  },
  /**
   * 处理弹幕位置
   */
  setDM: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.testBullet;
    for (let i = 0; i < _b.length; i++) {
      const time = Math.floor(Math.random() * 10);
      const _time = time < 6 ? 6 + i : time + i;
      const top = Math.floor(Math.random() * 80) + 2;
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        zanNumber: _b[i].zanNumber,
        top,
        time: _time,
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  }
})
