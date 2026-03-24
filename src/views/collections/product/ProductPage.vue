<script setup lang="ts">

// self
import PopularWatchCmp from '@components/popular_sections/PopularWatchCmp.vue'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'
import { SectionCmp } from '@/components/layout/tmp'
import GalleryCmp from './ui/gallery/Gallery.vue'

// mok
import { productPage } from './api/api'
import Params from './ui/params/Params.vue'

interface Props {
    typeSlug: string
    collectionSlug: string
    productSlug: string
}

const props = defineProps<Props>() 
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