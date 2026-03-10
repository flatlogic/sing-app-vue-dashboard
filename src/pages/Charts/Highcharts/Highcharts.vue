<template>
  <div>
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Highcharts</span>
    </h1>
    <p>For more information please read full <a href="https://github.com/highcharts/highcharts-vue">documentation</a></p>
    <div class="row">
      <div class="col-12 col-lg-12">
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <highcharts :options="cd.line" />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <highcharts :options="cd.pie" />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Column 3D Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <highcharts :options="cd.column3D" />
        </Widget>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row">
          <div class="col-12 col-lg-12">
            <Widget
              title="<h5>Highcharts <span class='fw-semi-bold'>Vector Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <highcharts :options="cd.vector" />
            </Widget>
          </div>
          <div class="col-12 col-lg-12">
            <Widget
              title="<h5>Highcharts <span class='fw-semi-bold'>Word Cloud</span></h5>"
              close
              collapse
              custom-header
            >
              <highcharts :options="cd.wordCloud" />
            </Widget>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Sunburst Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <highcharts :options="cd.sunburst" />
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue'
import Highcharts from 'highcharts'
import variablePie from 'highcharts/modules/variable-pie'
import exporting from 'highcharts/modules/exporting'
import exportData from 'highcharts/modules/export-data'
import accessibility from 'highcharts/modules/accessibility'
import highcharts3d from 'highcharts/highcharts-3d'
import sunburst from 'highcharts/modules/sunburst'
import vector from 'highcharts/modules/vector'
import wordcloud from 'highcharts/modules/wordcloud'
import { Chart as HighchartsChart } from 'highcharts-vue'

// Register component for template use
const highcharts = HighchartsChart

import chartsData from './mock'

// Initialize Highcharts modules
variablePie(Highcharts)
exporting(Highcharts)
exportData(Highcharts)
accessibility(Highcharts)
highcharts3d(Highcharts)
sunburst(Highcharts)
vector(Highcharts)
wordcloud(Highcharts)

const cd = chartsData
</script>
