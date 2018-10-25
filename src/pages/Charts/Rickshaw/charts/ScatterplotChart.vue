<template>
  <div>
    <div ref="rickshawChart" />
  </div>
</template>

<script>
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default {
  name: 'ScatterplotChart',
  methods: {
    onResize() {
      const width = $(this.$refs.rickshawChart).closest('.widget-body')[0].clientWidth - 30;

      this.graph.configure({ width });
      this.graph.render();
    },
    createChart() {
      const seriesData = [[], []];
      const random = new Rickshaw.Fixtures.RandomData();
      for (let i = 0; i < 150; i += 1) {
        random.addData(seriesData);
      }

      this.graph = new Rickshaw.Graph({
        element: this.$refs.rickshawChart,
        height: 250,
        renderer: 'scatterplot',
        series: [
          {
            color: '#ffd7de',
            data: seriesData[0],
            name: 'Series 1',
          }, {
            color: '#8fe5d4',
            data: seriesData[1],
            name: 'Series 2',
          },
        ],
      });

      const hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: this.graph });

      hoverDetail.show();
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
