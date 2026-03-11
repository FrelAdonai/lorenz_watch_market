<script setup lang="ts">
export interface SelectOption {
    value: string
    text: string
    selected?: boolean
}

export interface SelectCmpProps {
    modelValue?: string
    id?: string
    label?: string
    name?: string
    placeholder?: string
    options?: SelectOption[]
}

const props = defineProps<SelectCmpProps>()

</script>

<template>
    <div class="select-cmp-wrapper">
        <label v-if="props.label" class="select-cmp-label" :for="props.id">
            {{ props.label }}
        </label>

        <select :id="props.id" :name="props.name">
            <option v-for="opt in props.options" :key="opt.value" :value="opt.value">
                {{ opt.text }}
            </option>
        </select>
    </div>
</template>

<style scoped lang="scss">
@use "./index.scss";
</style>
