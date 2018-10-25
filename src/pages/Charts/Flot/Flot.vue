<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item>Charts</b-breadcrumb-item>
      <b-breadcrumb-item active>Flot</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Visual - <span class="fw-semi-bold">Flot Charts</span></h1>
    <b-row>
      <b-col xs='12' lg='6' xl='5'>
        <Widget
          title="<h5>Flot <span class='fw-semi-bold'>Stacked Line Chart</span></h5>"
          close collapse customHeader
        >
          <LineChart />
          <p class="fs-mini text-muted">
              Flot is a <span class="fw-semi-bold">pure</span>
              JavaScript plotting library for jQuery, with a
              focus on simple usage, attractive looks and interactive features.
          </p>
          <h5 class="mt">Interactive <span class="fw-semi-bold">Sparklines</span></h5>
          <b-row class="mt">
            <b-col xs='12' md='6'>
              <div class="stats-row">
                <div class="stat-item">
                  <p class="value5 fw-thin">34 567</p>
                  <h6 class="name text-muted no-margin fs-mini">Overall Values</h6>
                </div>
                <div class="stat-item stat-item-mini-chart">
                  <div class="sparkline" ref="sparklines1" data-type="bar" data-bar-color="#FFC247"
                    data-height="30" data-bar-width="6" data-bar-spacing="2">
                    9,12,14,15,10,14,20
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xs='12' md='6'>
              <div class="stats-row">
                <div class="stat-item">
                  <p class="value5 fw-thin">34 567</p>
                  <h6 class="name text-muted no-margin fs-mini">Overall Values</h6>
                </div>
                <div class="stat-item stat-item-mini-chart">
                  <div class="sparkline" ref="sparklines2" data-type="bar" data-bar-color="#FFF8E3"
                    data-height="30" data-bar-width="6" data-bar-spacing="2">
                    9,12,14,15,10,14,20
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
          <p class="fs-mini text-muted">
              This jQuery plugin generates sparklines
              (small inline charts) directly in the browser using
              data supplied either inline in the HTML, or via javascript.
          </p>
        </Widget>
      </b-col>
      <b-col xs='12' lg='6' xl='7'>
        <Widget
          title="<h5>Flot <span class='fw-semi-bold'>Tracking</span></h5>"
          close collapse customHeader
        >
          <div class="mt mb">
            <TrackingChart />
          </div>
          <p class="fs-mini text-muted">
            Flot charts can be customized easily due to its
            <span class="fw-semi-bold">powerful API</span>.
            But if you meet any troubles, you are always welcome to
            contact us to integrate the business
            logic into <span class="fw-semi-bold">SING Admin Dashboard</span>.
          </p>
        </Widget>
      </b-col>
      <div class="col-12">
        <Widget
          title="<h5>Flot <span class='fw-semi-bold'>Markers</span></h5>"
          close collapse customHeader
        >
          <div class="mt mb">
            <MarkersChart />
          </div>
          <p class="fs-mini text-muted">
            Points can be marked in several ways, with circles being the built-in default.
          </p>
        </Widget>
      </div>
      <b-col xs='12' lg='7'>
        <Widget
          title="<h5>Flot <span class='fw-semi-bold'>Bars</span></h5>"
          close collapse customHeader
        >
          <div class="mt mb">
            <BarsChart />
          </div>
          <p class="fs-mini text-muted">
            Flot is a pure JavaScript plotting library for jQuery,
            with a focus on simple usage, attractive looks and interactive features.
          </p>
        </Widget>
      </b-col>
      <b-col xs='12' lg='5'>
        <Widget
          class="mb-xlg"
          title="<h5>Flot <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close collapse customHeader
        >
          <div class="mt mb">
            <PieChart />
          </div>
          <p class="fs-mini text-muted">
            Labels can be hidden if the slice is less than a
            given percentage of the pie (19% in this case).
          </p>
        </Widget>
        <Widget
          class="mb-xlg"
          title="<h5>Flot <span class='fw-semi-bold'>Donut Chart</span></h5>"
          close collapse customHeader
        >
          <DonutChart />
        </Widget>
      </b-col>
      <b-col xs='12'>
        <Widget
          class="mb-xlg"
          title="<h5>Flot <span class='fw-semi-bold'>Bars Stacked</span></h5>"
          close collapse customHeader
        >
          <div class="mt mb">
            <StackedBar />
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
import Widget from '@/components/Widget/Widget';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.time';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot.animator/jquery.flot.animator';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.crosshair';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.symbol';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.selection';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
import 'imports-loader?jQuery=jquery,this=>window!jquery.flot-orderBars/js/jquery.flot.orderBars';
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */
import LineChart from './charts/LineChart';
import TrackingChart from './charts/TrackingChart';
import MarkersChart from './charts/MarkersChart';
import BarsChart from './charts/BarsChart';
import PieChart from './charts/PieChart';
import DonutChart from './charts/DonutChart';
import StackedBar from './charts/BarsStackedChart';

export default {
  name: 'Flot',
  components: {
    Widget,
    LineChart,
    TrackingChart,
    MarkersChart,
    BarsChart,
    PieChart,
    DonutChart,
    StackedBar,
  },
  methods: {
    initSparkline(ref) {
      const spark = $(this.$refs[ref]);
      spark.sparkline('html', spark.data());
    },
  },
  mounted() {
    this.initSparkline('sparklines1');
    this.initSparkline('sparklines2');
  },
};
</script>
