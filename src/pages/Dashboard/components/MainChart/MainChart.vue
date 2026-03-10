<template>
  <Widget
    id="main-chart"
    body-class="mt"
    class="mb-xlg"
    title="
        <div class='row'>
          <div class='col-sm-5 col-xs-12'>
            <h5>
              Daily <span class='fw-semi-bold'>Line Chart</span>
            </h5>
          </div>
          <div class='col-xs-12 col-sm-7'>
            <div class='chart-legend' />
          </div>
        </div>
      "
    custom-header
    collapse
    close
    :fetching-data="isReceiving"
  >
    <apexchart
      v-if="chartSeries.length > 0 && chartSeries[0].data.length > 0"
      type="area"
      height="350"
      :options="chartOptions"
      :series="chartSeries"
    />
  </Widget>
</template>

<script setup>
import { computed, inject } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  isReceiving: { type: Boolean, default: false }
})

const appConfig = inject('appConfig')

const ticks = ['Dec 19', 'Dec 25', 'Dec 31', 'Jan 10', 'Jan 14',
  'Jan 20', 'Jan 27', 'Jan 30', 'Feb 2', 'Feb 8', 'Feb 15',
  'Feb 22', 'Feb 28', 'Mar 7', 'Mar 17']

const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [0, 2, 2]
  },
  fill: {
    type: ['solid', 'solid', 'solid'],
    opacity: [0.3, 1, 1]
  },
  colors: [appConfig.colors.primary, appConfig.colors.warning, appConfig.colors.primary],
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    categories: ticks,
    labels: {
      rotate: -45
    }
  },
  yaxis: {
    title: {
      text: undefined
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (val) => val ? val.toFixed(2) : '0'
    }
  }
}))

const chartSeries = computed(() => {
  if (!props.data || props.data.length === 0) {
    return []
  }

  const seriesData = props.data.map(arr =>
    arr ? arr.map(item => item ? item[1] : 0) : []
  )

  return [
    {
      name: 'Light Blue',
      type: 'area',
      data: seriesData[0] || []
    },
    {
      name: 'RNS App',
      type: 'line',
      data: seriesData[1] || []
    },
    {
      name: 'Sing App',
      type: 'line',
      data: seriesData[2] || []
    }
  ]
})
</script>
