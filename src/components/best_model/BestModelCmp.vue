<script setup lang="ts">
import { SectionCmp, BlockCardsFr2Cmp } from '@/components/layout/tmp'
import { CardModelCmp } from '@components/cards'

const PADDING = 60


const arrMock = [
    {
        id: 1,
        img: '/images/common/1.webp',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
    {
        id: 2,
        img: '/images/common/2.webp',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
]
</script>

<template>
    <SectionCmp
        v-if="((arrMock ?? []).length > 0)"
        :padding=PADDING
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-32 title-fw-400">
                <h2>Лучшие модели</h2>
            </div>

            <BlockCardsFr2Cmp :gap="20">

                <CardModelCmp
                    v-for="item in arrMock"
                    :key="item.id"
                    :img_url="item.img"
                    :alt="item.alt"
                    :to="item.to"
                    size="sm"
                    :subtitle="item.subtitle"
                    :title="item.title"
                />

            </BlockCardsFr2Cmp>

        </div>
    </SectionCmp>
</template>

<style scoped lang="scss"></style>