<template>
  <div class="charts-overview">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Charts</li>
    </ol>
    <h1 class="page-title">
      Visual -
      <span class="fw-semi-bold">Charts</span>
    </h1>
    <div>
      <b-row>
        <b-col lg="7" xs="12">
          <Widget title="<h5><span class='fw-semi-bold'>D3</span> Charts</h5>" close customHeader>
            <div>
              <p class="fs-mini text-muted">
                This is a very young collection of components,
                with the goal of keeping these components
                very customizeable.
              </p>
              <div>
                <svg ref="nvd3ChartBarSvg"></svg>
              </div>
            </div>
          </Widget>
        </b-col>
        <b-col lg="5" xs="12">
          <Widget
            title="<h5> Vue <span class='fw-semi-bold'>Chart.js</span></h5>"
            collapse
            close
            customHeader
          >
            <div>
              <p class="fs-mini text-muted mb-lg">
                Simple yet flexible JavaScript charting for designers & developers
                built with
                <span class="fw-semi-bold">Chart.js</span> and
                <span class="fw-semi-bold">Vue.js</span>.
                Mix and match bar and line charts to provide a clear visual distinction between datasets.
                Plot complex, sparse datasets on date time, logarithmic or even entirely custom scales with ease.
                Customize all you like with techniques you already know.
              </p>
              <h5>720 Users</h5>
              <b-progress :value="60" :max="100" variant="gray" class="mb-sm progress-xs"/>
              <p class="fs-misni text-muted mb-lg">
                <span class="circle bg-warning">
                  <i class="fa fa-circle"/>
                </span>
                &nbsp;
                Target
                <span class="fw-semi-bold">820</span> users
                is
                <span class="fw-semi-bold">96%</span> reached.
              </p>
              <div class="chart-overflow-bottom">
                <area-chart
                  class="area-chart"
                  height="100px"
                  :options="{legend: false, scales: {yAxes: [{display: false}], xAxes: [{display: false}]}}"
                  :chart-data="dataCollection"
                ></area-chart>
              </div>
            </div>
          </Widget>
        </b-col>
        <b-col lg="6" xl="5" xs="12">
          <Widget
            title="<h5>Flot <span class='fw-semi-bold'>Charts</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <div
                class="mt mb"
                id="flotChart"
                ref="flotChart"
                :style="{ width: '100%', height: '260px' }"
              />
              <div class="chart-tooltip" id="flot-main-tooltip" :style="{ opacity: 0 }"/>
              <p class="fs-mini text-muted">
                Flot is a
                <span class="fw-semi-bold">pure</span>
                JavaScript plotting library for jQuery, with a
                focus on simple usage, attractive looks and interactive features.
              </p>
              <h5 class="mt">
                Interactive
                <span class="fw-semi-bold">Sparklines</span>
              </h5>
              <b-row class="mt">
                <b-col md="6" xs="12">
                  <div class="stats-row">
                    <div class="stat-item">
                      <p class="value5 fw-thin">34 567</p>
                      <h6 class="name text-muted m-0 fs-mini">Overall Values</h6>
                    </div>
                    <div class="stat-item stat-item-mini-chart">
                      <div class="sparkline" ref="InteractiveSparkline1"/>
                    </div>
                  </div>
                </b-col>
                <b-col md="6" xs="12">
                  <div class="stats-row">
                    <div class="stat-item">
                      <p class="value5 fw-thin">34 567</p>
                      <h6 class="name text-muted m-0 fs-mini">Overall Values</h6>
                    </div>
                    <div class="stat-item stat-item-mini-chart">
                      <div class="sparkline" ref="InteractiveSparkline2"/>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <p class="fs-mini text-muted">
                This jQuery plugin generates sparklines
                (small inline charts) directly in the browser using
                data supplied either inline in the HTML, or via javascript.
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col lg="6" xl="7" xs="12">
          <b-row>
            <b-col xs="12" lg="7">
              <Widget
                title="<h5> Easy <span class='fw-semi-bold'>Pie Charts</span></h5>"
                collapse
                close
                customHeader
              >
                <div>
                  <div ref="easyPieChart" class="mb text-center" data-percent="47"/>
                  <p class="fs-mini text-muted">
                    Easy pie chart is a jQuery plugin that uses the canvas element to render
                    simple pie charts for single values. These charts are highly customizable,
                    very easy to implement, scale to the resolution of the display of the client
                    to provide sharp charts even on retina displays.
                  </p>
                </div>
              </Widget>
            </b-col>
            <b-col xs="12" lg="5">
              <Widget
                title="<h5> Sparkline <span class='fw-semi-bold'>Pie Charts</span></h5>"
                collapse
                close
                customHeader
              >
                <div>
                  <p class="fs-mini text-muted">
                    Each example displayed below takes just
                    1 line of HTML or javascript to generate.
                  </p>
                  <div ref="sparklinePie" class="chart-overflow-bottom mb-0 text-center"/>
                  <p
                    class="fs-mini text-muted"
                  >Nevertheless Sparkline charts can be configured quite accurate.</p>
                </div>
              </Widget>
            </b-col>
            <b-col xs="12">
              <Widget
                title="<h5> Sparkline <span class='fw-semi-bold'>Line Charts</span></h5>"
                collapse
                close
                customHeader
              >
                <div>
                  <div ref="sparklineLineChart" class="chart-overflow-bottom mb-0 text-center"/>
                </div>
              </Widget>
            </b-col>
          </b-row>
        </b-col>
        <div class="col-12">
          <Widget title="<h5><span class='fw-semi-bold'>D3</span> Charts</h5>" close customHeader>
            <div>
              <p class="fs-mini text-muted">
                This project is an attempt to build re-usable charts and chart components for
                <span class="fw-semi-bold">d3.js</span> without
                taking away the power that d3.js gives you.
              </p>
              <div>
                <svg ref="nvd3ChartLineSvg"></svg>
              </div>
            </div>
          </Widget>
        </div>
      </b-row>
      <b-row>
        <b-col lg="6" xs="12">
          <Widget
            title="<h5> Morris <span class='fw-semi-bold'>Area Charts</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Good-looking charts shouldn&apos;t be difficult.
                The public API is terribly simple. It&apos;s just
                one function:
                <code>Morris.Line(options)</code>,
                where options is an object containing some of the following configuration options.
              </p>
              <div class="text-center" ref="morrisAreaChart" :style="{ height: '343px' }"/>
            </div>
          </Widget>
        </b-col>
        <b-col lg="6" xs="12">
          <Widget
            title="<h5> Morris <span class='fw-semi-bold'>Line Charts</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Good-looking charts shouldn&apos;t be difficult.
                The public API is terribly simple. It&apos;s just one
                function:
                <code>Morris.Line(options)</code>,
                where options is an object containing some of the following configuration options.
              </p>
              <div class="text-center" ref="morrisLineChart" :style="{ height: '343px' }"/>
            </div>
          </Widget>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" lg="6" xl="3">
          <Widget
            title="<h5>Area <span class='fw-semi-bold'>Sparkline</span></h5>"
            close
            collapse
            customHeader
          >
            <p class="fs-mini text-muted">
              Each example displayed below takes just 1 line
              of HTML or javascript to generate.
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
            <div class="chart-overflow-bottom" ref="sparklineAreaChart"/>
          </Widget>
        </b-col>
        <b-col lg="6" xl="6" xs="12">
          <Widget
            title="<h5> Flot <span class='fw-semi-bold'>Bars</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <FlotBars/>
              <p class="fs-mini text-muted">
                Flot is a
                <span class="fw-semi-bold">pure</span>
                JavaScript plotting library for jQuery, with a
                focus on simple usage, attractive looks and interactive features.
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col lg="6" xl="3" xs="12">
          <Widget
            title="<h5> Morris <span class='fw-semi-bold'>Donut Charts</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <div class="text-center" ref="morrisDonutChart" :style="{ height: '180px' }"/>
              <p class="fs-mini text-muted">
                Donuts a great for representing some parted information like traffice sources,
                disk partitions, etc.
                This really couldn&apos;t be easier. Create a
                Donut chart using
                <code>Morris.Donut(options)</code>,
                with only few options.
              </p>
            </div>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
