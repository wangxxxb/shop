<template>
    <div class="payment">
        <cart-list />
        <payment-method />
    </div>
</template>

<script>
import CartList from '@/components/cart-list'
import PaymentMethod from '@/components/payment-method'

export default {
    name: 'Payment',
    components: {
        [CartList.name]: CartList,
        [PaymentMethod.name]: PaymentMethod
    }
}
</script>
<style lang="less" scoped>
.payment {
    min-height: 100vh;
    padding: 15px 20px 60px;
    background-color: #f6f6f6;
}
</style>
