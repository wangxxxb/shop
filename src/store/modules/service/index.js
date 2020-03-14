import { pushRoomService } from '@/http/request/room-service'
import { Dialog } from 'vant'

const state = {
    msgList: []
}

const TYPES = {
    SET_MSG: 'SET_MSG'
}

const mutations = {
    [TYPES.SET_MSG](state, { msg }) {
        state.msgList = [...state.msgList, msg]
    }
}

const actions = {
    async sendMsg({ commit, rootState }, msg) {
        if (!msg.trim()) {
            Dialog({
                title: '提示',
                message: '请勿发送空消息'
            })
            return
        }

        const {
            agent: agentId,
            hotelId,
            roomId: roomNo,
            userId: openId
        } = rootState.userInfo

        const params = {
            agentId,
            content: encodeURI(msg),
            hotelId,
            openId,
            roomNo
        }

        const { success, msg: message } = await pushRoomService(params)

        if (success) {
            commit({
                type: TYPES.SET_MSG,
                msg
            })
        } else {
            Dialog({
                title: '提示',
                message
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
