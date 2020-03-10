<template>
    <div :class="[cartGoodsCounts > 0 ? 'show-blank' : '', 'goods-list']">
        <goods-item
            v-for="item in goodsList"
            :key="`key-${item.Id}`"
            :goods-info="item"
            :set-cart-good="setCartGood"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GoodsItem from '@/components/goods-item'

export default {
    name: 'goods-list',
    components: {
        [GoodsItem.name]: GoodsItem
    },
    computed: {
        ...mapGetters('goods', ['goodsList', 'cartGoodsCounts'])
    },
    methods: {
        ...mapActions('goods', ['setCartGood'])
    }
}
</script>

<style lang="less">
.goods-list {
    margin: 0 15px;
    border: 1px solid #ebefe0;
    border-radius: 10px;
    padding: 0 20px;
    &.show-blank {
        margin-bottom: 50px;
    }
}
</style>
