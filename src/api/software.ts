import request from '../utils/request'
import {
  softwareData
  // languageAdd,
  // languageEdit,
  // languageDel,
  // languageInfo
} from '../type/language'
// 列表
export const getSoftwareList = (data: softwareData) => {
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
