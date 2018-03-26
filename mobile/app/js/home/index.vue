<template lang="html">
    <div :class="$style.home">
        <heador></heador>
        <slider></slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import heador from "../public/header"
import slider from "./hslider.vue"
import novice from "./novice.vue"
import borrow from "./borrow.vue"
import money from "./money.vue"
import product from "./product.vue"
import life from "./life.vue"
import footor from "../public/footer.vue"
import navbar from "../public/navbar.vue"







export default {
    components:{
        heador,
        slider,
        novice,
        borrow,
        money,
        product,
        life,
        footor,
        navbar
    }
}
</script>

<style lang="scss" module>

</style>