/* eslint-disable */
import "imports-loader?jQuery=jquery,this=>window!easy-pie-chart/dist/jquery.easypiechart.js";
import "imports-loader?jQuery=jquery,this=>window!jquery-sparkline";
import "imports-loader?jQuery=jquery,this=>window!webpack-raphael/raphael";
import "imports-loader?jQuery=jquery,this=>window!govpredict-morris/morris";
import "imports-loader?jQuery=jquery,this=>window!flot";
import "imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize";
import "imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.time";
/* eslint-enable */
import Widget from "@/components/Widget/Widget";
import d3 from "d3";
import nv from "nvd3";
import FlotBars from "./Flot/charts/BarsChart";
import AreaChart from "../Visits/components/AreaChart/AreaChart";

const FlotChartData = [
  {
    label: "Traffic",
    data: [[1, 23], [2, 13], [3, 33], [4, 16], [5, 32], [6, 28], [7, 31]],
    lines: {
      fill: 0.6,
      lineWidth: 0
    },
    color: ["#ffdb6f"]
  },
  {
    label: "Traffic",
    data: [[1, 13], [2, 8], [3, 17], [4, 10], [5, 17], [6, 15], [7, 16]],
    lines: {
      fill: 0.8,
      lineWidth: 0
    },
    color: ["#ffaa73"]
  },
  {
    label: "Traffic",
    data: [[1, 20], [2, 20], [3, 40], [4, 30], [5, 40], [6, 35], [7, 47]],
    animator: { steps: 60, duration: 1000, start: 0 },
    lines: { lineWidth: 2 },
    shadowSize: 0,
    color: "#ffc247"
  }
];
const { Morris } = window;

