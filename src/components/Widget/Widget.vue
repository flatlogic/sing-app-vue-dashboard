<template>
  <section :class="{ widget: true, className }" v-bind="dataWidgster" ref="widget">
    <h5 v-if="title && typeof title === 'string' && !customHeader" class="title">{{title}}</h5>
    <header v-if="title && customHeader" class="title" v-html="title" />
    <div v-if="!customControls && mainControls"
      class="widgetControls widget-controls">
      <a v-if="settings" href="#"><i class="la la-cog" /></a>
      <a v-if="settingsInverse" href="#" class="bg-gray-transparent inverse">
        <i class="la la-cog text-white"/>
      </a>
      <a v-if="refresh" href="#" data-widgster="load" :id="`reloadId-${randomId}`">
        <strong v-if="typeof refresh === 'string'" class="text-gray-light">{{refresh}}</strong>
        <i v-else class="la la-refresh" />
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`reloadId-${randomId}`"
          >Reload
          </b-tooltip>
      </a>
      <a v-if="fullscreen" href="#" data-widgster="fullscreen" :id="`fullscreenId-${randomId}`">
        <i class="glyphicon glyphicon-resize-full" />
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`fullscreenId-${randomId}`"
        >Fullscreen
        </b-tooltip>
      </a>
      <a v-if="fullscreen" href="#" data-widgster="restore" :id="`restoreId-${randomId}`">
        <i class="glyphicon glyphicon-resize-small" />
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`restoreId-${randomId}`"
        >Restore
        </b-tooltip>
      </a>
      <span v-if="collapse">
        <a href="#" data-widgster="collapse" :id="`collapseId-${randomId}`">
          <i class="la la-angle-down" />
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`collapseId-${randomId}`"
          >Collapse
          </b-tooltip>
        </a>
      </span>
      <span v-if="collapse">
        <a href="#" data-widgster="expand" :id="`expandId-${randomId}`">
          <i class="la la-angle-up" />
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`expandId-${randomId}`"
          >Expand
          </b-tooltip>
        </a>
      </span>
      <a v-if="close" href="#" data-widgster="close" :id="`closeId-${randomId}`">
        <strong v-if="typeof refresh === 'string'" class="text-gray-light">{{close}}</strong>
        <i v-else class="la la-remove" />
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`closeId-${randomId}`"
        >Close
        </b-tooltip>
      </a>
    </div>
    <div v-if="customControls" v-html="customControls" class="widgetControls widget-controls" />
    <div :class="`widgetBody widget-body ${bodyClass}`">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import 'imports-loader?window.jQuery=jquery,this=>window!widgster'; // eslint-disable-line

export default {
  name: 'Widget',
  props: {
    customHeader: { type: Boolean, default: false },
    tooltipPlacement: { default: 'top' },
    showTooltip: { type: Boolean, default: false },
    close: { type: [Boolean, String], default: false },
    fullscreen: { type: [Boolean, String], default: false },
    collapse: { type: [Boolean, String], default: false },
    settings: { type: [Boolean, String], default: false },
    settingsInverse: { type: Boolean, default: false },
    refresh: { type: [Boolean, String], default: false },
    className: { default: '' },
    title: { default: '' },
    customControls: { default: null },
    bodyClass: { default: '' },
    options: { default: () => ({}) },
    dataWidgster: { type: Object, default: () => ({}) },
  },
  computed: {
    randomId() {
      return Math.floor(Math.random() * 100);
    },
    mainControls() {
      return !!(this.close || this.fullscreen || this.collapse
        || this.refresh || this.settings || this.settingsInverse);
    },
  },
  mounted() {
    const { options } = this;
    options.bodySelector = '.widget-body';
    $(this.$refs.widget).widgster(options);
  },
};
</script>

<style src="./Widget.scss" lang="scss" />
