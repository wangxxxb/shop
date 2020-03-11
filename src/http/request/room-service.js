import ajax from '../ajax'
import apis from '../apis'

export async function pushRoomService(params) {
    const { success, msg } = await ajax.get(
        apis['room-service'].pushRoomService,
        params,
        {
            md5: true
        }
    )
    return {
        success,
        msg
    }
}
