import { USER_INFO_KEYMAP, USER_INFO } from '@/constants/global'
import { setLocal, getLocal, clearLocal, getURLParams } from '@/utils'
import store from '@/store'
import { SET_USER_INFO } from '@/store/global/mutation-types'

/**
 * 获取用户信息，该函数建议只执行一次
 * @export
 * @returns 返回处理好之后的query
 */
export function getUserInfo() {
    const urlSearch = decodeURIComponent(window.location.search)
    const backupQuery = getURLParams(urlSearch)

    let userInfo = {}
    // 设置开关，判断是否是带有用户信息进入
    let flag = false

    // 循环过滤用户相关信息，存在用户信息，则会直接过滤
    USER_INFO_KEYMAP.forEach((key) => {
        if (backupQuery.hasOwnProperty(key)) {
            userInfo[key] = backupQuery[key]
            delete backupQuery[key]
            flag = true
        }
    })

    // 存在用户信息，将信息存储在本地，不存在则从本地获取
    if (flag) {
        setLocal(USER_INFO, JSON.stringify(userInfo))
    } else {
        const { success, data = {} } = getLocal(USER_INFO, {}, true)
        if (success) {
            userInfo = data
        } else {
            // 失败（报错或者不存在），则清除本地数据，返回backupQuery，可以考虑直接跳转到其他的页面不走后续逻辑
            clearLocal(USER_INFO)
            return backupQuery
        }
    }

    store.commit({
        type: SET_USER_INFO,
        userInfo
    })

    return flag ? backupQuery : null
}

const user = {
    getUserInfo
}

export default user
