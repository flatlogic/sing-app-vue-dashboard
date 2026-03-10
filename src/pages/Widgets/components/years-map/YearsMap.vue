<template>
  <div class="years-map">
    <div
      ref="mapRef"
      class="map"
    />
    <div class="stats">
      <h6 class="text-gray-dark">
        YEARLY <span class="fw-semi-bold">DISTRIBUTIONS</span>
      </h6>
      <span class="pull-left me-1">
        <small><span class="circle bg-primary text-white">
          <i class="la la-plus" /></span></small>
      </span>
      <p class="h4 m-0">
        <strong>17% last year</strong>
      </p>
    </div>
    <div class="btn-group map-controls">
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2014}"
        @click="changeYear(2014)"
      >
        2014
      </button>
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2015}"
        @click="changeYear(2015)"
      >
        2015
      </button>
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2016}"
        @click="changeYear(2016)"
      >
        2016
      </button>
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2017}"
        @click="changeYear(2017)"
      >
        2017
      </button>
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2018}"
        @click="changeYear(2018)"
      >
        2018
      </button>
      <button
        type="button"
        class="btn btn-light"
        :class="{'active': activeYear===2019}"
        @click="changeYear(2019)"
      >
        2019
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import fakeWorldData from './MapData'

import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
am4core.useTheme(am4themes_animated)

const mapRef = ref(null)
const activeYear = ref(2014)
let map = null
let polygonSeries = null

function changeYear(year) {
  activeYear.value = year
  if (polygonSeries) {
    polygonSeries.data = fakeWorldData[year].areas
  }
}

onMounted(() => {
  map = am4core.create(mapRef.value, am4maps.MapChart)
  map.geodata = am4geodata_worldLow
  map.projection = new am4maps.projections.Miller()
  map.contentHeight = 100
  map.homeZoomLevel = 6
  map.homeGeoPoint = {
    longitude: 8.863224,
    latitude: 39.599254
  }
  polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
  polygonSeries.useGeodata = true
  polygonSeries.exclude = ["AQ"]

  polygonSeries.data = fakeWorldData[activeYear.value].areas

  polygonSeries.tooltip.background.fill = am4core.color("#fff")
  polygonSeries.tooltip.getFillFromObject = false
  polygonSeries.tooltip.label.fill = am4core.color("#495057")
  polygonSeries.tooltip.autoTextColor = false

  map.zoomControl = new am4maps.ZoomControl()
  map.zoomControl.align = 'left'
  map.zoomControl.valign = 'bottom'
  map.zoomControl.dx = 10
  map.zoomControl.dy = -30
  map.zoomControl.layout = 'horizontal'

  map.zoomControl.minusButton.background.fill = am4core.color("#fff")
  map.zoomControl.plusButton.background.fill = am4core.color("#fff")
  map.zoomControl.minusButton.background.stroke = am4core.color("#ccc")
  map.zoomControl.plusButton.background.stroke = am4core.color("#ccc")
  map.zoomControl.plusButton.background.cornerRadius(16,16,16,16)
  map.zoomControl.minusButton.background.cornerRadius(16,16,16,16)
  map.zoomControl.plusButton.dx = 5
  let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover")
  plusButtonHoverState.properties.fill = am4core.color("#ccc")
  let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover")
  minusButtonHoverState.properties.fill = am4core.color("#ccc")

  let polygonTemplate = polygonSeries.mapPolygons.template
  polygonTemplate.tooltipHTML = "{tooltip}"
  polygonTemplate.fill = am4core.color("#ACE4F4")
  polygonTemplate.stroke = am4core.color("#f4f4f4")
  polygonTemplate.strokeWidth = 0.1
  let hs = polygonTemplate.states.create("hover")
  hs.properties.fill = am4core.color("#CCE4F4")
  hs.properties.fillOpacity = 0.5

  polygonSeries.heatRules.push({
    "property": "fill",
    "target": polygonTemplate,
    "min": am4core.color("#ACE4F4"),
    "max": am4core.color("#005792")
  })
})

onBeforeUnmount(() => {
  if (map) {
    map.dispose()
  }
})
</script>

<style src="./YearsMap.scss" lang="scss" />
