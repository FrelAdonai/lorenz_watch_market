<script setup lang="ts">
interface Props {
    icon?: string
    title?: string
    text?: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="card-benefit">
        <div
            class="card-benefit__desc-icon"
            :style="{ backgroundImage: `url(${props.icon})` }"
        ></div>

        <div class="card-benefit__desc">
            <div class="text-tmp title-20 title-fw-400 all-center gap-10">
                <h3>{{ props.title }}</h3>
                <p>
                    {{ props.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>