<template>
  <div>
    <div ref="rickshawChart" :style="{ left: '30px', maxWidth: '90%' }" />
    <div ref="axis"
      :style="{ position: 'absolute', width: '30px', height: '300px', top: '102px' }" />
  </div>
</template>

<script>
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default {
  name: 'LineChart',
  methods: {
    onResize() {
      const width = $(this.$refs.rickshawChart).closest('.widget-body')[0].clientWidth - 30;

      this.graph.configure({ width });
      this.graph.render();
    },
    createChart() {
      const seriesData = [[], []];
      const random = new Rickshaw.Fixtures.RandomData(30);
      for (let i = 0; i < 30; i += 1) {
        random.addData(seriesData);
      }

      this.graph = new Rickshaw.Graph({
        element: this.$refs.rickshawChart,
        height: 200,
        renderer: 'line',
        min: 45,
        series: [
          {
            color: '#b7b3ff',
            data: seriesData[0],
            name: 'Series 1',
          }, {
            color: '#e2e1ff',
            data: seriesData[1],
            name: 'Series 2',
          },
        ],
      });

      const hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: this.graph });
      hoverDetail.show();

      new Rickshaw.Graph.Axis.Y({ // eslint-disable-line
        graph: this.graph,
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        element: this.$refs.axis,
      });

      this.onResize();
    },
  },
  mounted() {
    this.createChart();

    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
