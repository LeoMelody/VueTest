/*
 * @Author: wangyiheng 
 * @Date: 2017-11-16 11:10:40 
 * @Last Modified by: wangyiheng
 * @Last Modified time: 2017-11-16 11:36:56
 * 该文件用于配置axios API
 */
import axios from 'axios'
import qs from 'querystring'

// axios配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080/'

// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    // _.toast('错误的传参', 'fail')
    return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
    if (!res.data.success) {
        // return Promise.reject(error)
    }
    return res
}, (error) => {
   // _.toast("网络异常", 'fail')
    return Promise.reject(error)
})

// 定义统一的fetch方法
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// API
const APIS = {
    getMock(params) {
        return get('../../static/mock.json', params)
    }
} 

export default APIS
