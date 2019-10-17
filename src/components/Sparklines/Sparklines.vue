<template>
  <apexchart class="sparkline-chart" style="display: inline-block" :type="type" :height="height" :width="width" :options="sparkOptions" :series="data"/>
</template>

<script>

export default {
  name: 'Sparklines',
  props: {
    type: { type: String, default: "bar" },
    data: { type: Array },
    height: { type: [Number, String], default: 20 },
    width: { type: [Number, String], default: 50 },
    options: { type: Object },
  },
  computed: {
    sparkOptions() {
      return {
        chart: {
          height: this.height,
          width: this.width,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
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
              formatter: function () {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }, ...this.options
      }
    }
  }
}
</script>
<style src="./Sparklines.scss" lang="scss"></style>