<template>
  <div class="years-map">
    <div class="map" ref="map"></div>
    <div class="stats">
      <h6 class="text-gray-dark">YEARLY <span class="fw-semi-bold">DISTRIBUTIONS</span></h6>
      <span class="pull-left me-1">
          <small><span class="circle bg-primary text-white">
            <i class="la la-plus"/></span></small>
        </span>
      <p class="h4 m-0">
        <strong>17% last year</strong>
      </p>
    </div>
    <b-button-group class="map-controls">
      <b-button variant="light" @click="changeYear(2014)" :class="{'active': this.activeYear===2014}">2014</b-button>
      <b-button variant="light" @click="changeYear(2015)" :class="{'active': this.activeYear===2015}">2015</b-button>
      <b-button variant="light" @click="changeYear(2016)" :class="{'active': this.activeYear===2016}">2016</b-button>
      <b-button variant="light" @click="changeYear(2017)" :class="{'active': this.activeYear===2017}">2017</b-button>
      <b-button variant="light" @click="changeYear(2018)" :class="{'active': this.activeYear===2018}">2018</b-button>
      <b-button variant="light" @click="changeYear(2019)" :class="{'active': this.activeYear===2019}">2019</b-button>
    </b-button-group>
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
      activeYear: 2014,
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
    map.contentHeight = 100;
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
    polygonTemplate.fill = am4core.color("#ACE4F4");
    polygonTemplate.stroke = am4core.color("#f4f4f4");
    polygonTemplate.strokeWidth = 0.1;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#CCE4F4");
    hs.properties.fillOpacity = 0.5;

    this.polygonSeries.heatRules.push({
      "property": "fill",
      "target": polygonTemplate,
      "min": am4core.color("#ACE4F4"),
      "max": am4core.color("#005792")
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
