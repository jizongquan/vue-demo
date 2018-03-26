<template lang="html">
    <div :class="$style.home">
        <heador></heador>
        <slider></slider>
        <ada></ada>
        <money></money>
        <adb></adb>
        <finace></finace>
        <adc></adc>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
    import heador from "../public/header"
    import slider from "./mslider.vue"
    import ada from "./ada.vue"
    import money from "./money.vue"
    import adb from "./adb.vue"
    import adc from "./adc.vue"
    import footor from "../public/footer.vue"
    import navbar from "../public/navbar.vue"
    import finace from "./finace.vue"


    export default {
        components:{
            heador,
            slider,
            footor,
            navbar,
            ada,
            money,
            adb,
            finace,
            adc
        }
    }
</script>

<style lang="scss" module>

</style>
