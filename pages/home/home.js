// import { apiGetEmployees, apiGetClients } from '../../utils/api.js';
const mockData = require('../../utils/mockData.js').default;
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
let mapSDK;
const app = getApp();
Page({
  data: {
    markers: [
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 12807,
    "longitude": 114.32571,
    "latitude": 30.66305
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 6639,
    "longitude": 114.31758,
    "latitude": 30.69957
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 12812,
    "longitude": 114.32258,
    "latitude": 30.64768
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 8006,
    "longitude": 114.31214,
    "latitude": 30.63524
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 5473,
    "longitude": 114.31214,
    "latitude": 30.63524
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 1533,
    "longitude": 114.31214,
    "latitude": 30.63524
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 27,
    "longitude": 114.31214,
    "latitude": 30.63524
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 3378,
    "longitude": 114.33741,
    "latitude": 30.65414
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 11331,
    "longitude": 114.2844,
    "latitude": 30.62687
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 17051,
    "longitude": 114.31542,
    "latitude": 30.63076
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 18044,
    "longitude": 114.29284,
    "latitude": 30.6245
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 18484,
    "longitude": 114.29284,
    "latitude": 30.6245
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 11580,
    "longitude": 114.29284,
    "latitude": 30.6245
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 17479,
    "longitude": 114.34334,
    "latitude": 30.65195
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 109,
    "longitude": 114.32671,
    "latitude": 30.63391
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 127,
    "longitude": 114.24187,
    "latitude": 30.64235
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 11582,
    "longitude": 114.27959,
    "latitude": 30.61998
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 29,
    "longitude": 114.27959,
    "latitude": 30.61998
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 1816,
    "longitude": 114.26726,
    "latitude": 30.62278
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 17527,
    "longitude": 114.28002,
    "latitude": 30.61365
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 13,
    "longitude": 114.29354,
    "latitude": 30.61219
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 9836,
    "longitude": 114.29404,
    "latitude": 30.6084
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 5891,
    "longitude": 114.31258,
    "latitude": 30.60926
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 1853,
    "longitude": 114.31258,
    "latitude": 30.60926
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 2018,
    "longitude": 114.30137,
    "latitude": 30.60735
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 3691,
    "longitude": 114.29689,
    "latitude": 30.60576
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 2827,
    "longitude": 114.29868,
    "latitude": 30.59712
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 17526,
    "longitude": 114.31158,
    "latitude": 30.59847
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 17845,
    "longitude": 114.31158,
    "latitude": 30.59847
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 4913,
    "longitude": 114.31158,
    "latitude": 30.59847
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 1442,
    "longitude": 114.31158,
    "latitude": 30.59847
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 12480,
    "longitude": 114.30252,
    "latitude": 30.59648
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 11327,
    "longitude": 114.30252,
    "latitude": 30.59648
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 22,
    "longitude": 114.30252,
    "latitude": 30.59648
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 7702,
    "longitude": 114.30537,
    "latitude": 30.59555
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 34,
    "longitude": 114.30695,
    "latitude": 30.59519
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 110,
    "longitude": 114.30438,
    "latitude": 30.59418
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 102,
    "longitude": 114.34766,
    "latitude": 30.60879
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 2905,
    "longitude": 114.36703,
    "latitude": 30.62543
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 4969,
    "longitude": 114.28551,
    "latitude": 30.59085
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 17542,
    "longitude": 114.2813,
    "latitude": 30.59014
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 38,
    "longitude": 114.2813,
    "latitude": 30.59014
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 1381,
    "longitude": 114.28887,
    "latitude": 30.58878
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 25,
    "longitude": 114.28887,
    "latitude": 30.58878
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 18264,
    "longitude": 114.27717,
    "latitude": 30.58773
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 7693,
    "longitude": 114.30149,
    "latitude": 30.58682
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 1382,
    "longitude": 114.30149,
    "latitude": 30.58682
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 4966,
    "longitude": 114.28937,
    "latitude": 30.58384
  },
  {
    "iconPath": "../../images/map/location-red.png",
    "width": 30,
    "height": 30,
    "id": 2906,
    "longitude": 114.28937,
    "latitude": 30.58384
  },
  {
    "iconPath": "../../images/map/location-blue.png",
    "width": 30,
    "height": 30,
    "id": 18042,
    "longitude": 114.38705,
    "latitude": 30.63752
  }
],    
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
    hospitals: mockData.hospitals
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId);
    this.setData({
      currentHospital: this.data.hospitals.find((hospital) => e.detail.markerId == hospital.id)
    })
  },
  changeMapContent(){
    this.setData({
      mapLevelIsLeft: !this.data.mapLevelIsLeft
    })
    // let _markers = [];
    //   let flag = true;
    // mockData.hospitals.map((item) => {
    //   let _marker = {
    //     iconPath: flag ? "../../images/map/location-red.png" : "../../images/map/location-blue.png",
    //     width: 30,
    //     height: 30,
    //     id: parseInt(item.id),
    //     longitude: parseFloat(item.location.lon).toFixed(5)-0,
    //     latitude: parseFloat(item.location.lat).toFixed(5)-0
    //   }
    //   flag = !flag;
    //   _markers.push(_marker);
    // })
    // console.log(_markers);
  },
  onLoad() {
    // 实例化API核心类
    mapSDK = new QQMapWX({
      key: 'LTSBZ-2Y7CP-VWLDA-VWFX5-DZ4TK-35FEW'
    });
  },
  // onShow: function () {
  //   // 调用接口
  //   mapSDK.search({
  //     keyword: '酒店',
  //     success: function (res) {
  //         console.log(res);
  //     },
  //     fail: function (res) {
  //         console.log(res);
  //     },
  //     complete: function (res) {
  //       console.log(res);
  //     }
  //   });
  // }
  
  //应当为获取数据后再执行这里
  onShow: function() {
    // console.log(mockData.hospitals[0]);
  }
})

