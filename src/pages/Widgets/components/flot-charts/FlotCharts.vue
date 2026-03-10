<template>
  <div class="flot-charts">
    <div class="row">
      <div class="col-lg-6 col-12">
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
          settings
          close
          custom-header
        >
          <div class="chart-stats">
            <p class="text-light fs-mini mt-xs">
              <i class="fa fa-map-marker fa-5x pull-left" />
              <span class="fw-semi-bold">Jess:</span>
              Seems like statically it&apos;s getting impossible
              to achieve any sort of results in nearest future. The
              only thing we can hope for is pressing one of these two buttons:
            </p>
            <div class="btn-toolbar">
              <button class="btn btn-success btn-xs">
                Accept
              </button>
              <button class="btn btn-default btn-xs text-white">
                Reject
              </button>
            </div>
          </div>
          <div class="chart bg-body-light">
            <apexchart
              v-if="isMounted"
              type="line"
              height="200"
              :options="chartOneOptions"
              :series="chartOneSeries"
            />
          </div>
        </Widget>
      </div>
      <div class="col-lg-6 col-12">
        <Widget
          class=" widget-chart-stats-simple"
          title="<div class='row'>
            <div class='col-12'>
              <h6 class='mb-0'>
                <span class='fw-semi-bold'>Budget</span>&nbsp;
                <div class='badge rounded-pill bg-danger'>2017</div>
              </h6>
              <span class='text-muted fs-mini'>
                monthly report will be available in <a href='#'>6 hours</a>
              </span>
            </div>
          </div>"
          settings
          close
          custom-header
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
              <div class="col-md-3 text-end">
                <h6 class="text-muted mb-xs">
                  Inqueries
                </h6>
                <p class="fw-semi-bold">
                  73 at 14am
                </p>
              </div>
              <div class="col-md-4 text-end">
                <h6 class="text-muted mb-xs">
                  Last Updated
                </h6>
                <p class="fw-semi-bold">
                  23.06.2013
                </p>
              </div>
            </div>
          </div>
          <div class="chart bg-body-light">
            <apexchart
              v-if="isMounted"
              type="line"
              height="200"
              :options="chartTwoOptions"
              :series="chartTwoSeries"
            />
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, nextTick } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

const appConfig = inject('appConfig')
const isMounted = ref(false)

onMounted(() => {
  nextTick(() => {
    isMounted.value = true
  })
})

function generateRandomData() {
  const data = []
  for (let j = 0; j < 25; j += 1) {
    data.push(Math.floor(Math.random() * 30) + 10 + j * 4)
  }
  return data
}

const baseChartOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    sparkline: { enabled: false }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: { show: false }
  },
  grid: {
    show: false,
    padding: { left: 0, right: 0, top: 0, bottom: 0 }
  },
  legend: { show: false },
  tooltip: {
    enabled: true,
    theme: 'dark'
  }
}

const chartOneSeries = computed(() => [
  { name: 'Visitors', data: generateRandomData() },
  { name: 'Charts', data: generateRandomData() }
])

const chartOneOptions = computed(() => ({
  ...baseChartOptions,
  colors: [appConfig?.colors?.primary || '#21ae8c', appConfig?.colors?.danger || '#fd5f00']
}))

const chartTwoSeries = computed(() => [
  { name: 'Controllers', data: generateRandomData() },
  { name: 'Scopes', data: generateRandomData() }
])

const chartTwoOptions = computed(() => ({
  ...baseChartOptions,
  colors: [appConfig?.colors?.primary || '#21ae8c', appConfig?.colors?.info || '#5dc4bf']
}))
</script>

<style src="./FlotCharts.scss" lang="scss" scoped />
