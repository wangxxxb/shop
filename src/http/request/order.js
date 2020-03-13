import ajax from '../ajax'
import apis from '../apis'

/**
 * 获取订单列表
 * @export
 * @param {*} params
 */
export async function getOrderList(params) {
    const { success, data } = await ajax.getList(
        apis.order.getOrderList,
        params,
        {
            md5: true
        }
    )
    return {
        success,
        data
    }
}

export async function deleteOrder(url) {
    const { success, msg } = await ajax.get(url)

    return {
        success,
        msg
    }
}

export async function refundOrder(url, params) {
    const { success, msg } = await ajax.get(url, params)

    return {
        success,
        msg
    }
}
