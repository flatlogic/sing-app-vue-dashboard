<template>
  <div class='calendar-page'>
    <b-row>
      <b-col lg='4' sm='12' md='6'>
        <h1 class="page-title">
          {{currentMonth}} - <span class="fw-semi-bold">{{currentDay}}</span>
        </h1>
        <h3>Draggable <span class="fw-semi-bold">Events</span></h3>
        <p>Just drap and drop events from there directly into the calendar.</p>
        <div ref="externalEvents" class="calendar-external-events mb-lg">
          <div
              class="external-event"
              data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }'
          >
            <i class="fa fa-circle fa-fw text-success ms-1 me-1"></i>
            Make a tea
          </div>
          <div
              class="external-event"
              data-event='{ "classNames": ["bg-warning", "text-white"], "title": "Open windows" }'
          >
            <i class="fa fa-circle fa-fw text-warning ms-1 me-1"></i>
            Open windows
          </div>
          <div
              class="external-event"
              data-event='{ "classNames": ["bg-gray", "text-white"], "title": "Some stuff" }'
          >
            <i class="fa fa-circle-o fa-fw text-gray-light ms-1 me-1"></i>
            Some stuff
          </div>
          <div
              class="external-event"
              data-event='{ "classNames": ["bg-danger", "text-white"], "title": "Study UX engineering" }'
          >
            <i class="fa fa-square fa-fw text-danger ms-1 me-1"></i>
            Study UX engineering
          </div>
          <div
              class="external-event"
              data-event='{ "classNames": ["bg-gray", "text-white"], "title": "Another stuff" }'
          >
            <i class="fa fa-circle-o fa-fw text-gray-light ms-1 me-1"></i>
            Another stuff
          </div>
        </div>
      </b-col>
      <b-col md='6' lg='8' sm='12'>
        <Widget>
          <b-row class="calendar-controls">
            <b-col md='3'>
              <b-button-group class="me-1">
                <b-button variant="gray-default" @click="prev">
                  <i class="fa fa-angle-left"></i>
                </b-button>
                <b-button variant="gray-default" @click="next">
                  <i class="fa fa-angle-right"></i>
                </b-button>
              </b-button-group>
              <b-button variant="gray-default" @click="today">
                Today
              </b-button>
            </b-col>
            <b-col md='9' class="calendar-controls text-end">
              <b-button-group>
                <b-button
                  variant="gray-default" @click="changeView('dayGridMonth')"
                  :class="{ active: calendarView === 'dayGridMonth' }"
                >Month</b-button>
                <b-button
                  variant="gray-default" @click="changeView('timeGridWeek')"
                  :class="{ active: calendarView === 'timeGridWeek' }"
                >Week</b-button>
                <b-button
                  variant="gray-default" @click="changeView('timeGridDay')"
                  :class="{ active: calendarView === 'timeGridDay' }"
                >Day</b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <FullCalendar
              ref="fullCalendar"
              defaultView="dayGridMonth"
              :plugins="calendarPlugins"
              v-bind="calendarOptions"
              @select="select"
              @eventClick="eventClick"
              @drop="drop"
          />
        </Widget>
      </b-col>
    </b-row>
    <b-modal id="create-new-event">
      <template slot="modal-title">
        Create New Event
        <br>
        <small class="text-muted">
          Just enter event name to create a new one
        </small>
      </template>
      <b-row>
        <b-col>
          <b-form-input v-model="event.title" placeholder="Title"></b-form-input>
        </b-col>
      </b-row>
      <template slot="modal-footer">
        <b-button variant="success" class="mt-3" @click="createEvent">Create</b-button>
        <b-button variant="default" class="mt-3" @click="$bvModal.hide('create-new-event')">Close</b-button>
      </template>
    </b-modal>
    <b-modal id="show-event">
      <template slot="modal-title">
        {{event.title}}
      </template>
      <b-row>
        <b-col>
          <p class="text-muted">
            <i class="la la-calendar"></i>
            {{getFormattedDate(event.start)}}
          </p>
          <p>{{event.extendedProps && event.extendedProps.description}}</p>
        </b-col>
      </b-row>
      <template slot="modal-footer">
        <b-button variant="default" class="mt-3" @click="$bvModal.hide('show-event')">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import moment from 'moment/moment';

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, {Draggable} from '@fullcalendar/interaction'

