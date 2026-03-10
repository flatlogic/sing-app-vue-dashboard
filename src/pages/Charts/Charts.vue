<template>
  <div class="charts-overview">
    <h1 class="page-title">
      Visual -
      <span class="fw-semi-bold">Charts</span>
    </h1>
    <div>
      <div class="row">
        <div class="col-12 col-lg-7">
          <Widget
            title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <apexchart
              v-if="isMounted"
              type="bar"
              height="350"
              :series="cd.apex.column.series"
              :options="cd.apex.column.options"
            />
          </Widget>
        </div>
        <div class="col-12 col-lg-5">
          <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <VChart
              :option="cd.echarts.line"
              :init-options="initEchartsOptions"
              style="height: 370px"
              autoresize
            />
          </Widget>
        </div>
        <div class="col-12 col-lg-5">
          <Widget
            title="<h5>ApexCharts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <apexchart
              v-if="isMounted"
              type="line"
              height="350"
              :options="mixedChartOptions"
              :series="mixedChartSeries"
            />
            <h5 class="mt">
              Interactive <span class="fw-semi-bold">Sparklines</span>
            </h5>
            <div class="row mt">
              <div class="col-md-6 col-12">
                <div class="stats-row">
                  <div class="stat-item">
                    <p class="value5 fw-thin">
                      34 567
                    </p>
                    <h6 class="name text-muted m-0 fs-mini">
                      Overall Values
                    </h6>
                  </div>
                  <div class="stat-item stat-item-mini-chart">
                    <Sparklines
                      :data="sparklineData.series"
                      :options="sparklineData.options1"
                      :width="80"
                      :height="25"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="stats-row">
                  <div class="stat-item">
                    <p class="value5 fw-thin">
                      34 567
                    </p>
                    <h6 class="name text-muted m-0 fs-mini">
                      Overall Values
                    </h6>
                  </div>
                  <div class="stat-item stat-item-mini-chart">
                    <Sparklines
                      :data="sparklineData.series"
                      :options="sparklineData.options2"
                      :width="80"
                      :height="25"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Widget>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row">
            <div class="col-12 col-lg-6">
              <Widget
                title="<h5>Apex <span class='fw-semi-bold'>Monochrome Pie</span></h5>"
                close
                collapse
                custom-header
              >
                <apexchart
                  v-if="isMounted"
                  type="pie"
                  height="200"
                  :series="cd.apex.pie.series"
                  :options="cd.apex.pie.options"
                />
              </Widget>
            </div>
            <div class="col-12 col-lg-6">
              <Widget
                title="<h5>Echart <span class='fw-semi-bold'>Donut Chart</span></h5>"
                close
                collapse
                custom-header
              >
                <VChart
                  :option="cd.echarts.donut"
                  :init-options="initEchartsOptions"
                  style="height: 175px"
                  autoresize
                />
              </Widget>
            </div>
            <div class="col-12 col-lg-12">
              <Widget
                title="<h5>ApexCharts <span class='fw-semi-bold'>Live Chart</span></h5>"
                close
                collapse
                custom-header
              >
                <apexchart
                  v-if="isMounted"
                  ref="liveChart"
                  type="line"
                  height="170"
                  :options="liveChartOptions"
                  :series="liveChartSeries"
                />
              </Widget>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-12">
          <Widget
            title="<h5>Echart <span class='fw-semi-bold'>River Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <VChart
              :option="cd.echarts.river"
              :init-options="initEchartsOptions"
              style="height: 350px;"
              autoresize
            />
          </Widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, inject, nextTick } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, PieChart, ThemeRiverChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent, GridComponent, SingleAxisComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import Widget from '@/components/Widget/Widget.vue'
import { chartData } from './mock'
import Sparklines from '../../components/Sparklines/Sparklines.vue'

// Register ECharts modules
use([
  CanvasRenderer,
  LineChart,
  PieChart,
  ThemeRiverChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  SingleAxisComponent
])

const appConfig = inject('appConfig')

const isMounted = ref(false)

const cd = chartData
const initEchartsOptions = { renderer: 'canvas' }

// Live chart state
const liveChart = ref(null)
const liveChartSeries = ref([{
  name: 'Random data',
  data: generateInitialData()
}])
let liveChartInterval = null

// Mixed chart config (replaces Highcharts mixed)
const mixedChartOptions = computed(() => ({
  chart: {
    type: 'line',
    height: 350,
    toolbar: { show: false }
  },
  stroke: {
    curve: 'smooth',
    width: [2, 2, 2]
  },
  fill: {
    type: ['solid', 'gradient', 'gradient'],
    opacity: [1, 0.3, 0.3]
  },
  colors: [appConfig.colors.success, appConfig.colors.danger, appConfig.colors.info],
  title: {
    text: 'Snow depth at Vikjafjellet, Norway',
    style: { color: appConfig.colors.textColor }
  },
  legend: { show: false },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'MMM dd',
      style: { colors: appConfig.chartColors.axisColor }
    }
  },
  yaxis: {
    min: 0,
    labels: { style: { colors: appConfig.chartColors.axisColor } }
  },
  tooltip: {
    x: { format: 'MMM dd' },
    y: { formatter: (val) => val ? val.toFixed(2) + ' m' : '0 m' }
  }
}))

