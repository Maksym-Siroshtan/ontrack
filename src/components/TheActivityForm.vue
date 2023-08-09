<script setup>
import { nextTick, ref } from 'vue'
import { isActivityValid } from '../validators'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'

const emit = defineEmits({
  submit: isActivityValid
})

let activity = ref('')

async function submit() {
  emit('submit', activity.value)

  activity.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 p-4 bg-white border-t" @submit.prevent="submit">
    <input
      type="text"
      class="w-full rounded border text-xl px-4"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
