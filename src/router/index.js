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
    },
    {
        path: '/booksearch',
        component: () =>
            import ('../views/bookSearch.vue')
    },
    {
        path: '/bookdetail/:bookId',
        component: () =>
            import ('../views/bookDetail.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router