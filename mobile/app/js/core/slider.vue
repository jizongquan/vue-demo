<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        props:{
            options:{
                type:Object,
                default(){
                    return{
                        autoplay:true,//是否自动播放
                        loop:true,//是否循环
                        pagination:{//是否加小点
                            el:'.swiper-pagination'
                        },
                        notNextTick:false
                    }
                }
            },
            items:{
                type:Array,
                default(){
//                    return [{href:'',src:''}]
                    return []

                }
            },
            cname:{
                type:String,
                default:''
            },
        },
        data(){
            return{

            }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>
<style lang="scss">
    @import '~swiper/dist/css/swiper.css';
    .swiper-pagination{
        bottom:15px!important;
        .swiper-pagination-bullet{
            height: 14px;
            width: 14px;
            margin: 0 6px!important;
        }
    }
</style>