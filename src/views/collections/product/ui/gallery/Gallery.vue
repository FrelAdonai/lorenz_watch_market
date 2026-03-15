<script setup lang="ts">
import { ref } from 'vue'
import { useGalleryFancybox } from './script'

interface Props {
    obj: PropsItem[]
}

interface PropsItem {
    id: number
    img?: string
    alt?: string
}

const props = defineProps<Props>()
const galleryRef = ref<HTMLElement | null>(null)
useGalleryFancybox(galleryRef)
</script>

<template>
    <div
        ref="galleryRef"
        class="product-gallery"
        v-if="((props.obj ?? []).length > 0)"
    >
        <div
            v-for="item in props.obj"
            :key="item.id"
            class="product-gallery__item"
            data-fancybox="gallery"
            :data-src="item.img"
        >
            <img
                :src="item.img"
                :alt="item.alt"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>