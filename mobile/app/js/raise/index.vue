<template lang="html">
    <div :class="$style.home">
        <heador></heador>
        <slider></slider>
        <daily></daily>
        <inst></inst>
        <more></more>
        <footor :class="$style.Footer"></footor>
        <navbar></navbar>
    </div>
</template>

<script>
    import heador from "../public/header"
    import slider from "./rslider.vue"
    import daily from "./daily.vue"
    import inst from "./in.vue"
    import more from "./more.vue"
    import footor from "../public/footer.vue"
    import navbar from "../public/navbar.vue"

    export default {
        components:{
            heador,
            slider,
            footor,
            navbar,
            daily,
            inst,
            more
        }
    }
</script>

<style lang="scss" module>
.Footer{
    ul{
        li{
            &:first-child{
                 display: none;
            }
        }

    }

}
</style>
