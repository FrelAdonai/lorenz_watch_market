<script setup lang="ts">

interface Props {
    id?: string
    placeholder?: string
    name?: string
    label?: string
}

const props = defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
    <div class="input">
        <label class="input__label" v-if="props.label" :for="props.id">{{ props.label }}</label>
        <input class="input__field" type="tel" v-maska="'+8 (998) ###-##-##'" v-model="model" :name="props.name" :id="props.id" :placeholder="props.placeholder">
    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>