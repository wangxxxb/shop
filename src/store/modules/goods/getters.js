export default {
    goodsList({ goodsList, cartGoodsList }) {
        return goodsList.map((item) => {
            const goods = cartGoodsList.find((_item) => _item.Id === item.Id)

            return goods
                ? {
                      ...item,
                      counts: goods.counts
                  }
                : item
        })
    },
    cartGoodsCounts({ cartGoodsList }) {
        return cartGoodsList.reduce((prev, cur) => prev + cur.counts, 0)
    },
    cartGoodsTotalPrice({ cartGoodsList }) {
        return cartGoodsList.reduce(
            (prev, cur) => prev + cur.counts * cur.Price,
            0
        )
    }
}
