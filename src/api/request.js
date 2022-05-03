import axios from 'axios'
import nprogress from 'nprogress'
import store from '@/store'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,//超时报错
})
//请求拦截器
requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid) {
    //userTempId要和后端对接
    config.headers.userTempId = store.state.detail.uuid
  }
  if(store.state.user.token){
    config.headers.token=store.state.user.token
  }
  nprogress.start()
  // console.log(config);
  return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (err) => {
  return Promise.reject(new Error('请求错误'))
})
export default requests