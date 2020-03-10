import * as TYPES from './mutation-types'

export default {
    [TYPES.SET_GOODS_CATEGORY](state, { category }) {
        state.category = category
    },
    [TYPES.SET_GOODS_LIST](state, { goodsList }) {
        state.goodsList = goodsList
    }
}
