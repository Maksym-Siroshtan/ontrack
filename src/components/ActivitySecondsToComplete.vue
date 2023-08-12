<script setup>
import { formatSeconds } from '../functions'
import { isActivityValid } from '../validators'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})
</script>

<template>
  <div class="flex items-center bg-purple-100 text-purple-600 rounded px-2 font-mono text-xl">
    {{ formatSeconds(activity.secondsToComplete) }}
  </div>
</template>
