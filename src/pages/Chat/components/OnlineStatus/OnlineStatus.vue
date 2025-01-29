<template>
  <p class="text-muted mb-0">
    <span v-if="user.isOnline" class="text-info">
      Online
    </span>
    <span v-else>{{'Last seen ' + wasOnline}}</span>
  </p>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'OnlineStatus',
    props: {
      user: Object
    },
    computed: {
      wasOnline() {
        let calendarDate = moment(this.user.prevOnline).calendar();
        let firstLetter = calendarDate[0].toLowerCase();
        let substring = calendarDate.substr(1);

        return firstLetter + substring;
      }
    }
  }
</script>
