import request from './request.js';
const baseUrl = getApp().globalConf.url;
const globalData = getApp().globalData;

//先检索openid，再更新
export function apiPostWechatInfo(wechatInfo) {
  return request({
    url: `${baseUrl}/wechatInfo`,
    method: 'POST',
    data: {
      'wechatInfo': wechatInfo
    }
  })
}

//无须检索，同一个用户的两次求助信息，视为两单
export function apiPostUserHelp(userHelpInfo) {
  return request({
    url: `${baseUrl}/userHelp`,
    method: 'POST',
    data: {
      'userHelpInfo': userHelpInfo
    }
  })
}

//获取某条求助信息（求助信息有唯一id）
export function apiGetUserHelp(id) {
  return request({
    url: `${baseUrl}/UserHelp`,
    method: 'GET',
    data: {
      id: id
    }
  })
}

//更新用户求助信息（1. 审核员确认; 2.用户更新求助信息）
export function apiPatchUserHelp(id, updatedInfo) {
  return request({
    url: `${baseUrl}/userHelp`,
    method: 'PATCH',
    data: {
      id: id,
      updatedInfo: updatedInfo
    }
  })
}

//center: [longitude, latitude]
//用户获取周边求助信息
export function apiGetNearbyHelps(center) {
  return request({
    url: `${baseUrl}/nearbyHelps`,
    method: 'GET',
    data: {
      center: center
    }
  })
}

//获取某个用户的求助列表
export function apiGetRecentHelps(openid) {
  return request({
    url: `${baseUrl}/recentHelps`,
    method: 'GET',
    data: {
      openid: openid
    }
  })
}

//保存用户的反馈信息
export function apiPostFeedback(feedback) {
  return request({
    url: `${baseUrl}/feedback`,
    method: 'POST',
    data: {
      feedback: feedback
    }
  })
}

//根据openid查询对应用户的反馈信息
export function apiGetFeedback(openid) {
  return request({
    url: `${baseUrl}/feedback`,
    method: 'GET',
    data: {
      openid: openid
    }
  })
}

//无须传入参数，直接获取审核列表
export function apiGetCheckout() {
  return request({
    url: `${baseUrl}/checkout`,
    method: 'GET',
  })
}

export function apiGetUpToken() {
  return request({
    url: `${baseUrl}/upToken`,
    method: 'GET',
  })
}


/*********以下暂未使用********/
export function apiGetDecodedUserInfo(encryptedUserInfo) {
  return request({
    url: `${baseUrl}/getDecodedUserInfo`,
    method: 'POST',
    data: {
      'encryptedUserInfo': encryptedUserInfo
    }
  })
}

export function apiLogin(loginInfo) {
  return request({
    url: `${baseUrl}/login`,
    method: 'GET',
    data: {
      loginInfo: loginInfo
    }     
  })
}
