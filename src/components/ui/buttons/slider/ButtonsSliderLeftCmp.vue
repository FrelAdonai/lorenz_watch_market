<script setup lang="ts">
// self
import { IconArrowLeftCmp } from '@components/ui'

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
        <IconArrowLeftCmp />
    </button>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>