export default {
  name: 'CalendarPage',
  components: { Widget, FullCalendar },
  data() {
    return {
      event: {},
      calendarView: 'dayGridMonth',
      currentMonth: moment().format('MMM YYYY'),
      currentDay: moment().format('dddd'),
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      dragOptions: { zIndex: 999, revert: true, revertDuration: 0 },
    };
  },
  methods: {
    createEvent() {
      this.calendar.addEvent(this.event);
      this.calendar.unselect();
      this.$bvModal.hide('create-new-event');
    },
    select({start, end, allDay}) {
      this.$bvModal.show('create-new-event');
      this.event = {
        start,
        end,
        allDay,
        backgroundColor: this.appConfig.colors.success,
        editable: true
      }
    },
    eventClick(e) {
      this.event = e.event;
      this.$bvModal.show('show-event');
    },
    drop(info) {
      info.draggedEl.parentNode.removeChild(info.draggedEl);
    },
    prev() {
      this.calendar.prev();
    },
    next() {
      this.calendar.next();
    },
    today() {
      this.calendar.today();
    },
    changeView(view) {
      this.calendar.changeView(view);
      Vue.set(this, 'calendarView', view);
    },
    getFormattedDate(date) {
      return moment(date).format('YYYY-MM-DD');
    }
  },
  computed: {
    calendar() {
      return this.$refs.fullCalendar.getApi();
    },
    calendarOptions() {
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth();
      const y = date.getFullYear();
      const {info, danger, primary, success, textColor, inverse, warning} = this.appConfig.colors;
      return {
        header: {
          left: '',
          center: '',
          right: '',
        },
        events: [
          {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: primary,
            description: 'Will be busy throughout the whole day',
          },
          {
            title: 'Long Event',
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 7),
            textColor: textColor,
            backgroundColor: primary,
            description: 'This conference should be worse visiting',
          },
          {
            id: 999,
            title: 'Blah Blah Car',
            start: new Date(y, m, d - 3, 16, 0),
            backgroundColor: warning,
            textColor: textColor,
            allDay: false,
            description: 'Agree with this guy on arrival time',
          },
          {
            id: 1000,
            title: 'Buy this template',
            start: new Date(y, m, d + 3, 12, 0),
            allDay: false,
            backgroundColor: success,
            description: 'Make sure everything is consistent first',
          },
          {
            title: 'Got to school',
            start: new Date(y, m, d + 16, 12, 0),
            end: new Date(y, m, d + 16, 13, 0),
            backgroundColor: danger,
            description: 'Time to go back',
          },
          {
            title: 'Study some Node',
            start: new Date(y, m, d + 18, 12, 0),
            end: new Date(y, m, d + 18, 13, 0),
            backgroundColor: inverse,
            description: 'Node.js is a platform built '
              + 'on Chrome\'s JavaScript runtime for easily'
              + ' building fast, scalable network applications.'
              + ' Node.js uses an event-driven, non-blocking'
              + ' I/O model that makes it lightweight and'
              + ' efficient, perfect for data-intensive real-time'
              + ' applications that run across distributed devices.',
          },
          {
            title: 'Click for Flatlogic',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://flatlogic.com/',
            backgroundColor: info,
            description: 'Creative solutions',
          },
        ],
        selectable: true,
        selectHelper: true,
        editable: true,
        droppable: true,
      }
    }
  },
  mounted() {
    new Draggable(this.$refs.externalEvents, {
      itemSelector: '.external-event'
    })
  }
};
</script>

<style src="./Calendar.scss" lang="scss" />
