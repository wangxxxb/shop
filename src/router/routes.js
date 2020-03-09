export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        component: () => import('@/views/index'),
        meta: {
            title: '酒店在线超市'
        }
    },
    {
        name: '404',
        component: () => import('@/views/404'),
        meta: {
            title: '404 Not Found'
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
]
