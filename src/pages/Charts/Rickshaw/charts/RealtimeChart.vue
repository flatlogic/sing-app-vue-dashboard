<template>
  <div>
    <div class="chart-overflow-bottom" ref="rickshawChart" />
  </div>
</template>

<script>
import $ from 'jquery';
import Rickshaw from 'rickshaw';

export default {
  name: 'RealtimeChart',
  methods: {
    onResize() {
      const width = $(this.$refs.rickshawChart).closest('.widget-body')[0].clientWidth + 40;

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
        height: 80,
        series: [
          {
            color: '#d1dcff',
            data: seriesData[0],
            name: 'Uploads',
          }, {
            color: '#547fff',
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
