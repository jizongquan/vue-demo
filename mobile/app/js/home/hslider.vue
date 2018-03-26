<template>
    <article>
        <slider :items="items" :cname="$style.slider"></slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import slider from "../core/slider.vue"
    export default{
        components:{
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
                }],
                enters:[{
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png',
                    title:'优惠券'
                },{
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png',
                    title:'领红包'
                },{
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png',
                    title:'抢钢镚'
                },{
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png',
                    title:'白条提额'
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top: 120px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content:space-around;
        /*两端对齐*/
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 60px;
                height: 60px;
            }
            h4{
                font-size: 26px;
                color:#666;
                margin-top: 12px;
            }
        }
    }

</style>