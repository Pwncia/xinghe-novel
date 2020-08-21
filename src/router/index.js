import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/bookrecom'
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
    },
    {
        path: '/bookReader/:bookId',
        component: () =>
            import ('../views/bookReader.vue')
    },
    {
        path: '/bookshelf',
        component: () =>
            import ('../views/bookShelf.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router