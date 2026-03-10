<template>
  <div class="mapPage">
    <div
      ref="chartdiv"
      class="amchartsMap"
    />
    <header class="mapTitle page-title">
      <h1 class="m-0 mb-sm">
        Vector <span class="fw-semi-bold">Maps</span>
      </h1>
      <p class="page-title fs-sm m-0">
        <span class="fw-semi-bold">1 656 843</span>
        <span class="ms-sm-1 circle bg-primary"><i class="text-white fa fa-circle" /></span>
      </p>
    </header>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"

import places from "./mock"

const appConfig = inject('appConfig')
const chartdiv = ref(null)
let map = null

onMounted(() => {
  const infoColor = appConfig.colors.primary
  map = am4core.create(chartdiv.value, am4maps.MapChart)
  map.geodata = am4geodata_worldLow
  map.projection = new am4maps.projections.Miller()
  const polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
  polygonSeries.useGeodata = true
  polygonSeries.exclude = ["AQ"]

  map.zoomControl = new am4maps.ZoomControl()
  map.zoomControl.align = 'left'
  map.zoomControl.valign = 'top'
  map.zoomControl.dx = 35
  map.zoomControl.dy = 150
  map.zoomControl.minusButton.background.fill = am4core.color(infoColor)
  map.zoomControl.minusButton.background.fillOpacity = 0.2
  map.zoomControl.plusButton.background.fill = am4core.color(infoColor)
  map.zoomControl.plusButton.background.fillOpacity = 0.2
  const plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover")
  plusButtonHoverState.properties.fillOpacity = 0.5
  const minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover")
  minusButtonHoverState.properties.fillOpacity = 0.5

  const polygonTemplate = polygonSeries.mapPolygons.template
  polygonTemplate.tooltipText = "{name}"
  polygonTemplate.fill = am4core.color(infoColor)
  polygonTemplate.fillOpacity = 0.2
  const hs = polygonTemplate.states.create("hover")
  hs.properties.fillOpacity = 0.5

  const placeSeries = map.series.push(new am4maps.MapImageSeries())
  const place = placeSeries.mapImages.template
  place.nonScaling = true
  place.propertyFields.latitude = "latitude"
  place.propertyFields.longitude = "longitude"
  const circle = place.createChild(am4core.Circle)
  circle.radius = 5
  circle.fill = am4core.color(infoColor)
  placeSeries.data = places
  circle.tooltipText = '{name}'
})

onBeforeUnmount(() => {
  if (map) {
    map.dispose()
  }
})
</script>

<style src="./Amcharts.scss" lang="scss" scoped />
