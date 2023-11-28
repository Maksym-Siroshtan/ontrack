import { APP_NAME } from './constants'
import { today } from './time'
import { activeTimelineItem, timelineItems, initializeTimelineItems } from './timeline-items'
import { startTimelineItemTimer, stopTimelineItemTimer } from './timeline-item-timer'
import { activities, initializeActivities } from './activities'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad
      ? startTimelineItemTimer()
      : stopTimelineItemTimer()
  }
}

function loadState() {
  const state = loadFromLocalStorage()

  initializeActivities(state)
  initializeTimelineItems(state)
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem(APP_NAME) ?? '{}')
}

function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}
