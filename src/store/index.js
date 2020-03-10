import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /index\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\/index\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default new Vuex.Store({
    ...global,
    modules
})
