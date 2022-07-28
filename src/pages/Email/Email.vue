<template>
  <div class="email-page">
    <div class="pageTopLine">
      <h1 class="page-title">Email - <span class="fw-semi-bold">Inbox</span></h1>
<!--      <b-alert-->
<!--        :show="isNotificationOpen"-->
<!--        color="warning"-->
<!--        variant="warning"-->
<!--        :class="{ alertTransform: true, alertAfter: alertAfter }"-->
<!--        dismissible-->
<!--      >-->
<!--        <p class="m-0 ms-4">Hey! This is a <span class="fw-semi-bold">real app</span>-->
<!--        with CRUD and Search functions. Have fun!</p>-->
<!--      </b-alert>-->
      <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="isNotificationOpen" @click="closeNotification">
        <p class="me-3 my-1">Hey! This is a <span class="fw-semi-bold">real app</span>
          with CRUD and Search functions. Have fun!</p>
        <button type="button" class="btn-close ms-2 my-1" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    <div class="view">
      <b-row>
        <Filters
          :filter="filter"
          :openMessage="openMessage"
          :compose="changeCompose"
        />
        <MessageTable
          :filter="filterValue"
          :openedMessage="openedMessage"
          :openMessage="openMessage"
          :compose="compose"
          :changeCompose="changeCompose"
          :composeData="composeData"
        />
      </b-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Filters from './components/Filters/Filters';
import MessageTable from './components/MessageTable/MessageTable';

export default {
  name: 'Email',
  components: { Filters, MessageTable },
  data() {
    return {
      isNotificationOpen: true,
      filterValue: null,
      openedMessage: null,
      compose: false,
      composeData: null,
      alertAfter: false,
    };
  },
  methods: {
    fixAlert() {
      Vue.set(this, 'alertAfter', true);
    },
    filter(filterValue) {
      Vue.set(this, 'filterValue', filterValue);
      Vue.set(this, 'compose', false);
      Vue.set(this, 'composeData', null);
    },
    closeNotification() {
      Vue.set(this, 'isNotificationOpen', false);
    },
    openMessage(id) {
      Vue.set(this, 'openedMessage', id);
      Vue.set(this, 'compose', id === null ? false : this.compose);
      Vue.set(this, 'composeData', id === null ? null : this.composeData);
    },
    changeCompose(compose, data) {
      Vue.set(this, 'compose', compose);

      if (data) {
        Vue.set(this, 'composeData', data);
      }
    },
  },
  created() {
    setTimeout(() => { this.fixAlert(); }, 500);
  },
};
</script>

<style src="./Email.scss" lang="scss" scoped />
