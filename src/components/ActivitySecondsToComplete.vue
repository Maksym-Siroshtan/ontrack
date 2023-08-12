<script setup>
import { formatSeconds, getTotalActivitySeconds } from '../functions'
import { isActivityValid, validateTimelineItems } from '../validators'

const props = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const seconds = formatSeconds(
  getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
)
</script>

<template>
  <div class="flex items-center bg-purple-100 text-purple-600 rounded px-2 font-mono text-xl">
    {{ seconds }}
  </div>
</template>
