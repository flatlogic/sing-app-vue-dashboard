<template>
  <div class="tables-basic">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Static</span>
    </h2>
    <div class="row">
      <div class="col">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">
                    #
                  </th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th class="hidden-sm-down">
                    Info
                  </th>
                  <th class="hidden-sm-down">
                    Date
                  </th>
                  <th class="hidden-sm-down">
                    Size
                  </th>
                  <th class="hidden-sm-down">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in tableStyles"
                  :key="row.id"
                >
                  <td>{{ row.id }}</td>
                  <td>
                    <img
                      class="img-rounded"
                      :src="row.picture"
                      :alt="'table-picture'"
                      height="50"
                    >
                  </td>
                  <td>
                    {{ row.description }}
                    <div v-if="row.label">
                      <span
                        :class="row.label.colorClass ? `badge bg-${row.label.colorClass}` : ''"
                        class="text-white"
                      >{{ row.label.text }}</span>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">Type:</span>
                        <span class="text-muted">&nbsp; {{ row.info.type }}</span>
                      </small>
                    </p>
                    <p>
                      <small>
                        <span class="fw-semi-bold">Dimensions:</span>
                        <span class="text-muted">&nbsp; {{ row.info.dimensions }}</span>
                      </small>
                    </p>
                  </td>
                  <td class="text-semi-muted">
                    {{ parseDate(row.date) }}
                  </td>
                  <td class="text-semi-muted">
                    {{ row.size }}
                  </td>
                  <td class="width-150">
                    <div class="progress progress-sm mb-xs">
                      <div
                        class="progress-bar"
                        :class="`bg-${row.progress.colorClass}`"
                        role="progressbar"
                        :style="{ width: row.progress.percent + '%' }"
                        :aria-valuenow="row.progress.percent"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-end">
              <button class="btn btn-default btn-sm me-3">
                Send to...
              </button>
              <div class="dropdown d-inline-block me-sm-2">
                <button
                  class="btn btn-inverse btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Clear
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Clear</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Move ...</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Stripped <span class="fw-semi-bold">Table</span></h3>
          <p>
            Each row is highlighted. You will never lost
            there. Just <code>.table-striped</code> it.
          </p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      :checked="checkboxes1[0]"
                      @change="event => checkAll(event, 'checkboxes1')"
                    >
                    <label for="checkbox1" />
                  </div>
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox2"
                      type="checkbox"
                      :checked="checkboxes1[1]"
                      @change="event => changeCheck(event, 'checkboxes1', 1)"
                    >
                    <label for="checkbox2" />
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td><span class="badge bg-success">Online</span></td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox3"
                      type="checkbox"
                      :checked="checkboxes1[2]"
                      @change="event => changeCheck(event, 'checkboxes1', 2)"
                    >
                    <label for="checkbox3" />
                  </div>
                </td>
                <td>Jacob <span class="badge bg-warning text-gray-dark">ALERT!</span></td>
                <td>Thornton</td>
                <td><span class="badge bg-gray">Away</span></td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox4"
                      type="checkbox"
                      :checked="checkboxes1[3]"
                      @change="event => changeCheck(event, 'checkboxes1', 3)"
                    >
                    <label for="checkbox4" />
                  </div>
                </td>
                <td>Larry</td>
                <td>the Bird</td>
                <td><span class="badge bg-danger">Construct</span></td>
              </tr>
            </tbody>
          </table>
          <br><br>
          <h3>Hover <span class="fw-semi-bold">Table</span></h3>
          <p>Trace only what's really important. <code>.table-hover</code> is made for it.</p>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><a href="#">ottoto@example.com</a></td>
                  <td><span class="badge bg-info rounded-pill">Pending</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><a href="#">fat.thor@example.com</a></td>
                  <td><span class="badge bg-warning">Unconfirmed</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td><a href="#">larry@example.com</a></td>
                  <td><span class="badge bg-primary">New</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Peter</td>
                  <td>Horadnia</td>
                  <td><a href="#">peter@example.com</a></td>
                  <td><span class="badge bg-danger">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </div>
      <div class="col-lg-6">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Bordered <span class="fw-semi-bold">Table</span></h3>
          <p>
            Each row is highlighted. You will never lost there. That&apos;s how
            all of us learned in school the table should look like. Just add
            <code>.table-bordered</code> to it.
          </p>
          <table class="table table-bordered table-lg mt-lg-1 mb-0">
            <thead class="text-uppercase">
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox10"
                      type="checkbox"
                      :checked="checkboxes2[0]"
                      @change="event => checkAll(event, 'checkboxes2')"
                    >
                    <label for="checkbox10" />
                  </div>
                </th>
                <th>Product</th>
                <th class="text-end">
                  Price
                </th>
                <th class="text-center">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox11"
                      type="checkbox"
                      :checked="checkboxes2[1]"
                      @change="event => changeCheck(event, 'checkboxes2', 1)"
                    >
                    <label for="checkbox11" />
                  </div>
                </td>
                <td>On the Road</td>
                <td class="text-end">
                  $25 224.2
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox12"
                      type="checkbox"
                      :checked="checkboxes2[2]"
                      @change="event => changeCheck(event, 'checkboxes2', 2)"
                    >
                    <label for="checkbox12" />
                  </div>
                </td>
                <td>HP Core i7</td>
                <td class="text-end">
                  $87 346.1
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox13"
                      type="checkbox"
                      :checked="checkboxes2[3]"
                      @change="event => changeCheck(event, 'checkboxes2', 3)"
                    >
                    <label for="checkbox13" />
                  </div>
                </td>
                <td>Let&apos;s Dance</td>
                <td class="text-end">
                  $57 944.6
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox14"
                      type="checkbox"
                      :checked="checkboxes2[4]"
                      @change="event => changeCheck(event, 'checkboxes2', 4)"
                    >
                    <label for="checkbox14" />
                  </div>
                </td>
                <td>Air Pro</td>
                <td class="text-end">
                  $118 533.1
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox15"
                      type="checkbox"
                      :checked="checkboxes2[5]"
                      @change="event => changeCheck(event, 'checkboxes2', 5)"
                    >
                    <label for="checkbox15" />
                  </div>
                </td>
                <td>Version Control</td>
                <td class="text-end">
                  $72 854.5
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Widget>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Overflow <span class="fw-semi-bold">Table</span></h3>
          <p>
            Add any non-bordered .table within a widget for a seamless design.
            Awesome look for no cost.
            Just wrap the table with simple css class <code>.widget-table-overflow</code> inside
            of widget
          </p>
          <div class="widget-table-overflow">
            <table class="table table-striped table-lg mt-lg mb-0">
              <thead>
                <tr>
                  <th>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox20"
                        type="checkbox"
                        :checked="checkboxes3[0]"
                        @change="event => checkAll(event, 'checkboxes3')"
                      >
                      <label for="checkbox20" />
                    </div>
                  </th>
                  <th>Product</th>
                  <th class="text-end">
                    Price
                  </th>
                  <th class="text-center">
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox21"
                        type="checkbox"
                        :checked="checkboxes3[1]"
                        @change="event => changeCheck(event, 'checkboxes3', 1)"
                      >
                      <label for="checkbox21" />
                    </div>
                  </td>
                  <td>On the Road</td>
                  <td class="text-end">
                    $25 224.2
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox22"
                        type="checkbox"
                        :checked="checkboxes3[2]"
                        @change="event => changeCheck(event, 'checkboxes3', 2)"
                      >
                      <label for="checkbox22" />
                    </div>
                  </td>
                  <td>HP Core i7</td>
                  <td class="text-end">
                    $87 346.1
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox23"
                        type="checkbox"
                        :checked="checkboxes3[3]"
                        @change="event => changeCheck(event, 'checkboxes3', 3)"
                      >
                      <label for="checkbox23" />
                    </div>
                  </td>
                  <td>Let&apos;s Dance</td>
                  <td class="text-end">
                    $57 944.6
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox24"
                        type="checkbox"
                        :checked="checkboxes3[4]"
                        @change="event => changeCheck(event, 'checkboxes3', 4)"
                      >
                      <label for="checkbox24" />
                    </div>
                  </td>
                  <td>Air Pro</td>
                  <td class="text-end">
                    $118 533.1
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox25"
                        type="checkbox"
                        :checked="checkboxes3[5]"
                        @change="event => changeCheck(event, 'checkboxes3', 5)"
                      >
                      <label for="checkbox25" />
                    </div>
                  </td>
                  <td>Version Control</td>
                  <td class="text-end">
                    $72 854.5
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import Sparklines from '@/components/Sparklines/Sparklines.vue'

