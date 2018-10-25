<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item>Charts</b-breadcrumb-item>
      <b-breadcrumb-item active>Easy Pie</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Visual - <span class="fw-semi-bold">Charts</span></h1>
    <b-row>
      <b-col xs='12' md='6' lg='4'>
        <Widget
          title="<h5>Easy Pie Charts</h5>"
          close collapse customHeader
        >
          <div class="text-center">
            <div class="easy-pie-chart-md mb-lg" id="easy-pie1" data-percent="73">
              73
            </div>
          </div>
          <p class="fs-mini text-muted">
            Easy pie chart is a jQuery plugin that uses the canvas
            element to render simple pie charts for single values.
            These charts are highly customizable, very easy to
            implement, scale to the resolution of the display of
            the client to provide sharp charts even on retina displays.
          </p>
        </Widget>
      </b-col>
      <b-col xs='12' md='6' lg='4'>
        <Widget
          title="<h5>Easy Pie Charts</h5>"
          close collapse customHeader
        >
          <div class="text-center">
            <div class="easy-pie-chart-lg mb-lg" id="easy-pie2" data-percent="22">
              22
            </div>
          </div>
          <div class="text-center">
            <div class="easy-pie-chart-lg mb-lg" id="easy-pie3" data-percent="88">
              88
            </div>
          </div>
        </Widget>
      </b-col>
      <b-col xs='12' md='6' lg='4'>
        <Widget
          title="<h5>Easy Pie Charts</h5>"
          close collapse customHeader
        >
          <p class="fw-mini text-muted">
            Ok, but <span class="fw-semi-bold">when to use pie chart?</span> Pie
            charts are mostly used to show how much individual shares — such as
            quarterly sales figures — contribute to a total amount, such as annual sales.
          </p>
          <div class="text-center">
            <div class="easy-pie-chart-md mb-lg" id="easy-pie4" data-percent="43">
              43
            </div>
          </div>
          <hr />
          <b-row>
            <b-col xs='3'>
              <span class="widget-icon">
                <i class="fi flaticon-like text-primary" />
              </span>
            </b-col>
            <b-col xs='9'>
              <div class="text-muted">
                <h6 class="no-margin">TOTAL PROGRESS</h6>
                <p class="h2 no-margin fw-normal">43,32%</p>
              </div>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
import Widget from '@/components/Widget/Widget';
import 'imports-loader?jQuery=jquery,this=>window!easy-pie-chart/dist/jquery.easypiechart.js'; // eslint-disable-line

export default {
  name: 'EasyPie',
  components: { Widget },
  methods: {
    initCharts() { // eslint-disable-line
      $('#easy-pie1').easyPieChart({
        barColor: '#8fe5d4',
        trackColor: '#f8f9fa',
        scaleColor: false,
        lineWidth: 10,
        size: 120,
      });

      $('#easy-pie2').easyPieChart({
        barColor: '#ffd7de',
        trackColor: '#f8f9fa',
        scaleColor: '#f55d5d',
        lineCap: 'butt',
        lineWidth: 22,
        size: 140,
        animate: 1000,
      });

      $('#easy-pie3').easyPieChart({
        barColor: '#ffebb2',
        trackColor: '#f8f9fa',
        scaleColor: '#ffc247',
        lineCap: 'butt',
        lineWidth: 22,
        size: 140,
        animate: 1000,
      });

      $('#easy-pie4').easyPieChart({
        barColor: '#b7b3ff',
        trackColor: false,
        scaleColor: '#6c757d',
        lineCap: 'square',
        lineWidth: 10,
        size: 120,
        animate: 1000,
      });
    },
  },
  mounted() {
    this.initCharts();
  },
};
</script>
