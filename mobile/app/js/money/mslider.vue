<template>
    <panel item="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <slider :items="items" :cname="$style.slider"></slider>
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
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t15892/242/2384997044/39637/6dcc30e2/5aab87feNa9fc205f.jpg'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t16612/253/842330467/35829/3f23279d/5aab8849N93ba4ff3.png'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t19675/253/830457163/36326/edba67e1/5aab8886N4e741b27.jpg'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t15298/250/2605782004/42066/e3f130b4/5aab8795N3c33eb39.jpg'
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        h4{
            display: none;
        }
        .content{
            .slider{
                margin-top: 120px;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>