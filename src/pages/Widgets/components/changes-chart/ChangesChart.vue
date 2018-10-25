<template>
  <div class="changes-chart">
    <div class="chart bg-success btlr btrr">
      <p class="chartValue"><i class="fa fa-caret-up" /> 352.79</p>
      <p class="chartValueChange">+2.04 (1.69%)</p>
      <div ref="rickshawChart"/>
    </div>
    <h4 class="chartTitle"><span class="fw-normal">Salt Lake City</span>, Utah</h4>
    <p class="deemphasize">Today 13:34</p>
    <div class="mt">
      <b-row>
        <b-col xs='6'>
          <p class="h4 m-0">18.7M</p>
          <p class="deemphasize">Shares Traded</p>
        </b-col>
        <b-col xs='6' class="text-right">
          <p class="h4 m-0">19.9B</p>
          <p class="deemphasize">Market Cap</p>
        </b-col>
      </b-row>
    </div>
    <div class="mt">
      <b-row>
        <b-col xs='6'>
          <p class="h3 m-0 text-success fw-semi-bold">+120.93</p>
          <p class="deemphasize">Yearly Change</p>
        </b-col>
        <b-col xs='6' class="text-right">
          <div class="sparkline" ref="sparkline" />
          <Sparklines :data="sparklineData" :options="sparklineOptions" />
          <p class="deemphasize">GOOG</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Rickshaw from 'rickshaw';
import Sparklines from '@/components/Sparklines/Sparklines';

export default {
  name: 'ChangesChart',
  components: { Sparklines },
  data() {
    return {
      sparklineData: [],
      sparklineOptions: {},
    };
  },
  methods: {
    onResizeRickshaw() {
      this.graph.configure({ height: 100 });
      this.graph.render();
    },
    initRickshaw() {
      const seriesData = [[], []];
      const random = new Rickshaw.Fixtures.RandomData(32);
      for (let i = 0; i < 32; i += 1) {
        random.addData(seriesData);
      }

      this.graph = new Rickshaw.Graph({
        element: this.$refs.rickshawChart,
        height: '100',
        renderer: 'multi',
        series: [{
          name: 'pop',
          data: seriesData.shift().map(d => ({ x: d.x, y: d.y })),
          color: '#7bd47a', // (#64bd63, 0.9)
          renderer: 'bar',
          gapSize: 2,
          min: 'auto',
          strokeWidth: 3,
        }, {
          name: 'humidity',
          data: seriesData.shift()
            .map(d => ({ x: d.x, y: ((d.y * (Math.random() * 0.5)) + 30.1) })),
          renderer: 'line',
          color: '#fff',
          gapSize: 2,
          min: 'auto',
          strokeWidth: 3,
        }],
      });

      const hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: this.graph,
        xFormatter: x => new Date(x * 1000).toString(),
      });

      hoverDetail.show();
      this.graph.render();
    },
    initSparkline() {
      const data = [3, 6, 2, 4, 5, 8, 6, 8];
      const dataMax = Math.max.apply(null, data);
      const backgroundData = data.map(() => dataMax);

      this.sparklineData = [backgroundData, data];
      this.sparklineOptions = [
        {
          type: 'bar',
          height: 26,
          barColor: '#eee',
          barWidth: 7,
          barSpacing: 5,
          chartRangeMin: Math.min.apply(null, data),
          tooltipFormat: new $.SPFormatClass(''),
        },
        {
          composite: true,
          type: 'bar',
          barColor: '#64bd63',
          barWidth: 7,
          barSpacing: 5,
        },
      ];
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

<style src="./ChangesChart.scss" lang="scss" scoped />
