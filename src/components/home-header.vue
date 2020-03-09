<template>
    <div class="index-header">
        <h1 class="room-location">
            香格里拉大酒店——707号房
        </h1>
        <div class="tel">
            前台电话
            <span>
                0755-8889889
            </span>
            <span>
                0755-8889889
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home-header'
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
