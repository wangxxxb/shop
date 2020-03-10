<template>
    <div class="cart-list">
        <div class="title">已选商品{{ cartGoodsCounts }}件</div>
        <div class="list-content">
            <cart-goods-item
                v-for="item in cartGoodsList"
                :key="item.Id"
                :goods-info="item"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import CartGoodsItem from '@/components/cart-goods-item'

export default {
    name: 'cart-list',
    components: {
        [CartGoodsItem.name]: CartGoodsItem
    },
    computed: {
        ...mapGetters('goods', ['cartGoodsCounts', 'cartGoodsTotalPrice']),
        ...mapState('goods', ['cartGoodsList'])
    }
}
</script>
<style lang="less" scoped>
.cart-list {
    background-color: #fff;
    padding: 0 10px 10px;
    border-radius: 12px;

    .title {
        padding: 10px 0;
        border-bottom: 1px solid #edefed;
        font-size: @font-size-md;
    }
    .list-content {
        padding-top: 10px;
    }
}
</style>
