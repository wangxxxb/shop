<template>
    <layout-tab class="user-center">
        <check-in-info />
        <order-list>
            123
        </order-list>
    </layout-tab>
</template>

<script>
import { mapActions } from 'vuex'
import LayoutTab from '@/layouts/layout-tab'
import CheckInInfo from '@/components/check-in-info'
import OrderList from '@/components/order-list'

export default {
    name: 'user-center',
    components: {
        [LayoutTab.name]: LayoutTab,
        [CheckInInfo.name]: CheckInInfo,
        [OrderList.name]: OrderList
    },
    methods: {
        ...mapActions('order', ['getOrderList'])
    },
    mounted() {
        this.getOrderList()
    }
}
</script>

<style lang="less">
.user-center {
    > .content {
        padding-top: 0 !important;
    }
}
</style>
