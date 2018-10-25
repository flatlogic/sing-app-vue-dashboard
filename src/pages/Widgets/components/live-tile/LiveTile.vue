<template>
  <div v-bind="options" class="live-tile" ref="tile">
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?$=jquery,this=>window!metrojs/release/MetroJs.Full/MetroJs';
/* eslint-enable */

export default {
  name: 'LiveTile',
  props: ['options'],
  data() {
    return {
      id: `live-tile-${Math.floor(Math.random() * 255)}`,
    };
  },
  mounted() {
    const el = $(this.$refs.tile);
    el.css('height', el.data('height'))
      .liveTile();
  },
};
</script>

<style src="./LiveTile.scss" lang="scss" scoped />
