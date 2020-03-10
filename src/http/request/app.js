import ajax from '../ajax'
import apis from '../apis'
import { isObj } from '@/utils'

/**
 * 获取商店信息
 * @export
 * @returns
 */
export async function getStoreInfo() {
    const { success, data } = await ajax.post(apis.app.getStoreInfo)
    if (success && data && isObj(data[0])) {
        const {
            StoreName: storename,
            StoreLogo: logo,
            IndexBannerPic: bannerSrc,
            IndexBannerAddress: bannerHref,
            ComplaintPhone: phone,
            OrdeMessage: paySuccessMsg,
            WechatAddress: wxAddress
        } = data[0]

        return {
            storename,
            logo,
            bannerSrc,
            bannerHref,
            phone,
            paySuccessMsg,
            wxAddress
        }
    } else {
        return {}
    }
}

/**
 * 获取房间信息
 * @export
 * @param {*} data
 */
export async function getRoomInfo(ajaxData) {
    const { success, data } = await ajax.get(apis.app.getRoomInfo, ajaxData, {
        md5: true
    })
    if (success && data && isObj(data[0])) {
        const {
            HotelName: hotelName,
            RoomName: roomName,
            PhoneName1: phoneName1,
            PhoneNum1: phoneNum1,
            PhoneName2: phoneName2,
            PhoneNum2: phoneNum2
        } = data[0]

        return {
            hotelName,
            roomName,
            phoneName1,
            phoneNum1,
            phoneName2,
            phoneNum2
        }
    } else {
        return {}
    }
}
