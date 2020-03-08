<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { dynamicScript } from '@/utils'
import { mapMutations, mapState } from 'vuex'
import { SET_BRIDGE_READY } from '@/store/global/mutation-types'
import { WEIXIN } from '@/constants/global'

export default {
    computed: {
        ...mapState(['browserType'])
    },
    methods: {
        ...mapMutations([SET_BRIDGE_READY])
    },
    async created() {
        // 初始化判断浏览器环境，如果是微信浏览器，就添加微信sdk
        if (this.browserType === WEIXIN)
            await dynamicScript('http://res.wx.qq.com/open/js/jweixin-1.0.0.js')
        this[SET_BRIDGE_READY]()
    }
}
</script>
