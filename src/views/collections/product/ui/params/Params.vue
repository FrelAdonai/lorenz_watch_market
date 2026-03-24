<script setup lang="ts">
// vue
import { ref } from 'vue'

// components
import IconArrowRightCmp from '@components/ui/icons/arrows/IconArrowRightCmp.vue'

interface Props {
    obj?: PropsItem[]
}

interface PropsItem {
    id?: number
    title?: string
    params?: PropsItemParam[]
}

interface PropsItemParam {
    name?: string
    value?: number
    prefix?: string
}

const props = defineProps<Props>()

// 
const openId = ref<number | null>(null)

function toggle(id: number | undefined) {
    if (id == null) return
    openId.value = openId.value === id ? null : id
}
</script>

<template>
    <div
        class="product-page__params"
        v-if="((props.obj ?? []).length > 0)"
    >
        <div
            class="product-page__params-item"
            v-for="item in props.obj"
            :key="item.id"
        >
            <button
                class="product-page__params-btn"
                :aria-expanded="openId === item.id"
                @click="toggle(item.id)"
            >
                {{ item.title }}

                <span
                    class="product-page__params-btn-icon"
                    :class="{ 'is-open': openId === item.id }"
                >
                    <IconArrowRightCmp />
                </span>
            </button>
            <div
                class="product-page__params-content"
                :class="{ 'is-open': openId === item.id }"
                v-if="((item.params ?? []).length > 0)"
            >
                <div class="product-page__params-content-inner">
                    <ul>
                        <li
                            v-for="param in item.params"
                            :key="param.name"
                        >
                            <span>
                                {{ param.name }}
                            </span>
                            -
                            <span>
                                {{ param.value ?? '' }}
                                {{ param.prefix ?? '' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>