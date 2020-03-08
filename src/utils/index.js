import { globalTypes } from '@/constants'

/**
 * @export 判断获取运行所处的浏览器环境
 * @returns 浏览器环境
 */
export function getNavigatorType() {
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
