<template>
    <div class="goods-item">
        <div class="img-content">
            <img :src="goodsInfo.Picture" />
        </div>
        <div class="info-content">
            <div class="goods-name">
                {{ goodsInfo.Name }}
            </div>
            <div class="price-content">
                <div class="price-info">
                    <span class="price-currency">
                        ¥
                    </span>
                    <span class="price-integer">
                        {{ goodsInfo.Price / 100 }}
                    </span>
                </div>
                <div class="count-controller">
                    <goods-stepper
                        :value="goodsInfo.counts"
                        :on-change="onChange"
                        :min="0"
                        :max="goodsInfo.Count"
                    />
                </div>
            </div>
            <div class="stock-quantity">仅剩{{ goodsInfo.Count }}件</div>
        </div>
    </div>
</template>

<script>
import GoodsStepper from '@/components/goods-stepper'

export default {
    name: 'goods-item',
    components: {
        [GoodsStepper.name]: GoodsStepper
    },
    props: {
        goodsInfo: {
            type: Object,
            default: () => {}
        },
        setCartGood: {
            type: Function,
            default: () => () => {}
        }
    },
    methods: {
        onChange(value) {
            this.setCartGood({
                goods: this.goodsInfo,
                isIncrease: value === 1
            })
        }
    }
}
</script>
<style lang="less" scoped>
.goods-item {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    .img-content {
        width: 88px;
        height: 88px;
        border-radius: 12px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info-content {
        width: calc(100% - 98px);
        .goods-name {
            font-size: @font-size-md;
        }
        .price-content {
            padding: 12px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .price-info {
                color: #ee0a24;
                .price-currency {
                    font-size: @font-size-sm;
                }
                .price-integer {
                    font-size: @font-size-md;
                    font-weight: 600;
                }
            }
        }
    }
    .stock-quantity {
        font-size: @font-size-sm;
        color: #666666;
    }
}
</style>
