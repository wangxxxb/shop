<template>
    <layout-tab>
        <home-header />
        <home-banner />
        <home-category />
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

export default {
    components: {
        [LayoutTab.name]: LayoutTab,
        [IndexHeader.name]: IndexHeader,
        [Banner.name]: Banner,
        [Category.name]: Category
    }
}
</script>
<style lang="less"></style>
