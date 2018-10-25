<template>
  <div>
    <b-row>
      <b-col xs='12'>
        <Widget
          title="<h5>Bias <span class='fw-semi-bold'>Rickshaw</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted mb-lg">
            Basic scatter plot with two overlapping series. Based on d3 library,
            which is extremely fast and powerful. Customize it to visualize and
            analyze your data.
          </p>
          <ScatterplotChart />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs='12' lg='7' xl='8'>
        <Widget
          title="<h5>Line Chart - <span class='fw-semi-bold'>Rickshaw</span></h5>"
          close collapse customHeader
        >
          <b-alert class="rounded-0 mb-3" variant="primary" show>
            <span class="fw-semi-bold">Important alert</span>: It&apos;s time to buy Tesla shares!
          </b-alert>
          <LineChart />
        </Widget>
      </b-col>
      <b-col xs='12' lg='5' xl='4'>
        <Widget
          title="<h5>Stacked Bar Chart - <span class='fw-semi-bold'>Rickshaw</span></h5>"
          close collapse customHeader
        >
          <p class="fs-mini text-muted">
            You can combine Rickshaw charts with
            <span class="fw-semi-bold">Bootstrap</span> components
            for data visualization and call to action.
          </p>
          <p class="text-muted">A simple success alert—check it out!</p>
          <BarsChart :colors="['#a7beff', '#d1dcff', '#ffebb2']" stacked />
        </Widget>
      </b-col>
      <b-col lg='6' xs='12'>
        <Widget
          title="<h5>Bar Chart - <span class='fw-semi-bold'>Rickshaw</span></h5>"
          collapse close customHeader
        >
          <p class="fs-mini text-muted">
            Rickshaw charts give you a possibility to enter the low level settings, when
            you need it, so you can always refer to d3 attributes and DOM elements to create
            your awesome custom chart.
          </p>
          <BarsChart :colors="['#ace5d1', '#ffebb2']" :seriesLength="12" />
        </Widget>
      </b-col>
      <b-col lg='6' xs='12'>
        <Widget
          title="<h5>Realtime <span class='fw-semi-bold'>Rickshaw</span></h5>"
          collapse close customHeader
        >
          <div>
            <p class="fs-mini text-muted mb-lg">
              Rickshaw provides the elements you need to create
              interactive graphs: renderers, legends,
              hovers, range selectors, etc. You put the
              pieces together.
              It&apos;s all based on <span class="fw-semi-bold">d3</span>
              underneath, so graphs are drawn with
              standard
              SVG and styled with CSS.
              Customize all you like with techniques you already know.
            </p>
            <h5>720 Users</h5>
            <b-progress :value="60" :max="100" variant="primary" class="mb-sm progress-xs" />
            <p class="fs-mini text-muted mb-lg">
              <span class="circle bg-primary text-white">
                <i class="fa fa-circle" />
              </span>
              &nbsp;
              Target <span class="fw-semi-bold">820</span> users
              is <span class="fw-semi-bold">96%</span> reached.
            </p>
            <RealtimeChart />
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import BarsChart from './charts/BarsChart';
import LineChart from './charts/LineChart';
import ScatterplotChart from './charts/ScatterplotChart';
import RealtimeChart from './charts/RealtimeChart';

export default {
  name: 'Rickshaw',
  components: {
    Widget, BarsChart, LineChart, ScatterplotChart, RealtimeChart,
  },
};
</script>
