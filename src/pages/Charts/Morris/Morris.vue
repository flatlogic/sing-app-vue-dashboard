<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item>Charts</b-breadcrumb-item>
      <b-breadcrumb-item active>Morris</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Visual - <span class="fw-semi-bold">Charts</span></h1>
    <b-row>
      <b-col lg='6' xs='12'>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Line Chart</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Good-looking charts shouldn&apos;t be difficult.
              The public API is terribly simple. It&apos;s just
              one function: <code>Morris.Line(options)</code>,
              where options is an object containing some of the following configuration options.
            </p>
            <div class="text-center" ref="morrisLineChart" :style="{ height: '343px' }" />
          </div>
        </Widget>
      </b-col>
      <b-col lg='6' xs='12'>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Area Chart</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Good-looking charts shouldn&apos;t be difficult.
              The public API is terribly simple. It&apos;s
              just one function: <code>Morris.Line(options)</code>,
              where options is an object containing some of the following configuration options.
            </p>
            <div class="text-center" ref="morrisAreaChart" :style="{ height: '343px' }" />
          </div>
        </Widget>
      </b-col>
      <b-col lg='5' xs='12'>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close collapse customHeader
        >
          <div>
            <div class="text-center" ref="morrisBarChart" :style="{ height: '260px' }" />
            <p class="fs-mini text-muted">
              Bar charts are also commonly referred to as a
              column charts. If you was trying to compare
              the height of something then intuitvely you
              would represent this by using columns. This
              really couldn&apos;t be easier. Create a Bar
              chart using <code>Morris.Bar(options)</code>,
              with only few options.
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Donut Chart</span></h5>"
          close collapse customHeader
        >
          <div>
            <div class="text-center" ref="morrisDonutChart" :style="{ height: '180px' }" />
            <p class="fs-mini text-muted">
              Donuts a great for representing some parted information
              like traffice sources, disk partitions,
              etc. This really couldn&apos;t be easier. Create
              a Donut chart using <code>Morris.Bar(options)</code>,
              with only few options.
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Bar Chart 2</span></h5>"
          close collapse customHeader
        >
          <div>
            <div class="text-center" ref="morrisBar2Chart" :style="{ height: '180px' }" />
            <p class="fs-mini text-muted">
              This is generally a good chart to choose for
              all comparison based analysis but if you were to
              display a data set with negative values a
              column would be the best to represent this. This
              really couldn&apos;t be easier. Create a Bar
              chart using <code>Morris.Bar(options)</code>,
              with only few options.
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col>
        <Widget
          title="<h5> Morris <span class='fw-semi-bold'>Stacked Bar Chart</span></h5>"
          close collapse customHeader
        >
          <div>
            <div class="text-center" ref="morrisStackedChart" :style="{ height: '200px' }" />
            <p class="fs-mini text-muted">
              Stacked charts are excellent to track some dynamics
              within declared categories. An example of this
              can be seen above. To create a Stacked Bar
              chart use <code>Morris.Bar(options)</code> and
              set <code>stacked</code>, option to true.
            </p>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!webpack-raphael/raphael';
import 'imports-loader?jQuery=jquery,this=>window!govpredict-morris/morris';
/* eslint-enable */
import Widget from '@/components/Widget/Widget';

const { Morris } = window;

