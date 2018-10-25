<template>
  <div>
    <b-row>
      <b-col xs='12' lg='6' xl='5'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="chart-overflow-bottom" ref="sparkline1" />
          <div class="stats-row text-muted mt-xlg">
            <div class="stat-item">
              <h6 class="name">ARR ($)</h6>
              <p class="value">4 375 800</p>
            </div>
            <div class="stat-item">
              <h6 class="name">MRR ($)</h6>
              <p class="value">863 425</p>
            </div>
            <div class="stat-item">
              <h6 class="name">TTN ($)</h6>
              <p class="value">5 634 100</p>
            </div>
            <div class="stat-item">
              <h6 class="name">MRR / ARR </h6>
              <p class="value">0.1634</p>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <small>
              <span class="badge badge-warning">Profit</span> Legend Item Emulation
            </small>
            <small>
              <span class="badge badge-danger">Loss</span> Legend Item Emulation
            </small>
          </div>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6' xl='4'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="text-center" ref="sparkline2" />
          <b-alert class="text-muted" variant="white" show dismissible>
            <h5>Sales Report</h5>
            <b-progress size="xs" variant="secondary" :value="16" :max="100" />
            <p class="text-muted">
              <small>Prev year quota achievement 16%. Should work harder!</small>
            </p>
          </b-alert>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6' xl='3'>
        <Widget
          title="<h5>Area <span class='fw-semi-bold'>Sparkline</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="stats-row text-muted mt">
            <div class="stat-item">
              <h6 class="name">Overall Growth</h6>
              <p class="value">43.75%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">86.34%</p>
            </div>
          </div>
          <p class="text-muted fs-mini">
            <span class="fw-semi-bold">17% higher</span> than last month
          </p>
          <div class="chart-overflow-bottom" ref="sparkline3" />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs='12' lg='7' xl='9'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Line Chart</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="chart-overflow-bottom" ref="sparkline4" />
        </Widget>
      </b-col>
      <b-col xs='12' lg='5' xl='3'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="text-center" ref="sparkline5" />
          <p class="mt">Possible actions:</p>
          <b-button-group>
            <b-button variant="light">Yoga</b-button>
            <b-button variant="light">Coffee</b-button>
            <b-button variant="light">Dancing</b-button>
          </b-button-group>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close collapse customHeader
        >
          <b-input-group class="input-group-transparent">
            <b-form-input type="text" size="16" placeholder="Filter By Period: MM/DD/YYY" />
            <b-input-group-text class="bg-white" slot="append">
              <i class="fa fa-search" />
            </b-input-group-text>
          </b-input-group>
          <p class="fs-mini text-muted mt">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="chart-overflow-bottom" ref="sparkline6" />
        </Widget>
      </b-col>
      <b-col xs='12' lg='6'>
        <Widget
          title="<h5>Sparkline <span class='fw-semi-bold'>Line Chart</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            Each example displayed below takes just 1 line of HTML or javascript to generate.
          </p>
          <div class="chart-overflow-bottom" ref="sparkline7" />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
import Widget from '@/components/Widget/Widget';
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline'; // eslint-disable-line

export default {
  name: 'Sparkline',
  components: { Widget },
  methods: {
    generateRandomArr(length, min, max, isFloat) { // eslint-disable-line
      const result = [];
      const maxDefault = 100;
      const minDefault = -100;
      let rand = 0;

      min = min === 0 ? 0 : (min || minDefault); // eslint-disable-line
      max = max === 0 ? 0 : (max || maxDefault); // eslint-disable-line

      for (let i = 0; i < length; i += 1) {
        rand = Math.random() * (Math.abs(result[i - 1] / 10) || 1) * [min, max][i % 2];
        rand = rand < min ? min : rand;
        result.push(isFloat ? rand : Math.round(rand));
      }

      return result;
    },
    initSparkline1() {
      $(this.$refs.sparkline1).sparkline(this.generateRandomArr(80, -150), {
        type: 'bar',
        height: '140px',
        width: '100%',
        barWidth: 6,
        barSpacing: 3,
        barColor: '#ffebb2',
        negBarColor: '#f59f9f',
      });

      // Chrome and Safari fix for to set correct width to chart
      $(this.$refs.sparkline1).find('canvas').css({ width: $(this.$refs.sparkline1).width() });
    },
    initSparkline2() {
      $(this.$refs.sparkline2).sparkline(this.generateRandomArr(6, 4, 15), {
        type: 'pie',
        width: '200px',
        height: '200px',
        sliceColors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
        highlightLighten: 1.05,
      });
    },
    initSparkline3() {
      $(this.$refs.sparkline3).sparkline(this.generateRandomArr(5), {
        width: '100%',
        fillColor: '#ffebb2',
        height: '100px',
        lineColor: 'transparent',
        spotColor: '#c0d0f0',
        minSpotColor: null,
        maxSpotColor: null,
        highlightSpotColor: '#ddd',
        highlightLineColor: '#ddd',
      }).sparkline(this.generateRandomArr(7), {
        composite: true,
        lineColor: 'transparent',
        spotColor: '#c0d0f0',
        fillColor: '#ace5d1',
        minSpotColor: null,
        maxSpotColor: null,
        highlightSpotColor: '#ddd',
        highlightLineColor: '#ddd',
      });
    },
    initSparkline4() {
      $(this.$refs.sparkline4).sparkline(this.generateRandomArr(10, 10, 30), {
        type: 'line',
        width: '100%',
        height: '200px',
        lineColor: '#a7beff',
        fillColor: '#d1dcff',
        lineWidth: 2,
        spotColor: '#547fff',
        minSpotColor: '#fdf7e6',
        maxSpotColor: '#f55d5d',
        highlightSpotColor: '#547fff',
        highlightLineColor: '#ffffff',
        spotRadius: 1,
        chartRangeMin: 5,
        chartRangeMax: 7,
        normalRangeColor: '#547fff',
        drawNormalOnTop: true,
      });
    },
    initSparkline5() {
      $(this.$refs.sparkline5).sparkline(this.generateRandomArr(2, 8, 15), {
        type: 'pie',
        width: '100px',
        height: '100px',
        sliceColors: ['#f59f9f', '#ffd7de'],
        highlightLighten: 1.1,
      });
    },
    initSparkline6() {
      $(this.$refs.sparkline6).sparkline(this.generateRandomArr(102, -1, 1), {
        type: 'tristate',
        height: '100px',
        width: '100%',
        posBarColor: '#ffebb2',
        negBarColor: '#b7b3ff',
        zeroBarColor: '#d6dee5',
        barWidth: 5,
        barSpacing: 3,
        zeroAxis: true,
      });

      // Chrome and Safari fix for to set correct width to chart
      $(this.$refs.sparkline6).find('canvas').css({ width: $(this.$refs.sparkline6).width() });
    },
    initSparkline7() {
      $(this.$refs.sparkline7).sparkline(this.generateRandomArr(15, 10, 100, true), {
        width: '100%',
        height: '200px',
        lineColor: '#547fff',
        fillColor: false,
      });
    },
    initCharts() {
      this.initSparkline1();
      this.initSparkline2();
      this.initSparkline3();
      this.initSparkline4();
      this.initSparkline5();
      this.initSparkline6();
      this.initSparkline7();
    },
  },
  mounted() {
    this.initCharts();

    window.addEventListener('resize', this.initCharts);
  },
  destroyed() {
    window.removeEventListener('risize', this.initCharts);
  },
};
</script>
