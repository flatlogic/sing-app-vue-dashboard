<template>
  <div>
    <h1 class="page-title">Visual - <span class="fw-semi-bold">Highcharts</span></h1>
    <p>For more information please read full <a href="https://github.com/highcharts/highcharts-vue">documentation</a></p>
    <b-row>
      <b-col xs='12' lg='12'>
        <Widget
            title="<h5>Highcharts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close collapse customHeader
        >
          <highcharts :options="cd.line"></highcharts>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Highcharts <span class='fw-semi-bold'>Pie Chart</span></h5>"
            close collapse customHeader
        >
          <highcharts :options="cd.pie"></highcharts>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
            title="<h5>Highcharts <span class='fw-semi-bold'>Column 3D Chart</span></h5>"
            close collapse customHeader
        >
          <highcharts :options="cd.column3D"></highcharts>
        </Widget>
      </b-col>
      <b-col xs='12' lg='5'>
        <b-row>
          <b-col xs="12" lg="12">
            <Widget
                title="<h5>Highcharts <span class='fw-semi-bold'>Vector Chart</span></h5>"
                close collapse customHeader
            >
              <highcharts :options="cd.vector"></highcharts>
            </Widget>
          </b-col>
          <b-col xs="12" lg="12">
            <Widget
                title="<h5>Highcharts <span class='fw-semi-bold'>Sunburst Chart</span></h5>"
                close collapse customHeader
            >
              <highcharts :options="cd.wordCloud"></highcharts>
            </Widget>
          </b-col>
        </b-row>
      </b-col>
      <b-col xs='12' lg='7'>
        <Widget
            title="<h5>Highcharts <span class='fw-semi-bold'>Sunburst Chart</span></h5>"
            close collapse customHeader
        >
          <highcharts :options="cd.sunburst"></highcharts>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Widget from '@/components/Widget/Widget';
  import Highcharts from 'highcharts';
  import variablePie from 'highcharts/modules/variable-pie';
  import exporting from 'highcharts/modules/exporting';
  import exportData from 'highcharts/modules/export-data';
  import accessibility from 'highcharts/modules/accessibility';
  import highcharts3d from 'highcharts/highcharts-3d';
  import sunburst from 'highcharts/modules/sunburst';
  import vector from 'highcharts/modules/vector';
  import wordcloud from 'highcharts/modules/wordcloud';

  variablePie(Highcharts);
  exporting(Highcharts);
  exportData(Highcharts);
  accessibility(Highcharts);
  highcharts3d(Highcharts);
  sunburst(Highcharts);
  vector(Highcharts);
  wordcloud(Highcharts);

  import { Chart } from 'highcharts-vue';

  import chartsData from './mock';

  export default {
    data() {
      return {
        cd: chartsData
      }
    },
    name: 'Chartkick',
    components: {
      Widget,
      highcharts: Chart
    },
  };
</script>
