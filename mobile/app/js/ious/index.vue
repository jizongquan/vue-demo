<template lang="html">
    <div :class="$style.home">
        <heador></heador>
        <slider></slider>
        <welare></welare>
        <service></service>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
    import heador from "../public/header"
    import slider from "./islider.vue"
    import footor from "../public/footer.vue"
    import navbar from "../public/navbar.vue"
    import welare from "./welare.vue"
    import service from "./service.vue"



    export default {
        components:{
            heador,
            slider,
            footor,
            navbar,
            welare,
            service
        }
    }
</script>

<style lang="scss" module>

</style>
