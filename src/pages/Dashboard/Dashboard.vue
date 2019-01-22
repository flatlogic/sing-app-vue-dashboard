<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics <small>Company Performance</small></h1>
    <div class="sidesWrapper">
      <div class="analyticsSide">
        <b-row>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Visits Today" close>
                <div class="d-flex justify-content-between align-items-center mb-lg">
                  <h2>4,332</h2>
                  <i class="la la-arrow-right text-success rotate-315" />
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <h6>+830</h6><p class="text-muted mb-0 mr"><small>Logins</small></p>
                  </div>
                  <div class="mt">
                    <h6>0.5%</h6><p class="text-muted mb-0"><small>Sign Out</small></p>
                  </div>
                  <div class="mt">
                    <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>Rate</small></p>
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Revenue Breakdown" close>
                <b-row>
                  <b-col xs="12" md="6" lg="7" class="text-center">
                    <div ref="chartContainer" style="width: 100%; height: 100px" />
                  </b-col>
                  <b-col xs="12" md="5" lg="4" class="display-flex flex-column justify-content-center">
                    <div ref="chartLegend" />
                  </b-col>
                </b-row>
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="App Perfomance" close>
                <p class="text-muted d-flex flex-wrap">
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-success text-success mr-xs" style="font-size: 4px;">
                      .
                    </span>
                    This Period
                  </small>
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-warning text-warning mr-xs" style="font-size: 4px;">
                      .
                    </span>
                    Last Period
                  </small>
                </p>
                <h6>SDK</h6>
                <b-progress class="mb-xs" style="height: 5px"
                  variant="success" :value="60" :max="100" />
                <b-progress class="mb" style="height: 5px"
                  variant="warning" :value="35" :max="100" />
                <h6>Integration</h6>
                <b-progress class="mb-xs" style="height: 5px"
                  variant="success" :value="40" :max="100" />
                <b-progress style="height: 5px"
                  variant="warning" :value="55" :max="100" />
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Server Overview" close>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150"><small>60% / 37°С / 3.3 Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="['#ffc247']"
                      :height="30"
                      smooth />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150"><small>54% / 31°С / 3.3 Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="['#9964e3']"
                      :height="30"
                      smooth />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <p class="width-150"><small>57% / 21°С / 3.3 Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="['#3abf94']"
                      :height="30"
                      smooth />
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
          <b-col xs="12">
            <MainChart />
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" lg="6" xl="4" v-for="stat in mock.bigStat" :key="stat.id">
            <BigStat
              :product="stat.product"
              :color="stat.color"
              :total="stat.total"
              :registrations="stat.registrations"
              :bounce="stat.bounce"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12">
            <Widget
              title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
              bodyClass="widget-table-overflow"
              customHeader
            >
              <div class="table-responsive">
                <table class="table table-lg mb-0 requests-table">
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
                      <td>{{row.name}}</td>
                      <td>{{row.email}}</td>
                      <td>{{row.product}}</td>
                      <td>{{row.price}}</td>
                      <td>{{row.date}}</td>
                      <td>{{row.city}}</td>
                      <td>
                        <b-button
                          :variant="row.status === 'Pending'
                            ? 'success'
                            : row.status === 'Declined' ? 'danger' : 'info'"
                          class="p-1 px-3 btn-xs"
                        >
                          {{row.status}}
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Widget>
          </b-col>
        </b-row>
      </div>
      <div class="analyticsSide">
        <b-row>
          <b-col xs="12" md="6" xl="12" class="lastSideElement">
            <Widget bodyClass="p-0 mt-0" class="mb-xlg pt-0">
              <Calendar white />
            </Widget>
          </b-col>
          <b-col xs="12" md="6" xl="12" class="lastSideElement">
            <TaskContainer :data="mock.tasks"/>
          </b-col>
          <b-col xs="12" md="6" xl="12" class="lastSideElement">
            <Widget
              className="widget"
              bodyClass="notifications w-100 mt-lg"
              :title="`
                <h4>Notifications
                  <span class='badge badge-pill badge-success fw-normal pull-right mt-xs'>
                    ${mock.notifications.length}
                  </span>
                </h4>
              `"
              customHeader
            >
              <div v-for="notification in mock.notifications"
                class="d-flex align-items-start" :key="notification.id">
                <i :class="`la la-${notification.icon} mr text-${notification.color}`" />
                <p
                  :class="{ 'mb-0': notification.id === mock.notifications.length - 1 }"
                  v-html="notification.content"
                />
              </div>
            </Widget>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.resize';
/* eslint-enable */
import Widget from '@/components/Widget/Widget';
import MainChart from './components/MainChart/MainChart';
import BigStat from './components/BigStat/BigStat';
import Calendar from '../Visits/components/Calendar/Calendar';
import TaskContainer from './components/TaskContainer/TaskContainer';
import mock from './mock';

export default {
  name: 'Dashboard',
  components: {
    Widget, MainChart, BigStat, Calendar, TaskContainer,
  },
  data() {
    return {
      mock,
      table: [{
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
      }],
    };
  },
  methods: {
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
    getData() {
      const data = [];
      const seriesCount = 3;
      const accessories = ['SMX', 'Direct', 'Networks'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    initChart() {
      $.plot($(this.$refs.chartContainer), this.getData(), {
        series: {
          pie: {
            innerRadius: 0.8,
            show: true,
            fill: 0.5,
          },
        },
        colors: ['#ffc247', '#f55d5d', '#9964e3'],
        legend: {
          noColumns: 1,
          container: $(this.$refs.chartLegend),
          labelBoxBorderColor: '#ffffff',
        },
      });
    },
  },
  mounted() {
    this.initChart();

    window.addEventListener('resize', this.initChart);
  },
  unmounted() {
    window.removeEventListener('resize', this.initChart);
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
