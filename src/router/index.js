import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/bookstore'
    },
    {
        path: '/bookstore',
        component: () =>
            import ('../views/bookStore.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router