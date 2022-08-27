import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = [{
    path: '/',
    component: () =>
        import ('@/components/Drag')
}];

const routers = new VueRouter({
    routes: router
})
export default routers