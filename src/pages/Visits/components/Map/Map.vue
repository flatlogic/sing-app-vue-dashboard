<template>
  <div class="mapael" id="mapael" ref="map">
    <div class="stats">
      <h6 class="mt-1">GEO-LOCATIONS</h6>
      <p class="h3 m-0">
        <span class="mr-xs fw-normal"><AnimateNumber number="1 656 843" /></span>
        <i class="fa fa-map-marker" />
      </p>
    </div>
    <div class="map">
      <span>Alternative content for the map</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery';
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/maps/usa_states';
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/jquery.mapael';
/* eslint-enable */
import AnimateNumber from '../AnimateNumber/AnimateNumber';

export default {
  name: 'Map',
  components: { AnimateNumber },
  mounted() {
    let state = '';
    const geoLocationData = {
      map: {
        name: 'usa_states',
        defaultArea: {
          attrs: {
            fill: '#e5e7f1',
            stroke: '#fafbff',
          },
          attrsHover: {
            fill: '#e9ebf6',
            animDuration: 50,
          },
          tooltip: {
            content: () => `<strong>${state}</strong>`,
          },
          eventHandlers: {
            mouseover: (e, id) => {
              state = id;
            },
          },
        },
        defaultPlot: {
          size: 17,
          attrs: {
            fill: '#ffc247',
            stroke: '#fff',
            'stroke-width': 0,
            'stroke-linejoin': 'round',
          },
          attrsHover: {
            'stroke-width': 1,
            animDuration: 100,
          },
        },
        zoom: {
          enabled: true,
          step: 0.75,
          mousewheel: false,
        },
      },
      plots: {
        ny: {
          latitude: 40.717079,
          longitude: -74.00116,
          tooltip: { content: 'New York' },
        },
        on: {
          latitude: 33.145235,
          longitude: -83.811834,
          size: 18,
          tooltip: { content: 'Oconee National Forest' },
        },
        sf: {
          latitude: 37.792032,
          longitude: -122.394613,
          size: 12,
          tooltip: { content: 'San Francisco' },
        },
        la: {
          latitude: 26.935080,
          longitude: -80.851766,
          size: 26,
          tooltip: { content: 'Lake Okeechobee' },
        },
        gc: {
          latitude: 36.331308,
          longitude: -83.336050,
          size: 10,
          tooltip: { content: 'Grainger County' },
        },
        cc: {
          latitude: 36.269356,
          longitude: -76.587477,
          size: 22,
          tooltip: { content: 'Chowan County' },
        },
        ll: {
          latitude: 30.700644,
          longitude: -95.145249,
          tooltip: { content: 'Lake Livingston' },
        },
        tc: {
          latitude: 34.546708,
          longitude: -90.211471,
          size: 14,
          tooltip: { content: 'Tunica County' },
        },
        lc: {
          latitude: 32.628599,
          longitude: -103.675115,
          tooltip: { content: 'Lea County' },
        },
        uc: {
          latitude: 40.456692,
          longitude: -83.522688,
          size: 11,
          tooltip: { content: 'Union County' },
        },
        lm: {
          latitude: 33.844630,
          longitude: -118.157483,
          tooltip: { content: 'Lakewood Mutual' },
        },
      },
    };
    $(this.$refs.map).mapael(geoLocationData);
  },
};
</script>

<style src="./Map.scss" lang="scss" />
