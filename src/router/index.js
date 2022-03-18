import { createWebHashHistory, createRouter,createWebHistory } from 'vue-router'




    // 移动端的路由
    const    router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                redirect: '/home',

            },
            {
                path: '/home',
                meta: { title: '首页' },
                component: () => import('../components/home.vue'),
            },
            {
                path: '/about',
                component: () => import('../components/about.vue'),
            },
        ],
    })




export default router