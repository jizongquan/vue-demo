<template>
    <panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items">
                <img :src="item.catory" alt="">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list">
                        <img :src="product.img" alt="">
                        <p :class="$style.title">product.title</p>
                        <p :class="$style.price"><em>{{product.price}}</em>起</p>
                        <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width:product.progress +'%'}"></div>
                            </div>
                            <p>{{product.progress}}%</p>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    </panel>
</template>


<script>
    import panel from "../core/panel"
    export default{
        components:{
            panel
        },
        data(){
            return{
                items:[{
                    catory:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                    list:[{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    },{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    }]
                },{
                    catory:'https://img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                    list:[{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    },{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    }]
                },{
                    catory:'https://img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                    list:[{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    },{
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        title:'电动牙刷',
                        price:'29.00',
                        progress:'172'
                    }]
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex;
            img{
                width: 100%;
                height: 170px;
                display: block;
            }
            .list{
                @include flex(row);
                .product{
                    width: 50%;
                    height: 396px;
                    box-sizing: border-box;
                    text-align: center;
                    article{
                        @include flex(row);
                        align-items:center;
                        justify-content: space-around;
                        padding:0 20px;
                        height:30px;
                        line-height:30px;
                        margin-top:16px;
                        .wrapper{
                            width: 144px;
                            height: 10px;
                            background: #f6e6e6;
                            border-radius: 22px;
                            .inner{
                                width: 40%;
                                height: 10px;
                                background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                                border-radius: 22px;
                                max-width: 100%;
                            }
                        }
                        p{
                            font-size: 24px;
                            color: #999;
                        }
                    }
                    img{
                        width: 180px;
                        height: 180px;
                        display: inline-block;
                        margin: 44px auto 20px;
                    }
                    .title{
                        font-family: PingFangSC-Medium;
                        font-size: 28px;
                        color: #444;
                        font-weight: 700;
                    }
                    .price{
                        font-family: PingFangSC-Medium;
                        font-size: 20px;
                        color: #999;
                        height:48px;
                        line-height:48px;
                        em{
                            color: #ff3232;
                            font-size: 36px;
                            margin-right:8px;
                            &:before{
                                content:'￥';
                                font-size: 28px;
                             }
                        }
                    }

                }
            }
        }
    }
</style>