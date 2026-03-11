<script setup lang="ts">
// self
import { SectionCmp, BlockCardsFr3Cmp } from '@/components/layout/tmp'
import { CardModelCmp } from '@components/cards'

const PADDING = 60

const arrMock = [
    {
        id: 1,
        img: '/images/category/1.jpg',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
    {
        id: 2,
        img: '/images/category/2.jpg',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
    {
        id: 3,
        img: '/images/category/3.jpg',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
    {
        id: 4,
        img: '/images/category/4.jpg',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    },
    {
        id: 5,
        img: '/images/category/5.jpg',
        alt: 'model',
        to: '#',
        subtitle: 'COLLEZIONE',
        title: 'DI300 - CHRONOGRAPH',
    }
]
</script>

<template>

    <SectionCmp
        v-if="((arrMock ?? []).length > 0)"
        :padding=PADDING
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-32 title-fw-400">
                <h2>Попрулярные модели</h2>
            </div>

            <BlockCardsFr3Cmp :gap="20">

                <CardModelCmp
                    v-for="item in arrMock"
                    :key="item.id"
                    :img_url="item.img"
                    :alt="item.alt"
                    :to="item.to"
                    :subtitle="item.subtitle"
                    :title="item.title"
                />

            </BlockCardsFr3Cmp>

        </div>
    </SectionCmp>

</template>

<style scoped lang="scss"></style>