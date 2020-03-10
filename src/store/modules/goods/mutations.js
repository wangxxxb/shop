import * as TYPES from './mutation-types'

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
    [TYPES.SET_CART_GOODS](state, { goods, counts = 1 }) {
        console.log(state)
        console.log(goods)
        console.log(counts)
        // state.cartGoodsList = [...state.cartGoodsList, goods]
    }
}
