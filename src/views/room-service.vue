<template>
    <layout-tab class="room-service">
        <div class="room-service-content">
            123
        </div>
        <div class="room-service-input van-hairline--top van-hairline--bottom">
            <div class="msg-input">
                <van-field v-model="value" placeholder="请输入信息" border />
            </div>
            <div class="send">
                <van-button type="info">发送</van-button>
            </div>
        </div>
    </layout-tab>
</template>

<script>
import LayoutTab from '@/layouts/layout-tab'
import { Field, Button } from 'vant'

export default {
    name: 'room-service',
    components: {
        [LayoutTab.name]: LayoutTab,
        [Field.name]: Field,
        [Button.name]: Button
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="less">
.room-service {
    height: 100vh;
    &-content {
        overflow-y: auto;
        box-sizing: border-box;
        height: calc(100vh - 104px);
    }

    &-input {
        width: 100vw;
        position: fixed;
        bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .msg-input {
            flex: auto;
        }
        .send .van-button.van-button--info {
            width: 100px;
        }
    }
}
</style>
