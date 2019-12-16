<template>
  <div>
    <div class="map" ref="map">

    </div>
    <div class="stats">
      <h6 class="mt-1">GEO-LOCATIONS</h6>
      <p class="h3 m-0">
      <span class="mr-xs fw-normal"><AnimatedNumber value="1656843"
                                                    v-bind="animateNumberOptions"></AnimatedNumber></span>
        <i class="fa fa-map-marker"/>
      </p>
    </div>
  </div>

</template>

<script>
import AnimatedNumber from "animated-number-vue";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/usaHigh";

import cities from './mock';

export default {
  name: 'Map',
  components: { AnimatedNumber },
  data() {
    return {
      animateNumberOptions: {
        duration: 2000,
        easing: 'easeInQuad',
        formatValue(value) {
          let number = value.toFixed(0);
          let numberAsArrayWithSapces = [];
          while (number >= 1) {
            numberAsArrayWithSapces.unshift(number % 1000);
            number = (number/1000).toFixed();
          }
          return numberAsArrayWithSapces.join(' ');
        }
      }
    }
  },
  mounted() {
    let map = am4core.create(this.$refs.map, am4maps.MapChart);
    map.geodata = am4geodata_usaHigh;
    map.projection = new am4maps.projections.AlbersUsa();
    map.chartContainer.wheelable = false;
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    map.homeZoomLevel = 1.2;

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.align = 'left';
    map.zoomControl.valign = 'bottom';
    map.zoomControl.dy = -20;
    map.zoomControl.minusButton.background.fill = am4core.color("#fff");
    map.zoomControl.minusButton.background.stroke = am4core.color("#ccc");
    map.zoomControl.minusButton.label.fontWeight = 600;
    map.zoomControl.minusButton.label.fontSize = 16;
    map.zoomControl.plusButton.background.fill = am4core.color("#fff");
    map.zoomControl.plusButton.background.stroke = am4core.color("#ccc");
    map.zoomControl.plusButton.label.fontWeight = 600;
    map.zoomControl.plusButton.label.fontSize = 16;
    let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color("#e9ecef");
    let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color("#e9ecef");

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#1A86D0");
    polygonTemplate.fillOpacity = 0.2;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#1A86D0");
    hs.properties.fillOpacity = 0.5;

    let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = cities;
    citySeries.dataFields.value = "size";

    let city = citySeries.mapImages.template;
    city.nonScaling = true;
    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";
    let circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("#1A86D0");
    circle.stroke = am4core.color("#ffffff");
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = '{tooltip}';
    circle.propertyFields.radius = 'size';

    this.map = map;
  },
};
</script>

<style src="./Map.scss" lang="scss" />
