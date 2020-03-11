import ajax from '../ajax'
import apis from '../apis'

export async function pushEvalution(params) {
    const { success, msg } = await ajax.get(
        apis['hotel-evalution'].evalution,
        params,
        {
            md5: true
        }
    )
    return { success, msg }
}
