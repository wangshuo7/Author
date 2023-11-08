import request from '../utils/request'

// 列表
export const getSoftwareList = (data: any) => {
  return request.post('/youxizuozhe/game/index', data)
}
// 添加
export const addSoftware = (data: any) => {
  return request.post('/youxizuozhe/game/add', data)
}
// 编辑
export const editSoftware = (data: any) => {
  return request.post('/youxizuozhe/game/edit', data)
}
// 删除
export const delSoftware = (data: any) => {
  return request.post('/youxizuozhe/game/del', data)
}
// 信息
export const getSoftwareInfo = (data: any) => {
  return request.post('/youxizuozhe/game/info', data)
}

// 版本列表
export const getGameVersion = (data: any) => {
  return request.post('/youxizuozhe/gameversion/index', data)
}
// 添加版本
export const addGameVersion = (data: any) => {
  return request.post('/youxizuozhe/gameversion/add', data)
}

// 编辑公告
export const editGameNotice = (data: any) => {
  return request.post('/youxizuozhe/game/gonggao', data)
}

// 反馈列表
export const getFeedbackList = (data: any) => {
  return request.post('/youxizuozhe/feedback/index', data)
}
// 提交反馈
export const submitFeedback = (data: any) => {
  return request.post('/youxizuozhe/feedback/add', data)
}

// 反馈列表二级
export const getFeedMoreList = (data: any) => {
  return request.post('/youxizuozhe/feedback/index_child', data)
}

// 折扣列表
export const getDiscountList = (data: any) => {
  return request.post('/youxizuozhe/youhuiquan/index', data)
}
// 添加折扣
export const addDiscount = (data: any) => {
  return request.post('/youxizuozhe/youhuiquan/add', data)
}
// 删除折扣
export const delDiscount = (data: any) => {
  return request.post('/youxizuozhe/youhuiquan/del', data)
}
