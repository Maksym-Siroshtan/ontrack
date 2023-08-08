import { BUTTON_TYPES, NAV_ITEMS, HOUR_IN_DAY, MIDNIGHT_HOUR } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
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

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionsValid)
}

function isSelectOptionsValid({ value, label }) {
  return isNumber(value) && isNotEmptyString(label)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(hour, start, end) {
  return hour >= start && hour <= end
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isUndefined(value) {
  return value === undefined
}

function isNull(value) {
  return value === null
}
