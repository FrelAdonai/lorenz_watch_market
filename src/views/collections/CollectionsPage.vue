<script setup lang="ts">
// self
import { ROUTES_PATHS } from '@/constants'
import { SectionCmp, BlockCardsFr2Cmp } from '@/components/layout/tmp'
import { CardTypeCmp } from '@components/cards'

// utils
import { toSlug } from '@/utils/slug'

// mok
import { obj } from './api/api'
</script>

<template>
    <SectionCmp :padding="60">
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-36 title-tt-up title-fw-400">
                <h1>Коллекции</h1>
            </div>

            <BlockCardsFr2Cmp
                :gap="20"
                v-if="((obj ?? []).length > 0)"
            >

                <CardTypeCmp
                    v-for="item in obj"
                    :key="item.id"
                    :img="item.img"
                    :alt="item.alt"
                    :title="item.title"
                    :to="{
                        name: ROUTES_PATHS.COLLECTIONS_CATEGORY.name,
                        params: {
                            typeSlug: toSlug(item.type),
                        }
                    }"
                >
                </CardTypeCmp>

            </BlockCardsFr2Cmp>

        </div>
    </SectionCmp>
</template>

<style scoped lang="scss"></style>