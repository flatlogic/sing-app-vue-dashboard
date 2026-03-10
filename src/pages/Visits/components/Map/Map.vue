<template>
  <div>
    <div
      ref="mapRef"
      class="map"
    />
    <div class="stats">
      <h6 class="mt-1">
        GEO-LOCATIONS
      </h6>
      <p class="h3 m-0">
        <span class="me-sm-1 fw-normal">
          <ICountUp
            :end-val="1656843"
            :options="countUpOptions"
          />
        </span>
        <i class="fa fa-map-marker" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import ICountUp from 'vue-countup-v3'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/usaHigh"

import cities from './mock'

const appConfig = inject('appConfig')
const mapRef = ref(null)
let mapInstance = null

const countUpOptions = {
  duration: 2,
  separator: ' '
}

onMounted(() => {
  let map = am4core.create(mapRef.value, am4maps.MapChart)
  map.geodata = am4geodata_usaHigh
  map.projection = new am4maps.projections.AlbersUsa()
  map.chartContainer.wheelable = false
  map.seriesContainer.draggable = false
  map.seriesContainer.resizable = false
  let polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
  polygonSeries.useGeodata = true
  map.homeZoomLevel = 1.2

  map.zoomControl = new am4maps.ZoomControl()
  map.zoomControl.align = 'left'
  map.zoomControl.valign = 'bottom'
  map.zoomControl.dy = -20
  map.zoomControl.minusButton.background.fill = am4core.color("#fff")
  map.zoomControl.minusButton.background.stroke = am4core.color("#ccc")
  map.zoomControl.minusButton.label.fontWeight = 600
  map.zoomControl.minusButton.label.fontSize = 16
  map.zoomControl.plusButton.background.fill = am4core.color("#fff")
  map.zoomControl.plusButton.background.stroke = am4core.color("#ccc")
  map.zoomControl.plusButton.label.fontWeight = 600
  map.zoomControl.plusButton.label.fontSize = 16
  let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover")
  plusButtonHoverState.properties.fill = am4core.color("#e9ecef")
  let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover")
  minusButtonHoverState.properties.fill = am4core.color("#e9ecef")

  let polygonTemplate = polygonSeries.mapPolygons.template
  polygonTemplate.tooltipText = "{name}"
  polygonTemplate.fill = am4core.color(appConfig?.colors?.primary || '#21ae8c')
  polygonTemplate.fillOpacity = 0.2
  let hs = polygonTemplate.states.create("hover")
  hs.properties.fill = am4core.color("#ACE4F4")
  hs.properties.fillOpacity = 0.5

  let citySeries = map.series.push(new am4maps.MapImageSeries())
  citySeries.data = cities
  citySeries.dataFields.value = "size"

  let city = citySeries.mapImages.template
  city.nonScaling = true
  city.propertyFields.latitude = "latitude"
  city.propertyFields.longitude = "longitude"
  let circle = city.createChild(am4core.Circle)
  circle.fill = am4core.color(appConfig?.colors?.primary || '#21ae8c')
  circle.stroke = am4core.color("#ffffff")
  circle.strokeWidth = 0
  let circleHoverState = circle.states.create("hover")
  circleHoverState.properties.strokeWidth = 1
  circle.tooltipText = '{tooltip}'
  circle.propertyFields.radius = 'size'

  mapInstance = map
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.dispose()
  }
})
</script>

<style src="./Map.scss" lang="scss" />
