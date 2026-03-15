<script setup lang="ts">


// self
import { SectionCmp, BlockCardsFr4Cmp } from '@/components/layout/tmp'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'
import { CardWatchCmp } from '@components/cards'

// routs
import { ROUTES_PATHS } from '@/constants'

// utils
import { toSlug } from '@/utils/slug'

// mok
import { obj } from './api/api'

interface Props {
    typeSlug: string
    collectionSlug: string
}

const props = defineProps<Props>() 
</script>

<template>
    <SectionCmp :padding="60">
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-36 title-tt-up title-fw-400">
                <h1>Колекция Di300 Chronograph</h1>
            </div>

            <BlockCardsFr4Cmp :gap="20">
                <CardWatchCmp
                    v-for="item in obj"
                    :key="item.id"
                    :to="{
                        name: ROUTES_PATHS.PRODUCT.name,
                        params: {
                            typeSlug: toSlug(item.slugs?.typeSlug),
                            collectionSlug: toSlug(item.slugs?.collectionSlug),
                            productSlug: toSlug(item.slugs?.productSlug),
                        }
                    }"
                    :img_url="item.img"
                    :alt="item.alt"
                    :name="item.title"
                    :price="item.price"
                    :sku="item.sku"
                    :tag="item.tag"
                />
            </BlockCardsFr4Cmp>

        </div>
    </SectionCmp>

    <BenefitsCmp />
</template>

<style scoped lang="scss"></style>