import table1 from '@/assets/tables/1.jpg'
import table2 from '@/assets/tables/2.jpg'
import table3 from '@/assets/tables/3.jpg'
import table4 from '@/assets/tables/4.jpg'
import table5 from '@/assets/tables/5.jpg'

const appConfig = inject('appConfig')

const tableStyles = ref([
  {
    id: 1,
    picture: table1,
    description: 'Palo Alto',
    info: {
      type: 'JPEG',
      dimensions: '200x150',
    },
    date: new Date('September 14, 2012'),
    size: '45.6 KB',
    progress: {
      percent: 29,
      colorClass: 'success',
    },
  },
  {
    id: 2,
    picture: table2,
    description: 'The Sky',
    info: {
      type: 'PSD',
      dimensions: '2400x1455',
    },
    date: new Date('November 14, 2012'),
    size: '15.3 MB',
    progress: {
      percent: 33,
      colorClass: 'warning',
    },
  },
  {
    id: 3,
    picture: table3,
    description: 'Down the road',
    label: {
      colorClass: 'danger',
      text: 'INFO!',
    },
    info: {
      type: 'JPEG',
      dimensions: '200x150',
    },
    date: new Date('September 14, 2012'),
    size: '49.0 KB',
    progress: {
      percent: 38,
      colorClass: 'inverse',
    },
  },
  {
    id: 4,
    picture: table4,
    description: 'The Edge',
    info: {
      type: 'PNG',
      dimensions: '210x160',
    },
    date: new Date('September 15, 2012'),
    size: '69.1 KB',
    progress: {
      percent: 17,
      colorClass: 'danger',
    },
  },
  {
    id: 5,
    picture: table5,
    description: 'Fortress',
    info: {
      type: 'JPEG',
      dimensions: '1452x1320',
    },
    date: new Date('October 1, 2012'),
    size: '2.3 MB',
    progress: {
      percent: 41,
      colorClass: 'primary',
    },
  },
])

