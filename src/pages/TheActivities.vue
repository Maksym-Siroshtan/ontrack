<script setup>
import { validateActivities, isActivityValid } from '../validators'
import ActivityItem from '../components/ActivityItem.vue'
import TheActivityForm from '../components/TheActivityForm.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  createActivity: {
    validator: isActivityValid
  },
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

      <TheActivityForm @submit="emit('createActivity', $event)" />
    </ul>
  </div>
</template>
