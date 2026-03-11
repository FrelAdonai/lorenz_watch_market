<script setup lang="ts">
// vue
import type { RouteLocationRaw } from 'vue-router'

// self
import { IconArrowRightCmp } from '@components/ui'

interface Props {
    to?: RouteLocationRaw
    size?: "sm"
    img_url?: string
    alt?: string
    title?: string
    subtitle?: string
}

const props = defineProps<Props>()

</script>

<template>
    <router-link
        v-if="props.to"
        :to="props.to"
        class="card-model"
        :class="[props.size ?? '']"
    >

        <div class="card-model__img">
            <img
                :src="props.img_url"
                :alt="props.alt"
            >
        </div>

        <div class="card-model__desc">

            <div class="card-model__desc-arrow">
                <IconArrowRightCmp />
            </div>

            <div class="text-tmp title-28 title-fw-400 txt-tt-up color-white">
                <p>
                    {{ props.subtitle }}
                </p>
                <h3>{{ props.title }}</h3>
            </div>

        </div>

    </router-link>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>