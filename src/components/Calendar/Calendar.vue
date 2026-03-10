<template>
  <span class="sing-calendar">
    <VCalendar
      is-expanded
      borderless
      :attributes="attrs"
    >
      <template #day-popover="{ dayTitle, attributes }">
        <header class="fs-sm text-light fw-semi-bold text-center">
          {{ dayTitle }}
        </header>
        <div
          v-for="attr in attributes"
          :key="attr.key"
          class="text-white"
        >
          <p
            v-if="attr.popover?.title"
            class="fw-normal m-0"
          >{{ attr.popover.title }}</p>
          <p
            v-if="attr.popover?.description"
            class="fw-thin m-0"
          >{{ attr.popover.description }}</p>
          <a
            v-if="attr.popover?.link"
            class="fw-thin m-0"
            :href="attr.popover.href"
          >{{ attr.popover.link }}</a>
        </div>
      </template>
    </VCalendar>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/style.css'
import config from '@/config'

const props = defineProps({
  events: {
    type: Array,
    default: null
  }
})

const attrs = ref([])

onMounted(() => {
  // Use provided events or generate demo data
  if (props.events) {
    attrs.value = props.events
    return
  }

  // Demo data for dashboard displays
  const now = new Date()
  const month = now.getMonth()
  const year = now.getFullYear()

  attrs.value = [
    {
      key: 1,
      dot: {
        style: {
          backgroundColor: config.app.colors.primary
        }
      },
      dates: new Date(year, month, 2),
      popover: {
        title: 'The flower bed',
        description: 'Contents here',
        visibility: 'hover'
      }
    },
    {
      key: 2,
      dot: {
        style: {
          backgroundColor: config.app.colors.info
        }
      },
      dates: new Date(year, month, 5),
      popover: {
        title: 'Stop world water pollution',
        description: 'Have a kick off meeting with .inc company',
        visibility: 'hover'
      }
    },
    {
      key: 3,
      dot: {
        style: {
          backgroundColor: config.app.colors.warning
        }
      },
      dates: new Date(year, month, 18),
      popover: {
        title: 'Light Blue 2.2 release',
        description: 'Some contents here',
        visibility: 'hover'
      }
    },
    {
      key: 4,
      dot: {
        style: {
          backgroundColor: config.app.colors.danger
        }
      },
      dates: new Date(year, month, 29),
      popover: {
        link: 'A link',
        href: 'http://www.flatlogic.com',
        visibility: 'hover'
      }
    }
  ]
})
</script>

<style src="./Calendar.scss" lang="scss" />
