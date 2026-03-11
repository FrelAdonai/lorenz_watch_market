import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// self
import { ROUTES_PATHS } from '@/constants'
import HomeView from '@views/home/HomeView.vue'
import CollectionsPage from '@views/collections/CollectionsPage.vue'
import WatchesPage from '@views/collections/watches/WatchesPage.vue'
import WatchPage from '@views/collections/watches/product/WatchPage.vue'
import PennsPage from '@/views/collections/penns/PennsPage.vue'
import PennPage from '@/views/collections/penns/product/PennPage.vue'
import UiView from '@views/UiView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: ROUTES_PATHS.HOME.path,
        name: ROUTES_PATHS.HOME.name,
        component: HomeView
    },
    {
        path: ROUTES_PATHS.UI.path,
        name: ROUTES_PATHS.UI.name,
        component: UiView
    },
    {
        path: ROUTES_PATHS.COLLECTIONS.path,
        name: ROUTES_PATHS.COLLECTIONS.name,
        component: CollectionsPage
    },
    {
        path: ROUTES_PATHS.WATCHES.path,
        name: ROUTES_PATHS.WATCHES.name,
        component: WatchesPage,
    },
    {
        path: ROUTES_PATHS.WATCHES_PRODUCT.path,
        name: ROUTES_PATHS.WATCHES_PRODUCT.name,
        component: WatchPage,
        props: true,
    },
    {
        path: ROUTES_PATHS.PENNS.path,
        name: ROUTES_PATHS.PENNS.name,
        component: PennsPage
    },
    {
        path: ROUTES_PATHS.PENNS_PRODUCT.path,
        name: ROUTES_PATHS.PENNS_PRODUCT.name,
        component: PennPage,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
