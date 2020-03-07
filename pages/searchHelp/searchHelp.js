// import { apiGetEmployees, apiGetClients } from '../../utils/api.js';
import {
  apiGetAllHelps
} from '../../utils/api.js';
const app = getApp();
Page({
  data: {
    helpList: [],
    searchList: [],
    serviceList: [ // type 有web、mini 
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试测试测试测试测',
        iconUrl: '/images/services/icon-item-1.svg',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },
      {
        title: '同程疫情地图',
        desc: '测试测试测试测试测试',
        iconUrl: '',
        type: 'mini',
        url: '',
      },

    ]
  },
  onLoad(options) {
    apiGetAllHelps()
      .then((res) => {
        console.log(res)
        this.setData({
          helpList: res.result
        })
      })
  },
  /**
   * 搜索现有的结果
   */
  searchHelps(e) {
    let keyWord = e.detail.value;
    let reChinese = /[\u4e00-\u9fa5]/g
    if (reChinese.test(keyWord)) {
      let cleanKeyWord = keyWord.match(reChinese).join("")
      if (cleanKeyWord != '') {
        let searchList = this.data.helpList.filter((item)=> {
          return item.name.match(cleanKeyWord) != null
        })
        this.setData({
          searchList
        })
      }
    }else{
      this.setData({
        searchList: []
      })
    }
  }
})