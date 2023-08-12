<script setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { PAGE_TIMELINE, MIDNIGHT_HOUR } from '../constants'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid,
  isPageValid
} from '../validators'

const props = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (props.currentPage === PAGE_TIMELINE) {
    await nextTick()

    scrollToCurrentTimelineItem()
  }
})

function scrollToCurrentTimelineItem() {
  const currentHour = new Date().getHours()

  if (currentHour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
  }
}
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        :activities="activities"
        @select-activity="emit('setTimelineItemActivity', timelineItem, $event)"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
