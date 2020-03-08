import md5 from 'md5'

export function getUrlPara(agentId, goods, hotelId, openid, roomId, total_fee) {
    console.log(goods)
    console.log(total_fee)

    const str =
        'agentId=' +
        agentId +
        '&body=购物&goods=' +
        decodeURIComponent(
            '%5b%7b%22goodId%22%3a10002%2c%22number%22%3a1%2c%22price%22%3a5%7d%2c%7b%22goodId%22%3a10003%2c%22number%22%3a1%2c%22price%22%3a5%7d%5d'
        ) +
        '&hotelId=' +
        hotelId +
        '&openid=' +
        openid +
        '&roomId=' +
        roomId +
        '&total_fee=10' +
        '&key=' +
        '7ec44a99309011eab518-00163e0a8f8a'

    return str + '&sign=' + md5(str.trim())
}
