<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

// 
interface Props {
    size?: "sm" | "md" | "lg" | "full"
    color?: "primary" | "secondary" | "white"
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    to?: RouteLocationRaw
    target?: "_self" | "_blank" | "_parent" | "_top"
}

const props = defineProps<Props>()

// 
const tag = computed(() => (props.to ? 'router-link' : 'button'))
const classes = computed(() => [
    'btn',
    props.size ?? 'md',
    props.color ?? 'primary'
])
const componentAttrs = computed(() =>
    props.to ? { target: props.target ?? '_self' } : { type: props.type ?? 'button', disabled: props.disabled }
)

// handlers
const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>

<template>
    <component
        @click="handleClick"
        :is="tag"
        :class="classes"
        :to="to"
        v-bind="componentAttrs"
    >
        <slot></slot>
    </component>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>