<template>
    <div class="layout-main">
        <main class="content">
            <slot />
        </main>
        <Tabbar />
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
    name: 'layout-tab',
    components: {
        [Tabbar.name]: Tabbar
    }
}
</script>

<style lang="less" scoped>
.layout-main {
    padding-top: 10px;
    .content {
        padding-bottom: 50px;
    }
}
</style>
