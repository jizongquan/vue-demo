<template>
    <panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取</swiper-slide>
                <swiper-slide>签到流量，1元500M</swiper-slide>
            </swiper>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel"
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        components:{
            panel,
            swiper,
            swiperSlide
        },
        data(){
            return{
                options:{
                    autoplay:true,//是否自动播放
                    loop:true,//是否循环
                    direction:"vertical"
                }
            }
        }
    }
</script>

<style lang="scss">
    .swiper-container-vertical{
        height: 72px;
        .swiper-slide{
            font-size: 28px;
            color: #333;
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        margin-top: 120px!important;
        @include panel;
        h4{
            display: none;
        }
        .content{
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 166px;
            background: url("//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png") left 6px no-repeat;
        }
    }
</style>