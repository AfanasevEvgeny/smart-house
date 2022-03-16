import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from "@/layouts/AppLayout";
import HomeLayout from "@/layouts/HomeLayout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppLayout,
        children: [
            {
                path: '/:id',
                component: HomeLayout
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
