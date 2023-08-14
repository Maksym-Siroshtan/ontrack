import { BUTTON_TYPES, NAV_ITEMS, HOUR_IN_DAY, MIDNIGHT_HOUR } from './constants'

export function isPageValid(page) {
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOUR_IN_DAY - 1)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionsValid)
}

function isSelectOptionsValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}

export function isNull(value) {
  return value === null
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(hour, start, end) {
  return hour >= start && hour <= end
}

function isString(value) {
  return typeof value === 'string'
}
