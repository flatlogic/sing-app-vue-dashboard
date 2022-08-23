import Highcharts from 'highcharts';
import usdeur from './usdeur';
import sunburstData from './sunburstData';
import config from '../../../config';

const {inverse, info, primary, danger, warning, success, textColor} = config.app.colors;
const {axisColor} = config.app.chartColors;

let wordCloudText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper.';
let wordCloudLines = wordCloudText.split(/[,. ]+/g),
  wordCloudData = Highcharts.reduce(wordCloudLines, function (arr, word) {
    var obj = Highcharts.find(arr, function (obj) {
      return obj.name === word;
    });
    if (obj) {
      obj.weight += 1;
    } else {
      obj = {
        name: word,
        weight: 1
      };
      arr.push(obj);
    }
    return arr;
  }, []);

function generateVectorData() {
  var data = [],
    x,
    y,
    length,
    direction;

  for (x = 5; x < 100; x += 5) {
    for (y = 5; y < 100; y += 5) {
      length = Math.round(200 - (x + y));
      direction = Math.round((x + y) / 200 * 360);
      data.push([
        x,
        y,
        length,
        direction
      ]);
    }
  }
  return data;
}

export default {
  line: {
    credits: {
      enabled: false
    },
    colors: [info],
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'USD to EUR exchange rate over time',
      style: {
        color: textColor
      }
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
      style: {
        color: textColor
      }
    },
    xAxis: {
      type: 'datetime',
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
        text: 'Exchange rate',
        style: {
          color: axisColor
        }
      },
      labels: {
        style: {
          color: axisColor
        }
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, info],
            [1, Highcharts.Color(info).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          enabled: false,
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      type: 'area',
      name: 'USD to EUR',
      data: usdeur
    }]
  },
  pie: {
    credits: {
      enabled: false
    },
    chart: {
      type: 'variablepie'
    },
    exporting: {
      enabled: false
    },
    accessibility: {
      description: 'A variable radius pie chart compares the population density and total land mass for seven European nations: Spain, France, Poland, the Czech Republic, Italy, Switzerland and Germany. The chart visualizes the data by using the width of each section to represent total area and the depth of the section to represent population density. Each section is color-coded according to the country and the chart is interactive: by hovering over each section the data points are exposed in a call-out box. The chart is organized by population density in a counterclockwise direction. Germany has the highest population density at 235.6 people per square kilometer, followed by Switzerland, Italy, the Czech Republic, Poland, France and Spain. France has the largest land mass at 551,500 square kilometers. Spain is the second largest country at 505,370 square kilometers but has the lowest population density at 92.9 people per square kilometer. Switzerland is the smallest nation by land mass at 41,277 square kilometers but it has the second highest population density at 214.5 people per square kilometer.'
    },
    title: {
      text: 'Countries compared by population density and total area.',
      style: {
        color: textColor
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    plotOptions: {
      variablepie: {
        borderColor: null,
        dataLabels: {
          style: {
            color: axisColor,
            textOutline: null
          }
        }
      }
    },
    colors: [primary, info, warning, config.app.colors.default, success, danger, inverse],
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Spain',
        y: 505370,
        z: 92.9
      }, {
        name: 'France',
        y: 551500,
        z: 118.7
      }, {
        name: 'Poland',
        y: 312685,
        z: 124.6
      }, {
        name: 'Czech Republic',
        y: 78867,
        z: 137.5
      }, {
        name: 'Italy',
        y: 301340,
        z: 201.8
      }, {
        name: 'Switzerland',
        y: 41277,
        z: 214.5
      }, {
        name: 'Germany',
        y: 357022,
        z: 235.6
      }]
    }]
  },
  column3D: {
    credits: {
      enabled: false
    },
    colors: [primary],
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 70
      }
    },
    exporting: {
      enabled: false
    },
    title: {
      text: '3D chart with null values',
      style: {
        color: textColor
      }
    },
    legend: {
      itemStyle: {
        color: textColor
      }
    },
    subtitle: {
      text: 'Notice the difference between a 0 value and a null point',
      style: {
        color: textColor
      }
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    xAxis: {
      categories: Highcharts.getOptions().lang.shortMonths,
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px',
          color: axisColor
        }
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        style: {
          color: axisColor
        }
      }
    },
    series: [{
      name: 'Sales',
      data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
    }]
  },
  sunburst: {
    credits: {
      enabled: false
    },
    chart: {
      height: '100%'
    },
    exporting: {
      enabled: false
    },
    title: {
      text: 'World population 2017',
      style: {
        color: textColor
      }
    },
    subtitle: {
      text: 'Source <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>',
      style: {
        color: textColor
      }
    },
    plotOptions: {
      sunburst: {
        dataLabels: {
          style: {
            textOutline: null
          }
        }
      }
    },
    colors: [primary, success, info, warning, config.app.colors.default, danger, inverse],
    series: [{
      type: "sunburst",
      data: sunburstData,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.name}',
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        }
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        dataLabels: {
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        colorByPoint: true
      },
        {
          level: 3,
          colorVariation: {
            key: 'brightness',
            to: -0.5
          }
        }, {
          level: 4,
          colorVariation: {
            key: 'brightness',
            to: 0.5
          }
        }]

    }],
    tooltip: {
      headerFormat: "",
      pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
    }
  },
  vector: {
    credits: {
      enabled: false
    },
    colors: primary,
    title: {
      text: 'Highcharts Vector plot',
      style: {
        color: textColor
      }
    },
    exporting: {
      enabled: false
    },
    xAxis: {
      min: 0,
      max: 100,
      gridLineWidth: 1,
      labels: {
        style: {
          color: axisColor
        }
      },
      lineWidth: 0,
      tickWidth: 0
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        style: {
          color: axisColor
        }
      },
      labels: {
        style: {
          color: axisColor
        }
      },
    },
    legend: {
      itemStyle: {
        color: textColor
      }
    },
    series: [{
      type: 'vector',
      name: 'Sample vector field',
      color: primary,
      data: generateVectorData()
    }]
  },
  wordCloud: {
    credits: {
      enabled: false
    },
    colors: [primary, info, warning, config.app.colors.default, success, danger, inverse],
    exporting: {
      enabled: false
    },
    series: [{
      type: 'wordcloud',
      data: wordCloudData,
      name: 'Occurrences'
    }],
    title: {
      text: 'Wordcloud of Lorem Ipsum',
      style: {
        color: textColor
      }
    }
  }
}
