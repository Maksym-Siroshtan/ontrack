<script setup>
import { onActivated, onDeactivated } from 'vue'
import { startTimer, stopTimer } from '../time'
import {
  scrollToCurrentHour,
  stopTimelineItemTimer,
  timelineItemRefs,
  timelineItems
} from '../timeline-items'

import TimelineItem from '../components/TimelineItem.vue'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'

stopTimelineItemTimer()

onActivated(() => {
  scrollToCurrentHour()

  startTimer()
})

onDeactivated(stopTimer)
</script>

<template>
  <div class="mt-7 relative">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
