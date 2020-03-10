/* eslint-disable */
import * as TYPES from './mutation-types'
import { getGoodsCategory, getGoodsList } from '@/http/request/goods'

export default {
    async getGoodsCategory({ commit }) {
        const res = await getGoodsCategory()

        commit({
            type: TYPES.SET_GOODS_CATEGORY,
            category: res
        })
    },
    async getGoodsList({ commit, rootState, state }) {
        const { hotelId } = rootState.userInfo
        const [{ Id: id }] = state.category

        const res = await getGoodsList({
            category_id: id,
            hotel_id: +hotelId
        })

        commit({
            type: TYPES.SET_GOODS_LIST,
            goodsList: res
        })
    }
}
