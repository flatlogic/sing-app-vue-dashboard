<template>
  <div class="changes-chart">
    <div class="chart bg-primary btlr btrr">
      <p class="chartValue">
        <i class="fa fa-caret-up" /> 352.79
      </p>
      <p class="chartValueChange">
        +2.04 (1.69%)
      </p>
      <apexchart
        v-if="areaChartSeries[0].data.length > 0"
        type="area"
        height="100"
        :options="areaChartOptions"
        :series="areaChartSeries"
      />
    </div>
    <h4 class="chartTitle">
      <span class="fw-normal">Salt Lake City</span>, Utah
    </h4>
    <p class="deemphasize">
      Today 13:34
    </p>
    <div class="mt-1">
      <div class="row">
        <div class="col-6">
          <p class="h4 m-0">
            18.7M
          </p>
          <p class="deemphasize">
            Shares Traded
          </p>
        </div>
        <div class="col-6 text-end">
          <p class="h4 m-0">
            19.9B
          </p>
          <p class="deemphasize">
            Market Cap
          </p>
        </div>
      </div>
    </div>
    <div class="mt-1">
      <div class="row">
        <div class="col-6">
          <p class="h3 m-0 text-success fw-semi-bold">
            +120.93
          </p>
          <p class="deemphasize">
            Yearly Change
          </p>
        </div>
        <div class="col-6 text-end">
          <apexchart
            v-if="isMounted"
            type="bar"
            height="25"
            width="80"
            :options="sparklineOptions"
            :series="sparklineData"
          />
          <p class="deemphasize">
            GOOG
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, nextTick } from 'vue'

const appConfig = inject('appConfig')
const isMounted = ref(false)

const sparklineData = ref([{ name: 'Data', data: [3, 6, 2, 4, 5, 8, 6, 8] }])

const sparklineOptions = computed(() => ({
  chart: {
    type: 'bar',
    sparkline: { enabled: true },
    toolbar: { show: false }
  },
  plotOptions: {
    bar: { columnWidth: '50%' }
  },
  colors: [appConfig?.colors?.primary || '#4A90E2'],
  tooltip: { enabled: false }
}))

const areaChartSeries = ref([
  { name: 'Value', data: [] },
  { name: 'Trend', data: [] }
])

const areaChartOptions = computed(() => ({
  chart: {
    type: 'area',
    height: 100,
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: [0, 2] },
  fill: {
    type: ['solid', 'solid'],
    opacity: [0.3, 0]
  },
  colors: [appConfig?.colors?.default || '#7E8D9A', '#fff'],
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: false },
  grid: { show: false },
  legend: { show: false },
  tooltip: { enabled: false }
}))

function generateData() {
  const data1 = []
  const data2 = []
  for (let i = 0; i < 32; i++) {
    const val = Math.floor(Math.random() * 50) + 30
    data1.push(val)
    data2.push(val * (Math.random() * 0.5) + 30.1)
  }
  areaChartSeries.value = [
    { name: 'Value', data: data1 },
    { name: 'Trend', data: data2 }
  ]
}

onMounted(() => {
  generateData()
  nextTick(() => {
    isMounted.value = true
  })
})
</script>

<style src="./ChangesChart.scss" lang="scss" scoped />
