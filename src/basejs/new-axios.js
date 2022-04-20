import axios from 'axios'

// import Vue from 'vue'
// import store from '@/store'  // 我此项目没有用到vuex，所以vuex代码的都注释了，需要的自己打开使用
 
// import {ACCESS_TOKEN} from '@/store/mutation-types'
 
 
 
// 创建 axios 实例
const requests = axios.create({
//   baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
 baseURL: 'http://127.0.0.1:8089/renren-fast',
  timeout: 6000 // 请求超时时间
})
 
 
 
 
// 错误处理函数
// const err = (error) => {
//   if (error.response) {
//     const data = error.response.data
//     // const token = Vue.ls.get(ACCESS_TOKEN)
//     if (error.response.status === 403) {
//         Notify({ type: 'danger', message: data.message||data.msg });
//     }
//     if (error.response.status === 401) {
//         Notify({ type: 'danger', message: '你没有权限。' });
//       // if (token) {
//       //   store.dispatch('Logout').then(() => {
//       //     setTimeout(() => {
//       //       window.location.reload()
//       //     }, 1500)
//       //   })
//       // }
//     }
//   }
//   return Promise.reject(error)
// }
 
 
 
// request interceptor(请求拦截器)
// requests.interceptors.request.use(config => {
// //   const token = Vue.ls.get(ACCESS_TOKEN)
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
//   }
//   return config
// }, err)
 
 
 
// // response interceptor（接收拦截器）
// requests.interceptors.response.use((response) => {
//   const res = response.data
//   if (res.code !== 0&&res.code!==200) { 
//     Notify({ type: 'danger', message: res.message||res.msg });
//     // 401:未登录;
//     if (res.code === 401||res.code === 403||res.code===999) {
//       Notify({ type: 'danger', message: '请登录'});
//     }
//     return Promise.reject('error')
//   } else {
//     return res
//   }
// }, err)
 
 
 
export default {
  requests
}