import request from '../utils/request'

// 列表
export const getFeedbackList = (data: any) => {
  return request.post('/youxizuozhe/feedback/index', data)
}
