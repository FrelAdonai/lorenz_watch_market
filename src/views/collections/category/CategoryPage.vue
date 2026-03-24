<script setup lang="ts">
// routs
import { ROUTES_PATHS } from '@/constants'

// self
import { SectionCmp, BlockCardsFr3Cmp } from '@/components/layout/tmp'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'
import { CardCollectionCmp } from '@components/cards'

// utils
import { toSlug } from '@/utils/slug'

// mok
import { categoryPage } from './api/api'


interface Props {
    typeSlug: string
}

const props = defineProps<Props>() 
</script>

<template>
    <SectionCmp :padding="60">
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-36 title-tt-up title-fw-400">
                <h1>{{ categoryPage.pageTitle }} {{ props.typeSlug }}</h1>
            </div>

            <BlockCardsFr3Cmp :gap="20">

                <CardCollectionCmp
                    v-for="item in categoryPage.collections"
                    :key="item.id"
                    :img_url="item.img"
                    :alt="item.alt"
                    :to="{
                        name: ROUTES_PATHS.COLLECTION.name,
                        params: {
                            typeSlug: toSlug(item.slugs.type),
                            collectionSlug: toSlug(item.slugs.collectionSlug),
                        }
                    }"
                    :subtitle="item.subtitle"
                    :title="item.title"
                />

            </BlockCardsFr3Cmp>

        </div>
    </SectionCmp>

    <BenefitsCmp />
</template>

<style scoped lang="scss"></style>