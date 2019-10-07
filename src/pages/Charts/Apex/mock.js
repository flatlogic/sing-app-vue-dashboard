var generateDayWiseTimeSeries = function (baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};

function generateHeatMapData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

export default {
  line: {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      colors: ['#547fff']
    }
  },
  area: {
    series: [{
      name: 'South',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20
        })
      },
      {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15
        })
      }
    ],
    options: {
      chart: {
        stacked: true,
      },
      colors: ['#547fff', '#3abf94', '#c1ccd3'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
    }
  },
  column: {
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      colors: ['#547fff'],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        labels: {
          offsetY: -18,

        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35,

        }
      },
      fill: {
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  },
  bar: {
    series: [{
      name: 'Males',
      data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
        3.9, 3.5, 3
      ]
    },
      {
        name: 'Females',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
          -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
      }
    ],
    options: {
      chart: {
        stacked: true
      },
      colors: ['#547fff', '#e54e9a'],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',

        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },

      grid: {
        xaxis: {
          showLines: false
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val
          }
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%"
          }
        }
      },
      title: {
        text: 'Mauritius population pyramid 2011'
      },
      xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
          '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
          '0-4'
        ],
        title: {
          text: 'Percent'
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%"
          }
        }
      },
    }
  },
  mixed: {
    series: [{
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    options: {
      dataLabels: {
        enabled: false
      },
      colors: ['#547fff', '#3abf94', '#ffc247'],
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [{
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#547fff'
        },
        labels: {
          style: {
            color: '#547fff',
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: '#547fff',
          }
        },
        tooltip: {
          enabled: true
        }
      },

        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#3abf94'
          },
          labels: {
            style: {
              color: '#3abf94',
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: '#3abf94',
            }
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#ffc247'
          },
          labels: {
            style: {
              color: '#ffc247',
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: '#ffc247',
            }
          }
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    }
  },
  pie: {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
      }],
      colors: ['#547fff', '#3abf94', '#ffc247', '#f55d5d', '#9964e3'],
    }
  },
  donut: {
    series: [44, 55, 41, 17, 15],
    options: {
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
      }],
      colors: ['#547fff', '#3abf94', '#ffc247', '#f55d5d', '#9964e3'],
    }
  },
  radar: {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }],
    options: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      title: {
        text: 'Basic Radar Chart'
      },
      colors: ['#547fff', '#3abf94', '#ffc247', '#f55d5d'],
    }
  },
  radial: {
    series: [76, 67, 61, 90],
    options: {
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,

            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          horizontal: 1,
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    }
  },
  heatmap: {
    series: [{
      name: 'Jan',
      data: generateHeatMapData(20, {
        min: -30,
        max: 55
      })
    },
      {
        name: 'Feb',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Mar',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Apr',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'May',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Jun',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Jul',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Aug',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: 'Sep',
        data: generateHeatMapData(20, {
          min: -30,
          max: 55
        })
      }
    ],
    options: {
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,

          colorScale: {
            ranges: [{
              from: -30,
              to: 5,
              name: 'low',
              color: '#3abf94'
            },
              {
                from: 6,
                to: 20,
                name: 'medium',
                color: '#547fff'
              },
              {
                from: 21,
                to: 45,
                name: 'high',
                color: '#ffc247'
              },
              {
                from: 46,
                to: 55,
                name: 'extreme',
                color: '#f55d5d'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },

      title: {
        text: 'HeatMap Chart with Color Range'
      }
    }
  }
}