<template>
    <layout-tab>
        <home-header />
        <home-banner />
        <home-category />
        <goods-list />
        <goods-submit-bar />
    </layout-tab>
</template>

<script>
import LayoutTab from '@/layouts/layout-tab'
import IndexHeader from '@/components/home-header'
import Banner from '@/components/home-banner'
import Category from '@/components/home-category'
import GoodsList from '@/components/goods-list'
import GoodsSubmitBar from '@/components/goods-submit-bar'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        [LayoutTab.name]: LayoutTab,
        [IndexHeader.name]: IndexHeader,
        [Banner.name]: Banner,
        [Category.name]: Category,
        [GoodsList.name]: GoodsList,
        [GoodsSubmitBar.name]: GoodsSubmitBar
    },
    computed: {
        ...mapState({
            title({ storeInfo }) {
                return storeInfo.storename || ''
            }
        })
    },
    async created() {
        await this.getGoodsCategoryList()
        document.title = this.title
    },
    methods: {
        ...mapActions('goods', ['getGoodsCategoryList'])
    }
}
</script>
<style lang="less"></style>
