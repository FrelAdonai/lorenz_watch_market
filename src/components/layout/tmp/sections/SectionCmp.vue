<script setup lang="ts">
import { computed } from 'vue'


interface Props {
    padding?: number
    block_color?: string
}

const props = withDefaults(defineProps<Props>(), {
    padding: 0,
    block_color: ''
})

const sectionClasses = computed(() => {
    return {
        [`pad-tb-${props.padding}`]: props.padding > 0,
        [`bg-${props.block_color}`]: !!props.block_color
    }
})

</script>

<template>
    <section
        class="flex:col"
        :class="sectionClasses"
    >

        <div class="flex:col-max">
            <slot></slot>
        </div>

    </section>
</template>

<style scoped lang="scss"></style>