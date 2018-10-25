<template>
  <div class="visits-page">
    <h1 class="page-title">Dashboard &nbsp;
      <small>
        <small>The Lucky One</small>
      </small>
    </h1>
    <b-row>
      <b-col lg="7">
        <Widget class="bg-transparent">
          <Map />
        </Widget>
      </b-col>
      <b-col lg="4" offset-lg="1">
        <Widget
          class="bg-transparent"
          title="<h5>Map<span class='fw-semi-bold'>&nbsp;Statistics</span></h5>"
          settings refresh close customHeader
        >
          <p>Status: <strong>Live</strong></p>
          <p>
            <span class="circle bg-warning text-white"><i class="fa fa-map-marker" /></span> &nbsp;
            146 Countries, 2759 Cities
          </p>
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Foreign Visits</h6>
              <p class="description deemphasize mb-xs">Some Cool Text</p>
              <b-progress variant="primary" :value="60" :max="100" class="bg-white progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-body-light">
                <span><AnimateNumber number="75" />%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Local Visits</h6>
              <p class="description deemphasize mb-xs">P. to C. Conversion</p>
              <b-progress variant="danger" :value="39" :max="100" class="bg-white progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-body-light">
                <span><AnimateNumber number="84" />%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-md-9 col-12">
              <h6 class="name">Sound Frequencies</h6>
              <p class="description deemphasize mb-xs">Average Bitrate</p>
              <b-progress variant="success" :value="80" :max="100" class="bg-white progress-xs" />
            </div>
            <div class="col-md-3 col-12 text-center">
              <span class="status rounded rounded-lg bg-body-light">
                <span><AnimateNumber number="92" />%</span>
              </span>
            </div>
          </div>
          <h6 class="fw-semi-bold mt">Map Distributions</h6>
          <p>Tracking: <strong>Active</strong></p>
          <p>
            <span class="circle bg-warning text-white"><i class="fa fa-cog" /></span>
            &nbsp; 391 elements installed, 84 sets
          </p>
          <b-input-group class="mt">
            <b-form-input />
            <b-input-group-append>
              <b-btn variant="default">
                <i class="fa fa-search text-gray" />
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> USERBASE GROWTH </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Overall Growth</h6>
              <p class="value">76.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">10.38%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">24h</h6>
              <p class="value">3.38%</p>
            </div>
          </div>
          <b-progress variant="success" :value="60"
            :max="100" class="bg-gray-lighter progress-xs" />
          <p>
            <small>
              <span class="circle bg-warning text-white">
                <i class="fa fa-chevron-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% higher</span>
            &nbsp;than last month
          </p>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> TRAFFIC VALUES </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Overall Values</h6>
              <p class="value">17 567 318</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Montly</h6>
              <p class="value">55 120</p>
            </div>
            <div class="stat-item">
              <h6 class="name">24h</h6>
              <p class="value">9 695</p>
            </div>
          </div>
          <b-progress variant="danger"
            :value="60" :max="100" class="bg-gray-lighter progress-xs" />
          <p>
            <small>
              <span class="circle bg-warning text-white">
                <i class="fa fa-chevron-down" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;8% lower</span>
            &nbsp;than last month
          </p>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> RANDOM VALUES </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name fs-sm">Overcome T.</h6>
              <p class="value">104.85%</p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">Takeoff Angle</h6>
              <p class="value">14.29&deg;</p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">World Pop.</h6>
              <p class="value">7,211M</p>
            </div>
          </div>
          <b-progress variant="primary" :value="60"
            :max="100" class="bg-gray-lighter progress-xs" />
          <p>
            <small>
              <span class="circle bg-warning text-white">
                <i class="fa fa-plus" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;8 734 higher</span>
            &nbsp;than last month
          </p>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6><span class='badge badge-danger'>New</span> Messages</h6>"
          refresh close customHeader
        >
          <div class="widget-body p-0">
            <div class="list-group list-group-lg">
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a2.jpg" alt="..." />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Chris Gray</h6>
                  <p class="help-block text-ellipsis m-0">
                    Hey! What&apos;s up? So many times since we
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a4.jpg" alt="..." />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Jamey Brownlow</h6>
                  <p class="help-block text-ellipsis m-0">
                    Good news coming tonight. Seems they agreed to proceed
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
                  <i class="status status-bottom bg-warning" />
                </span>
                <div>
                  <h6 class="m-0">Livia Walsh</h6>
                  <p class="help-block text-ellipsis m-0">Check my latest email plz!</p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/a5.jpg" alt="..." />
                  <i class="status status-bottom bg-danger" />
                </span>
                <div>
                  <h6 class="m-0">Jaron Fitzroy</h6>
                  <p class="help-block text-ellipsis m-0">What about summer break?</p>
                </div>
              </a>
            </div>
          </div>
          <footer class="bg-body-light mt">
            <input type="search" class="form-control form-control-sm" placeholder="Search" />
          </footer>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6> Market <span class='fw-semi-bold'>Stats</span></h6>"
          close customHeader
        >
          <div class="widget-body">
            <h3>$720 Earned</h3>
            <p class="fs-mini text-muted mb mt-sm">
              Target <span class="fw-semi-bold">$820</span> day earnings
              is <span class="fw-semi-bold">96%</span> reached.
            </p>
          </div>
          <div class="widget-table-overflow">
            <table class="table table-striped table-sm">
              <thead class="no-bd">
                <tr>
                  <th>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox210"
                        @click="checkTable(0)"
                        :checked="checkedArr[0]"
                      />
                      <label for="checkbox210" />
                    </div>
                  </th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox212"
                        @click="checkTable(1)"
                        :checked="checkedArr[1]"
                      />
                      <label for="checkbox212" />
                    </div>
                  </td>
                  <td>HP Core i7</td>
                  <td class="text-align-right fw-semi-bold">$346.1</td>
                </tr>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        type="checkbox"
                        class="mt-0"
                        id="checkbox214"
                        @click="checkTable(2)"
                        :checked="checkedArr[2]"
                      />
                      <label for="checkbox214" />
                    </div>
                  </td>
                  <td>Air Pro</td>
                  <td class="text-align-right fw-semi-bold">$533.1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="widget-body mt-xlg chart-overflow-bottom"
            :style="{ height: '100px' }">
            <RickshawCH :height="100" />
          </div>
        </Widget>
      </b-col>
      <b-col lg="4" xs="12">
        <Widget
          title="<h6>Calendar</h6" bodyClass="p-0"
          settings close customHeader>
          <Calendar />
          <div class="list-group fs-mini">
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill badge-warning float-right">6:45</span>
              Weed out the flower bed
            </a>
            <a href="#" class="list-group-item text-ellipsis">
              <span class="badge badge-pill badge-success float-right">9:41</span>
              Stop world water pollution
            </a>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Map from './components/Map/Map';
import AnimateNumber from './components/AnimateNumber/AnimateNumber';
import Calendar from './components/Calendar/Calendar';
import RickshawCH from './components/Rickshaw/Rickshaw';

export default {
  name: 'Visits',
  components: {
    Widget, Map, AnimateNumber, Calendar, RickshawCH,
  },
  data() {
    return {
      checkedArr: [false, false, false],
    };
  },
  methods: {
    checkTable(id) {
      let arr = [];
      if (id === 0) {
        const val = !this.checkedArr[0];
        for (let i = 0; i < this.checkedArr.length; i += 1) {
          arr[i] = val;
        }
      } else {
        arr = this.checkedArr;
        arr[id] = !arr[id];
      }
      if (arr[0]) {
        let count = 1;
        for (let i = 1; i < arr.length; i += 1) {
          if (arr[i]) {
            count += 1;
          }
        }
        if (count !== arr.length) {
          arr[0] = !arr[0];
        }
      }
      Vue.set(this, 'checkedArr', arr);
    },
  },
};
</script>

<style src="./Visits.scss" lang="scss" />
