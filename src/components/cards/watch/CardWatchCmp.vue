<script setup lang="ts">
// vue
import type { RouteLocationRaw } from 'vue-router'

// self

interface Props {
    to?: RouteLocationRaw
    img_url?: string
    alt?: string
    name?: string
    price?: string
    sku?: string
    tag?: string
}

const props = defineProps<Props>()
</script>

<template>
    <router-link
        class="card-watch"
        v-if="props.to"
        :to="props.to"
    >

        <div class="card-watch__img">
            <img
                :src="props.img_url"
                :alt="props.alt"
            >
        </div>

        <div class="card-watch__desc">
            <div
                v-if="props.tag"
                class="text-tmp txt-10 txt-accent-3 txt-tt-up all-center"
            >
                <p>- {{ props.tag }} -</p>
            </div>
            <div class="text-tmp title-16 title-tt-up txt-14 all-center">
                <p>{{ props.sku }}</p>
                <h3>{{ props.name }}</h3>
            </div>
            <div class="text-tmp txt-14 all-center">
                <p>€ {{ props.price }}</p>
            </div>
        </div>

    </router-link>
</template>

<style scope lang="scss">
@forward "./index.scss";
</style>