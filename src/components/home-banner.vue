<template>
    <van-swipe class="banner-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, key) in bannerList" :key="key">
            <a :href="item.IndexBannerAddress">
                <img :src="item.IndexBannerPic" />
            </a>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import { mapState } from 'vuex'
import { Swipe, SwipeItem } from 'vant'

export default {
    name: 'home-banner',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    computed: {
        ...mapState({
            bannerList({ storeInfo }) {
                return storeInfo.BannerList || []
            }
        })
    }
}
</script>

<style lang="less" scoped>
.banner-swipe {
    margin: 10px 0;

    &.van-swipe .van-swipe-item {
        color: #fff;
        height: 175px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
