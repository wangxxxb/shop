<template>
    <div :class="[hasGoods && 'bottom-blank', 'layout-main']">
        <slot />
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'layouts',
    // computed: {
    //     ...mapGetters()
    // },
    data() {
        return {
            hasGoods: true // 默认为true，之后使用mapGetters 获取购物车中商品数量来判断是否显示底部padding
        }
    }
}
</script>

<style lang="less" scoped>
.layout-main {
    padding: 10px 0 45px 0;
    &.bottom-blank {
        padding-bottom: 95px;
    }
}
</style>
