<script setup lang="ts">

// self 
import BestCollections from '@views/home/ui/BestCollections.vue'
import IntroSection from '@views/home/ui/IntroSection.vue'
import PopularWatchCmp from '@components/popular_sections/PopularWatchCmp.vue'
import BestCollectionsCmp from '@components/best_model/BestCollectionsCmp.vue'
import BenefitsCmp from '@components/benefits/BenefitsCmp.vue'

</script>

<template>

    <!-- intro section -->
    <IntroSection />

    <!-- favorite section -->
    <BestCollections />

    <!-- popular section -->
    <PopularWatchCmp />

    <!-- best collections section -->
    <BestCollectionsCmp />

    <!-- benefits section -->
    <BenefitsCmp />

</template>

<style scoped lang="scss"></style>