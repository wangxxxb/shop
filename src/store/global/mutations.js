import * as TYPES from './mutation-types'

export default {
    [TYPES.SET_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    }
}
