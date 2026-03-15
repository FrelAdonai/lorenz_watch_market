<script setup lang="ts">
// self
import { SectionCmp, BlockCardsFr4Cmp } from '@/components/layout/tmp'
import { CardBenefitCmp } from '@components/cards'

// mok
import { obj } from './api/api'
</script>

<template>
    <SectionCmp
        :padding="60"
        class="bg-accent-5"
        v-if="((obj ?? []).length > 0)"
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-24 title-tt-up title-fw-400 all-center">
                <h2>Наши преимущества</h2>
            </div>

            <BlockCardsFr4Cmp :gap="20">

                <CardBenefitCmp
                    v-for="item in obj"
                    :icon="item.icon"
                    :title="item.title"
                    :text="item.text"
                />

            </BlockCardsFr4Cmp>

        </div>
    </SectionCmp>
</template>

<style scoped lang="scss"></style>