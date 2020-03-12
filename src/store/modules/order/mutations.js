import * as TYPES from './mutation-types'

export default {
    [TYPES.SET_ORDER_LIST](state, { data, isRefresh = false }) {
        const { dataList: orderList, ...rest } = data

        Object.assign(state, {
            ...state,
            ...rest,
            orderList: isRefresh
                ? orderList
                : [...state.orderList, ...orderList]
        })
    },
    [TYPES.CLEAR_ORDER_LIST](state) {
        Object.assign(state, {
            orderList: [],
            pageIndex: 0,
            pageSize: 10,
            totalCount: 0
        })
    }
}
