<script setup lang="ts">

// self
import { SectionCmp, BlockCardsFr4Cmp } from '@/components/layout/tmp'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'


interface Props {
    slug?: string
}

const props = defineProps<Props>()
const PADDING = 60
</script>

<template>
    <SectionCmp :padding=PADDING>
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-32 title-tt-up title-fw-400">
                <h2>Часы {{ props.slug }}</h2>
            </div>

        </div>
    </SectionCmp>

    <BenefitsCmp />
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>