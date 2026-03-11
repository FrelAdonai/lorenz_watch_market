<script setup lang="ts">
import HeaderCmp from '@components/layout/header/HeaderCmp.vue'
import FooterCmp from '@components/layout/footer/FooterCmp.vue'
</script>

<template>
    <div class="wrapper">
        <HeaderCmp />

        <main class="main">
            <router-view />
        </main>

        <FooterCmp />
    </div>
</template>
