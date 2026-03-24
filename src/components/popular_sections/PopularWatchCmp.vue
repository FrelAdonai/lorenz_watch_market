<script setup lang="ts">
// self
import { SectionCmp } from '@/components/layout/tmp'
import Slider from '@components/popular_sections/ui/Slider.vue'

// mok
import { obj } from './api/api'
</script>

<template>
    <SectionCmp
        :padding="60"
        v-if="((obj ?? []).length > 0)"
    >
        <div class="grid:fr-1 g-gap-40">
            <div class="text-tmp title-32 title-fw-400">
                <h2>Популярные часы</h2>
            </div>

            <Slider :objProducts="obj ?? []" />
        </div>

    </SectionCmp>
</template>

<style scoped lang="scss"></style>