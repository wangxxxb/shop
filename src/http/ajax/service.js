import md5 from 'md5'
import { obj2str } from '@/utils'
import qs from 'qs'
import { SIGN } from '@/constants/pay'

export default class Service {
    constructor($axios, $configs) {
        // 挂载axios
        this.$axios = $axios
        // 基础属性
        this.base_configs = $configs
        this.createService(this.$axios, this.base_configs)
    }
    createService = (axios, configs) => {
        // 生成axios
        const service = axios.create(configs)
        // 设置Post put 默认 Content-Type
        service.defaults.headers.post['Content-Type'] =
            'application/json;charset=UTF-8'
        service.defaults.headers.put['Content-Type'] =
            'application/json;charset=UTF-8'

        // 设置跨域携带用户凭证
        service.defaults.withCredentials = true
        // requst 拦截器
        service.interceptors.request.use(
            (config) => {
                const { method, data = {}, params = {} } = config
                const isPostOrPut = method === 'post' || method === 'put'

                if (config.md5) {
                    let signData = !isPostOrPut
                        ? obj2str(params)
                        : obj2str(data)

                    signData += `&key=${SIGN}`
                    const sign = md5(signData)

                    if (!isPostOrPut) {
                        params.sign = sign
                    } else {
                        data.sign = sign
                    }
                }
                if (isPostOrPut) config.data = qs.stringify(data)
                return config
            },
            (error) => Promise.reject(error)
        )

        // response 拦截器
        service.interceptors.response.use(
            async (response) => {
                const { data, status } = response
                // 特殊处理微信支付返回的数据，后端数据处理不规范
                if (response.config.url === '/H5Pay/WechatOrder') {
                    const { Message: msg, Successed: success, ...rest } = data

                    return {
                        success,
                        data: rest,
                        msg
                    }
                }

                // 目前统一判断400以下的请求，不考虑登陆过期以及支付错误等信息
                if (status < 400 && data.Successed) {
                    return {
                        success: true,
                        data: data.Data,
                        msg: data.Message
                    }
                } else {
                    // 暂时先返回出去
                    return {
                        success: false,
                        data: data.Data,
                        msg: data.Message
                    }
                }
            },
            // 只考虑处理内部以及网络错误
            async (error) => {
                let msg = ''
                // 断网 或者 请求超时 状态
                if (!error.response) {
                    const message = error.hasOwnProperty('message')
                        ? error.message
                        : error.msg
                    if (message.includes('timeout')) {
                        msg = '请求超时，请检查网络是否连接正常'
                    } else if (message.includes('getCityCodeParam')) {
                        msg = message
                    } else {
                        msg = '请求失败，请检查网络是否已连接'
                    }
                } else {
                    msg = '请求失败，请稍后再试'
                }
                return Promise.reject({
                    data: {
                        success: false,
                        data: null,
                        msg
                    }
                })
            }
        )
        this.service = service
    }
}
