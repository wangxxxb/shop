export default {
    isAccessEnter({ userInfo, browserType }) {
        // 默认生产环境才开启浏览器识别
        if (!browserType && process.env.VUE_APP_ENV === 'production')
            return { access: false, msg: '请在支付宝或者微信浏览器打开的页面' }

        const verificationKeys = ['agent', 'hotelId', 'roomId', 'userId']
        let flag = true

        verificationKeys.forEach((key) => {
            if (typeof userInfo[key] !== 'string' || !userInfo[key].trim()) {
                flag = false
            }
        })

        return {
            access: flag,
            msg: flag ? 'ok' : '用户信息异常，请重新扫码登录'
        }
    }
}
