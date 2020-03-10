<template>
    <div class="category">
        <h4 class="category-title">全部分类</h4>
        <van-sticky>
            <div class="category-content">
                <van-button
                    v-for="(item, key) in categoryList"
                    :key="`key-${key}`"
                    @click="onClick(item.Id)"
                    plain
                    :type="activeCategoryId === item.Id ? 'primary' : 'default'"
                    size="mini"
                >
                    {{ item.CategoryName }}
                </van-button>
            </div>
        </van-sticky>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Sticky, Button } from 'vant'

export default {
    name: 'home-category',
    components: {
        [Sticky.name]: Sticky,
        [Button.name]: Button
    },
    computed: {
        ...mapState('goods', ['categoryList', 'activeCategoryId'])
    },
    methods: {
        ...mapActions('goods', ['setActiveCategory']),
        onClick(id) {
            if (id !== this.activeCategoryId) {
                this.setActiveCategory(id)
            }
        }
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

            &.van-button--primary {
                color: @main-color-prime;
                border-color: @main-color-prime;
            }
        }
    }
}
</style>
