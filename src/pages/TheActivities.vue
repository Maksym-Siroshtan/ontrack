<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import { validateActivities, isActivityValid } from '../validators'
import ActivityItem from '../components/ActivityItem.vue'
import BaseButton from '../components/BaseButton.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: {
    validator: isActivityValid
  }
})
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form class="sticky bottom-[57px] flex gap-2 p-4 bg-white border-t">
      <input type="text" class="w-full rounded border text-xl px-4" placeholder="Activity name" />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
