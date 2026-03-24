<script setup lang="ts">
// vue
import { ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'


// self 
import IconArrowRightCmp from '@components/ui/icons/arrows/IconArrowRightCmp.vue'
import { ROUTES_PATHS } from '@/constants'

interface Props {
    items: {
        id?: number
        to?: RouteLocationRaw
        label?: string
        sub_nav?: {
            sub_id?: number
            sub_title?: string
            sub_items?: {
                sub_item_id?: number
                sub_item_to?: string
                sub_item_label?: string
            }[]
        }[]
    }[]
}

const props = defineProps<Props>()

const hoveredIndex = ref<number | null>(null)
function setHover(index: number | null) {
    hoveredIndex.value = index
}
</script>

<template>
    <nav
        :class="['header-nav', { 'active': hoveredIndex !== null }]"
        v-if="((props.items ?? []).length > 0)"
    >
        <ul>
            <li
                v-for="(item, index) in props.items"
                :key="item.id"
                @mouseenter="setHover(index)"
                @mouseleave="setHover(null)"
            >
                <router-link
                    :to="item.to ?? ROUTES_PATHS.HOME.path"
                    :class="[{ 'active': hoveredIndex === index }]"
                >
                    {{ item.label }}
                    <IconArrowRightCmp v-if="((item.sub_nav ?? []).length > 0)" />
                </router-link>

                <div
                    v-if="((item.sub_nav ?? []).length > 0)"
                    :class="['header-nav__drop', { 'active': hoveredIndex === index }]"
                >
                    <div class="flex:col-max">
                        <div class="header-nav__drop-inner">

                            <div
                                class="header-nav__drop-list"
                                v-for="list in item.sub_nav"
                                :key="list.sub_id"
                            >
                                <div class="text-tmp txt-18 txt-fw-500">
                                    <p> {{ list.sub_title }}</p>
                                </div>

                                <ul v-if="((list.sub_items ?? []).length > 0)">
                                    <li
                                        v-for="sub_item in list.sub_items"
                                        :key="sub_item.sub_item_id"
                                    >
                                        <router-link to="#">
                                            {{ sub_item.sub_item_label }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>