<template>
  <div>
    <h1 class="page-title">Visual - <span class="fw-semi-bold">Echarts</span></h1>
    <p>For more information please read full <a href="https://ecomfe.github.io/vue-echarts/">documentation</a></p>
    <b-row>
      <b-col xs='12' lg='12'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Bar Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.bar" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Pie Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.pie" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Polar Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.polar" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
      <b-col xs='12' lg='12'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.line" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Scatter Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.scatter" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Gauge Chart</span></h5>"
            close collapse customHeader
        >
          <echart :options="ed.gauge" :init-options="initOptions"></echart>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Widget from '@/components/Widget/Widget';
  import ECharts from 'vue-echarts/components/ECharts';
  import 'echarts/lib/chart/bar';
  import 'echarts/lib/chart/pie';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/chart/scatter';
  import 'echarts/lib/chart/gauge';
  import 'echarts/lib/component/polar';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  import echartsData from './mock';

  export default {
    data() {
      return {
        ed: echartsData,
        initOptions: {
          renderer: 'canvas'
        }
      }
    },
    name: 'Echarts',
    components: {
      Widget, echart: ECharts
    },
  };
</script>
<style src="./Echarts.scss" lang="scss"></style>
