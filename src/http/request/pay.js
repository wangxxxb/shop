import ajax from '../ajax'
import apis from '../apis'

export async function aliPay(params) {
    const { success, msg } = await ajax.get(apis.pay.aliPay, params, {
        md5: true
    })
    if (success) return msg
    return null
}

export async function weChatPay(params) {
    const { data, success, msg } = await ajax.get(apis.pay.weChatPay, params, {
        md5: true
    })
    if (success) return data
    console.log(msg)
    return null
}
