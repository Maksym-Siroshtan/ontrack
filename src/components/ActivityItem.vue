<script setup>
import { inject } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'

import { setActivitySecondsToCompleteKey, periodSelectOptionsKey, deleteActivityKey } from '../keys'
import { BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid } from '../validators'

import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
const periodSelectOptions = inject(periodSelectOptionsKey)
const deleteActivity = inject(deleteActivityKey)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="text-xl truncate">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="setActivitySecondsToComplete(activity, $event)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
