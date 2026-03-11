<script setup lang="ts">
// vue
import type { RouteLocationRaw } from 'vue-router'

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'


// self 
import { CardWatchCmp } from '@components/cards'
import { ButtonsSliderLeftCmp, ButtonSliderRightCmp } from '@components/ui'

interface Props {
    arrMock: Product[]
}

interface Product {
    id: number
    img?: string
    alt?: string
    name?: string
    price?: string
    sku?: string
    tag?: string
    to?: RouteLocationRaw
}

const props = defineProps<Props>()
</script>

<template>
    <div class="popular-watch-slider">
        <Swiper
            class="popular-watch__slider"
            :modules="[Navigation, Pagination]"
            :speed="800"
            :slides-per-view="4"
            :space-between="20"
            :navigation="{ prevEl: '.watch-arrow-prev', nextEl: '.watch-arrow-next' }"
            :pagination="{ el: '.popular-watch-slider__pagination', type: 'progressbar' }"
        >
            <SwiperSlide
                v-for="item in props.arrMock"
                :key="item.id"
            >
                <CardWatchCmp
                    :to="item.to"
                    :img_url="item.img"
                    :alt="item.alt"
                    :name="item.name"
                    :price="item.price"
                    :sku="item.sku"
                    :tag="item.tag"
                />
            </SwiperSlide>

        </Swiper>

        <div class="popular-watch-slider__controls">
            <div class="popular-watch-slider__pagination"></div>

            <div class="popular-watch-slider__btns">
                <ButtonsSliderLeftCmp class="watch-arrow-prev" />
                <ButtonSliderRightCmp class="watch-arrow-next" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.popular-watch-slider {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 20px;

    overflow: hidden;

    &__controls {
        display: flex;
        align-items: center;

        gap: 10px;

    }

    &__pagination {
        position: relative;

        height: 2px;

        &:deep(.swiper-pagination-progressbar-fill) {
            background: var(--accent);
        }
    }

    &__btns {
        display: flex;
        flex-shrink: 0;

        gap: 6px;
    }
}
</style>