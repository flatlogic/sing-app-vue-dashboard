<template>
  <div ref="chart"/>
</template>

<script>
import Rickshaw from 'rickshaw';

export default {
  name: 'Rickshaw',
  props: ['height'],
  methods: {
    initRickshaw() {
      const seriesData = [[], []];
      const random = new Rickshaw.Fixtures.RandomData(30);
      for (let i = 0; i < 30; i += 1) {
        random.addData(seriesData);
      }

      this.graph = new Rickshaw.Graph({
        element: this.$refs.chart,
        height: this.height,
        series: [
          {
            color: '#ffdddd',
            data: seriesData[0],
            name: 'Uploads',
          }, {
            color: '#f55d5d',
            data: seriesData[1],
            name: 'Downloads',
          },
        ],
      });

      const hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: this.graph,
        xFormatter: x => new Date(x * 1000).toString(),
      });

      hoverDetail.show();

      setInterval(() => {
        random.removeData(seriesData);
        random.addData(seriesData);
        this.graph.update();
      }, 1000);

      this.graph.render();
    },
    onResizeRickshaw() {
      this.graph.configure({ height: this.height });
      this.graph.render();
    },
  },
  mounted() {
    this.initRickshaw();
    window.addEventListener('resize', this.onResizeRickshaw);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  },
};
</script>
