import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'

const FANCYBOX_SELECTOR = '[data-fancybox="gallery"]'

export function useGalleryFancybox(galleryRef: Ref<HTMLElement | null>) {
    onMounted(() => {
        if (galleryRef.value) {
            Fancybox.bind(galleryRef.value, FANCYBOX_SELECTOR)
        }
    })

    onUnmounted(() => {
        if (galleryRef.value) {
            Fancybox.unbind(galleryRef.value, FANCYBOX_SELECTOR)
        }
    })
}
