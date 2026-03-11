<script setup lang="ts">
interface Props {
    gap?: number
}

const props = defineProps<Props>()
</script>

<template>
    <div class="cards-fr-4" :class="`g-gap-${props.gap}`">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@use "@assets/styles/common/mixins.scss" as *;

.cards-fr-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;

    @include adaptiv-1170 {
        grid-template-columns: repeat(3, 1fr);
    }

    @include adaptiv-850 {
        grid-template-columns: repeat(2, 1fr);
    }

    @include adaptiv-600 {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>