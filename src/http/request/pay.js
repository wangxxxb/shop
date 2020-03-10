import ajax from '../ajax'
import apis from '../apis'

export async function aliPay(params) {
    console.log(123)
    const { success, msg } = await ajax.get(apis.pay.aliPay, params, {
        md5: true
    })
    if (success) return msg
    return null
}
