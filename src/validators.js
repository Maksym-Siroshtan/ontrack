import { NAV_ITEMS, HOUR_IN_DAY, MIDNIGHT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOUR_IN_DAY
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionsValid)
}

function isSelectOptionsValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}
