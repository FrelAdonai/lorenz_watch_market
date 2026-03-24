export const ROUTES_PATHS = {
    HOME: {
        path: '/',
        name: 'home'
    },
    COLLECTIONS: {
        path: '/collections',
        name: 'collections'
    },
    COLLECTIONS_CATEGORY: {
        path: '/collections/:typeSlug',
        name: 'category'
    },
    COLLECTION: {
        path: '/collections/:typeSlug/:collectionSlug',
        name: 'collection',
    },
    PRODUCT: {
        path: '/collections/:typeSlug/:collectionSlug/:productSlug',
        name: 'product',
    },
    UI: {
        path: '/ui',
        name: 'ui'
    },
} as const