import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import '@/style/global.less'
import '@/global-components'
import '@/filters'

Vue.config.productionTip = false

var EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function() {
            return EventBus
        }
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
