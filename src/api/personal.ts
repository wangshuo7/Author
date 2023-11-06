import request from '../utils/request'
// 个人信息
export const getPersonalInfo = () => {
  return request.post('/youxizuozhe/my/memberinfo')
}
export const transferAccounts = (data: any) => {
  return request.post('/youxizuozhe/my/zhuanzhang', data)
}
