<script setup>
import { navigate } from '../router'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '../constants'

import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center p-3 justify-between bg-white">
    <TheLogo @click="navigate(PAGE_TIMELINE)" />

    <TheHeaderProgress @click="navigate(PAGE_PROGRESS)" />
  </header>
</template>
