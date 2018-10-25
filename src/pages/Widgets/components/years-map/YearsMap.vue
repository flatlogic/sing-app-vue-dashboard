<template>
  <div class="years-map">
    <div class="mapael" id="mapael" ref="map">
      <div class="stats">
        <h6 class="text-gray-dark">YEARLY <span class="fw-semi-bold">DISTRIBUTIONS</span></h6>
        <span class="pull-left mr-xs">
          <small><span class="circle bg-warning text-gray-dark">
            <i class="fa fa-plus" /></span></small>
        </span>
        <p class="h4 m-0">
          <strong>17% last year</strong>
        </p>
      </div>
      <div class="map">
        <span>Alternative content for the map</span>
      </div>
      <div class="areaLegend">
        <span>Alternative content for the legend</span>
      </div>
    </div>
    <b-nav class="map-controls" pills fill>
      <b-nav-item :active="this.activeYear === 2012" @click="changeYear(2012)">
        2012
      </b-nav-item>
      <b-nav-item :active="this.activeYear === 2013" @click="changeYear(2013)">
        2013
      </b-nav-item>
      <b-nav-item :active="this.activeYear === 2014" @click="changeYear(2014)">
        2014
      </b-nav-item>
      <b-nav-item :active="this.activeYear === 2015" @click="changeYear(2015)">
        2015
      </b-nav-item>
      <b-nav-item :active="this.activeYear === 2016" @click="changeYear(2016)">
        2016
      </b-nav-item>
      <b-nav-item :active="this.activeYear === 2017" @click="changeYear(2017)">
        2017
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import fakeWorldData from './MapData';

/* eslint-disable */
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/maps/world_countries';
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/jquery.mapael';
/* eslint-enable */

export default {
  name: 'YearsMap',
  data() {
    return {
      activeYear: 2012,
    };
  },
  methods: {
    changeYear(year) {
      Vue.set(this, 'activeYear', year);

      const $map = $(this.$refs.map);
      $map.trigger('update', [{
        mapOptions: fakeWorldData[year],
        animDuration: 300,
      }]);
    },
    init() {
      const $map = $(this.$refs.map);
      const data = {
        map: {
          name: 'world_countries',
          defaultArea: {
            attrs: {
              fill: '#eee', // gray-lighter
              stroke: '#666', // 'gray'
              'stroke-width': 0.1,
            },
            attrsHover: {
              fill: '#999', // gray-light,
              animDuration: 100,
            },
          },
          defaultPlot: {
            size: 17,
            attrs: {
              fill: '#f0b518', // brand-warning,
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
            step: 1,
            maxLevel: 10,
            mousewheel: false,
          },
        },
        legend: {
          area: {
            display: false,
            slices: [
              {
                max: 5000000,
                attrs: {
                  fill: 'rgb(245, 249, 251)', // lightenColor('#ebeff1', .04)
                },
                label: 'Less than 5M',
              },
              {
                min: 5000000,
                max: 10000000,
                attrs: {
                  fill: '#ebeff1',
                },
                label: 'Between 5M and 10M',
              },
              {
                min: 10000000,
                max: 50000000,
                attrs: {
                  fill: '#eee', // gray-lighter
                },
                label: 'Between 10M and 50M',
              },
              {
                min: 50000000,
                attrs: {
                  fill: 'rgb(209, 213, 215)', // darkenColor('#ebeff1', .1)
                },
                label: 'More than 50M',
              },
            ],
          },
        },
        areas: fakeWorldData[this.activeYear].areas,
      };
      const height = 394;
      $map.css('height', height);
      if ($map.parents('.widget')[0]) {
        $map.find('.map').css('height', parseInt($map.parents('.widget').css('height'), 10) - 35);
      }
      $map.mapael(data);
      $map.trigger('zoom', { level: 6, latitude: 59.599254, longitude: 8.863224 });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style src="./YearsMap.scss" lang="scss" />
