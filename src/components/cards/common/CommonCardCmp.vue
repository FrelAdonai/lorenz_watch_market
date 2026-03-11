<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
    img?: string
    alt?: string
    to?: RouteLocationRaw
    target?: "_self" | "_blank" | "_parent" | "_top"
}

const props = defineProps<Props>()
</script>

<template>
    <router-link v-if="to" class="card-common" :to="to" :target="target || '_self'">
        <div class="card-common__img">
            <img :src="props.img" :alt="props.alt">
        </div>
        <div class="card-common__desc">
            <div class="text-tmp title-18 txt-14 txt-fw-500 gap-10">
                <slot></slot>
            </div>
        </div>
    </router-link>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>