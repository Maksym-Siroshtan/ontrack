import { ref } from 'vue'

import { activities } from './activities'
import { HOUR_IN_DAY } from './constants'

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds = activitySeconds
}

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

export function resetTimelineItemActivities(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
}

export function getTotalActivitySeconds(activity) {
  return timelineItems.value
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    )
}

function generateTimelineItems() {
  return [...Array(HOUR_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0

    /* activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR */
  }))
}
