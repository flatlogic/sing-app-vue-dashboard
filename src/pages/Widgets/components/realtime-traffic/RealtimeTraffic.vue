<template>
  <div>
    <h4 class="mb-lg">Recent <span class="fw-semi-bold">Update</span></h4>
    <h6>Node.js <span class="fw-semi-bold">4.0.1 distribution</span></h6>
    <b-progress class="bg-gray-lighter progress-xs" variant="danger" :value="77" :max="100" />
    <p class="mt-sm mb fs-mini ">
      <small><span class="circle bg-warning text-gray-dark"><i
        class="glyphicon glyphicon-chevron-up"
      /></span></small>
      <strong class="px-1">17% higher</strong>
      than last month
    </p>
    <p class="fs-sm text-gray-lighter mb-0">Remaining hours</p>
    <a class="btn btn-xs btn-gray pull-right ml-xs" href="#">
      <i class="fa fa-compress" /> track
    </a>
    <a class="btn btn-xs btn-gray pull-right" href="#">
      <i class="fa fa-pause" /> pause
    </a>
    <p class="value4">2h 56m</p>
    <br />
    <div ref="chart" class="text-gray-dark chart-overflow-bottom" :style="{ height: '130px' }"
    />
  </div>
</template>

<script>
import Rickshaw from 'rickshaw';

export default {
  name: 'RealtimeTraffic',
  methods: {
    initChart() {
      const seriesData = [[], []];
      const random = new Rickshaw.Fixtures.RandomData(30);

      for (let i = 0; i < 30; i += 1) {
        random.addData(seriesData);
      }
      this.graph = new Rickshaw.Graph({
        element: this.$refs.chart,
        height: 130,
        realtime: true,
        series: [
          {
            color: '#343434', // 'gray-dark'
            data: seriesData[0],
            name: 'Uploads',
          }, {
            color: '#666', // gray,
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
      this.graph.configure({ height: 130 });
      this.graph.render();
    },
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.onResizeRickshaw);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  },
};
</script>
