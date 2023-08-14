import { ref } from 'vue'

import { generateTimelineItems } from './functions'
import { activities } from './activities'

export const timelineItems = ref(generateTimelineItems(activities.value))

export function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}
