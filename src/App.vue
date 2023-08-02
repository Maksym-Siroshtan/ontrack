<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
const navIcons = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center p-3 justify-between bg-white">
    <a href="#">
      <img src="./assets/img/logo.png" alt="Logo" class="h-9" />
    </a>
    <a href="#">
      <div v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>

  <main class="flex flex-grow flex-col">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti at expedita in sapiente nam
    quidem iusto explicabo minima voluptas obcaecati.
  </main>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <li
        v-for="icon, page in navIcons"
        :key="page"
        class="flex-1"
      >
        <a
          class="flex flex-col items-center p-2 text-xs capitalize"
          :href="`#${item}`"
        >
          <component :is="icon" class="h-6 w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
