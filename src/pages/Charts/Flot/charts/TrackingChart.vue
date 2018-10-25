<template>
  <div>
    <div ref="chartContainer" :style="{ height: '340px' }" />
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'TrackingChart',
  methods: {
    getTrackingChartData() { // eslint-disable-line
      const sin = [];
      const cos = [];
      for (let i = 0; i < 14; i += 0.1) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
      }

      return [
        { data: sin, label: 'sin(x) = -0.00' },
        { data: cos, label: 'cos(x) = -0.00' },
      ];
    },
    createChart(data) {
      return $.plotAnimator($(this.$refs.chartContainer), [{
        label: data[0].label,
        data: data[0].data,
      }, {
        label: data[1].label,
        data: data[1].data,
        animator: { steps: 60, duration: 1000, start: 0 },
      }], {
        series: {
          lines: {
            show: true,
          },
        },
        colors: ['#8fe5d4', '#ffd7de'],
        crosshair: {
          mode: 'x',
          color: '#f55d5d',
        },
        grid: {
          hoverable: true,
          autoHighlight: false,
          backgroundColor: { colors: ['#ffffff', '#ffffff'] },
          borderWidth: 1,
          borderColor: '#ffffff',
          margin: 0,
          minBorderMargin: 0,
          labelMargin: 40,
          mouseActiveRadius: 6,
        },
        xaxis: {
          tickLength: 0,
          tickDecimals: 0,
          min: 1,
          max: 6,
          font: {
            lineHeight: 13,
            weight: 'bold',
            color: '#c1ccd3',
          },
        },
        yaxis: {
          min: -1.2,
          max: 1.2,
          tickDecimals: 0,
          font: {
            lineHeight: 13,
            weight: 'bold',
            color: '#c1ccd3',
          },
        },
      });
    },
    initEventListeners() {
      const self = this;

      $(this.$refs.chartContainer).bind('plothover', (event, pos) => {
        if (!self.updateLegendTimeout) {
          self.updateLegendTimeout = setTimeout(
            self.updateLegendContent.bind(self, event, pos), 50,
          );
        }
      });
    },
    updateLegendContent(event, pos) {
      this.updateLegendTimeout = null;

      const axes = this.chart.getAxes();
      if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max
      || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
        return;
      }

      const dataset = this.chart.getData();
      for (let i = 0; i < dataset.length; i += 1) {
        const series = dataset[i];
        let point1;
        let point2;

        // Find the nearest points, x-wise
        for (let j = 0; j < series.data.length; j += 1) {
          if (series.data[j][0] > pos.x) {
            point1 = series.data[j - 1];
            point2 = series.data[j];
            break;
          }
        }

        let y;
        // Now Interpolate
        if (point1 == null && point2) {
          y = point2[1]; // eslint-disable-line
        } else if (point2 == null && point1) {
          y = point1[1]; // eslint-disable-line
        } else {
          /* eslint-disable */
          y = point1[1] + (point2[1] - point1[1]) * (pos.x - point1[0]) / (point2[0] - point1[0]);
        /* eslint-enable */
        }

        this.legend.eq(i).text(series.label.replace(/=.*/, `= ${y.toFixed(2)}`));
      }
    },
  },
  mounted() {
    this.chart = this.createChart(this.getTrackingChartData());
    this.legend = $(this.$refs.chartContainer).find('.legendLabel');
    this.initEventListeners();
  },
};
</script>
