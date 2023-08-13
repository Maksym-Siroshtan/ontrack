<script setup>
import { ref, computed, provide } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import { timelineRef, currentPage } from './router'
import {
  generateTimelineItems,
  generateActivities,
  generateActivitySelectOptions,
  generatePeriodSelectOptions
} from './functions'

import TheHeader from './components/TheHeader.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheNav from './components/TheNav.vue'

const activities = ref(generateActivities())
const timelineItems = ref(generateTimelineItems(activities.value))
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds)
provide('setActivitySecondsToComplete', setActivitySecondsToComplete)
provide('setTimelineItemActivity', setTimelineItemActivity)
provide('createActivity', createActivity)
provide('deleteActivity', deleteActivity)
provide('periodSelectOptions', generatePeriodSelectOptions())
provide('activitySelectOptions', activitySelectOptions)
provide('timelineItems', timelineItems.value)
</script>

<template>
  <TheHeader />
  <!-- Рекомендовано добавлять приставку "The" к названию компонента, если он будет использован только один раз -->

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>
