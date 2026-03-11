<script setup lang="ts">
interface Props {
    gap?: number
}

const props = defineProps<Props>()
</script>

<template>
    <div
        class="cards-fr-3"
        :class="`g-gap-${props.gap}`"
    >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@use "@assets/styles/common/mixins.scss" as *;

.cards-fr-3 {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    & > * {
        width: calc(100% / 3 - 20px) !important;
        flex-grow: 1;
    }
}
</style>