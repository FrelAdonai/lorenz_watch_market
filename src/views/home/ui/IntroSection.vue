<script setup lang="ts">
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Parallax, Pagination, Autoplay } from 'swiper/modules'
import BannerFullCmp from '@components/banners/full/BannerFullCmp.vue'

// mok
import { obj } from '../api/obj_intro'
</script>

<template>

    <section
        class="intro"
        v-if="((obj ?? []).length > 0)"
    >

        <Swiper
            class="intro__slider"
            :modules="[Navigation, Parallax, Pagination, Autoplay]"
            :speed="1000"
            :loop="true"
            :parallax="true"
            :slides-per-view="1"
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :pagination="{ el: '.intro__pagination', type: 'bullets' }"
        >

            <SwiperSlide
                v-for="item in obj"
                :key="item.id"
            >
                <BannerFullCmp
                    :title="item.title"
                    :description="item.description"
                    :img="item.img"
                    :alt="item.alt"
                    :to="item.to"
                />
            </SwiperSlide>

        </Swiper>

        <div class="intro__controls">
            <div class="intro__pagination"></div>
        </div>

    </section>

</template>

<style scoped lang="scss">
.intro {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    &__controls {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        width: 100%;
        height: 100%;
        padding: 100px 100px;

        pointer-events: none;
    }

    &__pagination {
        width: auto;
        margin: 0 !important;

        &:deep(.swiper-pagination-bullet) {
            width: 10px;
            height: 10px;

            background: var(--white);
            border-radius: var(--rs-small) !important;

            transition: 0.3s all ease;

            &.swiper-pagination-bullet-active {
                width: 30px;
            }
        }
    }
}
</style>