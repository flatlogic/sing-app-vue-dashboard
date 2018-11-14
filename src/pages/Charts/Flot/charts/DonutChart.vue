<template>
   <b-row>
    <b-col xs='12' md='6' lg='7' class="mt mb">
      <div :style="{ height: '120px' }" ref="chartContainer" />
    </b-col>
    <b-col xs='12' md='5' lg='4' >
      <div class="mt" ref="chartLegend" />
    </b-col>
  </b-row>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'DonutChart',
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
      return $.plot($(this.$refs.chartContainer), data, {
        series: {
          pie: {
            innerRadius: 0.5,
            show: true,
            fill: 0.7,
          },
        },
        colors: ['#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
        legend: {
          noColumns: 1,
          container: this.$chartLegend,
        },
      });
    },
  },
  mounted() {
    this.createChart(this.getPieChartData());
  },
};
</script>
