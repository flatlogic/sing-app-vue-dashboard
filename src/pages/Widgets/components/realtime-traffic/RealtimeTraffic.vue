<template>
  <div>
    <h4 class="mb-lg">
      Recent <span class="fw-semi-bold">Update</span>
    </h4>
    <h6>Node.js <span class="fw-semi-bold">4.0.1 distribution</span></h6>
    <div class="progress bg-gray-lighter progress-xs">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 77%"
      />
    </div>
    <p class="mt-sm mb fs-mini">
      <small><span class="circle bg-primary text-white"><i class="la la-angle-up" /></span></small>
      <strong class="px-1">17% higher</strong>
      than last month
    </p>
    <p class="fs-sm mb-0">
      Remaining hours
    </p>
    <a
      class="btn btn-xs btn-gray-default pull-right ms-sm-1"
      href="#"
    >
      <i class="fa fa-compress" /> track
    </a>
    <a
      class="btn btn-xs btn-gray-default pull-right ms-sm-1"
      href="#"
    >
      <i class="fa fa-pause" /> pause
    </a>
    <p class="value4">
      2h 56m
    </p>
    <br>
    <div class="chart-overflow-bottom">
      <apexchart
        v-if="chartSeries[0].data.length > 0"
        type="area"
        height="130"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'

const appConfig = inject('appConfig')

const chartSeries = ref([
  {
    name: 'Uploads',
    data: []
  },
  {
    name: 'Downloads',
    data: []
  }
])

const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    height: 130,
    toolbar: { show: false },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.1
    }
  },
  colors: ['rgba(111, 176, 249, 0.5)', appConfig?.colors?.primary || '#4A90E2'],
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: false },
  grid: { show: false },
  legend: { show: false },
  tooltip: { enabled: true }
}))

let intervalId = null

function generateData() {
  const data1 = []
  const data2 = []
  const now = Date.now()
  for (let i = 30; i > 0; i--) {
    data1.push({
      x: now - i * 1000,
      y: Math.floor(Math.random() * 30) + 10
    })
    data2.push({
      x: now - i * 1000,
      y: Math.floor(Math.random() * 40) + 20
    })
  }
  chartSeries.value = [
    { name: 'Uploads', data: data1 },
    { name: 'Downloads', data: data2 }
  ]
}

function updateData() {
  const now = Date.now()
  const newData1 = [...chartSeries.value[0].data.slice(1), { x: now, y: Math.floor(Math.random() * 30) + 10 }]
  const newData2 = [...chartSeries.value[1].data.slice(1), { x: now, y: Math.floor(Math.random() * 40) + 20 }]
  chartSeries.value = [
    { name: 'Uploads', data: newData1 },
    { name: 'Downloads', data: newData2 }
  ]
}

onMounted(() => {
  generateData()
  intervalId = setInterval(updateData, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
