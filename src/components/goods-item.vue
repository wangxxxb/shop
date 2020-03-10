<template>
    <div class="goods-item">
        <div class="img-content">
            <img src="../assets/img/bannner.png" />
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
                        {{ goodsInfo.Price }}
                    </span>
                </div>
                <div class="count-controller">
                    <van-stepper
                        disabled-input
                        :value="value"
                        async-change
                        @change="onChange"
                        min="0"
                        button-size="22px"
                    />
                </div>
            </div>
            <div class="stock-quantity">仅剩{{ goodsInfo.Count }}件</div>
        </div>
    </div>
</template>

<script>
import { Stepper } from 'vant'

export default {
    name: 'goods-item',
    components: {
        [Stepper.name]: Stepper
    },
    props: {
        goodsInfo: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            value: 0
        }
    },
    methods: {
        onChange(value) {
            this.value = value
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
        width: 120px;
        height: 80px;
        border-radius: 12px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info-content {
        width: calc(100% - 130px);
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
