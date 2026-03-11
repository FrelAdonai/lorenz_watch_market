<script setup lang="ts">

// vue
import { useScroll } from '@vueuse/core'
import { ref, computed, watch } from 'vue'

// self
import { ROUTES_PATHS } from '@/constants'
import HeaderNav from './ui/nav/HeaderNav.vue'

// mok
import { navItems } from './api'


const { y } = useScroll(window, { behavior: 'smooth' })
const isScrolled = computed(() => (y.value ?? 0) > 200)
const prevY = ref(0)
const isScrolledDown = ref(false)

watch(y, (newY) => {
    const currentY = newY ?? 0
    isScrolledDown.value = currentY > prevY.value
    prevY.value = currentY
}, { immediate: true })
//
</script>

<template>
    <header
        class="header"
        :class="{ 'theme-white': isScrolled, 'transform': isScrolledDown }"
    >
        <div class="flex:col-max">

            <div class="header__inner">

                <router-link
                    class="header__logo"
                    :to="ROUTES_PATHS.HOME.path"
                >
                    <img
                        src="/images/logo/logo.avif"
                        alt="logo"
                    >
                </router-link>

                <HeaderNav :items="navItems" />

                <div class="header__item">

                </div>

            </div>

        </div>
    </header>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>