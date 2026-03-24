<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
    to?: RouteLocationRaw
    img?: string
    alt?: string
    title?: string
}

const props = defineProps<Props>()
</script>

<template>
    <router-link
        class="card-collection"
        v-if="props.to"
        :to="props.to"
    >
        <div class="card-collection__img">
            <img
                :src="props.img"
                :alt="props.alt"
            >
        </div>

        <div class="card-collection__desc">
            <div class="text-tmp title-28 title-fw-400 color-white all-center">
                <h3>{{ props.title }}</h3>
            </div>
        </div>

    </router-link>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>