export default {
  name: 'Morris',
  components: { Widget },
  methods: {
    initMorrisLineChart() {
      $(this.$refs.morrisLineChart).html('');
      Morris.Line({
        element: this.$refs.morrisLineChart,
        resize: true,
        data: [
          { y: '2006', a: 100, b: 90 },
          { y: '2007', a: 75, b: 65 },
          { y: '2008', a: 50, b: 40 },
          { y: '2009', a: 75, b: 65 },
          { y: '2010', a: 50, b: 40 },
          { y: '2011', a: 75, b: 65 },
          { y: '2012', a: 100, b: 90 },
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#8fe5d4', '#ffebb2'],
      });
    },
    initMorrisAreaChart() {
      $(this.$refs.morrisAreaChart).html('');
      Morris.Area({
        element: this.$refs.morrisAreaChart,
        resize: true,
        data: [
          { y: '2006', a: 100, b: 90 },
          { y: '2007', a: 75, b: 65 },
          { y: '2008', a: 50, b: 40 },
          { y: '2009', a: 75, b: 65 },
          { y: '2010', a: 50, b: 40 },
          { y: '2011', a: 75, b: 65 },
          { y: '2012', a: 100, b: 90 },
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Users A', 'Series B'],
        lineColors: ['#8fe5d4', '#ffd7de'],
        lineWidth: 0,
      });
    },
    initMorrisBarChart() {
      $(this.$refs.morrisBarChart).html('');
      Morris.Bar({
        element: this.$refs.morrisBarChart,
        resize: true,
        grid: false,
        data: [
          { y: 4, x: 'Linux' },
          { y: 12, x: 'MacOS' },
          { y: 29, x: 'Windows' },
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['OS Users, %'],
        barColors: ['#b7b3ff'],
        gridTextColor: '#c1ccd3',
      });
    },
    initMorrisBar2Chart() {
      $(this.$refs.morrisBar2Chart).html('');
      Morris.Bar({
        element: this.$refs.morrisBar2Chart,
        resize: true,
        grid: false,
        data: [
          { y: '2014', a: 50, b: 90 },
          { y: '2015', a: 65, b: 75 },
          { y: '2016', a: 50, b: 50 },
          { y: '2017', a: 75, b: 60 },
          { y: '2018', a: 80, b: 65 },
          { y: '2019', a: 90, b: 70 },
          { y: '2020', a: 100, b: 75 },
          { y: '2021', a: 115, b: 75 },
          { y: '2022', a: 120, b: 85 },
          { y: '2023', a: 145, b: 85 },
          { y: '2024', a: 160, b: 95 },
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        hideHover: 'auto',
        barColors: ['#8fe5d4', '#f59f9f'],
        gridTextColor: '#d6dee5',
      });
    },
    initMorrisDonutChart() {
      $(this.$refs.morrisDonutChart).html('');
      Morris.Donut({
        element: this.$refs.morrisDonutChart,
        resize: true,
        data: [
          { label: 'Download Sales', value: 12 },
          { label: 'In-Store Sales', value: 30 },
          { label: 'Mail-Order Sales', value: 20 },
        ],
        colors: ['#ffd7de', '#ffebb2', '#e2e1ff'],
      });
    },
    initMorrisStackedChart() {
      $(this.$refs.morrisStackedChart).html('');
      Morris.Bar({
        element: this.$refs.morrisStackedChart,
        stacked: true,
        resize: true,
        data: [
          {
            y: '2012', a: 3, b: 7, c: 90, d: 0,
          },
          {
            y: '2013', a: 2, b: 7, c: 75, d: 14,
          },
          {
            y: '2014', a: 3, b: 15, c: 65, d: 4,
          },
          {
            y: '2015', a: 3, b: 17, c: 56, d: 20,
          },
          {
            y: '2016', a: 5, b: 16, c: 49, d: 30,
          },
          {
            y: '2017', a: 4, b: 20, c: 40, d: 36,
          },
          {
            y: '2018', a: 5, b: 20, c: 40, d: 35,
          },
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd'],
        barColors: ['#a7beff', '#e2e1ff', '#fff8e3', '#ffd7de'],
        labels: ['Linux', 'MacOS', 'Windows', 'Other'],
        hoverCallback(index, options, content, row) {
          const keys = Object.keys(row).splice(1).sort();
          let tooltip = `
          <div class="card" style="width: 11rem;"><div class="card-body">
              <h5 class="card-title">${row.y} OS Shares</h5>
              <h6 class="card-subtitle mb-2 text-muted">Statistics for most popular Operation Systems Usage</h6>`;

          const rows = [];
          keys.forEach((value, id) => {
            rows.push(
              (`<tr>
                <td>${options.labels[id]}: </td>
                <td>${row[value]}%</td>
              </tr>`).trim(),
            );
          });

          tooltip += '<table class="table"><tbody>';
          tooltip += rows.join('');
          tooltip += '</tbody></table></div></div>';

          return tooltip;
        },
        hideHover: 'auto',
      });
    },
  },
  mounted() {
    this.initMorrisLineChart();
    this.initMorrisAreaChart();
    this.initMorrisBarChart();
    this.initMorrisBar2Chart();
    this.initMorrisDonutChart();
    this.initMorrisStackedChart();
  },
};
</script>
