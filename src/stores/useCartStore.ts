import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const items = ref<{ productId: number; quantity: number }[]>([])

    const totalCount = computed(() =>
        items.value.reduce((sum, line) => sum + line.quantity, 0),
    )

    function addProduct(productId: number, quantity = 1) {
        const line = items.value.find((l) => l.productId === productId)
        if (line) {
            line.quantity += quantity
        } else {
            items.value.push({ productId, quantity })
        }
    }

    // modal state
    const isModalOpen = ref(false)
    function openCartModal() {
        isModalOpen.value = true
    }
    function closeCartModal() {
        isModalOpen.value = false
    }
    function toggleCartModal() {
        isModalOpen.value = !isModalOpen.value
    }

    return {
        items,
        totalCount,
        addProduct,
        isModalOpen,
        openCartModal,
        closeCartModal,
        toggleCartModal,
    }
})