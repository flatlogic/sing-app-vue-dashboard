import Highcharts from 'highcharts';
import config from '../../config';

const colors = config.app.colors;
const {inverse, info, primary, danger, warning, success, textColor} = colors;
const chartColors = config.app.chartColors;
const {axisColor} = chartColors;

let columnColors = [inverse, primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];
let lineColors = [primary, success, warning];

export const chartData = {
  apex: {
    column: {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
          labels: {
            style: {
              colors: columnColors,
              fontSize: '14px'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              color: axisColor,
            }
          }
        },
      }
    },
    pie: {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true,
            color: primary,
          }
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: false,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  echarts: {
    line: {
      color: lineColors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['2015 Precipitation', '2016 Precipitation'],
        textStyle: {
          color: axisColor
        }
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[1]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return 'Precipitation  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[0]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return 'Precipitation  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color: axisColor
          },
          axisLine: {
            lineStyle: {
              color: axisColor
            }
          },
        }
      ],
      series: [
        {
          name: '2015 Precipitation',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '2016 Precipitation',
          type: 'line',
          smooth: true,
          data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
      ]
    },
    donut: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: [primary, success, danger, warning, info],
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: 'Direct interview'},
            {value: 310, name: 'Email marketing'},
            {value: 234, name: 'Alliance advertising'},
            {value: 135, name: 'Video ad'},
            {value: 1548, name: 'Search engine'}
          ]
        }
      ]
    },
    river: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(0,0,0,0.2)',
            width: 1,
            type: 'solid'
          }
        }
      },

      legend: {
        data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD'],
        textStyle: {
          color: axisColor
        }
      },
      color: [primary, success, warning, danger, info, inverse],
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {
          color: axisColor
        },
        type: 'time',
        axisPointer: {
          animation: true,
          label: {
            show: true
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            opacity: 0.2
          }
        },
        axisLine: {
          lineStyle: {
            color: axisColor
          }
        },
      },

      series: [
        {
          type: 'themeRiver',
          itemStyle: {
            emphasis: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
          },
          data: [['2015/11/08', 10, 'DQ'], ['2015/11/09', 15, 'DQ'], ['2015/11/10', 35, 'DQ'],
            ['2015/11/11', 38, 'DQ'], ['2015/11/12', 22, 'DQ'], ['2015/11/13', 16, 'DQ'],
            ['2015/11/14', 7, 'DQ'], ['2015/11/15', 2, 'DQ'], ['2015/11/16', 17, 'DQ'],
            ['2015/11/17', 33, 'DQ'], ['2015/11/18', 40, 'DQ'], ['2015/11/19', 32, 'DQ'],
            ['2015/11/20', 26, 'DQ'], ['2015/11/21', 35, 'DQ'], ['2015/11/22', 40, 'DQ'],
            ['2015/11/23', 32, 'DQ'], ['2015/11/24', 26, 'DQ'], ['2015/11/25', 22, 'DQ'],
            ['2015/11/26', 16, 'DQ'], ['2015/11/27', 22, 'DQ'], ['2015/11/28', 10, 'DQ'],
            ['2015/11/08', 35, 'TY'], ['2015/11/09', 36, 'TY'], ['2015/11/10', 37, 'TY'],
            ['2015/11/11', 22, 'TY'], ['2015/11/12', 24, 'TY'], ['2015/11/13', 26, 'TY'],
            ['2015/11/14', 34, 'TY'], ['2015/11/15', 21, 'TY'], ['2015/11/16', 18, 'TY'],
            ['2015/11/17', 45, 'TY'], ['2015/11/18', 32, 'TY'], ['2015/11/19', 35, 'TY'],
            ['2015/11/20', 30, 'TY'], ['2015/11/21', 28, 'TY'], ['2015/11/22', 27, 'TY'],
            ['2015/11/23', 26, 'TY'], ['2015/11/24', 15, 'TY'], ['2015/11/25', 30, 'TY'],
            ['2015/11/26', 35, 'TY'], ['2015/11/27', 42, 'TY'], ['2015/11/28', 42, 'TY'],
            ['2015/11/08', 21, 'SS'], ['2015/11/09', 25, 'SS'], ['2015/11/10', 27, 'SS'],
            ['2015/11/11', 23, 'SS'], ['2015/11/12', 24, 'SS'], ['2015/11/13', 21, 'SS'],
            ['2015/11/14', 35, 'SS'], ['2015/11/15', 39, 'SS'], ['2015/11/16', 40, 'SS'],
            ['2015/11/17', 36, 'SS'], ['2015/11/18', 33, 'SS'], ['2015/11/19', 43, 'SS'],
            ['2015/11/20', 40, 'SS'], ['2015/11/21', 34, 'SS'], ['2015/11/22', 28, 'SS'],
            ['2015/11/23', 26, 'SS'], ['2015/11/24', 37, 'SS'], ['2015/11/25', 41, 'SS'],
            ['2015/11/26', 46, 'SS'], ['2015/11/27', 47, 'SS'], ['2015/11/28', 41, 'SS'],
            ['2015/11/08', 10, 'QG'], ['2015/11/09', 15, 'QG'], ['2015/11/10', 35, 'QG'],
            ['2015/11/11', 38, 'QG'], ['2015/11/12', 22, 'QG'], ['2015/11/13', 16, 'QG'],
            ['2015/11/14', 7, 'QG'], ['2015/11/15', 2, 'QG'], ['2015/11/16', 17, 'QG'],
            ['2015/11/17', 33, 'QG'], ['2015/11/18', 40, 'QG'], ['2015/11/19', 32, 'QG'],
            ['2015/11/20', 26, 'QG'], ['2015/11/21', 35, 'QG'], ['2015/11/22', 40, 'QG'],
            ['2015/11/23', 32, 'QG'], ['2015/11/24', 26, 'QG'], ['2015/11/25', 22, 'QG'],
            ['2015/11/26', 16, 'QG'], ['2015/11/27', 22, 'QG'], ['2015/11/28', 10, 'QG'],
            ['2015/11/08', 10, 'SY'], ['2015/11/09', 15, 'SY'], ['2015/11/10', 35, 'SY'],
            ['2015/11/11', 38, 'SY'], ['2015/11/12', 22, 'SY'], ['2015/11/13', 16, 'SY'],
            ['2015/11/14', 7, 'SY'], ['2015/11/15', 2, 'SY'], ['2015/11/16', 17, 'SY'],
            ['2015/11/17', 33, 'SY'], ['2015/11/18', 40, 'SY'], ['2015/11/19', 32, 'SY'],
            ['2015/11/20', 26, 'SY'], ['2015/11/21', 35, 'SY'], ['2015/11/22', 4, 'SY'],
            ['2015/11/23', 32, 'SY'], ['2015/11/24', 26, 'SY'], ['2015/11/25', 22, 'SY'],
            ['2015/11/26', 16, 'SY'], ['2015/11/27', 22, 'SY'], ['2015/11/28', 10, 'SY'],
            ['2015/11/08', 10, 'DD'], ['2015/11/09', 15, 'DD'], ['2015/11/10', 35, 'DD'],
            ['2015/11/11', 38, 'DD'], ['2015/11/12', 22, 'DD'], ['2015/11/13', 16, 'DD'],
            ['2015/11/14', 7, 'DD'], ['2015/11/15', 2, 'DD'], ['2015/11/16', 17, 'DD'],
            ['2015/11/17', 33, 'DD'], ['2015/11/18', 4, 'DD'], ['2015/11/19', 32, 'DD'],
            ['2015/11/20', 26, 'DD'], ['2015/11/21', 35, 'DD'], ['2015/11/22', 40, 'DD'],
            ['2015/11/23', 32, 'DD'], ['2015/11/24', 26, 'DD'], ['2015/11/25', 22, 'DD'],
            ['2015/11/26', 16, 'DD'], ['2015/11/27', 22, 'DD'], ['2015/11/28', 10, 'DD']]
        }
      ]
    }
  },
  highcharts: {
    mixed: {
      chart: {
        type: 'spline',
        height: 350
      },
      exporting: {
        enabled: false
      },
      title: {
        text: 'Snow depth at Vikjafjellet, Norway',
        style: {
          color: textColor
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        labels: {
          style: {
            color: axisColor
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          enabled: false
        },
        labels: {
          style: {
            color: axisColor
          }
        },
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
            symbol: 'circle'
          }
        }
      },
      colors: [success, warning, info],

      series: [{
        name: "Winter 2017-2018",
        data: [
          [Date.UTC(1970, 10, 25), 0],
          [Date.UTC(1970, 11, 6), 0.25],
          [Date.UTC(1970, 11, 20), 1.41],
          [Date.UTC(1970, 11, 25), 1.64],
          [Date.UTC(1971, 0, 4), 1.6],
          [Date.UTC(1971, 0, 17), 2.55],
          [Date.UTC(1971, 0, 24), 2.62],
          [Date.UTC(1971, 1, 4), 2.5],
          [Date.UTC(1971, 1, 14), 2.42],
          [Date.UTC(1971, 2, 6), 2.74],
          [Date.UTC(1971, 2, 14), 2.62],
          [Date.UTC(1971, 2, 24), 2.6],
          [Date.UTC(1971, 3, 1), 2.81],
          [Date.UTC(1971, 3, 11), 2.63],
          [Date.UTC(1971, 3, 27), 2.77],
          [Date.UTC(1971, 4, 4), 2.68],
          [Date.UTC(1971, 4, 9), 2.56],
          [Date.UTC(1971, 4, 14), 2.39],
          [Date.UTC(1971, 4, 19), 2.3],
          [Date.UTC(1971, 5, 4), 2],
          [Date.UTC(1971, 5, 9), 1.85],
          [Date.UTC(1971, 5, 14), 1.49],
          [Date.UTC(1971, 5, 19), 1.27],
          [Date.UTC(1971, 5, 24), 0.99],
          [Date.UTC(1971, 5, 29), 0.67],
          [Date.UTC(1971, 6, 3), 0.18],
          [Date.UTC(1971, 6, 4), 0]
        ]
      }, {
        name: "Winter 2018-2019",
        type: 'areaspline',
        data: [
          [Date.UTC(1970, 10, 9), 0],
          [Date.UTC(1970, 10, 15), 0.23],
          [Date.UTC(1970, 10, 20), 0.25],
          [Date.UTC(1970, 10, 25), 0.23],
          [Date.UTC(1970, 10, 30), 0.39],
          [Date.UTC(1970, 11, 5), 0.41],
          [Date.UTC(1970, 11, 10), 0.59],
          [Date.UTC(1970, 11, 15), 0.73],
          [Date.UTC(1970, 11, 20), 0.41],
          [Date.UTC(1970, 11, 25), 1.07],
          [Date.UTC(1970, 11, 30), 0.88],
          [Date.UTC(1971, 0, 5), 0.85],
          [Date.UTC(1971, 0, 11), 0.89],
          [Date.UTC(1971, 0, 17), 1.04],
          [Date.UTC(1971, 0, 20), 1.02],
          [Date.UTC(1971, 0, 25), 1.03],
          [Date.UTC(1971, 0, 30), 1.39],
          [Date.UTC(1971, 1, 5), 1.77],
          [Date.UTC(1971, 1, 26), 2.12],
          [Date.UTC(1971, 3, 19), 2.1],
          [Date.UTC(1971, 4, 9), 1.7],
          [Date.UTC(1971, 4, 29), 0.85],
          [Date.UTC(1971, 5, 7), 0]
        ]
      }, {
        name: "Winter 2019-2020",
        type: 'areaspline',
        data: [
          [Date.UTC(1970, 9, 15), 0],
          [Date.UTC(1970, 9, 31), 0.09],
          [Date.UTC(1970, 10, 7), 0.17],
          [Date.UTC(1970, 10, 10), 0.1],
          [Date.UTC(1970, 11, 10), 0.1],
          [Date.UTC(1970, 11, 13), 0.1],
          [Date.UTC(1970, 11, 16), 0.11],
          [Date.UTC(1970, 11, 19), 0.11],
          [Date.UTC(1970, 11, 22), 0.08],
          [Date.UTC(1970, 11, 25), 0.23],
          [Date.UTC(1970, 11, 28), 0.37],
          [Date.UTC(1971, 0, 16), 0.68],
          [Date.UTC(1971, 0, 19), 0.55],
          [Date.UTC(1971, 0, 22), 0.4],
          [Date.UTC(1971, 0, 25), 0.4],
          [Date.UTC(1971, 0, 28), 0.37],
          [Date.UTC(1971, 0, 31), 0.43],
          [Date.UTC(1971, 1, 4), 0.42],
          [Date.UTC(1971, 1, 7), 0.39],
          [Date.UTC(1971, 1, 10), 0.39],
          [Date.UTC(1971, 1, 13), 0.39],
          [Date.UTC(1971, 1, 16), 0.39],
          [Date.UTC(1971, 1, 19), 0.35],
          [Date.UTC(1971, 1, 22), 0.45],
          [Date.UTC(1971, 1, 25), 0.62],
          [Date.UTC(1971, 1, 28), 0.68],
          [Date.UTC(1971, 2, 4), 0.68],
          [Date.UTC(1971, 2, 7), 0.65],
          [Date.UTC(1971, 2, 10), 0.65],
          [Date.UTC(1971, 2, 13), 0.75],
          [Date.UTC(1971, 2, 16), 0.86],
          [Date.UTC(1971, 2, 19), 1.14],
          [Date.UTC(1971, 2, 22), 1.2],
          [Date.UTC(1971, 2, 25), 1.27],
          [Date.UTC(1971, 2, 27), 1.12],
          [Date.UTC(1971, 2, 30), 0.98],
          [Date.UTC(1971, 3, 3), 0.85],
          [Date.UTC(1971, 3, 6), 1.04],
          [Date.UTC(1971, 3, 9), 0.92],
          [Date.UTC(1971, 3, 12), 0.96],
          [Date.UTC(1971, 3, 15), 0.94],
          [Date.UTC(1971, 3, 18), 0.99],
          [Date.UTC(1971, 3, 21), 0.96],
          [Date.UTC(1971, 3, 24), 1.15],
          [Date.UTC(1971, 3, 27), 1.18],
          [Date.UTC(1971, 3, 30), 1.12],
          [Date.UTC(1971, 4, 3), 1.06],
          [Date.UTC(1971, 4, 6), 0.96],
          [Date.UTC(1971, 4, 9), 0.87],
          [Date.UTC(1971, 4, 12), 0.88],
          [Date.UTC(1971, 4, 15), 0.79],
          [Date.UTC(1971, 4, 18), 0.54],
          [Date.UTC(1971, 4, 21), 0.34],
          [Date.UTC(1971, 4, 25), 0]
        ]
      }]
    },
  }
};

export let liveChartInterval = null;

export const liveChart = {
  liveChartInterval: null,
  colors: [primary],
  chart: {
    height: 170,
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        liveChartInterval = setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);
        }, 1000);
      }
    }
  },

  time: {
    useUTC: false
  },
  credits: {
    enabled: false
  },
  title: false,
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150,
    labels: {
      style: {
        color: axisColor
      }
    },
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
    title: {
      enabled: false
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: axisColor
    }],
    labels: {
      style: {
        color: axisColor
      }
    }
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Random data',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
};
