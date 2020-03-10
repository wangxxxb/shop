import { getLocal } from '@/utils'
import { CART } from '@/constants/cart'

const { data } = getLocal(CART, [], true)

export default {
    categoryList: [],
    goodsList: [],
    activeCategoryId: null,
    cartGoodsList: data
}
