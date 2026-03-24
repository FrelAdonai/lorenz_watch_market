import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// self
import { ROUTES_PATHS } from '@/constants'
import HomeView from '@views/home/HomeView.vue'
import CollectionsPage from '@views/collections/CollectionsPage.vue'
import CategoryPage from '@views/collections/category/CategoryPage.vue'
import ProductPage from '@views/collections/product/ProductPage.vue'
import CollectionPage from '@views/collections/collection/CollectionPage.vue'

import UiView from '@views/UiView.vue'


const collectionRoutes: RouteRecordRaw[] = [
    {
        path: ROUTES_PATHS.COLLECTIONS.path,
        name: ROUTES_PATHS.COLLECTIONS.name,
        component: CollectionsPage,
    },
    {
        path: ROUTES_PATHS.COLLECTIONS_CATEGORY.path,
        name: ROUTES_PATHS.COLLECTIONS_CATEGORY.name,
        component: CategoryPage,
        props: true,
    },
    {
        path: ROUTES_PATHS.COLLECTION.path,
        name: ROUTES_PATHS.COLLECTION.name,
        component: CollectionPage,
        props: true,
    },
    {
        path: ROUTES_PATHS.PRODUCT.path,
        name: ROUTES_PATHS.PRODUCT.name,
        component: ProductPage,
        props: true,
    }
]

const routes: RouteRecordRaw[] = [
    {
        path: ROUTES_PATHS.UI.path,
        name: ROUTES_PATHS.UI.name,
        component: UiView
    },
    {
        path: ROUTES_PATHS.HOME.path,
        name: ROUTES_PATHS.HOME.name,
        component: HomeView
    },
    ...collectionRoutes
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
