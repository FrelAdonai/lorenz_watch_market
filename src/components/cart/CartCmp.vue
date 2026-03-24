<script setup lang="ts">
// vue
import { watch, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'

// self
import { useCartStore } from '@stores/useCartStore'
import { product } from '@/components/cart/api/apiProduct'

const cart = useCartStore()
const { items, totalCount } = storeToRefs(cart)

watch(items, (val) => {
    console.log(val)
}, { deep: true, immediate: true })

watch(totalCount, (val) => {
    console.log(val)
}, { immediate: true })


function handleAddToCart(id: number) {
    cart.addProduct(id, 1)
}

function handleMinusToCart(id: number) {
    if (totalCount.value <= 1) return
    cart.addProduct(id, -1)
}

// close modal on document click
function onDocClick(e: MouseEvent) {
    const t = e.target
    if (!(t instanceof Element)) return
    if (t.closest('.cart-modal')) return
    if (t.closest('.cart-btn')) return
    if (t.closest('[data-cart-no-close]')) return
    cart.closeCartModal()
}
watch(
    () => cart.isModalOpen,
    (open) => {
        if (open) {
            document.addEventListener('click', onDocClick)
        } else {
            document.removeEventListener('click', onDocClick)
        }
    },
)
onUnmounted(() => {
    document.removeEventListener('click', onDocClick)
})

</script>

<template>
    <button
        class="cart-btn"
        :class="{ 'active': (items ?? []).length > 0 }"
        @click="cart.toggleCartModal()"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
        >
            <path
                d="M249.65-132.73q-17.34-17.35-17.34-42.65 0-25.31 17.34-42.66 17.35-17.34 42.66-17.34 25.31 0 42.65 17.34 17.35 17.35 17.35 42.66 0 25.3-17.35 42.65-17.34 17.35-42.65 17.35t-42.66-17.35Zm375.39 0q-17.35-17.35-17.35-42.65 0-25.31 17.35-42.66 17.34-17.34 42.65-17.34t42.66 17.34q17.34 17.35 17.34 42.66 0 25.3-17.34 42.65-17.35 17.35-42.66 17.35-25.31 0-42.65-17.35ZM235.23-740 342-515.38h265.38q6.93 0 12.31-3.47 5.39-3.46 9.23-9.61l104.62-190q4.61-8.46.77-15-3.85-6.54-13.08-6.54h-486Zm-19.54-40h520.77q26.08 0 39.23 21.27 13.16 21.27 1.39 43.81l-114.31 208.3q-8.69 14.62-22.58 22.93-13.88 8.31-30.5 8.31H324l-48.62 89.23q-6.15 9.23-.38 20 5.77 10.77 17.31 10.77h415.38q8.54 0 14.27 5.73t5.73 14.27q0 8.53-5.73 14.26-5.73 5.74-14.27 5.74H292.31q-35 0-52.23-29.5-17.23-29.5-.85-59.27l60.15-107.23L152.31-820H100q-8.54 0-14.27-5.73T80-840q0-8.54 5.73-14.27T100-860h57.31q9.46 0 17.15 4.85 7.69 4.84 11.92 13.53L215.69-780ZM342-515.38h280-280Z"
            />
        </svg>
    </button>

    <div
        class="cart-modal"
        v-show="cart.isModalOpen && items.length > 0"
    >

        <div class="cart-modal__item">
            <div class="cart-modal__item-img">
                <img
                    :src="product.img"
                    :alt="product.name"
                >
            </div>

            <div class="cart-modal__item-desc">
                <div class="text-tmp txt-fw-500">
                    <p>{{ product.name }}</p>
                </div>
                <div class="text-tmp txt-12 txt-fw-700">
                    <p>Количество: {{ totalCount }}</p>
                </div>
                <div class="text-tmp txt-12 txt-fw-700 txt-accent-3">
                    <p>{{ product.prices.price * totalCount }} {{ product.prices.pricePrefix }}</p>
                </div>
            </div>

            <div class="cart-modal__item-ui">
                <button
                    class="cart-modal__item-btn"
                    @click="handleMinusToCart(product.id)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                    >
                        <path d="M240-460v-40h480v40H240Z" />
                    </svg>
                </button>
                <button
                    class="cart-modal__item-btn"
                    @click="handleAddToCart(product.id)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                    >
                        <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>