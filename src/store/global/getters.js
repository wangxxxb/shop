export default {
    isAccessEnter({ userInfo }) {
        const verificationKeys = ['agent', 'hotelId', 'roomId', 'userId']
        let flag = true

        verificationKeys.forEach((key) => {
            if (typeof userInfo[key] !== 'string' || !userInfo[key].trim()) {
                flag = false
            }
        })

        return flag
    }
}
