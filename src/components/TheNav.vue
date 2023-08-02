<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import NavItems from './NavItems.vue'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItems v-for="(icon, page) in navItems" :key="page" :href="`#${page}`">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItems>
    </ul>
  </nav>
</template>
