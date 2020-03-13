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

export async function deleteOrder(params) {
    const { success, data, msg } = await ajax.getList(
        apis.order.deleteOrder,
        params,
        {
            md5: true
        }
    )
    console.log(success, data, msg)
}
