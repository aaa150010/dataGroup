import {
    createRouter as _createRouter,
    createWebHashHistory,
} from 'vue-router'

const routes = [
    {
        path: "/",
    component: import("../page/index.vue"),
        children:[{
            path: "/",
            component: () =>
                import("@/layout/User.vue"),
            meta: {
                title: "后台首页"
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import("../page/404.vue"),
    }
]

function createRouter () {
    return _createRouter({
        history: createWebHashHistory(),
        routes
    })
}

const router = createRouter()


export default router