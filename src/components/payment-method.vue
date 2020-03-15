<template>
    <div class="payment-method" v-if="paymentEnv">
        <div class="title">请选择支付方式</div>
        <div class="content">
            <van-radio-group v-model="paymentType">
                <div v-if="paymentEnv === 'WEIXIN'" class="pay-type">
                    <div class="pay-type-info">
                        <img src="../assets/icon/weChat.svg" />
                        <span class="pay-name">微信支付</span>
                    </div>
                    <van-radio name="WEIXIN" />
                </div>
                <div v-if="paymentEnv === 'ALI'" class="pay-type">
                    <div class="pay-type-info">
                        <img src="../assets/icon/aliPay.svg" />
                        <span class="pay-name">支付宝支付</span>
                    </div>
                    <van-radio name="ALI" />
                </div>
            </van-radio-group>
        </div>
        <van-submit-bar
            :disabled="!paymentType"
            :price="cartGoodsTotalPrice"
            button-text="立即支付"
            @submit="onSubmit"
        />
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { RadioGroup, Radio, SubmitBar } from 'vant'

export default {
    name: 'payment-method',
    components: {
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [SubmitBar.name]: SubmitBar
    },
    computed: {
        ...mapState({
            paymentEnv({ browserType }) {
                return process.env.VUE_APP_ENV !== 'production'
                    ? browserType || 'ALI'
                    : browserType
            }
        }),
        ...mapGetters('goods', ['cartGoodsTotalPrice'])
    },
    data() {
        return {
            paymentType: null
        }
    },
    created() {
        this.paymentType = this.paymentEnv
    },
    methods: {
        ...mapActions('goods', ['pay']),
        onSubmit() {
            this.pay(this.paymentType)
        }
    }
}
</script>

<style lang="less" scoped>
.payment-method {
    margin-top: 30px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 12px;
    .title {
        padding: 10px 0;
        border-bottom: 1px solid #edefed;
        font-size: @font-size-md;
    }
    .content {
        padding-top: 10px;
        .pay-type {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:first-child {
                margin-bottom: 10px;
            }

            .pay-type-info {
                display: flex;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
