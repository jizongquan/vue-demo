<template>
    <panel title="ada" :class="$style.panel">
        <section :class="$style.content">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png" alt="">
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
            display: none;
        }
        .content{
            img{
                width: 100%;
                height: 230px;
                display: block;
            }
        }
    }
</style>