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
        name: 'room-service',
        component: () => import('@/views/room-service'),
        meta: {
            title: '客房服务'
        }
    },
    {
        name: 'user-center',
        component: () => import('@/views/user-center'),
        meta: {
            title: '个人中心'
        }
    },
    {
        name: 'hotel-evaluation',
        component: () => import('@/views/hotel-evaluation'),
        meta: {
            title: '评价酒店'
        }
    },
    {
        name: 'payment',
        component: () => import('@/views/Payment'),
        meta: {
            title: '支付'
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
