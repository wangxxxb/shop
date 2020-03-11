<template>
    <layout-tab class="hotel-evaluation">
        <div class="hotel-evaluation-content">
            <div class="rate">
                <span class="fileds-name">
                    满意度：
                </span>
                <van-rate
                    v-model="gradeStar"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                />
            </div>
            <div class="suggest">
                <p class="fileds-name">
                    评价建议：
                </p>
                <van-field
                    v-model="content"
                    rows="4"
                    autosize
                    type="textarea"
                    maxlength="50"
                    placeholder="请输入您的评价"
                />
            </div>
            <div class="button">
                <van-button v-touch:tap="onTap" type="info">提 交</van-button>
            </div>
        </div>
    </layout-tab>
</template>

<script>
import LayoutTab from '@/layouts/layout-tab'
import { Rate, Field, Button, Dialog } from 'vant'
import { pushEvalution } from '@/http/request/hotel-evalution'
import { mapState } from 'vuex'

export default {
    name: 'hotel-evaluation',
    components: {
        [LayoutTab.name]: LayoutTab,
        [Rate.name]: Rate,
        [Field.name]: Field,
        [Button.name]: Button,
        [Dialog.name]: Dialog
    },
    data() {
        return {
            gradeStar: 0,
            content: ''
        }
    },
    computed: {
        ...mapState({
            info(state) {
                const {
                    agent: agentId,
                    hotelId,
                    roomId: roomNo,
                    userId: openId
                } = state.userInfo

                return {
                    agentId,
                    hotelId,
                    roomNo,
                    openId
                }
            }
        })
    },
    methods: {
        async onTap() {
            const {
                info: { agentId, hotelId, roomNo, openId },
                gradeStar,
                content
            } = this

            const params = {
                agentId,
                content: encodeURI(content),
                gradeStar,
                hotelId,
                openId,
                roomNo
            }

            const res = await pushEvalution(params)

            if (res) {
                Dialog.alert({
                    title: '评价酒店',
                    message: '感谢您的评价与建议，有您的评价我们会更加努力！'
                }).then(() => {
                    this.$router.push('/')
                })
            }
        }
    }
}
</script>

<style lang="less">
.hotel-evaluation {
    height: 100vh;
    &-content {
        padding: 40px 20px 0;
        overflow-y: auto;
        box-sizing: border-box;
        height: calc(100vh - 64px);
        .fileds-name {
            font-size: @font-size-sm;
        }
        .rate {
            display: flex;
            align-items: center;
        }
        .suggest {
            margin-top: 20px;
            .van-cell.van-field {
                margin-top: 10px;
                border: 1px solid #cccccc;
            }
        }
        .button {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .van-button.van-button--info {
                width: 180px;
                margin-top: 25px;
            }
        }
    }
}
</style>
