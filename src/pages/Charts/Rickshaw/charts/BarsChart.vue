<template>
  <div>
    <div ref="rickshawChart" />
  </div>
</template>

<script>
import $ from 'jquery';
import Rickshaw from 'rickshaw';

Rickshaw.Graph.Renderer.BarNoGap = Rickshaw.Class.create(Rickshaw.Graph.Renderer.Bar, {
  name: 'bar_with_gaps',
  barWidth(series) {
    const frequentInterval = this._frequentInterval(series.stack); // eslint-disable-line
    const barWidth = this.graph.x(series.stack[0].x + (frequentInterval.magnitude / 2));
    return barWidth;
  },
});

export default {
  name: 'BarsChart',
  props: {
    colors: { type: Array },
    stacked: { type: Boolean, default: false },
    seriesLength: { type: Number, default: 10 },
    padding: { type: Object, default: () => ({ padding: { left: 0.03 } }) },
  },
  methods: {
    onResize() {
      const width = $(this.$refs.rickshawChart).closest('.widget-body')[0].clientWidth;

      this.graph.configure({ width });

      this.graph.render();
    },
    createChart() {
      const seriesData = this.stacked ? [[], [], []] : [[], []];
      const random = new Rickshaw.Fixtures.RandomData(30);
      for (let i = 0; i < this.seriesLength; i += 1) {
        random.addData(seriesData);
      }
      const series = seriesData.map((data, i) => ({
        name: `Series ${i + 1}`,
        color: this.colors[i % this.colors.length],
        data,
      }));

      this.graph = new Rickshaw.Graph({
        padding: this.padding || {},
        element: this.$refs.rickshawChart,
        height: 180,
        renderer: 'bar_with_gaps',
        stack: this.stacked,
        series,
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
