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
    padding: 10px 0 50px 0;
    .content {
        padding-bottom: 50px;
    }
}
</style>
