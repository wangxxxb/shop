import * as TYPES from './mutation-types'
import { getStoreInfo, getRoomInfo } from '@/http/request/app'

export default {
    async getStoreInfo({ commit }) {
        const res = await getStoreInfo()

        if (res) {
            commit({
                type: TYPES.SET_STORE_INFO,
                storeInfo: res
            })
        }
    },
    async getRoomInfo({ commit, state }) {
        const {
            userInfo: { hotelId, roomId }
        } = state
        const res = await getRoomInfo({
            hotel_id: +hotelId,
            room_id: +roomId
        })
        commit({
            type: TYPES.SET_STORE_INFO,
            storeInfo: res
        })
    }
}
