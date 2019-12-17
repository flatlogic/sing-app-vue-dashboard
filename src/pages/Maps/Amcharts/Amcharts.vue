<template>
  <div>
    <div class="amchartsMap" ref="chartdiv"></div>
    <header class="page-title">
      <h1 class="m-0 mb-sm">Vector <span class="fw-semi-bold">Maps</span></h1>
      <p class="page-title fs-sm m-0">
        <span class="fw-semi-bold">1 656 843</span>
        <span class="ml-xs circle bg-info"><i class="text-white fa fa-circle"/></span>
      </p>
    </header>
  </div>
</template>
<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4maps from "@amcharts/amcharts4/maps";
  import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

  import places from "./mock";

  export default {
    name: 'AmchartsMap',
    mounted() {
      let infoColor = this.appConfig.colors.info;
      let map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();
      let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.exclude = ["AQ"];

      map.zoomControl = new am4maps.ZoomControl();
      map.zoomControl.align = 'left';
      map.zoomControl.valign = 'top';
      map.zoomControl.dx = 35;
      map.zoomControl.dy = 120;
      map.zoomControl.minusButton.background.fill = am4core.color(infoColor);
      map.zoomControl.minusButton.background.fillOpacity = 0.2;
      map.zoomControl.plusButton.background.fill = am4core.color(infoColor);
      map.zoomControl.plusButton.background.fillOpacity = 0.2;
      let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
      plusButtonHoverState.properties.fillOpacity = 0.5;
      let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
      minusButtonHoverState.properties.fillOpacity = 0.5;

      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color(infoColor);
      polygonTemplate.fillOpacity = 0.2;
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fillOpacity = 0.5;

      let placeSeries = map.series.push(new am4maps.MapImageSeries());
      let place = placeSeries.mapImages.template;
      place.nonScaling = true;
      place.propertyFields.latitude = "latitude";
      place.propertyFields.longitude = "longitude";
      let circle = place.createChild(am4core.Circle);
      circle.radius = 5;
      circle.fill = am4core.color(infoColor);
      placeSeries.data = places;
      circle.tooltipText = '{name}';

      this.map = map;
    },
    beforeDestroy() {
      if (this.map) {
        this.map.dispose();
      }
    }
  }
</script>
<style src="./Amcharts.scss" lang="scss" scoped />
