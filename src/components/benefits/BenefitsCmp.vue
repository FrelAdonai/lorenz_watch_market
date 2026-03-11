<script setup lang="ts">
import { SectionCmp, BlockCardsFr4Cmp } from '@/components/layout/tmp'
import { CardBenefitCmp } from '@components/cards'


const PADDING = 60
const arrMock = [
    {
        icon: 'images/icons/box.svg',
        title: 'Бесплатная доставка',
        text: 'Мы отправляем ваши заказы только экспресс-курьером. Доставка по всей Италии всегда бесплатна.'
    },
    {
        icon: 'images/icons/location.svg',
        title: 'Найдите дилера',
        text: 'Ознакомьтесь с нашим списком розничных продавцов и найдите ближайший к вам магазин, чтобы лично ознакомиться с нашей продукцией.'
    },
    {
        icon: 'images/icons/clock_alarm.svg',
        title: 'Гарантия 12 месяцев',
        text: 'Если вы обнаружите какую-либо проблему с продуктом, мы вернем вам деньги или заменим его на новый.'
    },
    {
        icon: 'images/icons/defence.svg',
        title: 'Поддержка продукта',
        text: 'Узнайте, как получить поддержку по всем продуктам марки Lorenz.'
    },

]
</script>

<template>
    <SectionCmp
        :padding=PADDING
        class="bg-accent-5"
        v-if="((arrMock ?? []).length > 0)"
    >
        <div class="grid:fr-1 g-gap-40">

            <div class="text-tmp title-24 title-tt-up title-fw-400 all-center">
                <h2>Наши преимущества</h2>
            </div>

            <BlockCardsFr4Cmp :gap="20">

                <CardBenefitCmp
                    v-for="item in arrMock"
                    :icon="item.icon"
                    :title="item.title"
                    :text="item.text"
                />

            </BlockCardsFr4Cmp>

        </div>
    </SectionCmp>
</template>

<style scoped lang="scss"></style>