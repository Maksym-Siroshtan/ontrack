<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['goToTimeline, goToProgress'])
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center p-3 justify-between bg-white">
    <TheLogo @click="emit('goToTimeline')" />

    <TheHeaderProgress @click="emit('goToProgress')" />
  </header>
</template>
