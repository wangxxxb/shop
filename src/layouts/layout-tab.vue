<template>
    <div :class="[hasGoods && 'bottom-blank', 'layout-main']">
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
    },
    data() {
        return {
            hasGoods: true
        }
    }
}
</script>

<style lang="less" scoped>
.layout-main {
    padding: 10px 0 45px 0;
    &.bottom-blank {
        padding-bottom: 95px;
    }
    .content {
        padding-bottom: 50px;
    }
}
</style>
