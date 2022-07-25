<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics</h1>
    <div class="sidesWrapper">
      <div class="analyticsSide">
        <b-row>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget
                  class="h-100 mb-0"
                  body-class="mt-lg"
                  title="Visits Today"
                  close
                  :fetchingData="isReceiving"
              >
                <div class="d-flex justify-content-between align-items-center mb h3">
                  <h2>{{visits.count}}</h2>
                  <i class="la la-arrow-right text-success rotate-315" />
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt-3">
                    <h6>+{{visits.logins}}</h6><p class="text-muted mb-0 me-1"><small>Logins</small></p>
                  </div>
                  <div class="mt-3">
                    <h6>{{visits.sign_out_pct}}%</h6><p class="text-muted mb-0"><small>Sign Out</small></p>
                  </div>
                  <div class="mt-3">
                    <h6>{{visits.rate_pct}}%</h6><p class="text-muted mb-0 me-1"><small>Rate</small></p>
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget
                  class="h-100 mb-0"
                  title="Revenue Breakdown"
                  close
                  :fetchingData="isReceiving"
              >
                <highcharts :options="donut"></highcharts>
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="App Perfomance" close :fetchingData="isReceiving">
                <p class="text-muted d-flex flex-wrap">
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-danger text-danger me-sm-1" style="font-size: 4px;">
                      .
                    </span>
                    This Period
                  </small>
                  <small class="mr-lg d-flex align-items-center">
                    <span class="circle bg-primary text-primary me-sm-1" style="font-size: 4px;">
                      .
                    </span>
                    Last Period
                  </small>
                </p>
                <h6>SDK</h6>
                <b-progress class="mb-xs" style="height: 5px"
                  variant="danger" :value="performance.sdk.this_period_pct" :max="100" />
                <b-progress class="mb" style="height: 5px"
                  variant="primary" :value="performance.sdk.last_period_pct" :max="100" />
                <h6>Integration</h6>
                <b-progress class="mb-xs" style="height: 5px"
                  variant="danger" :value="performance.integration.this_period_pct" :max="100" />
                <b-progress style="height: 5px"
                  variant="primary" :value="performance.integration.last_period_pct" :max="100" />
              </Widget>
            </div>
          </b-col>
          <b-col lg="3" sm="6" xs="12">
            <div class="pb-xlg h-100">
              <Widget class="h-100 mb-0" title="Server Overview" close :fetchingData="isReceiving">
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150 mb-0"><small>{{server[1].pct}}% / {{server[1].temp}}°С / {{server[1].frequency}} Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.danger]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150 mb-0"><small>{{server[2].pct}}% / {{server[2].temp}}°С / {{server[2].frequency}} Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.info]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <p class="width-150 mb-0"><small>{{server[2].pct}}% / {{server[2].temp}}°С / {{server[2].frequency}} Ghz</small></p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.primary]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
          <b-col xs="12">
            <MainChart :data="mainChart" :isReceiving="isReceiving" />
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
                      <td>{{row.name}}</td>
                      <td>{{row.email}}</td>
                      <td>{{row.product}}</td>
                      <td>{{row.price}}</td>
                      <td>{{row.date}}</td>
                      <td>{{row.city}}</td>
                      <td>
<!--                        <b-badge-->
<!--                          :variant="row.status === 'Pending'-->
<!--                            ? 'success'-->
<!--                            : row.status === 'Declined' ? 'danger' : 'info'"-->
<!--                          class="m-1 mx-3">-->
<!--                          {{row.status}}-->
<!--                        </b-badge>-->
                        <b-button
                            :variant="row.status === 'Pending'
                            ? 'success'
                            : row.status === 'Declined' ? 'danger' : 'info'"
                            class="m-1 text-white"
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
                  <span class='badge rounded-pill bg-primary fw-normal pull-right mt-xs'>
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
import {mapState, mapActions} from 'vuex';
import Widget from '@/components/Widget/Widget';
import MainChart from './components/MainChart/MainChart';
import BigStat from './components/BigStat/BigStat';
import Calendar from '../Visits/components/Calendar/Calendar';
import TaskContainer from './components/TaskContainer/TaskContainer';
import mock from './mock';

import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget, MainChart, BigStat, Calendar, TaskContainer, highcharts: Chart
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
      }]
    };
  },
  methods: {
    ...mapActions('dashboard', ['receiveDataRequest']),
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
  },
  computed: {
  ...mapState('dashboard', [
      'visits',
      'performance',
      'server',
      'revenue',
      'mainChart',
      'isReceiving',
    ]),
    donut() {
      let {danger, warning, primary} = this.appConfig.colors;
      let series = [
        {
          name: 'Revenue',
          data: this.revenue.map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 120
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: [danger, warning, primary],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: 'Montserrat'
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    }
  },
  mounted() {
    this.receiveDataRequest();
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
