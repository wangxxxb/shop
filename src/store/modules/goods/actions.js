import * as TYPES from './mutation-types'
import { getGoodsCategory, getGoodsList } from '@/http/request/goods'
import { aliPay, weChatPay } from '@/http/request/pay'
import { TEST_GOODS } from '@/constants/pay'
import { CART } from '@/constants/cart'
import { WEIXIN, ALI } from '@/constants/global'
import { clearLocal } from '@/utils'
import { callpay } from '@/utils/pay'
import { Dialog } from 'vant'

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
    //TODO: 支付进行环境区分 目前还存在浮点数计算问题
    pay({ rootState, dispatch, state, getters }, method) {
        const idDev = process.env.VUE_APP_ENV === 'development'

        let goods = '',
            total_fee = 0
        if (idDev) {
            goods = decodeURIComponent(TEST_GOODS)
            total_fee = 10
        } else {
            goods = JSON.stringify(
                state.cartGoodsList.reduce((prev, cur) => {
                    return prev.concat({
                        goodId: cur.Id,
                        price: cur.Price * 100,
                        number: cur.counts
                    })
                }, [])
            )
            total_fee = getters.cartGoodsTotalPrice * 100
        }

        const { agent, hotelId, userId, roomId } = rootState.userInfo

        const params = {
            agentId: agent,
            body: '购物',
            goods,
            hotelId,
            openid: userId,
            roomId,
            total_fee
        }

        switch (method) {
            case ALI:
                dispatch('aliPay', params)
                break
            case WEIXIN:
                dispatch('weChatPay', params)
                break
            default:
                break
        }
    },
    async aliPay(context, params) {
        const { success, data } = await aliPay(params)

        if (success) {
            const submit = document.createElement('div')
            submit.style.display = 'none'
            submit.setAttribute('id', 'submit-pay')
            submit.innerHTML = data

            document.body.appendChild(submit)

            submit.querySelector('form').submit()

            clearLocal(CART)
        } else {
            Dialog({
                title: '提示',
                message: data
            })
        }
    },
    async weChatPay(context, params) {
        const { success, data, msg } = await weChatPay(params)
        if (success) {
            callpay(
                data.appId,
                data.timeStamp,
                data.nonceStr,
                data.package,
                data.signType,
                data.paySign
            )
        } else {
            Dialog({
                title: '提示',
                message: msg
            })
        }
    }
}
