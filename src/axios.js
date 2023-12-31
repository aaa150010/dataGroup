import axios from 'axios'
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "/api"
})

// request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
        return  res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service