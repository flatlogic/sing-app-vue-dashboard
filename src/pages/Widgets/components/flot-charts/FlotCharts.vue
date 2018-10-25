<template>
  <div class="flot-charts">
    <b-row>
      <b-col lg="6" xs="12">
        <Widget
          title="<div class='row'>
            <div class='col-4'>
              <h6>
                Total Sales
              </h6>
              <p class='value5'>
                January, 2018
              </p>
            </div>
            <div class='col-3'>
              <h5>
                <small>Best</small>
              </h5>
              <p class='value6 fs-sm'>
                March, 2018 + 1
              </p>
            </div>
          </div>"
          settings close customHeader
        >
          <div class="chart-stats">
            <p class="text-muted fs-mini mt-xs">
              <i class="fa fa-map-marker fa-5x pull-left" />
              <span class="fw-semi-bold text-gray-dark">Jess:</span>
                Seems like statically it&apos;s getting impossible
                to achieve any sort of results in nearest future. The
                only thing we can hope for is pressing one of these two buttons:
              </p>
            <div class="btn-toolbar">
              <b-button variant="success" size="xs">Accept</b-button>
              <b-button variant="default" size="xs">Reject</b-button>
            </div>
          </div>
          <div class="chart bg-body-light">
            <div ref="chartFirst" :style="{ height: '200px' }"/>
          </div>
        </Widget>
      </b-col>
      <b-col lg='6' xs='12'>
        <Widget
          class=" widget-chart-stats-simple" title="<div class='row'>
            <div class='col-12'>
              <h6 class='mb-0'>
                <span class='fw-semi-bold'>Budget</span>&nbsp;
                <div class='badge badge-pill badge-danger'>2017</div>
              </h6>
              <span class='text-muted fs-mini'>
                monthly report will be available in <a href='#'>6 hours</a>
              </span>
            </div>
          </div>"
          settings close customHeader
        >
          <div class="chart-stats">
            <div class="row">
              <div class="col-md-5">
                <div class="clearfix m-t-1">
                  <h6 class="pull-left text-muted mb-xs">
                      Income
                    </h6>
                  <p class="pull-right h6 mb-xs">
                    <span class="fw-semi-bold">$14,595</span>
                  </p>
                </div>
                <div class="clearfix">
                  <h6 class="pull-left no-margin text-muted">
                      Recent
                    </h6>
                  <p class="pull-right">
                    <span class="fw-semi-bold">$7,647</span>
                  </p>
                </div>
              </div>
              <div class="col-md-3 text-right m-t-1">
                <h6 class="text-muted mb-xs">Inqueries</h6>
                <p class="fw-semi-bold">73 at 14am</p>
              </div>
              <div class="col-md-4 text-right m-t-1">
                <h6 class="text-muted mb-xs">Last Updated</h6>
                <p class="fw-semi-bold">23.06.2013</p>
              </div>
            </div>
          </div>
          <div class="chart bg-body-light">
            <div ref="chartSecond" :style="{ height: '200px' }"/>
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
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize.js';
/* eslint-enable */

export default {
  name: 'FlotCharts',
  components: { Widget },
  data() {
    return {
      flotOptions: {
        width: '100%',
        series: {
          lines: {
            show: true,
            lineWidth: 1,
            fill: false,
            fillColor: { colors: [{ opacity: 0.001 }, { opacity: 0.5 }] },
          },
          points: {
            show: false,
            fill: true,
          },
          shadowSize: 0,
        },
        legend: false,
        grid: {
          show: false,
          margin: 0,
          labelMargin: 0,
          axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: 'rgba(255,255,255,1)',
          borderWidth: 0,
        },
      },
    };
  },
  methods: {
    generateRandomData(labels) {
      function random() {
        return (Math.floor(Math.random() * 30)) + 10;
      }

      const data = [];
      let maxValueIndex = 5;

      for (let i = 0; i < labels.length; i += 1) {
        const randomSeries = [];
        for (let j = 0; j < 25; j += 1) {
          randomSeries.push([j, Math.floor(maxValueIndex * j) + random()]);
        }
        maxValueIndex -= 1;
        data.push({
          data: randomSeries,
          showLabels: true,
          label: labels[i].label,
          labelPlacement: 'below',
          canvasRender: true,
          cCcolor: 'red',
          color: labels[i].color,
        });
      }
      return data;
    },
  },
  mounted() {
    $.plot($(this.$refs.chartFirst), this.generateRandomData([{
      label: 'Visitors', color: '#777',
    }, {
      label: 'Charts', color: '#dd5826',
    }]), this.flotOptions);

    $.plot($(this.$refs.chartSecond), this.generateRandomData([{
      label: 'Controllers', color: '#777',
    }, {
      label: 'Scopes', color: '#f0b518',
    }]), this.flotOptions);
  },
};
</script>

<style src="./FlotCharts.scss" lang="scss" scoped />
