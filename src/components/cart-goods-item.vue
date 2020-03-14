<template>
    <div class="cart-goods-item">
        <van-card
            :num="goodsInfo.counts"
            :price="goodsInfo.Price / 100 + '.00'"
            :title="goodsInfo.Name"
            :thumb="goodsInfo.Picture"
        />
    </div>
</template>

<script>
import { Card } from 'vant'

export default {
    name: 'cart-goods-item',
    components: {
        [Card.name]: Card
    },
    props: {
        goodsInfo: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="less">
.cart-goods-item {
    .van-card {
        background-color: #ffffff;
    }
}
</style>
