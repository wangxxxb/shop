import * as TYPES from './mutation-types'

export default {
    [TYPES.SET_ORDER_LIST](state, { orderList, isRefresh = false }) {
        state.orderList = isRefresh
            ? orderList
            : [...state.orderList, ...orderList]
    }
}
