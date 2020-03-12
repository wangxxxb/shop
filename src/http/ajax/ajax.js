import Service from './service'

/**
 *生成ajax
 *
 * @class Ajax
 */
export default class Ajax extends Service {
    constructor(axios, config) {
        super(axios, config)
    }

    response = async ({ method = 'get', url, params, data, configExt }) => {
        // 配置config
        const config = {
            method,
            url,
            params,
            data,
            ...configExt
        }
        try {
            return await this.service(config)
        } catch (error) {
            console.warn(error)
            return error
        } finally {
            // console.log('finally');
        }
    }

    get = async (url, params = {}, configExt = {}) => {
        return await this.response({ url, params, configExt })
    }

    post = async (url, data, configExt = {}) => {
        return await this.response({
            method: 'post',
            url,
            data,
            configExt
        })
    }

    put = async (url, data, configExt = {}) => {
        return await this.reseponse({ method: 'put', url, data, configExt })
    }

    delete = async (url, configExt = {}) => {
        return await this.reseponse({ method: 'delete', url, configExt })
    }

    getList = async (url, params = {}, configExt = {}) => {
        return await this.response({ url, params, configExt })
    }
}
