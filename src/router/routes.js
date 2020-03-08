export default [
    {
        path: '*',
        redirect: '/goods'
    },
    {
        name: 'user',
        component: () => import('@/views/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'cart',
        component: () => import('@/views/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('@/views/goods'),
        meta: {
            title: '商品详情'
        }
    }
]
