import ajax from '../ajax'
import apis from '../apis'

export async function pushEvalution(params) {
    const res = await ajax.get(apis['hotel-evalution'].evalution, params, {
        md5: true
    })
    console.log(res)
}
