import { createApp } from 'vue'
import { syncState } from './storage'
import App from './App.vue'

import './assets/main.css'

// loadState()

// if (activeTimelineItem.value) {
//   startTimelineItemTimer(activeTimelineItem.value)
// }

syncState()

document.addEventListener('visibilitychange', () =>
  // document.visibilityState === 'visible' ? loadState() : saveState()
  syncState(document.visibilityState === 'visible')
)
createApp(App).mount('#app')
