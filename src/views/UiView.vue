<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { ButtonCommonCmp, InputCmp, InputPnoneCmp, InputEmailCmp, TextAreaCmp, SelectCmp } from '@components/ui'
import { CommonCardCmp } from '@components/cards'
import { BlockCardsFr4Cmp, BlockCardsFr3Cmp } from '@/components/layout/tmp'

// mock data for select
const selectOptions = [
    { value: '1', text: 'Option 1', selected: false },
    { value: '2', text: 'Option 2', selected: true },
    { value: '3', text: 'Option 3', selected: false }
]

interface Test {
    text: string
    textarea: string
}

const test: Ref<Test> = ref({
    text: '',
    textarea: ''
})

function handleClick(event: MouseEvent) {
    console.log('Клик по кнопке!', event)
}
</script>

<template>
    <section class="flex:col pad-tb-60">
        <div class="flex:col-max">

            <div class="grid:fr-1 g-gap-60">

                <div class="grid:fr-1 g-gap-20">
                    <div class="text-tmp title-24">
                        <h1>Buttons</h1>
                    </div>

                    <div class="grid:fr-2 g-gap-40 max pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Colors</h2>
                            </div>

                            <div class="items gap-10">

                                <ButtonCommonCmp @click="handleClick">
                                    primary (default)
                                </ButtonCommonCmp>

                                <ButtonCommonCmp color="secondary">
                                    secondary
                                </ButtonCommonCmp>
                            </div>
                        </div>

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Size</h2>
                            </div>

                            <div class="items gap-10">
                                <ButtonCommonCmp type="button">
                                    md (default)
                                </ButtonCommonCmp>

                                <ButtonCommonCmp
                                    size="sm"
                                    type="button"
                                >
                                    sm
                                </ButtonCommonCmp>

                                <ButtonCommonCmp
                                    size="lg"
                                    type="button"
                                >
                                    lg
                                </ButtonCommonCmp>
                            </div>
                        </div>

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Link</h2>
                            </div>

                            <div class="items gap-10">
                                <ButtonCommonCmp to="/">
                                    Link to="/"
                                </ButtonCommonCmp>

                                <ButtonCommonCmp
                                    to="/"
                                    target="_blank"
                                >
                                    target="_blank" and other target
                                </ButtonCommonCmp>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>

    <section class="flex:col pad-tb-60">
        <div class="flex:col-max">

            <div class="grid:fr-1 g-gap-60">

                <div class="grid:fr-1 g-gap-20">
                    <div class="text-tmp title-24">
                        <h1>Fields</h1>
                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Input</h2>
                            </div>
                        </div>

                        <div class="grid:fr-4 g-gap-20">
                            <InputCmp
                                label="Label"
                                name="_1_input"
                                id="_1_input"
                                placeholder="Text"
                            />
                        </div>

                        <div class="grid:fr-4 g-gap-20">
                            <InputPnoneCmp
                                label="Label"
                                name="_2_input"
                                id="_2_input"
                                placeholder="Phone"
                            />
                        </div>

                        <div class="grid:fr-4 g-gap-20">
                            <InputEmailCmp
                                label="Label"
                                name="_3_input"
                                id="_3_input"
                                placeholder="Email"
                            />
                        </div>

                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Textarea</h2>
                            </div>
                        </div>

                        <div class="grid:fr-4 g-gap-20">
                            <TextAreaCmp
                                name="_1_textarea"
                                label="Label"
                                id="_1_textarea"
                                placeholder="Massage"
                            />
                        </div>

                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Select</h2>
                            </div>
                        </div>

                        <div class="grid:fr-4 g-gap-20">
                            <SelectCmp
                                label="Label select"
                                name="_1_select"
                                id="_1_select"
                                placeholder="Choose option..."
                                :options="selectOptions"
                            />

                        </div>

                    </div>

                    <div class="grid:fr-2 g-gap-40 max pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Checkbox</h2>
                            </div>
                        </div>

                        <div class="items gap-10"></div>

                    </div>

                    <div class="grid:fr-2 g-gap-40 max pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Radio</h2>
                            </div>
                        </div>

                        <div class="items gap-10"></div>

                    </div>

                </div>

            </div>

        </div>
    </section>

    <section class="flex:col pad-tb-60">
        <div class="flex:col-max">

            <div class="grid:fr-1 g-gap-60">

                <div class="grid:fr-1 g-gap-20">
                    <div class="text-tmp title-24">
                        <h1>Cards</h1>
                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">
                            <div class="text-tmp title-18">
                                <h2>Common</h2>
                            </div>

                            <div class="grid:fr-4 g-gap-20">

                                <CommonCardCmp
                                    img="/images/bg/1.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere repudiandae similique dolor cumque velit, aliquam natus error laborum quidem odio.
                                    </p>
                                </CommonCardCmp>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>

    <section class="flex:col pad-tb-60">
        <div class="flex:col-max">

            <div class="grid:fr-1 g-gap-60">

                <div class="grid:fr-1 g-gap-20">
                    <div class="text-tmp title-24">
                        <h1>Blocks</h1>
                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">

                            <div class="text-tmp title-18">
                                <h2>Block cards any fr</h2>
                            </div>

                            <BlockCardsFr4Cmp :gap="20">
                                <CommonCardCmp
                                    img="/images/bg/1.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere repudiandae similique dolor cumque velit, aliquam natus error laborum quidem odio.
                                    </p>
                                </CommonCardCmp>

                                <CommonCardCmp
                                    img="/images/bg/2.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </CommonCardCmp>

                                <CommonCardCmp
                                    img="/images/bg/2.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </CommonCardCmp>

                                <CommonCardCmp
                                    img="/images/bg/2.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </CommonCardCmp>
                            </BlockCardsFr4Cmp>

                            <BlockCardsFr3Cmp :gap="20">
                                <CommonCardCmp
                                    img="/images/bg/1.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere repudiandae similique dolor cumque velit, aliquam natus error laborum quidem odio.
                                    </p>
                                </CommonCardCmp>

                                <CommonCardCmp
                                    img="/images/bg/2.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </CommonCardCmp>

                                <CommonCardCmp
                                    img="/images/bg/2.jpg"
                                    alt="card-common"
                                    to="/"
                                >
                                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </CommonCardCmp>
                            </BlockCardsFr3Cmp>

                        </div>

                    </div>

                    <div class="grid:fr-1 g-gap-40 pad-tb-20 pad-lr-20 bg-accent-2">

                        <div class="grid:fr-1 g-gap-20">

                            <div class="text-tmp title-18">
                                <h2>Block content</h2>
                            </div>

                            <BlockContentFr2Cmp :gap="20">
                                <template #left>
                                    <div class="text-tmp title-18">
                                        <p>
                                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Диких заголовок курсивных одна вдали от всех залетают, прямо эта последний назад рукопись мир снова запятой. Рукописи вопрос то даль осталось имени даже предупреждал несколько своего ipsum
                                            злых обеспечивает алфавит рот раз правилами своих, предупредила заглавных щеке по всей, безопасную, большой путь за моей продолжил? Прямо однажды моей безопасную агентство ведущими реторический, рекламных рыбными там ты необходимыми текстов меня но деревни семантика запятой,
                                            текста несколько переписали щеке правилами дороге буквенных даже пунктуация последний. Переулка прямо великий всеми, несколько всемогущая за, курсивных осталось выйти страну рекламных там предупредила lorem деревни, первую напоивший журчит.
                                        </p>

                                        <p>
                                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Диких заголовок курсивных одна вдали от всех залетают, прямо эта последний назад рукопись мир снова запятой. Рукописи вопрос то даль осталось имени даже предупреждал несколько своего ipsum
                                            злых обеспечивает алфавит рот раз правилами своих, предупредила заглавных щеке по всей, безопасную, большой путь за моей продолжил? Прямо однажды моей безопасную агентство ведущими реторический, рекламных рыбными там ты необходимыми текстов меня но деревни семантика запятой,
                                            текста несколько переписали щеке правилами дороге буквенных даже пунктуация последний. Переулка прямо великий всеми, несколько всемогущая за, курсивных осталось выйти страну рекламных там предупредила lorem деревни, первую напоивший журчит.
                                        </p>
                                    </div>
                                </template>
                                <template #right>
                                    <div class="text-tmp title-18">
                                        <p>
                                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Диких заголовок курсивных одна вдали от всех залетают, прямо эта последний назад рукопись мир снова запятой. Рукописи вопрос то даль осталось имени даже предупреждал несколько своего ipsum
                                            злых обеспечивает алфавит рот раз правилами своих, предупредила заглавных щеке по всей, безопасную, большой путь за моей продолжил? Прямо однажды моей безопасную агентство ведущими реторический, рекламных рыбными там ты необходимыми текстов меня но деревни семантика запятой,
                                            текста несколько переписали щеке правилами дороге буквенных даже пунктуация последний. Переулка прямо великий всеми, несколько всемогущая за, курсивных осталось выйти страну рекламных там предупредила lorem деревни, первую напоивший журчит.
                                        </p>
                                    </div>
                                </template>
                            </BlockContentFr2Cmp>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>

</template>

<style scoped lang="scss"></style>