const mixedChartSeries = computed(() => [
  {
    name: 'Winter 2014-2015',
    type: 'line',
    data: [
      [Date.UTC(1970, 10, 25), 0],
      [Date.UTC(1970, 11, 6), 0.25],
      [Date.UTC(1970, 11, 20), 1.41],
      [Date.UTC(1970, 11, 25), 1.64],
      [Date.UTC(1971, 0, 4), 1.6],
      [Date.UTC(1971, 0, 17), 2.55],
      [Date.UTC(1971, 0, 24), 2.62],
      [Date.UTC(1971, 1, 4), 2.5],
      [Date.UTC(1971, 1, 14), 2.42],
      [Date.UTC(1971, 2, 6), 2.74],
      [Date.UTC(1971, 2, 14), 2.62]
    ]
  },
  {
    name: 'Winter 2015-2016',
    type: 'area',
    data: [
      [Date.UTC(1970, 10, 9), 0],
      [Date.UTC(1970, 10, 15), 0.23],
      [Date.UTC(1970, 10, 20), 0.25],
      [Date.UTC(1970, 10, 25), 0.23],
      [Date.UTC(1970, 10, 30), 0.39],
      [Date.UTC(1970, 11, 5), 0.41],
      [Date.UTC(1970, 11, 10), 0.59],
      [Date.UTC(1970, 11, 15), 0.73],
      [Date.UTC(1970, 11, 20), 0.41],
      [Date.UTC(1970, 11, 25), 1.07],
      [Date.UTC(1970, 11, 30), 0.88]
    ]
  },
  {
    name: 'Winter 2016-2017',
    type: 'area',
    data: [
      [Date.UTC(1970, 9, 15), 0],
      [Date.UTC(1970, 9, 31), 0.09],
      [Date.UTC(1970, 10, 7), 0.17],
      [Date.UTC(1970, 10, 10), 0.1],
      [Date.UTC(1970, 11, 10), 0.1],
      [Date.UTC(1970, 11, 13), 0.1],
      [Date.UTC(1970, 11, 16), 0.11],
      [Date.UTC(1970, 11, 19), 0.11],
      [Date.UTC(1970, 11, 22), 0.08],
      [Date.UTC(1970, 11, 25), 0.23],
      [Date.UTC(1970, 11, 28), 0.37]
    ]
  }
])

// Live chart config (replaces Highcharts live chart)
const liveChartOptions = computed(() => ({
  chart: {
    type: 'line',
    height: 170,
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: { speed: 1000 }
    },
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  stroke: { curve: 'smooth', width: 2 },
  colors: [appConfig.colors.primary],
  xaxis: {
    type: 'datetime',
    labels: {
      datetimeFormatter: { hour: 'HH:mm:ss' },
      style: { colors: appConfig.chartColors.axisColor }
    }
  },
  yaxis: {
    min: 0,
    max: 1,
    labels: { style: { colors: appConfig.chartColors.axisColor } }
  },
  legend: { show: false },
  tooltip: {
    x: { format: 'HH:mm:ss' }
  }
}))

// Sparkline data
const sparklineData = computed(() => ({
  series: [{ data: [1, 7, 3, 5, 7, 8] }],
  options1: {
    colors: [appConfig.colors.primary],
    plotOptions: { bar: { columnWidth: '50%' } }
  },
  options2: {
    colors: [appConfig.colors.info],
    plotOptions: { bar: { columnWidth: '50%' } }
  }
}))

function generateInitialData() {
  const data = []
  const time = new Date().getTime()
  for (let i = -19; i <= 0; i += 1) {
    data.push({ x: time + i * 1000, y: Math.random() })
  }
  return data
}

function updateLiveChart() {
  if (liveChart.value) {
    const newData = [...liveChartSeries.value[0].data]
    newData.shift()
    newData.push({ x: new Date().getTime(), y: Math.random() })
    liveChartSeries.value = [{ name: 'Random data', data: newData }]
  }
}

onMounted(() => {
  nextTick(() => {
    isMounted.value = true
  })
  liveChartInterval = setInterval(updateLiveChart, 1000)
})

onUnmounted(() => {
  if (liveChartInterval) {
    clearInterval(liveChartInterval)
  }
})
</script>

<style src="./Charts.scss" lang="scss" />
