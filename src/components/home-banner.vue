<template>
    <a class="banner" :href="storeInfo.bannerHref">
        <img :src="storeInfo.bannerSrc" />
    </a>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'home-banner',
    computed: {
        ...mapState(['storeInfo'])
    }
}
</script>

<style lang="less" scoped>
.banner {
    display: block;
    padding: 15px 15px 0;
    border-radius: 15px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
