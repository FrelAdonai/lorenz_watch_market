<script setup lang="ts">

// routs
import { ROUTES_PATHS } from '@/constants'

// self
import { SectionCmp, BlockCardsFr2Cmp } from '@/components/layout/tmp'
import { CardCollectionCmp } from '@components/cards'

// utils
import { toSlug } from '@/utils/slug'

// mok
import { obj } from './api/api'
</script>

<template>
    <SectionCmp
        v-if="((obj ?? []).length > 0)"
        :padding="60"
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-32 title-fw-400">
                <h2>Лучшие коллекции</h2>
            </div>

            <BlockCardsFr2Cmp :gap="20">

                <CardCollectionCmp
                    v-for="item in obj"
                    :key="item.id"
                    :to="{
                        name: ROUTES_PATHS.COLLECTION.name,
                        params: {
                            typeSlug: toSlug(item.slugs.type),
                            collectionSlug: toSlug(item.slugs.collectionSlug),
                        }
                    }"
                    :img_url="item.img"
                    :alt="item.alt"
                    size="sm"
                    :subtitle="item.subtitle"
                    :title="item.title"
                />

            </BlockCardsFr2Cmp>

        </div>
    </SectionCmp>
</template>

<style scoped lang="scss"></style>