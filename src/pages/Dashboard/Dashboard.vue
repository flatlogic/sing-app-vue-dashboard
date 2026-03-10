<template>
  <div class="dashboard-page">
    <h1 class="page-title">
      Analytics
    </h1>
    <div class="sidesWrapper">
      <div class="analyticsSide">
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                body-class="mt-lg"
                title="Visits Today"
                close
                :fetching-data="isReceiving"
              >
                <div class="d-flex justify-content-between align-items-center mb h3">
                  <h2>{{ visits.count }}</h2>
                  <i class="la la-arrow-right text-success rotate-315" />
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt-3">
                    <h6>+{{ visits.logins }}</h6><p class="text-muted mb-0 me-1">
                      <small>Logins</small>
                    </p>
                  </div>
                  <div class="mt-3">
                    <h6>{{ visits.sign_out_pct }}%</h6><p class="text-muted mb-0">
                      <small>Sign Out</small>
                    </p>
                  </div>
                  <div class="mt-3">
                    <h6>{{ visits.rate_pct }}%</h6><p class="text-muted mb-0 me-1">
                      <small>Rate</small>
                    </p>
                  </div>
                </div>
              </Widget>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="Revenue Breakdown"
                close
                :fetching-data="isReceiving"
              >
                <apexchart
                  v-if="revenue.length > 0"
                  type="donut"
                  height="120"
                  :options="donutOptions"
                  :series="donutSeries"
                />
              </Widget>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="App Perfomance"
                close
                :fetching-data="isReceiving"
              >
                <p class="text-muted d-flex flex-wrap">
                  <small class="me-lg-1 d-flex align-items-center">
                    <span
                      class="circle bg-danger text-danger me-sm-1"
                      style="font-size: 4px;"
                    >
                      .
                    </span>
                    This Period
                  </small>
                  <small class="me-lg-1 d-flex align-items-center">
                    <span
                      class="circle bg-primary text-primary me-sm-1"
                      style="font-size: 4px;"
                    >
                      .
                    </span>
                    Last Period
                  </small>
                </p>
                <h6>SDK</h6>
                <div
                  class="progress mb-1"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="{ width: performance.sdk.this_period_pct + '%' }"
                    :aria-valuenow="performance.sdk.this_period_pct"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <div
                  class="progress mb-3"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    :style="{ width: performance.sdk.last_period_pct + '%' }"
                    :aria-valuenow="performance.sdk.last_period_pct"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <h6>Integration</h6>
                <div
                  class="progress mb-1"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="{ width: performance.integration.this_period_pct + '%' }"
                    :aria-valuenow="performance.integration.this_period_pct"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <div
                  class="progress"
                  style="height: 5px"
                >
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    :style="{ width: performance.integration.last_period_pct + '%' }"
                    :aria-valuenow="performance.integration.last_period_pct"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </Widget>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="Server Overview"
                close
                :fetching-data="isReceiving"
              >
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150 mb-0">
                    <small>60% / 37°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <apexchart
                      v-if="isMounted"
                      type="line"
                      height="40"
                      :options="getSparklineOptions(appConfig.colors.danger)"
                      :series="[{data: getRandomData()}]"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150 mb-0">
                    <small>54% / 31°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <apexchart
                      v-if="isMounted"
                      type="line"
                      height="40"
                      :options="getSparklineOptions(appConfig.colors.info)"
                      :series="[{data: getRandomData()}]"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <p class="width-150 mb-0">
                    <small>57% / 21°С / 3.3 Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <apexchart
                      v-if="isMounted"
                      type="line"
                      height="40"
                      :options="getSparklineOptions(appConfig.colors.primary)"
                      :series="[{data: getRandomData()}]"
                    />
                  </div>
                </div>
              </Widget>
            </div>
          </div>
          <div class="col-12">
            <MainChart
              v-if="mainChart.length > 0"
              :data="mainChart"
              :is-receiving="isReceiving"
            />
          </div>
        </div>
        <div class="row">
          <div
            v-for="stat in mock.bigStat"
            :key="stat.id"
            class="col-12 col-lg-6 col-xl-4"
          >
            <BigStat
              :product="stat.product"
              :color="stat.color"
              :total="stat.total"
              :registrations="stat.registrations"
              :bounce="stat.bounce"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Widget
              title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
              body-class="widget-table-overflow"
              custom-header
            >
              <div class="table-responsive">
                <table class="table table-striped table-lg mb-0 requests-table">
                  <thead>
                    <tr class="text-muted">
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                      <th>CITY</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="row in table"
                      :key="row.id"
                    >
                      <td>{{ row.name }}</td>
                      <td>{{ row.email }}</td>
                      <td>{{ row.product }}</td>
                      <td>{{ row.price }}</td>
                      <td>{{ row.date }}</td>
                      <td>{{ row.city }}</td>
                      <td>
                        <button
                          type="button"
                          :class="['btn', 'm-1', 'text-white',
                                   row.status === 'Pending' ? 'btn-success'
                                   : row.status === 'Declined' ? 'btn-danger' : 'btn-info']"
                        >
                          {{ row.status }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Widget>
          </div>
        </div>
      </div>
      <div class="analyticsSide">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-12 lastSideElement">
            <Widget
              body-class="p-0 mt-0"
              class="mb-xlg pt-0"
            >
              <Calendar white />
            </Widget>
          </div>
          <div class="col-12 col-md-6 col-xl-12 lastSideElement">
            <TaskContainer :data="mock.tasks" />
          </div>
          <div class="col-12 col-md-6 col-xl-12 lastSideElement">
            <Widget
              class-name="widget"
              body-class="notifications w-100 mt-lg"
              :title="notificationsTitle"
              custom-header
            >
              <div
                v-for="notification in mock.notifications"
                :key="notification.id"
                class="d-flex align-items-start"
              >
                <i :class="`la la-${notification.icon} me-2 text-${notification.color}`" />
                <p
                  :class="{ 'mb-0': notification.id === mock.notifications.length - 1 }"
                  v-html="notification.content"
                />
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'
import Widget from '@/components/Widget/Widget.vue'
import MainChart from './components/MainChart/MainChart.vue'
import BigStat from './components/BigStat/BigStat.vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import TaskContainer from './components/TaskContainer/TaskContainer.vue'
import mock from './mock'

const dashboardStore = useDashboardStore()
const appConfig = inject('appConfig')

// Mount state for delayed chart rendering
const isMounted = ref(false)

// State from store
const visits = computed(() => dashboardStore.visits)
const performance = computed(() => dashboardStore.performance)
const revenue = computed(() => dashboardStore.revenue)
const mainChart = computed(() => dashboardStore.mainChart)
const isReceiving = computed(() => dashboardStore.isReceiving)

const notificationsTitle = computed(() => `
  <h4>Notifications
    <span class='badge rounded-pill bg-primary fw-normal pull-right mt-xs'>
      ${mock.notifications.length}
    </span>
  </h4>
`)

const table = ref([
  {
    id: 0,
    name: 'Mark Otto',
    email: 'ottoto@wxample.com',
    product: 'ON the Road',
    price: '$25 224.2',
    date: '11 May 2017',
    city: 'Otsego',
    status: 'Sent',
  },
  {
    id: 1,
    name: 'Jacob Thornton',
    email: 'thornton@wxample.com',
    product: 'HP Core i7',
    price: '$1 254.2',
    date: '4 Jun 2017',
    city: 'Fivepointville',
    status: 'Sent',
  },
  {
    id: 2,
    name: 'Larry the Bird',
    email: 'bird@wxample.com',
    product: 'Air Pro',
    price: '$1 570.0',
    date: '27 Aug 2017',
    city: 'Leadville North',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Joseph May',
    email: 'josephmay@wxample.com',
    product: 'Version Control',
    price: '$5 224.5',
    date: '19 Feb 2018',
    city: 'Seaforth',
    status: 'Declined',
  },
  {
    id: 4,
    name: 'Peter Horadnia',
    email: 'horadnia@wxample.com',
    product: 'Let\'s Dance',
    price: '$43 594.7',
    date: '1 Mar 2018',
    city: 'Hanoverton',
    status: 'Sent',
  }
])

// ApexCharts donut configuration
const donutOptions = computed(() => ({
  chart: {
    type: 'donut',
    height: 120
  },
  labels: revenue.value.map(s => s.label),
  colors: [appConfig.colors.danger, appConfig.colors.warning, appConfig.colors.primary],
  legend: {
    position: 'right',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    markers: {
      width: 12,
      height: 12,
      radius: 0
    },
    itemMargin: {
      vertical: 5
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '60%'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false
  },
  tooltip: {
    enabled: true
  }
}))

const donutSeries = computed(() => revenue.value.map(s => s.data))

// Sparkline chart options for server overview
function getSparklineOptions(color) {
  return {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: 4
    },
    colors: [color],
    tooltip: {
      enabled: false
    }
  }
}

function getRandomData() {
  const arr = []
  for (let i = 0; i < 25; i += 1) {
    arr.push(Math.random().toFixed(1) * 10)
  }
  return arr
}

onMounted(() => {
  isMounted.value = true
  dashboardStore.receiveDataRequest()
})
</script>

<style src="./Dashboard.scss" lang="scss" />
