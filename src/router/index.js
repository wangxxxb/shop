import Vue from 'vue'
import Router from 'vue-router'
import { once } from '@/utils'
import { getUserInfo } from '@/utils/user'
import store from '@/store'
import routes from './routes'

Vue.use(Router)

// add route path
routes.forEach((route) => {
    route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes })

const initQuery = once(getUserInfo)

router.beforeEach((to, from, next) => {
    const backupQuery = (initQuery && initQuery(to.query)) || null
    if (!store.getters.isAccessEnter) {
        console.log(
            '退出程序，或者跳转到显示请在支付宝或者微信浏览器打开的页面'
        )
    } else {
        if (backupQuery) {
            next({
                ...to,
                query: backupQuery
            })
        } else {
            const title = to.meta && to.meta.title

            if (title) {
                document.title = title
            }
            next()
        }
    }
})

export { router }
