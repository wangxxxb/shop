<template>
    <van-dialog
        v-model="show"
        @confirm="confirm"
        show-cancel-button
        :before-close="beforeClose"
        title="申请退款"
    >
        <div class="content">
            <div class="title">
                退款原因：
            </div>
            <div class="reason">
                <van-radio-group v-model="radio">
                    <van-cell-group>
                        <van-cell
                            title="送货时间太长，未收到货"
                            clickable
                            @click="radio = '0'"
                        >
                            <van-radio slot="right-icon" name="0" />
                        </van-cell>
                        <van-cell
                            title="不想要了"
                            clickable
                            @click="radio = '1'"
                        >
                            <van-radio slot="right-icon" name="1" />
                        </van-cell>
                        <van-cell
                            title="不想要了"
                            clickable
                            @click="radio = '2'"
                        >
                            <template slot="title">
                                <div class="input-container">
                                    <span class="custom-title">其他原因：</span>
                                    <van-field
                                        v-model="reason"
                                        placeholder="请输入"
                                    />
                                </div>
                            </template>
                            <van-radio slot="right-icon" name="2" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
        </div>
    </van-dialog>
</template>

<script>
import { Dialog, RadioGroup, Radio, Cell, CellGroup, Field } from 'vant'
import { SHOW_ORDER_REFUND_DIALOG } from '@/constants/bus'

export default {
    name: 'order-refund',
    components: {
        [Dialog.Component.name]: Dialog.Component,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field
    },
    data() {
        return {
            show: false,
            radio: '0',
            radioMap: ['送货时间太长，未收到货', '不想要了'],
            reason: ''
        }
    },
    mounted() {
        this.$bus.$on(SHOW_ORDER_REFUND_DIALOG, () => {
            this.show = true
        })
    },
    methods: {
        confirm() {
            if (this.radio === '2' && !this.reason.trim()) return
        },
        beforeClose(action, done) {
            if (this.radio === '2' && !this.reason.trim()) {
                done(false)
                return Dialog.alert({
                    title: '提示',
                    message: '请勿输入空消息'
                })
            }
            done()
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 20px 10px 15px;
    .title {
        font-size: @font-size-md;
        padding-bottom: 15px;
    }
    .input-container {
        display: flex;
        align-items: center;
        .custom-title {
            white-space: nowrap;
        }
    }
}
</style>
