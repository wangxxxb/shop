<template>
    <div class="category">
        <h4 class="category-title">全部分类</h4>
        <van-sticky>
            <div class="category-content">
                <van-button plain type="default" size="mini">
                    基础用法
                </van-button>
                <van-button plain type="default" size="mini">
                    基础用法
                </van-button>
            </div>
        </van-sticky>
    </div>
</template>

<script>
import { Sticky, Button } from 'vant'
export default {
    name: 'home-category',
    components: {
        [Sticky.name]: Sticky,
        [Button.name]: Button
    }
}
</script>

<style lang="less">
.category {
    &-title {
        padding-left: 15px;
    }
    &-content {
        width: 100%;
        height: 35px;
        background-color: #fff;
        overflow: hidden;
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        .van-button {
            min-width: fit-content;
            padding: 0 15px;
            margin-left: 15px;
            overflow: hidden;
            white-space: nowrap;
            box-shadow: 0 0 3px 1px #eeeeee;
        }
    }
}
</style>
