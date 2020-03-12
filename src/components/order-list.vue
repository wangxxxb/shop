<template>
    <div class="order-list">
        <p class="title">
            购买记录
        </p>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <order-item
                v-for="item in orderList"
                :key="item.OrderNo"
                :order="item"
            />
        </van-list>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { List } from 'vant'
import OrderItem from '@/components/order-item'

export default {
    name: 'order-list',
    components: {
        [List.name]: List,
        [OrderItem.name]: OrderItem
    },
    computed: {
        ...mapState('order', {
            orderList: ({ orderList = [] }) => orderList,
            totalCount: ({ totalCount }) => totalCount
        })
    },
    data() {
        return {
            loading: false,
            finished: false
        }
    },
    methods: {
        ...mapActions('order', ['getOrderList']),
        async onLoad() {
            await this.getOrderList()
            this.loading = false
            this.finished = this.orderList.length >= this.totalCount
        }
    }
}
</script>

<style lang="less" scoped>
.order-list {
    margin: 0 15px;
    padding: 0 10px 10px;
    background-color: #ffffff;
    border-radius: 10px;

    .title {
        color: #666666;
        font-size: @font-size-md;
        padding: 10px 0;
    }
}
</style>