const checkboxes1 = reactive([false, false, false, false])
const checkboxes2 = reactive([false, false, false, false, false, false])
const checkboxes3 = reactive([false, false, false, false, false, false])

function parseDate(date) {
  const dateSet = date.toDateString().split(' ')
  return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`
}

function checkAll(ev, checkbox) {
  const checkboxArr = checkbox === 'checkboxes1' ? checkboxes1 :
                      checkbox === 'checkboxes2' ? checkboxes2 : checkboxes3
  const checked = ev.target.checked
  for (let i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i] = checked
  }
}

function changeCheck(ev, checkbox, id) {
  const checkboxArr = checkbox === 'checkboxes1' ? checkboxes1 :
                      checkbox === 'checkboxes2' ? checkboxes2 : checkboxes3
  checkboxArr[id] = ev.target.checked
  if (!ev.target.checked) {
    checkboxArr[0] = false
  }
}

function getRandomData() {
  const result = []
  for (let i = 0; i <= 8; i += 1) {
    result.push(Math.floor(Math.random() * 20) + 1)
  }
  return [{ data: result }]
}

function getRandomColor() {
  const { primary, success, info, danger, inverse, warning, secondary, gray } = appConfig?.colors || {}
  const colors = [info, primary, danger, success, inverse, warning, secondary, gray].filter(Boolean)
  return { colors: [colors[Math.floor(Math.random() * colors.length)] || '#21ae8c'] }
}
</script>

<style src="./Basic.scss" lang="scss" scoped />
