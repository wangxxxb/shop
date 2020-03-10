import Ajax from './ajax'
import axios from 'axios'

const baseConfig = {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: '10000'
}

export default new Ajax(axios, baseConfig)
