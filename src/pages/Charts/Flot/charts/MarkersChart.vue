<template>
  <div ref="chartContainer" :style="{ height: '200px' }" />
</template>

<script>
import $ from 'jquery';

export default {
  name: 'MarkersChart',
  data() {
    return {
      data: [
        { data: this.generate(2, 0.6), points: { symbol: 'circle' } },
        { data: this.generate(3, 0.5), points: { symbol: 'square' } },
        { data: this.generate(4, 0.8), points: { symbol: 'diamond' } },
        { data: this.generate(6, 0.7), points: { symbol: 'triangle' } },
        { data: this.generate(7, 0.2), points: { symbol: 'cross' } },
      ],
    };
  },
  methods: {
    generate(offset, amplitude) { // eslint-disable-line
      const result = [];
      const start = 0;
      const end = 10;
      let point;

      for (let i = 0; i <= 50; i += 1) {
        point = ((start + i) / 50) * (end - start);
        result.push([point, amplitude * Math.sin(point + offset)]);
      }

      return result;
    },
    createChart(data) {
      return $.plot($(this.$refs.chartContainer), data, {
        series: {
          points: {
            show: true,
            radius: 3,
          },
        },
        yaxis: {
          ticks: [],
        },
        xaxis: {
          min: 1,
        },
        grid: {
          hoverable: true,
          backgroundColor: { colors: ['#ffffff', '#ffffff'] },
          borderWidth: 1,
          borderColor: '#ffffff',
        },
        colors: ['#e2e1ff', '#f59f9f', '#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3'],
      });
    },
  },
  mounted() {
    this.chart = this.createChart(this.data);
  },
};
</script>
