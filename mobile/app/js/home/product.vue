<template>
    <panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">更多尖货&gt;</div>
            <slider :options="options" :items="items" cname="product-slider"></slider>
        </section>
    </panel>
</template>


<script>
    import panel from "../core/panel.vue"
    import slider from "../core/slider.vue"
    export default{
        components:{
            panel,
            slider
        },
        data(){
            return{
                items:[{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421'
                }],
                options:{
                   /* pagination:{//是否加小点
                        el:'.swiper-pagination',
                        clickable:true
                    },*/
                    slidesPerView:2.3,//一屏展示几个
                    spaceBetween:30,
                    freeMode:true
                }
            }
        }
    }
</script>


<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing:border-box;
            padding: 0 24px;
            .swiper-slide{
                a{
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            position: relative;
            .arrow{
                position: absolute;
                font-size: 28px;
                color: #999;
                right: 20px;
                top: -70px;
            }
        }
    }

</style>