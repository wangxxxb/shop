module.exports = {
    title: '酒店在线超市',
    port: 8080,
    // 预留用来获取子域名路径
    getSubPath() {
        return '/'
    },
    wxSdkSrc: 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js',
    md5Key: '7ec44a99309011eab518-00163e0a8f8a',
    testGoods:
        '%5b%7b%22goodId%22%3a10002%2c%22number%22%3a1%2c%22price%22%3a5%7d%2c%7b%22goodId%22%3a10003%2c%22number%22%3a1%2c%22price%22%3a5%7d%5d'
}
