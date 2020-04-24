<template>
    <div class="index-header">
        <h1 class="room-location">
            {{ storeInfo.hotelName }}—{{ storeInfo.roomName }}房
        </h1>
        <div
            class="tel"
            v-for="(item, key) in storeInfo.phoneList"
            :key="key + '-key'"
        >
            <span class="tel-name">
                {{ item.name + '：' }}
            </span>
            <span v-if="Array.isArray(item.tel)" class="tel-num-list">
                <span class="tel-num" v-for="_item in item.tel" :key="_item">
                    {{ _item }}
                </span>
            </span>
            <span v-else class="tel-num">
                {{ item.tel }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'home-header',
    computed: {
        ...mapState({
            storeInfo({ storeInfo }) {
                const {
                    phoneName1 = '',
                    phoneNum1 = '',
                    phoneName2 = '',
                    phoneNum2 = '',
                    hotelName = '',
                    roomName
                } = storeInfo

                const list = [
                    {
                        name: phoneName1,
                        tel: phoneNum1
                    }
                ]

                //如果号码2存在，进行下一步判断
                if (phoneNum2.trim()) {
                    if (!phoneName2.trim()) {
                        list[0].tel = [list[0].tel, phoneNum2]
                    } else {
                        list.push({
                            name: phoneName2,
                            tel: phoneNum2
                        })
                    }
                }

                return {
                    phoneList: list,
                    hotelName,
                    roomName
                }
            }
        })
    }
}
</script>

<style lang="less" scoped>
.index-header {
    color: @main-color-prime;
    padding: 0 15px;

    .room-location {
        font-size: @font-size-lg;
    }
    .tel {
        font-size: @font-size-sm;
    }
}
</style>
