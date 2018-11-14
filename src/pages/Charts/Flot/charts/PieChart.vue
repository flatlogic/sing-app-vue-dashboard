<template>
  <div ref="chartContainer" :style="{ height: '150px' }" />
</template>

<script>
import $ from 'jquery';

export default {
  name: 'PieChart',
  methods: {
    getPieChartData() { // eslint-disable-line
      const data = [];
      const seriesCount = 4;
      const accessories = ['Rolex', 'Tissot', 'Orient', 'Other'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    createChart(data) {
      const self = this;

      return $.plot($(this.$refs.chartContainer), data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 2 / 3,
              formatter: self.labelFormatter,
              threshold: 0.2,
            },
          },
        },
        legend: {
          show: false,
        },
        colors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      });
    },
    labelFormatter(label, series) { // eslint-disable-line
      return `<h1><span class="badge badge-secondary">${label}: ${Math.round(series.percent)}%</span></h1>`;
    },
  },
  mounted() {
    this.createChart(this.getPieChartData());
  },
};
</script>
