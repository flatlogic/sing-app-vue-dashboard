<template>
  <p class="text-muted mb-0">
    <span
      v-if="user.isOnline"
      class="text-info"
    >
      Online
    </span>
    <span v-else>{{ 'Last seen ' + wasOnline }}</span>
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { formatDistanceToNow, isToday, isYesterday, format } from 'date-fns'

const props = defineProps({
  user: Object
})

const wasOnline = computed(() => {
  if (!props.user?.prevOnline) return ''

  const date = new Date(props.user.prevOnline)

  if (isToday(date)) {
    return 'today at ' + format(date, 'h:mm a')
  } else if (isYesterday(date)) {
    return 'yesterday at ' + format(date, 'h:mm a')
  } else {
    return formatDistanceToNow(date, { addSuffix: true })
  }
})
</script>
