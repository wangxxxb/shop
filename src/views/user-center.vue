<template>
    <layout-tab class="user-center">
        <check-in-info />
        <order-list />
    </layout-tab>
</template>

<script>
import LayoutTab from '@/layouts/layout-tab'
import CheckInInfo from '@/components/check-in-info'
import OrderList from '@/components/order-list'

export default {
    name: 'user-center',
    components: {
        [LayoutTab.name]: LayoutTab,
        [CheckInInfo.name]: CheckInInfo,
        [OrderList.name]: OrderList
    }
}
</script>

<style lang="less">
.user-center {
    background-color: #f5f6f7;
    min-height: 100vh;
    > .content {
        padding-top: 0 !important;
    }
}
</style>
