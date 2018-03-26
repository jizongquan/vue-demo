<template>
    <panel title="更多服务" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
            <div :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                <p>小白卡</p>
            </div>
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"
    export default{
        components:{
            panel
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex(row);
            .item{
                width: 160px;
                height: 144px;
                text-align:center;
                margin-bottom:40px;
                img{
                    width: 90px;
                    height: 90px;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    margin-top: 12px;
                }
            }
        }
    }
</style>