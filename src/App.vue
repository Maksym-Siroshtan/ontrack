<script setup>
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import { timelineRef, currentPage } from './router'

import TheHeader from './components/TheHeader.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheHeader />
  <!-- Рекомендовано добавлять приставку "The" к названию компонента, если он будет использован только один раз -->

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" ref="timelineRef" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>
