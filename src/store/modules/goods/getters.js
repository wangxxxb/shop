export default {
    goodsList({ goodsList, cartGoodsList }) {
        return goodsList.map((item) => {
            const goods = cartGoodsList.find((_item) => _item.Id === item.Id)

            if (goods) {
                return {
                    ...item,
                    selectedCounts: goods.counts
                }
            }
            return item
        })
    },
    cartGoodsCounts({ cartGoodsList }) {
        return cartGoodsList.reduce((prev, cur) => {
            return prev + cur.counts
        }, 0)
    },
    cartGoodsTotalPrice({ cartGoodsList }) {
        return cartGoodsList.reduce((prev, cur) => {
            return prev + cur.counts * cur.Price
        }, 0)
    }
}
