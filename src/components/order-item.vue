<template>
    <div class="order-item">
        <div class="header">
            <p class="order-no van-ellipsis">
                {{ '订单编号：' + order.OrderNo }}
            </p>
            <span class="price">
                {{ '¥' + order.PayMoney }}
            </span>
        </div>
        <div class="time">
            {{ time | formatTime('YYYY-MM-DD hh:mm:ss') }}
        </div>
        <div class="goods-list">
            <van-card
                v-for="item in order.Goods"
                :key="item.GoodId"
                :num="item.Number"
                :price="item.Price + '.00'"
                :title="item.GoodName"
                :thumb="item.GoodImgUrl"
            />
        </div>
        <div class="order-operation">
            <div class="order-status">
                {{ '订单状态：' + order.OrderTypeName }}
            </div>
            <van-button type="default" size="small">
                删除订单
            </van-button>
        </div>
    </div>
</template>

<script>
import { Card, Button } from 'vant'
export default {
    name: 'order-item',
    components: {
        [Card.name]: Card,
        [Button.name]: Button
    },
    props: {
        order: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        time() {
            return this.order.OrderTime.replace(/[^0-9]/gi, '')
        }
    }
}
</script>

<style lang="less">
.order-item {
    padding: 5px 0;
    border-top: 1px solid #666666;
    color: #666666;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        white-space: nowrap;

        .order-no {
            font-size: @font-size-sm;
        }
        .price {
            color: #ee0a24;
            font-size: @font-size-md;
            font-weight: 600;
            padding-left: 20px;
        }
    }
    .time {
        font-size: 12px;
    }
    .goods-list {
        padding: 5px 0;
        .van-card {
            background-color: #fff;
            .van-card__content {
                padding-top: 15px;
            }
        }
    }
    .order-operation {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .order-status {
            padding-left: 10px;
            font-size: @font-size-md;
        }
    }
}
</style>
