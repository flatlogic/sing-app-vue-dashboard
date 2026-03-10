<template>
  <apexchart
    v-if="data && data.length > 0"
    class="sparkline-chart"
    style="display: inline-block"
    :type="type"
    :height="height"
    :width="width"
    :options="sparkOptions"
    :series="data"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'bar' },
  data: { type: Array, default: () => [] },
  height: { type: [Number, String], default: 20 },
  width: { type: [Number, String], default: 50 },
  options: { type: Object, default: () => ({}) }
})

const sparkOptions = computed(() => ({
  chart: {
    height: props.height,
    width: props.width,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '20%'
    }
  },
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: () => ''
      }
    },
    marker: {
      show: false
    }
  },
  ...props.options
}))
</script>
<style src="./Sparklines.scss" lang="scss"></style>