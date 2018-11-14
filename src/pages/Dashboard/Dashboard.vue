<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Dashboard</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Dashboard</h1>
    <b-row>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="Visits Today">
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
          <Widget class="h-100 mb-0" title="Revenue Breakdown">
            <b-row>
              <b-col xs="12" md="6" lg="7" class="text-center">
                <div ref="chartContainer" style="height: 100px" />
              </b-col>
              <b-col xs="12" md="5" lg="4">
                <div ref="chartLegend" />
              </b-col>
            </b-row>
          </Widget>
        </div>
      </b-col>
      <b-col lg="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="App Perfomance">
            <p class="text-muted d-flex flex-wrap">
              <small class="mr-lg d-flex align-items-center">
                <span class="circle bg-success text-success mr-xs" style="font-size: 4px;">.</span>
                  This Period
              </small>
              <small class="mr-lg d-flex align-items-center">
                <span class="circle bg-warning text-warning mr-xs" style="font-size: 4px;">.</span>
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
          <Widget class="h-100 mb-0" title="Server Overview">
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
    </b-row>
    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
          bodyClass="widget-table-overflow"
          customHeader
        >
          <div class="table-responsive">
            <table class="table table-lg mb-0">
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
    <b-row>
      <b-col lg="4" sm="6" xs="12">
        <Widget
          title="<h5 class='d-flex align-items-center pb-1'>
            <span class='circle bg-primary mr-sm' style='font-size: 6px;'></span>
            Statistic<span class='fw-normal ml-xs'>Light Blue</span>
          </h4>"
          bodyClass="p-0 mt"
          customHeader
        >
          <h4 class="fw-semi-bold ml-lg mb-lg">4,232</h4>
          <div class="d-flex border-top">
            <div class="w-50 border-right p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>+830</h6>
                <i class="la la-arrow-right text-success rotate-315" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Registrations</small>
              </p>
            </div>
            <div class="w-50 p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>4.5%</h6>
                <i class="la la-arrow-right text-danger rotate-45" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Bounce Rate</small>
              </p>
            </div>
          </div>
        </Widget>
      </b-col>
      <b-col lg="4" sm="6" xs="12">
        <Widget
          title="<h5 class='d-flex align-items-center pb-1'>
            <span class='circle bg-warning mr-sm' style='font-size: 6px;'></span>
            Statistic<span class='fw-normal ml-xs'>Sing App</span>
          </h4>"
          bodyClass="p-0 mt"
          customHeader
        >
          <h4 class="fw-semi-bold ml-lg mb-lg">754</h4>
          <div class="d-flex border-top">
            <div class="w-50 border-right p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>+30</h6>
                <i class="la la-arrow-right text-success rotate-315" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Registrations</small>
              </p>
            </div>
            <div class="w-50 p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>2.5%</h6>
                <i class="la la-arrow-right text-success rotate-315" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Bounce Rate</small>
              </p>
            </div>
          </div>
        </Widget>
      </b-col>
      <b-col lg="4" sm="6" xs="12">
        <Widget
          title="<h5 class='d-flex align-items-center pb-1'>
            <span class='circle bg-warning mr-sm' style='font-size: 6px;'></span>
            Statistic<span class='fw-normal ml-xs'>RNS</span>
          </h4>"
          bodyClass="p-0 mt"
          customHeader
        >
          <h4 class="fw-semi-bold ml-lg mb-lg">1,025</h4>
          <div class="d-flex border-top">
            <div class="w-50 border-right p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>+230</h6>
                <i class="la la-arrow-right text-success rotate-315" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Registrations</small>
              </p>
            </div>
            <div class="w-50 p-3 px-4">
              <div class="d-flex justify-content-between align-items-center"><h6>21.5%</h6>
                <i class="la la-arrow-right text-danger rotate-45" />
              </div>
              <p class="text-muted mb-0 mr">
                <small>Bounce Rate</small>
              </p>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!flot';
import 'imports-loader?jQuery=jquery,this=>window!flot/jquery.flot.pie';
/* eslint-enable */
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Dashboard',
  components: { Widget },
  data() {
    return {
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
      $.plot(this.$refs.chartContainer, this.getData(), {
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
          container: this.$refs.chartLegend,
          labelBoxBorderColor: '#ffffff',
        },
      });
    },
  },
  mounted() {
    this.initChart();

    window.addEventListener('resize', this.initChart);
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" scoped />
