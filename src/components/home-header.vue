<template>
    <div class="index-header">
        <h1 class="room-location">
            {{ storeInfo.hotelName }}—{{ storeInfo.roomName }}号房
        </h1>
        <div class="tel">
            前台电话
            <span>
                {{ storeInfo.phoneNum1 }}
            </span>
            <span>
                {{ storeInfo.phoneNum2 }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'home-header',
    computed: {
        ...mapState(['storeInfo'])
    }
}
</script>

<style lang="less" scoped>
.index-header {
    color: @main-color-prime;
    padding: 0 15px;

    .room-location {
        font-size: @font-size-lg;
    }
    .tel {
        font-size: @font-size-sm;
    }
}
</style>
