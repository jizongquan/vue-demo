<template>
    <panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱></em>
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
    h4{
        border-bottom: 1px solid #ddd;
    }
    .content{
    @include flex;
    .item{
    @include flex(row);
        align-items:center;
        height:140px;
    img{
        width: 88px;
        height: 88px;
        margin: 0 32px;
        display: inline-block;
    }
    div{
        font-size: 32px;
        color: #323232;
        line-height: 1.8;
        width:344px;
    p{
        color: #ff3232;
        font-size: 24px;
        line-height: 1.1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    }
    em{
        color:#ff801a;
        font-size: 28px;
    }
    }
    }
    }
</style>