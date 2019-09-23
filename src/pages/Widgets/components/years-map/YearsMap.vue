<template>
  <div class="years-map">
    <div class="map" ref="map"></div>
    <div class="stats">
      <h6 class="text-gray-dark">YEARLY <span class="fw-semi-bold">DISTRIBUTIONS</span></h6>
      <span class="pull-left mr-xs">
          <small><span class="circle bg-warning text-gray-dark">
            <i class="fa fa-plus"/></span></small>
        </span>
      <p class="h4 m-0">
        <strong>17% last year</strong>
      </p>
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
import fakeWorldData from './MapData';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

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
      this.polygonSeries.data = fakeWorldData[year].areas;
    },
  },
  mounted() {
    let map = am4core.create(this.$refs.map, am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    map.homeZoomLevel = 6;
    map.homeGeoPoint = {
      longitude: 8.863224,
      latitude: 39.599254
    };
    this.polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonSeries.exclude = ["AQ"];

    this.polygonSeries.data = fakeWorldData[this.activeYear].areas;

    this.polygonSeries.tooltip.background.fill = am4core.color("#fff");
    this.polygonSeries.tooltip.getFillFromObject = false;
    this.polygonSeries.tooltip.label.fill = am4core.color("#495057");
    this.polygonSeries.tooltip.autoTextColor = false;

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.align = 'left';
    map.zoomControl.valign = 'bottom';
    map.zoomControl.dx = 10;
    map.zoomControl.dy = -30;
    map.zoomControl.layout = 'horizontal';

    map.zoomControl.minusButton.background.fill = am4core.color("#fff");
    map.zoomControl.plusButton.background.fill = am4core.color("#fff");
    map.zoomControl.minusButton.background.stroke = am4core.color("#ccc");
    map.zoomControl.plusButton.background.stroke = am4core.color("#ccc");
    map.zoomControl.plusButton.background.cornerRadius(16,16,16,16);
    map.zoomControl.minusButton.background.cornerRadius(16,16,16,16);
    map.zoomControl.plusButton.dx = 5;
    let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color("#ccc");
    let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color("#ccc");

    let polygonTemplate = this.polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipHTML = "{tooltip}";
    polygonTemplate.fill = am4core.color("#eee");
    polygonTemplate.stroke = am4core.color("#666");
    polygonTemplate.strokeWidth = 0.1;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#999");

    this.polygonSeries.heatRules.push({
      "property": "fill",
      "target": polygonTemplate,
      "min": am4core.color("#eee"),
      "max": am4core.color("#aaa")
    });

    this.map = map;
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  }
};
</script>

<style src="./YearsMap.scss" lang="scss" />
