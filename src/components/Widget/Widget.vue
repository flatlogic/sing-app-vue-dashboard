<template>
  <section :class="{
    widget: true,
    className,
    collapsed: state === 'collapse',
    fullscreened: state === 'fullscreen',
    loading: fetchingData
  }" ref="widget">
    <h5 v-if="title && typeof title === 'string' && !customHeader" class="title">{{title}}</h5>
    <header v-if="title && customHeader" class="title" v-html="title"></header>
    <div v-if="!customControls && mainControls"
      class="widgetControls widget-controls">
      <a v-if="settings || settingsInverse" href="#"><i class="la la-cog"></i></a>
      <a @click="loadWidgster($event)" v-if="refresh" href="#" :id="`reloadId-${randomId}`">
        <strong v-if="typeof refresh === 'string'" class="text-gray-light">{{refresh}}</strong>
        <i v-else class="la la-refresh"></i>
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`reloadId-${randomId}`"
          >Reload
          </b-tooltip>
      </a>
      <a @click="changeState($event, 'fullscreen')" v-if="fullscreen && state !== 'fullscreen'" href="#" :id="`fullscreenId-${randomId}`">
        <i class="glyphicon glyphicon-resize-full"></i>
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`fullscreenId-${randomId}`"
        >Fullscreen
        </b-tooltip>
      </a>
      <a @click="changeState($event, 'default')" v-if="fullscreen && state === 'fullscreen'" href="#" :id="`restoreId-${randomId}`">
        <i class="glyphicon glyphicon-resize-small"></i>
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`restoreId-${randomId}`"
        >Restore
        </b-tooltip>
      </a>
      <span v-if="collapse && state !== 'collapse'">
        <a href="#" @click="changeState($event, 'collapse')" :id="`collapseId-${randomId}`">
          <i class="la la-angle-down"></i>
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`collapseId-${randomId}`"
          >Collapse
          </b-tooltip>
        </a>
      </span>
      <span v-if="collapse && state === 'collapse'">
        <a href="#" @click="changeState($event, 'default')" :id="`expandId-${randomId}`">
          <i class="la la-angle-up"></i>
          <b-tooltip
            v-if="showTooltip"
            :placement="tooltipPlacement"
            :target="`expandId-${randomId}`"
          >Expand
          </b-tooltip>
        </a>
      </span>
      <a v-if="close" href="#" @click="closeWidget($event)" :id="`closeId-${randomId}`">
        <strong v-if="typeof refresh === 'string'" class="text-gray-light">{{close}}</strong>
        <i v-else class="la la-remove"></i>
        <b-tooltip
          v-if="showTooltip"
          :placement="tooltipPlacement"
          :target="`closeId-${randomId}`"
        >Close
        </b-tooltip>
      </a>
    </div>
    <div v-if="customControls" v-html="customControls" ref="customControlsRef" class="widgetControls widget-controls"></div>
    <div :class="`widgetBody widget-body ${bodyClass}`" ref="widgetBodyRef"
          :style="{display: state === 'collapse' ? 'none' : ''}"
    >
      <Loader v-if="fetchingData && showLoader" :class="'widget-loader'" :size="40"></Loader>
      <slot v-else></slot>
    </div>
  </section>
</template>

<script>
import Loader from '../Loader/Loader';

export default {
  name: 'Widget',
  data: function() {
    return {
      state: this.collapsed ? 'collapse' : 'default'
    }
  },
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
    fetchingData: {type: Boolean, default: false},
    showLoader: {type: Boolean, default: true},
    collapsed: {type: Boolean, default: false},
    autoload: {type: [Boolean, Number], default: false}
  },
  components: { Loader },
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
    if (this.autoload && this.$listeners && this.$listeners.load) {
      this.loadWidgster();
      if (typeof this.autoload === 'number') {
        setInterval(() => {this.loadWidgster()}, this.autoload);
      }
    }
    if (this.customControls) {
      let close = this.$refs.customControlsRef.querySelector('[control=close]');
      close && close.addEventListener('click', this.closeWidget);
      let collapse = this.$refs.customControlsRef.querySelector('[control=collapse]');
      collapse && collapse.addEventListener('click', this.changeState.bind(this, null, 'collapse'));
      let expand = this.$refs.customControlsRef.querySelector('[control=expand]');
      expand && expand.addEventListener('click', this.changeState.bind(this, null, 'default'));
      let fullscreen = this.$refs.customControlsRef.querySelector('[control=fullscreen]');
      fullscreen && fullscreen.addEventListener('click', this.changeState.bind(this, null, 'fullscreen'));
      let restore = this.$refs.customControlsRef.querySelector('[control=restore]');
      restore && restore.addEventListener('click', this.changeState.bind(this, null, 'default'));
      let load = this.$refs.customControlsRef.querySelector('[control=load]');
      load && load.addEventListener('click', this.loadWidgster);
    }
  },
  methods: {
    closeWidget(e) {
      e && e.preventDefault();
      let $parentEl = this.$el.parentElement;
      let length = $parentEl.classList.length;
      let parentToRemove = false;
      for (let i = 0; i < length; i++) {
        if (/col.*/.test($parentEl.classList[i])) {
          parentToRemove = true;
          break;
        }
      }

      let removeFunction = () => {
        parentToRemove ? $parentEl.remove() : this.$el.remove();
      };

      if (this.$listeners && this.$listeners.close) {
        this.$listeners.close(removeFunction.bind(this));
      } else {
        removeFunction();
      }
    },
    changeState(e, state) {
      e && e.preventDefault();
      this.state = state;
    },
    loadWidgster(e) {
      e && e.preventDefault();
      this.$emit('load');
    }
  }
};
</script>

<style src="./Widget.scss" lang="scss" />
