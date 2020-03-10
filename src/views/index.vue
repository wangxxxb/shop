<template>
    <layout-tab>
        <home-header />
        <home-banner />
        <home-category />
        <goods-list />
        <home-banner />
        <home-banner />
        <home-banner />
        <home-banner />
        <home-banner />
        <home-banner />
        <home-banner />
    </layout-tab>
</template>

<script>
import LayoutTab from '@/layouts/layout-tab'
import IndexHeader from '@/components/home-header'
import Banner from '@/components/home-banner'
import Category from '@/components/home-category'
import GoodsList from '@/components/goods-list'
import { mapActions } from 'vuex'

export default {
    components: {
        [LayoutTab.name]: LayoutTab,
        [IndexHeader.name]: IndexHeader,
        [Banner.name]: Banner,
        [Category.name]: Category,
        [GoodsList.name]: GoodsList
    },
    async created() {
        await this.getGoodsCategoryList()
    },
    methods: {
        ...mapActions('goods', ['getGoodsCategoryList'])
    }
}
</script>
<style lang="less"></style>
