export const WEIXIN = 'WEIXIN'
export const ALI = 'ALI'
export const LOCAL_PREFIX = 'LOCAL_'
export const USER_INFO_KEYMAP = [
    'agent',
    'hotelId',
    'roomId',
    'userId',
    'heardImg',
    'nickname'
]
export const USER_INFO = 'USER_INFO'

export const MENU = [
    {
        name: '首页',
        routerName: 'index',
        icon: 'wap-home-o',
        link: '/'
    },
    {
        name: '客房服务',
        routerName: 'room-service',
        icon: 'service-o',
        link: '/room-service'
    },
    {
        name: '评价酒店',
        routerName: 'hotel-evaluation',
        icon: 'edit',
        link: '/hotel-evaluation'
    },
    {
        name: '个人中心',
        routerName: 'user-center',
        icon: 'user-o',
        link: '/user-center'
    }
]
