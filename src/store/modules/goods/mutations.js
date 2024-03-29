import * as TYPES from './mutation-types'
import { setLocal } from '@/utils'

export default {
    [TYPES.SET_GOODS_CATEGORY_LIST](state, { categoryList }) {
        state.categoryList = categoryList
    },
    [TYPES.SET_GOODS_LIST](state, { goodsList }) {
        state.goodsList = goodsList
    },
    [TYPES.SET_ACTIVE_CATEGORY](state, { activeCategoryId }) {
        state.activeCategoryId = activeCategoryId
    },
    [TYPES.SET_CART_GOODS](state, { goods, isIncrease, localCartKey }) {
        const index = state.cartGoodsList.findIndex((item) => {
            return item.Id === goods.Id
        })

        if (isIncrease) {
            if (index !== -1) {
                state.cartGoodsList[index].counts++
            } else {
                state.cartGoodsList.push({ ...goods, counts: 1 })
            }
        } else {
            if (index !== -1) {
                if (--state.cartGoodsList[index].counts === 0) {
                    state.cartGoodsList.splice(index, 1)
                }
            }
        }

        if (localCartKey) {
            setLocal(localCartKey, JSON.stringify(state.cartGoodsList))
        }
    },
    [TYPES.CLEAR_CART](state) {
        state.cartGoodsList = []
    },
    [TYPES.SET_INIT_CART](state, { list }) {
        state.cartGoodsList = list
    }
}
