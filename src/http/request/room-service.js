import ajax from '../ajax'
import apis from '../apis'

export async function pushRoomService(params) {
    console.log(params)
    const res = await ajax.get(apis['room-service'].pushRoomService, params, {
        md5: true
    })
    console.log(res)
}
