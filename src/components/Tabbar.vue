<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item
            v-for="(item, key) in menu"
            :icon="item.icon"
            :key="`key=${key}`"
        >
            {{ item.name }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { MENU } from '@/constants/global'

export default {
    name: 'Tabbar',
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0,
            menu: MENU
        }
    },
    methods: {
        onChange(index) {
            this.$router.push(this.menu[index].link)
        }
    }
}
</script>

<style lang="less" scoped></style>
