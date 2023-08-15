<script setup>
import { nextTick, ref } from 'vue'

import { createActivity } from '../activities'
import { ICON_PLUS } from '../icons'
import { id } from '../functions'

import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const name = ref('')

async function submit() {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

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
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <BaseIcon :name="ICON_PLUS" />
    </BaseButton>
  </form>
</template>
