<script setup lang="ts">

// self 
import FavoriteSection from '@views/home/ui/FavoriteSection.vue'
import IntroSection from '@views/home/ui/IntroSection.vue'
import PopularWatchCmp from '@components/popular_sections/PopularWatchCmp.vue'
import BestModelCmp from '@components/best_model/BestModelCmp.vue'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'

</script>

<template>

    <!-- intro section -->
    <IntroSection />

    <!-- favorite section -->
    <FavoriteSection />

    <!-- popelar section -->
    <PopularWatchCmp />

    <!-- best model section -->
    <BestModelCmp />

    <!-- benefits section -->
    <BenefitsCmp />

</template>

<style scoped lang="scss"></style>