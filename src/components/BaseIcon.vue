<script setup>
import {
  CheckCircleIcon as CheckCircle,
  ListBulletIcon as ListBullet,
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  PauseIcon as Pause,
  TrashIcon as Trash,
  ClockIcon as Clock,
  XMarkIcon as XMark,
  PlusIcon as Plus,
  PlayIcon as Play
} from '@heroicons/vue/24/outline'

const icons = {
  CheckCircle,
  ListBullet,
  ArrowPath,
  ChartBar,
  Pause,
  Trash,
  Clock,
  XMark,
  Plus,
  Play
}

defineProps({
  name: {
    required: true,
    type: String
  }
})
</script>

<template>
  <component :is="icons[name]" />
</template>
