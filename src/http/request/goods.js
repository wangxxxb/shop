import ajax from '../ajax'
import apis from '../apis'
// import { isObj } from '@/utils'

/**
 * 获取商品品类
 * @export
 * @returns 默认返回空对象
 */
export async function getGoodsCategory() {
    const { success, data } = await ajax.get(apis.goods.getGoodsCategory)
    if (success && Array.isArray(data)) {
        return data
    } else {
        return []
    }
}

/**
 * 根据条件获取商品列表
 * @export
 * @param {*} params
 */
export async function getGoodsList(params) {
    const { success, data } = await ajax.get(apis.goods.getGoodsList, params, {
        md5: true
    })

    if (success && Array.isArray(data)) {
        return data
    } else {
        return []
    }
}
