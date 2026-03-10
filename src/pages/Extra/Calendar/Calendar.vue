<template>
  <div class="calendar-page">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <h1 class="page-title">
          {{ currentMonth }} - <span class="fw-semi-bold">{{ currentDay }}</span>
        </h1>
        <h3>Draggable <span class="fw-semi-bold">Events</span></h3>
        <p>Just drag and drop events from there directly into the calendar.</p>
        <div
          ref="externalEvents"
          class="calendar-external-events mb-lg"
        >
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-success&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Make a tea&quot; }"
          >
            <i class="fa fa-circle fa-fw text-success ms-1 me-1" />
            Make a tea
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-warning&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Open windows&quot; }"
          >
            <i class="fa fa-circle fa-fw text-warning ms-1 me-1" />
            Open windows
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-gray&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Some stuff&quot; }"
          >
            <i class="fa fa-circle-o fa-fw text-gray-light ms-1 me-1" />
            Some stuff
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-danger&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Study UX engineering&quot; }"
          >
            <i class="fa fa-square fa-fw text-danger ms-1 me-1" />
            Study UX engineering
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-gray&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Another stuff&quot; }"
          >
            <i class="fa fa-circle-o fa-fw text-gray-light ms-1 me-1" />
            Another stuff
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12">
        <Widget>
          <div class="row calendar-controls mb-3">
            <div class="col-md-3">
              <div class="btn-group me-1">
                <button
                  class="btn btn-gray-default"
                  @click="prev"
                >
                  <i class="fa fa-angle-left" />
                </button>
                <button
                  class="btn btn-gray-default"
                  @click="next"
                >
                  <i class="fa fa-angle-right" />
                </button>
              </div>
              <button
                class="btn btn-gray-default"
                @click="today"
              >
                Today
              </button>
            </div>
            <div class="col-md-9 calendar-controls text-end">
              <div class="btn-group">
                <button
                  class="btn btn-gray-default"
                  :class="{ active: calendarView === 'dayGridMonth' }"
                  @click="changeView('dayGridMonth')"
                >
                  Month
                </button>
                <button
                  class="btn btn-gray-default"
                  :class="{ active: calendarView === 'timeGridWeek' }"
                  @click="changeView('timeGridWeek')"
                >
                  Week
                </button>
                <button
                  class="btn btn-gray-default"
                  :class="{ active: calendarView === 'timeGridDay' }"
                  @click="changeView('timeGridDay')"
                >
                  Day
                </button>
              </div>
            </div>
          </div>
          <FullCalendar
            ref="fullCalendar"
            :options="calendarOptions"
          />
        </Widget>
      </div>
    </div>

    <!-- Create Event Modal -->
    <div
      class="modal fade"
      :class="{ show: showCreateModal, 'd-block': showCreateModal }"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h5 class="modal-title">
                Create New Event
              </h5>
              <small class="text-muted">Just enter event name to create a new one</small>
            </div>
            <button
              type="button"
              class="btn-close"
              @click="showCreateModal = false"
            />
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <input
                  v-model="eventTitle"
                  type="text"
                  class="form-control"
                  placeholder="Title"
                >
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-success"
              @click="createEvent"
            >
              Create
            </button>
            <button
              class="btn btn-default"
              @click="showCreateModal = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Show Event Modal -->
    <div
      class="modal fade"
      :class="{ show: showEventModal, 'd-block': showEventModal }"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ selectedEvent.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="showEventModal = false"
            />
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <p class="text-muted">
                  <i class="la la-calendar" />
                  {{ getFormattedDate(selectedEvent.start) }}
                </p>
                <p>{{ selectedEvent.extendedProps?.description }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-default"
              @click="showEventModal = false"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showCreateModal || showEventModal"
      class="modal-backdrop fade show"
    />
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { format } from 'date-fns'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import Widget from '@/components/Widget/Widget.vue'

const appConfig = inject('appConfig')

const fullCalendar = ref(null)
const externalEvents = ref(null)
const calendarView = ref('dayGridMonth')
const currentMonth = ref(format(new Date(), 'MMM yyyy'))
const currentDay = ref(format(new Date(), 'EEEE'))

const calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin]

const showCreateModal = ref(false)
const showEventModal = ref(false)
const eventTitle = ref('')
const eventData = ref({})
const selectedEvent = ref({})

function getCalendarApi() {
  return fullCalendar.value?.getApi()
}

function handleSelect({ start, end, allDay }) {
  eventData.value = {
    start,
    end,
    allDay,
    backgroundColor: appConfig?.colors?.success || '#21ae8c',
    editable: true
  }
  eventTitle.value = ''
  showCreateModal.value = true
}

function handleEventClick(e) {
  selectedEvent.value = e.event
  showEventModal.value = true
}

function handleDrop(info) {
  info.draggedEl.parentNode?.removeChild(info.draggedEl)
}

const calendarOptions = computed(() => {
  const date = new Date()
  const d = date.getDate()
  const m = date.getMonth()
  const y = date.getFullYear()
  const { info, danger, primary, success, textColor, inverse, warning } = appConfig?.colors || {}

  return {
    plugins: calendarPlugins,
    initialView: calendarView.value,
    headerToolbar: false,
    navLinks: false,
    selectable: true,
    editable: true,
    droppable: true,
    eventDisplay: 'block',
    select: handleSelect,
    eventClick: handleEventClick,
    drop: handleDrop,
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1),
        backgroundColor: primary,
        description: 'Will be busy throughout the whole day'
      },
      {
        title: 'Long Event',
        start: new Date(y, m, d + 5),
        end: new Date(y, m, d + 7),
        textColor: textColor,
        backgroundColor: primary,
        description: 'This conference should be worth visiting'
      },
      {
        id: 999,
        title: 'Blah Blah Car',
        start: new Date(y, m, d - 3, 16, 0),
        backgroundColor: warning,
        textColor: textColor,
        allDay: false,
        description: 'Agree with this guy on arrival time'
      },
      {
        id: 1000,
        title: 'Buy this template',
        start: new Date(y, m, d + 3, 12, 0),
        allDay: false,
        backgroundColor: success,
        description: 'Make sure everything is consistent first'
      },
      {
        title: 'Go to school',
        start: new Date(y, m, d + 16, 12, 0),
        end: new Date(y, m, d + 16, 13, 0),
        backgroundColor: danger,
        description: 'Time to go back'
      },
      {
        title: 'Study some Node',
        start: new Date(y, m, d + 18, 12, 0),
        end: new Date(y, m, d + 18, 13, 0),
        backgroundColor: inverse,
        description:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications."
      },
      {
        title: 'Click for Flatlogic',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://flatlogic.com/',
        backgroundColor: info,
        description: 'Creative solutions'
      }
    ]
  }
})

function createEvent() {
  const api = getCalendarApi()
  if (api && eventTitle.value) {
    api.addEvent({
      ...eventData.value,
      title: eventTitle.value
    })
    api.unselect()
  }
  showCreateModal.value = false
}

function prev() {
  getCalendarApi()?.prev()
}

function next() {
  getCalendarApi()?.next()
}

function today() {
  getCalendarApi()?.today()
}

function changeView(view) {
  getCalendarApi()?.changeView(view)
  calendarView.value = view
}

function getFormattedDate(date) {
  if (!date) return ''
  return format(new Date(date), 'yyyy-MM-dd')
}

onMounted(() => {
  if (externalEvents.value) {
    new Draggable(externalEvents.value, {
      itemSelector: '.external-event'
    })
  }
})
</script>

<style src="./Calendar.scss" lang="scss" />
