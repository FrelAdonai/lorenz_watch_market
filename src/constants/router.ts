export const ROUTES_PATHS = {
    HOME: {
        path: '/',
        name: 'home'
    },
    COLLECTIONS: {
        path: '/collections',
        name: 'collections'
    },
    WATCHES: {
        path: '/collections/watches',
        name: 'watches'
    },
    WATCHES_PRODUCT: {
        path: '/collections/watches/:slug',
        name: 'watch-product'
    },
    PENNS: {
        path: '/collections/penns',
        name: 'penns'
    },
    PENNS_PRODUCT: {
        path: '/collections/penns/:slug',
        name: 'panns-product'
    },
    UI: {
        path: '/ui',
        name: 'ui'
    },
} as const