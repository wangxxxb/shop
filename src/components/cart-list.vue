<template>
    <div class="cart-list">
        <div class="title">已选商品{{ cartGoodsCounts }}件</div>
        <div class="list-content">
            <goods-item
                v-for="item in cartGoodsList"
                :key="`key-${item.Id}`"
                :goods-info="item"
                :set-cart-good="setCartGood"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import GoodsItem from '@/components/goods-item'

export default {
    name: 'cart-list',
    components: {
        [GoodsItem.name]: GoodsItem
    },
    computed: {
        ...mapGetters('goods', ['cartGoodsCounts']),
        ...mapState('goods', ['cartGoodsList'])
    },
    watch: {
        cartGoodsCounts(curVal) {
            if (!curVal) this.$router.replace('/')
        }
    },
    methods: {
        ...mapActions('goods', ['setCartGood'])
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
