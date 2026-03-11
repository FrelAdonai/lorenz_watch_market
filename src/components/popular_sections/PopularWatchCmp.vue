<script setup lang="ts">
// self
import { SectionCmp } from '@/components/layout/tmp'
import Slider from '@components/popular_sections/ui/Slider.vue'

const PADDING = 60

const arrMock = [
    {
        id: 1,
        img: '/images/cards/products/1.png',
        alt: 'card-watch',
        name: 'SHARK 5 CRONOGRAFO',
        price: '450,00',
        sku: '090020BB',
        tag: 'new',
    },
    {
        id: 2,
        img: '/images/cards/products/2.jpg',
        alt: 'card-watch',
        name: 'GRANPREMIO CARBON',
        price: '550,00',
        sku: '090020BB',
        tag: 'new',
    },
    {
        id: 3,
        img: '/images/cards/products/3.jpg',
        alt: 'card-watch',
        name: 'GRANPREMIO CARBON',
        price: '550,00',
        sku: '090020BB',
        tag: 'new',
    },
    {
        id: 4,
        img: '/images/cards/products/4.jpg',
        alt: 'card-watch',
        name: 'GRANPREMIO CARBON',
        price: '550,00',
        sku: '090020BB',
        tag: 'new',
    },
    {
        id: 5,
        img: '/images/cards/products/5.png',
        alt: 'card-watch',
        name: 'GRANPREMIO CARBON',
        price: '550,00',
        sku: '090020BB',
        tag: 'new',
    },
    {
        id: 6,
        img: '/images/cards/products/6.jpg',
        alt: 'card-watch',
        name: 'GRANPREMIO CARBON',
        price: '550,00',
        sku: '090020BB',
        tag: 'new',
    }
]
</script>

<template>
    <SectionCmp
        :padding="PADDING"
        v-if="((arrMock ?? []).length > 0)"
    >
        <div class="grid:fr-1 g-gap-40">
            <div class="text-tmp title-32 title-fw-400">
                <h2>Популярные часы</h2>
            </div>

            <Slider :arrMock="arrMock" />
        </div>

    </SectionCmp>
</template>

<style scoped lang="scss"></style>