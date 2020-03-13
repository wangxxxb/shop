<template>
    <layout-tab class="room-service">
        <div class="room-service-content">
            <msg-item
                flow="in"
                msg="欢迎使用酒店客房服务，输入并发送您的需求内容即刻通知服务人员为您服务。如“我需要两条浴巾”或“我的房间需要打扫”"
            />

            <msg-item
                v-for="(item, key) in list"
                :key="`key-${key}`"
                :flow="item.flow"
                :msg="item.msg"
            />
        </div>
        <div class="room-service-input van-hairline--top van-hairline--bottom">
            <div class="msg-input">
                <van-field
                    v-model="currentMsg"
                    placeholder="请输入信息"
                    border
                />
            </div>
            <div class="send">
                <van-button v-touch:tap="submit" type="info">发送</van-button>
            </div>
        </div>
    </layout-tab>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Field, Button } from 'vant'
import LayoutTab from '@/layouts/layout-tab'
import MsgItem from '@/components/msg-item'

export default {
    name: 'room-service',
    components: {
        [LayoutTab.name]: LayoutTab,
        [Field.name]: Field,
        [Button.name]: Button,
        [MsgItem.name]: MsgItem
    },
    data() {
        return {
            currentMsg: ''
        }
    },
    computed: {
        ...mapState('service', {
            list: ({ msgList }) => {
                return msgList.reduce((prev, cur) => {
                    return prev.concat([
                        {
                            flow: 'out',
                            msg: cur
                        },
                        {
                            flow: 'in',
                            msg: '请稍等，我们以为您通知服务人员为您服务。'
                        }
                    ])
                }, [])
            }
        })
    },
    methods: {
        ...mapActions('service', ['sendMsg']),
        async submit() {
            this.sendMsg(this.currentMsg)
            this.currentMsg = ''
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
        padding: 0 20px;
        display: flex;
        flex-direction: column;
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
