<template>
    <div class="goods-stepper">
        <div v-show="value > min" v-touch:tap="touchMinus" class="minus button">
            <img src="../assets/icon/minus.svg" />
        </div>
        <div class="counts" v-show="value > 0">{{ value }}</div>
        <div v-show="value < max" v-touch:tap="touchPlus" class="plus button">
            <img src="../assets/icon/plus.svg" />
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
    name: 'goods-stepper',
    components: {
        [Icon.name]: Icon
    },
    props: {
        value: {
            type: Number,
            default: 0
        },
        onChange: {
            type: Function,
            default: () => () => {}
        },
        max: {
            type: Number,
            default: -999
        },
        min: {
            type: Number,
            default: 99999
        }
    },
    methods: {
        touchMinus() {
            if (this.value > this.min) this.onChange(-1)
        },
        touchPlus() {
            if (this.value < this.max) this.onChange(1)
        }
    }
}
</script>

<style lang="less" scoped>
.goods-stepper {
    display: flex;
    align-items: center;
    .button {
        border: 1px solid #2c2c2c;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
        }
    }
    .counts {
        margin: 0 5px;
    }
}
</style>
