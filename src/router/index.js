import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "@/router/home";
import about from "@/router/about";
import move from "@/router/move";

Vue.use(VueRouter)
const router = [];
router.push(...home)
router.push(...about)
router.push(...move)
const routers = new VueRouter({
  routes: router
})
export default routers
