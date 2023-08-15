<script setup>
import { routes, currentPage } from './router'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheHeader />
  <!-- Рекомендовано добавлять приставку "The" к названию компонента, если он будет использован только один раз -->

  <main class="flex flex-grow flex-col">
    <KeepAlive>
      <component :is="routes[currentPage]" />
    </KeepAlive>
  </main>

  <TheNav />
</template>
