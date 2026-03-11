<script setup lang="ts">
// self
import { IconArrowRightCmp } from '@components/ui'

interface Props {
    class?: string
}

const props = defineProps<Props>()
</script>

<template>
    <button
        class="btn-slider"
        :class="props.class"
    >
        <IconArrowRightCmp />
    </button>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>