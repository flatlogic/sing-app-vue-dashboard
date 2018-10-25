<template>
  <div class='calendar-page'>
    <b-row>
      <b-col lg='4' xs='12' md='6'>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">YOU ARE HERE</li>
          <li class="breadcrumb-item active">Calendar</li>
        </ol>
        <h1 class="page-title">
          {{currentMonth}} - <span class="fw-semi-bold">{{currentDay}}</span>
        </h1>
        <h3>Draggable <span class="fw-semi-bold">Events</span></h3>
        <p>Just drap and drop events from there directly into the calendar.</p>
        <div class="calendar-external-events mb-lg">
          <div class="external-event draggable" data-event-class="bg-success text-white">
            <i class="fa fa-circle fa-fw text-success ml-xs mr-xs" />
            Make a tea
          </div>
          <div class="external-event draggable" data-event-class="bg-warning text-white">
            <i class="fa fa-circle fa-fw text-warning ml-xs mr-xs" />
            Open windows
          </div>
          <div class="external-event draggable" data-event-class="bg-gray text-white">
            <i class="fa fa-circle-o fa-fw text-gray-light ml-xs mr-xs" />
            Some stuff
          </div>
          <div class="external-event draggable" data-event-class="bg-danger text-white">
            <i class="fa fa-square fa-fw text-danger ml-xs mr-xs" />
            Study UX engineering
          </div>
          <div class="external-event draggable" data-event-class="bg-gray text-white">
            <i class="fa fa-circle-o fa-fw text-gray-light ml-xs mr-xs" />
            Another stuff
          </div>
        </div>
      </b-col>
      <b-col md='6' lg='8' xs='12'>
        <Widget>
          <b-row class="calendar-controls">
            <b-col md='3'>
              <b-button-group class="mr-sm">
                <b-button variant="default" @click="prev">
                  <i class="fa fa-angle-left" />
                </b-button>
                <b-button variant="default" @click="next">
                  <i class="fa fa-angle-right" />
                </b-button>
              </b-button-group>
            </b-col>
            <b-col md='9' class="calendar-controls text-right">
              <b-button-group>
                <b-button
                  variant="default" @click="changeView('month')"
                  :class="{ active: calendarView === 'month' }"
                >Month</b-button>
                <b-button
                  variant="default" @click="changeView('agendaWeek')"
                  :class="{ active: calendarView === 'agendaWeek' }"
                >Week</b-button>
                <b-button
                  variant="default" @click="changeView('agendaDay')"
                  :class="{ active: calendarView === 'agendaDay' }"
                >Day</b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <div id="calendar" class="calendar" />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import moment from 'moment/moment';
import 'fullcalendar/dist/fullcalendar';
import 'jquery-ui/ui/widgets/draggable';

export default {
  name: 'CalendarPage',
  components: { Widget },
  data() {
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    return {
      calendarView: 'month',
      currentMonth: moment().format('MMM YYYY'),
      currentDay: moment().format('dddd'),
      calendarOptions: {
        header: {
          left: '',
          center: '',
          right: '',
        },
        events: [
          {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: '#79A5F0',
            textColor: '#fff',
            description: 'Will be busy throughout the whole day',
          },
          {
            title: 'Long Event',
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 7),
            description: 'This conference should be worse visiting',
          },
          {
            id: 999,
            title: 'Blah Blah Car',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            description: 'Agree with this guy on arrival time',
          },
          {
            id: 1000,
            title: 'Buy this template',
            start: new Date(y, m, d + 3, 12, 0),
            allDay: false,
            backgroundColor: '#555',
            textColor: '#fff',
            description: 'Make sure everything is consistent first',
          },
          {
            title: 'Got to school',
            start: new Date(y, m, d + 16, 12, 0),
            end: new Date(y, m, d + 16, 13, 0),
            backgroundColor: '#64bd63',
            textColor: '#fff',
            description: 'Time to go back',
          },
          {
            title: 'Study some Node',
            start: new Date(y, m, d + 18, 12, 0),
            end: new Date(y, m, d + 18, 13, 0),
            backgroundColor: '#79A5F0',
            textColor: '#fff',
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
            backgroundColor: '#e5603b',
            textColor: '#fff',
            description: 'Creative solutions',
          },
        ],
        selectable: true,
        selectHelper: true,
        select: (start, end, allDay) => {
          this.createEvent = () => {
            const { title } = this.event;
            if (title) {
              this.$calendar.fullCalendar('renderEvent',
                {
                  title,
                  start,
                  end,
                  allDay,
                  backgroundColor: '#64bd63',
                  textColor: '#fff',
                },
                true); // make the event "stick"
            }
            this.$calendar.fullCalendar('unselect');
            $('#create-event-modal').modal('hide');
          };

          $('#create-event-modal').modal('show');
        },
        eventClick: (event) => {
          this.event = event;
          $('#show-event-modal').modal('show');
        },
        editable: true,
        droppable: true,

        drop: (dateItem, event) => { // this function is called when something is dropped
          // retrieve the dropped element's stored Event Object
          const originalEventObject = {
            // use the element's text as the event title
            title: $.trim($(event.target).text()),
          };

          // we need to copy it, so that multiple events don't have a reference to the same object
          const copiedEventObject = $.extend({}, originalEventObject);

          // assign it the date that was reported
          copiedEventObject.start = dateItem;
          copiedEventObject.allDay = !dateItem.hasTime();

          const $categoryClass = $(event.target).data('event-class');
          if ($categoryClass) {
            copiedEventObject.class = [$categoryClass];
          }

          // render the event on the calendar
          // the last `true` argument determines if
          // the event 'sticks'
          // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
          this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);

          $(event.target).remove();
        },
      },
      dragOptions: { zIndex: 999, revert: true, revertDuration: 0 },
    };
  },
  methods: {
    getCurrentMonth() {
      return moment(this.$calendar.fullCalendar('getDate')).format('MMM YYYY');
    },
    getCurrentDay() {
      return moment(this.$calendar.fullCalendar('getDate')).format('dddd');
    },
    prev() {
      this.$calendar.fullCalendar('prev');
    },
    next() {
      this.$calendar.fullCalendar('next');
    },
    today() {
      this.$calendar.fullCalendar('today');
    },
    changeView(view) {
      this.$calendar.fullCalendar('changeView', view);

      Vue.set(this, 'calendarView', view);
    },
  },
  mounted() {
    this.$calendar = $('#calendar');
    this.$calendar.fullCalendar(this.calendarOptions);
    $('.draggable').draggable(this.dragOptions);
  },
};
</script>

<style src="./Calendar.scss" lang="scss" />
