<script setup lang="ts">
// vue 
import type { RouteLocationRaw } from 'vue-router'

// self
import { ButtonCommonCmp } from '@components/ui'

interface Props {
    title: string
    description: string
    img: string
    alt: string
    to?: RouteLocationRaw
}

const props = defineProps<Props>()
</script>

<template>
    <div class="benner-full">
        <div class="flex:col-max">
            <div
                class="benner-full__desc"
                data-swiper-parallax="600"
            >
                <div class="text-tmp title-44 title-fw-500 color-white gap-10">
                    <h1>{{ props.title }}</h1>
                    <p>
                        {{ props.description }}
                    </p>
                </div>

                <ButtonCommonCmp
                    color="white"
                    size="lg"
                    :to="props.to"
                >
                    View more
                </ButtonCommonCmp>
            </div>
        </div>

        <div
            class="benner-full__img"
            data-swiper-parallax="90%"
        >
            <img
                :src="props.img"
                :alt="props.alt"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>