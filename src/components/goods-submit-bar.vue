<template>
    <div class="goods-submit-bar">
        <van-submit-bar
            v-show="cartGoodsCounts > 0"
            :price="cartGoodsTotalPrice"
            button-text="去支付"
            @submit="onSubmit"
        >
            <div class="cart-icon">
                <span class="counts">
                    <van-tag round size="medium" type="danger">
                        {{ cartGoodsCounts }}
                    </van-tag>
                </span>
                <van-icon name="cart" size="25" color="#199ed8" />
            </div>
        </van-submit-bar>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { SubmitBar, Icon, Tag } from 'vant'
import { setLocal } from '@/utils'
import { CART } from '@/constants/cart'

export default {
    name: 'goods-submit-bar',
    components: {
        [SubmitBar.name]: SubmitBar,
        [Icon.name]: Icon,
        [Tag.name]: Tag
    },
    computed: {
        ...mapGetters('goods', ['cartGoodsCounts', 'cartGoodsTotalPrice']),
        ...mapState('goods', ['cartGoodsList'])
    },
    methods: {
        onSubmit() {
            setLocal(CART, JSON.stringify(this.cartGoodsList))
            this.$router.push('/payment')
        }
    }
}
</script>

<style lang="less">
.goods-submit-bar {
    .van-submit-bar {
        bottom: 50px;
    }
    .van-button__text {
        background-color: transparent;
    }
    .cart-icon {
        position: relative;
        .counts {
            position: absolute;
            top: -10px;
            right: -8px;
            z-index: 999;
            transform: scale(0.75);
        }
    }
}
</style>