export default {
  name: "Charts",
  components: { Widget, FlotBars, AreaChart },
  data() {
    return {
      dataCollection: null
    };
  },
  methods: {
    onResize() {
      this.initFlotChart();
      this.initSparklineLine();
      this.initD3Charts();
      this.initMorrisLineChart();
      this.initMorrisAreaChart();
      this.initEasyPieChart();
      this.initInteractiveSparklines();
      this.initSparklineAreaChart();
      this.initMorrisDonutCharts();
    },
    initEasyPie() {
      $(this.$refs.easyPieChart).easyPieChart({
        barColor: "#8fe5d4",
        trackColor: "#f8f9fa",
        scaleColor: false,
        lineWidth: 10,
        size: 120
      });
    },
    initSparklineAreaChart() {
      // eslint-disable-line
      $(this.$refs.sparklineAreaChart)
        .sparkline([2, 4, 6, 2, 7, 5, 3, 7, 8, 3, 6], {
          width: "100%",
          fillColor: "#e2e1ff",
          height: "100px",
          lineColor: "transparent",
          spotColor: "#b7b3ff",
          minSpotColor: null,
          maxSpotColor: null,
          highlightSpotColor: "#ffebb2",
          highlightLineColor: "#ffebb2"
        })
        .sparkline([5, 3, 7, 8, 3, 6, 2, 4, 6, 2, 7], {
          composite: true,
          lineColor: "transparent",
          spotColor: "#b7b3ff",
          fillColor: "#b7b3ff",
          minSpotColor: null,
          maxSpotColor: null,
          highlightSpotColor: "#b7b3ff",
          highlightLineColor: "#b7b3ff"
        });
    },
    initSparklineLine() {
      $(this.$refs.sparklineLineChart).sparkline([1, 2, 4, 2, 3, 7], {
        width: "100%",
        height: "100px",
        lineColor: "#ffc247",
        fillColor: false,
        highlightLineColor: "#8fe5d4",
        spotColor: "#8fe5d4",
        minSpotColor: "#ffc247",
        maxSpotColor: "#ffc247",
        spotRadius: 2,
        lineWidth: 2
      });
    },
    initD3Charts() {
      const streamLayers = (n, m, o) => {
        if (arguments.length < 3) {
          o = 0; //eslint-disable-line
        }

        const bump = a => {
          const x = 1 / (0.1 + Math.random());
          const y = 2 * Math.random() - 0.5;
          const z = 10 / (0.1 + Math.random());
          for (let i = 0; i < m; i += 1) {
            const w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w); // eslint-disable-line
          }
        };

        return d3.range(n).map(() => {
          const a = [];
          let i;
          for (i = 0; i < m; i += 1) {
            a[i] = o + o * Math.random();
          }
          for (i = 0; i < 5; i += 1) {
            bump(a);
          }
          return a.map((d, iItem) => ({ x: iItem, y: Math.max(0, d) }));
        });
      };
      const testData = (streamNames, pointCount) => {
        const now = new Date().getTime();
        const day = 1000 * 60 * 60 * 24; // milliseconds
        const daysAgoCount = 60;
        const daysAgo = daysAgoCount * day;
        const daysAgoDate = now - daysAgo;
        const pointsCount = pointCount || 45; // less for better performance
        const daysPerPoint = daysAgoCount / pointsCount;
        return streamLayers(streamNames.length, pointsCount, 0.1).map(
          (data, i) => ({
            key: streamNames[i],
            values: data.map(d => ({
              x: daysAgoDate + d.x * day * daysPerPoint,
              y: Math.floor(d.y * 100) // just a coefficient,
            })),
            yAxis: i + 1,
            type: "line"
          })
        );
      };

      nv.addGraph(() => {
        const chart = nv.models
          .lineChart()
          .useInteractiveGuideline(true)
          .margin({ left: 28, bottom: 30, right: 0 })
          .color(["#ff6e7c", "#5faaff"])
          .showLegend(true);
        chart.xAxis
          .showMaxMin(false)
          .tickFormat(d => d3.time.format("%b %d")(new Date(d)));
        chart.yAxis.showMaxMin(false).tickFormat(d3.format(",f"));

        const chartData = testData(["Search", "Referral"], 50);
        d3.select(this.$refs.nvd3ChartLineSvg)
          .style("height", "300px")
          .datum(
            chartData.map(el => {
              el.area = true; // eslint-disable-line
              return el;
            })
          )
          .call(chart);

        return chart;
      });

      nv.addGraph(() => {
        const bar = nv.models
          .multiBarChart()
          .margin({ left: 28, bottom: 30, right: 0 })
          .color(["#4ce5d3", "#ff3d43"]);
        bar.xAxis
          .showMaxMin(false)
          .tickFormat(d => d3.time.format("%b %d")(new Date(d)));
        bar.yAxis.showMaxMin(false).tickFormat(d3.format(",f"));
        const barData = testData(["Uploads", "Downloads"], 10).map(el => {
          el.area = true; // eslint-disable-line
          return el;
        });

        d3.select(this.$refs.nvd3ChartBarSvg)
          .style("height", "300px")
          .datum(
            barData.map(el => {
              el.area = true; // eslint-disable-line
              return el;
            })
          )
          .call(bar);

        return bar;
      });
    },
    initMorrisDonutCharts() {
      $(this.$refs.morrisDonutChart).html("");
      Morris.Donut({
        element: this.$refs.morrisDonutChart,
        colors: ["#ff9592", "#ffcf94"],
        data: [
          { label: "Download Sales", value: 12 },
          { label: "In-Store Sales", value: 30 }
        ]
      });
    },
    initMorrisLineChart() {
      $(this.$refs.morrisLineChart).html("");
      Morris.Line({
        element: this.$refs.morrisLineChart,
        resize: true,
        data: [
          { y: "2006", a: 100, b: 90 },
          { y: "2007", a: 75, b: 65 },
          { y: "2008", a: 50, b: 40 },
          { y: "2009", a: 75, b: 65 },
          { y: "2010", a: 50, b: 40 },
          { y: "2011", a: 75, b: 65 },
          { y: "2012", a: 100, b: 90 }
        ],
        xkey: "y",
        ykeys: ["a", "b"],
        labels: ["Series A", "Series B"],
        lineColors: ["#8fe5d4", "#ffebb2"]
      });
    },
    initMorrisAreaChart() {
      $(this.$refs.morrisAreaChart).html("");
      Morris.Area({
        element: this.$refs.morrisAreaChart,
        resize: true,
        data: [
          { y: "2006", a: 100, b: 90 },
          { y: "2007", a: 75, b: 65 },
          { y: "2008", a: 50, b: 40 },
          { y: "2009", a: 75, b: 65 },
          { y: "2010", a: 50, b: 40 },
          { y: "2011", a: 75, b: 65 },
          { y: "2012", a: 100, b: 90 }
        ],
        xkey: "y",
        ykeys: ["a", "b"],
        labels: ["Series A", "Series B"],
        lineColors: ["#f5b868", "#f55d5d"],
        lineWidth: 0
      });
    },
    initFlotChart() {
      const option = {
        series: {
          lines: {
            show: true,
            lineWidth: 1,
            fill: false,
            fillColor: { colors: [{ opacity: 0.001 }, { opacity: 0.5 }] }
          },
          points: {
            show: false,
            fill: true
          },
          shadowSize: 0
        },
        legend: false,
        grid: {
          show: false,
          margin: 0,
          labelMargin: 0,
          axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(255,255,255,1)",
          borderWidth: 0
        }
      };
      $(this.$refs.flotChart).plot(FlotChartData, option);
    },
    initFlotBarChart() {
      const barCustomised1 = [
        [1388534400000, 120],
        [1391212800000, 70],
        [1393632000000, 100],
        [1396310400000, 60],
        [1398902400000, 35]
      ];
      const barCustomised2 = [
        [1388534400000, 90],
        [1391212800000, 60],
        [1393632000000, 30],
        [1396310400000, 73],
        [1398902400000, 30]
      ];
      const barCustomised3 = [
        [1388534400000, 80],
        [1391212800000, 40],
        [1393632000000, 47],
        [1396310400000, 22],
        [1398902400000, 24]
      ];
      const flotBarsData = [
        {
          label: "Apple",
          data: barCustomised1,
          bars: {
            show: true,
            barWidth: 12 * 24 * 60 * 60 * 300,
            fill: true,
            lineWidth: 0,
            order: 1
          }
        },
        {
          label: "Google",
          data: barCustomised2,
          bars: {
            show: true,
            barWidth: 12 * 24 * 60 * 60 * 300,
            fill: true,
            lineWidth: 0,
            order: 2
          }
        },
        {
          label: "Facebook",
          data: barCustomised3,
          bars: {
            show: true,
            barWidth: 12 * 24 * 60 * 60 * 300,
            fill: true,
            lineWidth: 0,
            order: 3
          }
        }
      ];
      const flotBarsOptions = {
        series: {
          bars: {
            show: true,
            barWidth: 12 * 24 * 60 * 60 * 350,
            lineWidth: 0,
            order: 1,
            fillColor: {
              colors: [
                {
                  opacity: 1
                },
                {
                  opacity: 0.7
                }
              ]
            }
          }
        },
        xaxis: {
          mode: "time",
          min: 1387497600000,
          max: 1400112000000,
          tickLength: 0,
          tickSize: [1, "month"],
          axisLabel: "Month",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 13,
          axisLabelPadding: 15
        },
        yaxis: {
          axisLabel: "Value",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 13,
          axisLabelPadding: 5
        },
        grid: {
          hoverable: true,
          borderWidth: 0
        },
        legend: {
          backgroundColor: "transparent",
          labelBoxBorderColor: "none"
        },
        colors: ["#64bd63", "#f0b518", "#F7653F"]
      };
      $(this.$refs.flotBarChart).plot(flotBarsData, flotBarsOptions);
    },
    initEasyPieChart() {
      $(this.$refs.easyPieChart).easyPieChart({
        barColor: "#5dc4bf",
        trackColor: "#ddd",
        scaleColor: false,
        lineWidth: 10,
        size: 120
      });
    },
    initSparklinePie() {
      const data = [2, 4, 6];
      const option = {
        type: "pie",
        width: "100px",
        height: "100px",
        sliceColors: ["#a597ff", "#ffb66c", "#ffffff"]
      };
      $(this.$refs.sparklinePie).sparkline(data, option);
    },
    initSparklineComposite() {
      const data = [
        [2, 4, 6, 2, 7, 5, 3, 7, 8, 3, 6],
        [5, 3, 7, 8, 3, 6, 2, 4, 6, 2, 7]
      ];
      const option = [
        {
          width: "99%",
          fillColor: "#ddd",
          height: "100px",
          lineColor: "transparent",
          spotColor: "#c0d0f0",
          minSpotColor: null,
          maxSpotColor: null,
          highlightSpotColor: "#ddd",
          highlightLineColor: "#ddd"
        },
        {
          lineColor: "transparent",
          spotColor: "#c0sd0f0",
          fillColor: "rgba(192, 208, 240, 0.76)",
          minSpotColor: null,
          maxSpotColor: null,
          highlightSpotColor: "#ddd",
          highlightLineColor: "#ddd"
        }
      ];
      $(this.$refs.sparklineComposite).sparkline(data[0], option[0]);
      $(this.$refs.sparklineComposite).sparkline(
        data[1],
        $.extend({ composite: true }, option[1])
      );
    },
    initInteractiveSparklines() {
      const data = [9, 12, 14, 15, 10, 14, 20];
      const option = {
        type: "bar",
        barColor: "#FFC247",
        height: "30px",
        barWidth: 6,
        barSpacing: 2
      };
      const option2 = {
        type: "bar",
        barColor: "#FFF8E3",
        height: "30px",
        barWidth: 6,
        barSpacing: 2
      };
      $(this.$refs.InteractiveSparkline1).sparkline(data, option);
      $(this.$refs.InteractiveSparkline2).sparkline(data, option2);
    },
    fillData() {
      this.dataCollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Purchases",
            backgroundColor: "rgba(149,87,229,0.3)",
            borderColor: "#9557e5",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: "Visits",
            backgroundColor: "transparent",
            borderColor: "#ff3d43",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
  mounted() {
    this.initFlotChart();
    this.initEasyPie();
    this.initSparklineLine();
    this.initSparklinePie();
    this.initD3Charts();
    this.initMorrisLineChart();
    this.initMorrisAreaChart();
    this.initEasyPieChart();
    this.initInteractiveSparklines();
    this.initSparklineAreaChart();
    this.initMorrisDonutCharts();
    this.fillData();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style src="./Charts.scss" lang="scss" />
