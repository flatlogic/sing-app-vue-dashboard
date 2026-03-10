<template>
  <div>
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Echarts</span>
    </h1>
    <p>For more information please read full <a href="https://github.com/ecomfe/vue-echarts">documentation</a></p>
    <div class="row">
      <div class="col-12 col-lg-12">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.bar"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.pie"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Polar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.polar"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-12">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.line"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Scatter Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.scatter"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Gauge Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.gauge"
            :init-options="initOptions"
            autoresize
            class="chart"
          />
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart, LineChart, ScatterChart, GaugeChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, PolarComponent, GridComponent, ToolboxComponent, DatasetComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import Widget from '@/components/Widget/Widget.vue'
import echartsData from './mock'

// Register ECharts modules
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
  ToolboxComponent,
  DatasetComponent
])

const ed = echartsData
const initOptions = { renderer: 'canvas' }
</script>

<style src="./Echarts.scss" lang="scss"></style>
