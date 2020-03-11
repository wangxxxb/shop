import * as TYPES from './mutation-types'
import { getGoodsCategory, getGoodsList } from '@/http/request/goods'
import { aliPay } from '@/http/request/pay'
import { TEST_GOODS } from '@/constants/pay'
import { CART } from '@/constants/cart'
import { clearLocal } from '@/utils'

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
    },
    async aliPay({ rootState }) {
        const idDev = process.env.VUE_APP_ENV === 'development'
        const { agent, hotelId, userId, roomId } = rootState.userInfo

        const params = {
            agentId: agent,
            body: '购物',
            goods: idDev ? decodeURIComponent(TEST_GOODS) : TEST_GOODS,
            hotelId,
            openid: userId,
            roomId,
            total_fee: idDev ? 10 : 10
        }

        const res = await aliPay(params)

        if (res) {
            const submit = document.createElement('div')
            submit.style.display = 'none'
            submit.setAttribute('id', 'submit-pay')
            submit.innerHTML = res

            document.body.appendChild(submit)

            submit.querySelector('form').submit()

            clearLocal(CART)
        }
    }
}
