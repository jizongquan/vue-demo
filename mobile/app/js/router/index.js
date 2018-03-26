import Vue from "vue"
import Router from "vue-router"
import home from "../home/index.vue"
import money from "../money/index.vue"
import ious from "../ious/index.vue"
import raise from "../raise/index.vue"


import '../../css/reset.scss';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
        },{
            path: "/money",
            name: "money",
            component: money,
        },{
            path: "/ious",
            name: "ious",
            component: ious,
        },{
            path: "/raise",
            name: "raise",
            component: raise,
        }
    ],
})
