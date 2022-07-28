<template>
  <div class="col-lg-3 col-xl-2 col-xs-12">
    <button
      class="btn btn-primary btn-block text-white"
      @click="compose(true)"
    >
      Compose
    </button>
    <div class="mb mt">
      <b-button
        v-for="button in mainButtons"
        :class="{ button: true, buttonActive: button.id === activeButtonId }"
        :key="button.id"
        @click="handleButtonClick(button.id, button.filter)"
        variant="transparent"
      >
        {{button.title}}
        <b-badge v-if="button.notifications" :class="`btn-${button.lable ? button.lable : 'primary' }`" class="text-white"  pill>
          {{button.notifications}}
        </b-badge>
      </b-button>
    </div>
    <div>
      <h6>QUICK VIEW</h6>
        <b-button
          v-for="button in quickViewButtons"
          class="button"
          :key="button.id"
          variant="transparent"
        >
          {{button.title}}
          <i :class="`fa fa-circle text-${button.colour}`" />
        </b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Filters',
  props: ['filter', 'openMessage', 'compose'],
  data() {
    return {
      activeButtonId: 0,
      mainButtons: [
        {
          id: 0, title: 'Inbox', notifications: 2, filter: null,
        },
        { id: 1, title: 'Starred', filter: 'starred' },
        { id: 2, title: 'Sent Mail', filter: 'sent' },
        {
          id: 3, title: 'Draft', notifications: 3, lable: 'danger', filter: 'draft',
        },
        { id: 4, title: 'Trash', filter: 'trash' },
      ],
      quickViewButtons: [
        { id: 0, title: 'Work', colour: 'primary' },
        { id: 1, title: 'Private', colour: 'info' },
        { id: 2, title: 'Saved', colour: 'success' },
      ],
    };
  },
  methods: {
    handleButtonClick(id, filterCond) {
      const { filter, openMessage } = this;

      Vue.set(this, 'activeButtonId', id);

      openMessage(null);
      filter(filterCond);
    },
  },
};
</script>

<style src="./Filters.scss" lang="scss" scoped />
