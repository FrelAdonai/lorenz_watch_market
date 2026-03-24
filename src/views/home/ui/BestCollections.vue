<script setup lang="ts">
// routs
import { ROUTES_PATHS } from '@/constants'

// self
import { SectionCmp, BlockCardsFr3Cmp } from '@/components/layout/tmp'
import { CardCollectionCmp } from '@components/cards'
import { ButtonCommonCmp } from '@components/ui'

// utils
import { toSlug } from '@/utils/slug'

// mok
import { obj } from '../api/obj_favorite'
</script>

<template>

    <SectionCmp
        v-if="((obj ?? []).length > 0)"
        :padding="60"
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-32 title-fw-400">
                <h2>Попрулярные коллекции часов</h2>
            </div>

            <BlockCardsFr3Cmp :gap="20">

                <CardCollectionCmp
                    v-for="item in obj"
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

            <ButtonCommonCmp :to="{
                name: ROUTES_PATHS.COLLECTIONS_CATEGORY.name,
                params: {
                    typeSlug: toSlug('watches')
                }
            }">
                Все часы
            </ButtonCommonCmp>

        </div>
    </SectionCmp>

</template>

<style scoped lang="scss"></style>