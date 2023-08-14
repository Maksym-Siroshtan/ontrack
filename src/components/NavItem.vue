<script setup>
import { computed } from 'vue'
import { navigate, currentPage } from '../router'
import { isPageValid } from '../validators'

const props = defineProps({
  page: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200 pointer-events-none': props.page === currentPage.value }
])
</script>

<template>
  <li class="flex-1">
    <a :href="`#${page}`" :class="classes" @click="navigate(page)">
      <slot></slot>
    </a>
  </li>
</template>
