<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import { isPageValid } from '../validators'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '../constants'

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center p-3 justify-between bg-white">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />

    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
