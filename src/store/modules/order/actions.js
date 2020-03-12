import * as TYPES from './mutation-types'
import { getOrderList } from '@/http/request/order'
import moment from 'moment'

export default {
    async getOrderList({ commit, state, rootState }, isRefresh = false) {
        const { userId } = rootState.userInfo
        const { pageIndex, pageSize } = state

        const params = {
            begTime: '2020-01-01',
            endTime: moment()
                .add(1, 'days')
                .format('YYYY-MM-DD'),
            pageIndex: isRefresh ? 1 : pageIndex + 1,
            pageSize,
            userId
        }

        const { success = true, data } = await getOrderList(params)

        if (success) {
            commit({
                type: TYPES.SET_ORDER_LIST,
                data,
                isRefresh
            })
        }
    }
}
