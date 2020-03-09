<template>
    <div class="home">
        <index-header />
        <banner />
    </div>
</template>
<script>
import IndexHeader from '@/components/index-header'
import Banner from '@/components/banner'

export default {
    components: {
        [IndexHeader.name]: IndexHeader,
        [Banner.name]: Banner
    }
}
</script>
<style lang="less"></style>
