import { globalTypes } from '@/constants'

/**
 * @export 判断获取运行所处的浏览器环境
 * @returns 浏览器环境
 */
export function getBrowserType() {
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
        return globalTypes.WEIXIN
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
        return globalTypes.ALI
    } else {
        return null
    }
}

/**
 * @export 获取url中所有参数
 * @param {*} deleteEmputy 是否删除无意义值
 * @param {*} url 需解析的url
 * @returns url中query解析出的参数对象
 */
export function getURLParams(url, deleteEmputy = false) {
    if (!url) {
        if (typeof window === 'undefined') return {}
        url = window && window.location.search
    }

    if (!url || url.indexOf('?') === -1) return {}

    const params = {}
    const paramList = url.split('?')[1].split('&')

    paramList.forEach((item) => {
        const [key, value] = item.split('=')
        if (!key || (deleteEmputy && !value)) {
            return
        }
        params[key] = value
    })
    return params
}

/**
 * @export 四舍五入（保留两位小数）
 * @param {*} num
 * @returns
 */
export function roundNum(num) {
    const REGEXP = /^[0-9]+.$/
    const value = Math.round(num * 100) / 100
    if (REGEXP.test(num)) {
        return `${value}`
    }
    return value
}

/**
 * @export 是否为正整数
 * @param {*} int
 * @returns true | false
 */
export function isInterger(int) {
    const REGEXP = /^[0-9]*$/g
    return REGEXP.test(int)
}

/**
 * @export 是否为浮点数
 * @param {*} float
 * @returns true | false
 */
export function isFloat(float) {
    const REGEXP = /^[0-9]*(\.)?([0-9]{0,2})?$/g
    return REGEXP.test(float)
}

/**
 * @export 判断value是否为字符串
 * @param {*} value
 * @returns true | false
 */
export function isString(value) {
    return typeof value === 'string'
}

/**
 * @export 判断是否为数字
 * @param {*} value
 * @returns true | false
 */
export function isNumber(value) {
    return typeof value === 'number'
}

/**
 * @export 创建只执行一次的函数
 * @param {*} fn
 * @returns
 */
export function once(fn) {
    return function(...args) {
        if (fn) {
            let ret = fn.apply(this, args)
            fn = null
            return ret
        }
    }
}

/**
 * @export 创建防抖函数
 * @param {*} fn
 * @param {*} timeInterval
 * @returns
 */
export function debounce(fn, timeInterval) {
    let timer = 0
    return (...args) => {
        const newTimer = new Date().getTime()
        if (newTimer - timer > timeInterval) {
            timer = newTimer
            return fn.apply(this, args)
        }
    }
}

/**
 * @export 生成节流函数
 * @param {*} fn
 * @param {*} timeInterval
 * @returns
 */
export function throttle(fn, timeInterval) {
    let timer = null

    return (...args) => {
        if (timer === null) {
            timer = setTimeout(fn.bind(this, ...args), 0)
            return
        }
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), timeInterval)
    }
}

/**
 * 存储local数据的函数
 * @export
 * @param {*} KEY
 * @param {*} data
 * @returns
 */
export function setLocal(key, data) {
    try {
        if (typeof data !== 'string')
            throw new Error('data must be String type')

        localStorage.setItem(globalTypes.LOCAL_PREFIX + key, data)

        return {
            data,
            success: true
        }
    } catch (error) {
        return {
            error,
            success: false
        }
    }
}

/**
 * 获取本地存储数据
 * @export
 * @param {*} key 取值所需要的key
 * @param {*} defaultValue 默认值，用来判断获取的值是否与
 * @param {boolean} [needParse=false]
 * @returns
 */
export function getLocal(key, defaultValue, needParse = false) {
    try {
        const localData = localStorage.getItem(globalTypes.LOCAL_PREFIX + key)

        if (localData !== null) {
            // 判断是否需要parse，数字字符串会被parse成Number类型，'123abc'这种类型字符串会报错，这两种字符串都不需要parse
            const parsedData = (needParse && JSON.parse(localData)) || localData

            // 存在默认值则进入下一步判断、不存在直接返回
            if (defaultValue !== undefined) {
                // 判断类型是否相同（这里不考虑NaN），相等返回解析后的数据，不相等则抛出错误
                if (
                    Object.prototype.toString.call(defaultValue) ===
                    Object.prototype.toString.call(parsedData)
                ) {
                    return {
                        data: parsedData,
                        success: true
                    }
                } else {
                    throw new Error(
                        `parsedData:${parsedData}与defaultValue:${defaultValue}类型不相等`
                    )
                }
            } else {
                return {
                    data: parsedData,
                    success: true
                }
            }
        } else {
            // 如果没有local记录，返回错误提醒，同时将默认值返回
            return {
                data: defaultValue,
                success: false
            }
        }
    } catch (error) {
        return {
            success: false,
            error
        }
    }
}

/**
 * 删除本地存储
 * @export
 * @param {*} key
 */
export function clearLocal(key) {
    localStorage.removeItem('LOCAL_' + key)
}
