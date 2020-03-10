<template>
    <div class="goods-list">
        <goods-item
            v-for="item in goodsList"
            :key="`key-${item.Id}`"
            :goods-info="item"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GoodsItem from '@/components/goods-item'

export default {
    name: 'goods-list',
    components: {
        [GoodsItem.name]: GoodsItem
    },
    computed: {
        ...mapState('goods', ['goodsList'])
    }
}
</script>

<style lang="less">
.goods-list {
    margin: 0 15px;
    border: 1px solid #ebefe0;
    border-radius: 10px;
    padding: 0 20px;
}
</style>
