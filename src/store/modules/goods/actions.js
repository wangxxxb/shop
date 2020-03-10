import * as TYPES from './mutation-types'
import { getGoodsCategory, getGoodsList } from '@/http/request/goods'

export default {
    async getGoodsCategoryList({ commit, dispatch }) {
        const res = await getGoodsCategory()

        commit({
            type: TYPES.SET_GOODS_CATEGORY_LIST,
            categoryList: res
        })

        // 获取category列表时，默认获取第一个列表第一个选项对应的列表
        if (res[0]) dispatch('setActiveCategory', res[0].Id)
    },
    async getGoodsList({ commit, rootState }, id) {
        const { hotelId } = rootState.userInfo

        const res = await getGoodsList({
            category_id: id,
            hotel_id: +hotelId
        })

        commit({
            type: TYPES.SET_GOODS_LIST,
            goodsList: res
        })
    },
    setActiveCategory({ commit, dispatch }, id) {
        commit({
            type: TYPES.SET_ACTIVE_CATEGORY,
            activeCategoryId: id
        })

        dispatch('getGoodsList', id)
    },
    setCartGood({ commit }, { goods, isIncrease }) {
        commit({
            type: TYPES.SET_CART_GOODS,
            goods,
            isIncrease
        })
    }
}
