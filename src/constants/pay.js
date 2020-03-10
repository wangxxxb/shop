import settings from '@/settings'

// 支付需要的签名 可能会发生变化，后期可通过环境参数写入
export const SIGN = settings.md5Key

// 测试支付商品
export const TEST_GOODS = settings.testGoods
