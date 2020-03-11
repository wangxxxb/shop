<template>
    <div :class="[flow === 'in' ? '' : 'isOut', 'msg-item']">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'msg-item',
    props: {
        flow: {
            type: String,
            default: 'in'
        },
        msg: {
            type: String,
            default: '',
            validator(msg) {
                return typeof msg === 'string' && msg.trim() !== ''
            }
        }
    }
}
</script>

<style lang="less">
.msg-item {
    border: 1px solid #cccccc;
    max-width: 260px;
    min-width: 50px;
    border-radius: 5px;
    padding: 10px;
    color: #999999;
    font-size: @font-size-md;
    margin: 10px 0;

    &.isOut {
        color: #ffffff;
        background-color: @main-color-prime;
        align-self: flex-end;
    }
}
</style>
