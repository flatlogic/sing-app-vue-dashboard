<template>
  <div>
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Apex Charts</span>
    </h1>
    <p>For more information please read full <a href="https://apexcharts.com/docs/vue-charts/">documentation</a></p>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-6">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="line"
            :series="cd.line.series"
            :options="cd.line.options"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6 col-xl-6">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Area Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="area"
            :series="cd.area.series"
            :options="cd.area.options"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6 col-xl-6">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="bar"
            :series="cd.column.series"
            :options="cd.column.options"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6 col-xl-6">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="bar"
            :series="cd.bar.series"
            :options="cd.bar.options"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-12">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Mixed Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="line"
            height="350"
            :series="cd.mixed.series"
            :options="cd.mixed.options"
          />
        </Widget>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row">
          <div class="col-12 col-lg-6">
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Pie Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                v-if="isMounted"
                type="pie"
                height="175"
                :series="cd.pie.series"
                :options="cd.pie.options"
              />
            </Widget>
          </div>
          <div class="col-12 col-lg-6">
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Donut Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                v-if="isMounted"
                type="donut"
                height="175"
                :series="cd.donut.series"
                :options="cd.donut.options"
              />
            </Widget>
          </div>
          <div class="col-12 col-lg-12">
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Heat Map Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                v-if="isMounted"
                type="heatmap"
                height="250"
                :series="cd.heatmap.series"
                :options="cd.heatmap.options"
              />
            </Widget>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Radial Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            v-if="isMounted"
            type="radialBar"
            :series="cd.radial.series"
            :options="cd.radial.options"
          />
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import chartsData from './mock'

const isMounted = ref(false)
const cd = chartsData

onMounted(() => {
  nextTick(() => {
    isMounted.value = true
  })
})
</script>
