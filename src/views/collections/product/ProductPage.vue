<script setup lang="ts">
// self
import { ButtonCommonCmp } from '@/components/ui'
import { SectionCmp } from '@/components/layout/tmp'

import PopularWatchCmp from '@components/popular_sections/PopularWatchCmp.vue'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'
import GalleryCmp from './ui/gallery/Gallery.vue'
import Params from './ui/params/Params.vue'

// mok
import { productPage } from './api/api'
import { useCartStore } from '@stores/useCartStore'


interface Props {
    id?: number
    typeSlug?: string
    collectionSlug?: string
    productSlug?: string
}

const props = defineProps<Props>()

const cart = useCartStore()
function handleAddToCart(id: number) {
    cart.addProduct(id, 1)
    cart.openCartModal()
}

</script>

<template>
    <SectionCmp :padding="60">
        <div class="product-page">

            <div class="product-page__item">
                <GalleryCmp :obj="productPage.gallery" />
            </div>

            <div class="product-page__item">

                <div class="grid:fr-1 g-gap-30">
                    <div class="grid:fr-1 g-gap-10">
                        <div
                            class="text-tmp title-36 title-tt-up title-fw-400"
                            v-html="productPage.title"
                        >
                        </div>
                        <div class="text-tmp txt-12 txt-accent-3">
                            <p>SKU: {{ productPage.sku }}</p>
                        </div>
                    </div>
                    <div class="text-tmp txt-18">
                        <p>
                            {{ productPage.prices.priceLabel }}:
                            {{ productPage.prices.pricePrefix }}
                            {{ productPage.prices.price }}
                        </p>
                    </div>
                    <div
                        class="text-tmp title-36 title-tt-up title-fw-400 gap-10"
                        v-html="productPage.description"
                    >
                    </div>

                    <ButtonCommonCmp
                        size="full"
                        data-cart-no-close
                        @click="handleAddToCart(productPage.id)"
                    >
                        Добавить в корзину
                    </ButtonCommonCmp>

                    <Params :obj="productPage.characteristics" />
                </div>

            </div>

        </div>
    </SectionCmp>

    <PopularWatchCmp />
    <BenefitsCmp />
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>