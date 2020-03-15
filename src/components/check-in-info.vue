<template>
    <div class="check-in-info">
        <div class="main-info">
            <van-image
                round
                width="26.66667vw"
                height="26.66667vw"
                :src="info.heardImg"
            />
            <div class="info-content">
                <div class="user-name">{{ info.nickname }}</div>
                <div class="hotel-info">
                    <span v-if="info.hotelName" class="hotel-name">
                        {{ info.hotelName }}
                    </span>
                    <span v-if="info.hotelName && info.roomId">
                        -
                    </span>
                    <span v-if="info.roomId" class="room-info">
                        {{ +info.roomId + '号房欢迎您' }}
                    </span>
                    <p v-if="info.serviceTel" class="tel">
                        {{ '服务电话 ' + info.serviceTel }}
                    </p>
                </div>
            </div>
        </div>
        <div v-if="info.wxAddress || info.complaints" class="hotel-related">
            <div
                v-if="info.wxAddress && info.browserType === 'WEIXIN'"
                class="follow"
            >
                加盟/意见反馈请关注我们
                <a :href="info.wxAddress">
                    立即关注
                </a>
            </div>
            <div class="complaints-hotline">
                {{ '投诉电话：' + info.complaintPhone }}
            </div>
        </div>
    </div>
</template>

<script>
import { Image } from 'vant'
import { mapState } from 'vuex'

export default {
    name: 'check-in-info',
    components: {
        [Image.name]: Image
    },
    computed: {
        ...mapState({
            info(state) {
                const { heardImg, nickname, roomId } = state.userInfo
                const { browserType } = state

                const {
                    hotelName,
                    phoneNum1 = '',
                    wxAddress = null,
                    complaintPhone = ''
                } = state.storeInfo

                return {
                    heardImg,
                    nickname,
                    hotelName,
                    roomId,
                    serviceTel: phoneNum1,
                    wxAddress,
                    complaintPhone,
                    browserType
                }
            }
        })
    }
}
</script>

<style lang="less">
.check-in-info {
    .main-info {
        height: 150px;
        background-color: @main-bgco;
        padding: 15px;
        display: flex;
        justify-content: space-between;

        .info-content {
            width: calc(100% - 110px);
            margin-left: 10px;
            color: #ffffff;
            padding-top: 10px;

            .user-name {
                font-size: @font-size-lg;
                font-weight: 600;
            }
            .hotel-info {
                margin-top: 10px;

                .hotel-name,
                .room-info {
                    font-weight: 600;
                }
                .tel {
                    font-size: @font-size-sm;
                }
            }
        }
    }
    .hotel-related {
        background-color: #fff;
        padding: 15px 20px;
        margin: 0 15px;
        border-radius: 15px;
        box-shadow: rgba(101, 149, 244, 0.2) 0px 3px 7.5px 0px;
        font-size: @font-size-sm;
        color: #666666;
        transform: translateY(-20px);

        .follow {
            margin-bottom: 10px;
            a {
                color: @main-color-prime;
                margin-left: 15px;
                font-weight: 600;
            }
        }
    }
}
</style>
