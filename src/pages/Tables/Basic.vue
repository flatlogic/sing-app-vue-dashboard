<template>
  <div class="tables-basic">
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Static</span></h2>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th class="hidden-sm-down">Info</th>
                  <th class="hidden-sm-down">Date</th>
                  <th class="hidden-sm-down">Size</th>
                  <th class="hidden-sm-down">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td>
                    <img class="img-rounded" :src="row.picture" alt="" height="50" />
                  </td>
                  <td>
                    {{row.description}}
                    <div v-if="row.label">
                      <b-badge :variant="row.label.colorClass">{{row.label.text}}</b-badge>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">Type:</span>
                        <span class="text-muted">&nbsp; {{row.info.type}}</span>
                      </small>
                    </p>
                    <p>
                      <small>
                        <span class="fw-semi-bold">Dimensions:</span>
                        <span class="text-muted">&nbsp; {{row.info.dimensions}}</span>
                      </small>
                    </p>
                  </td>
                  <td class="text-semi-muted">
                    {{parseDate(row.date)}}
                  </td>
                  <td class="text-semi-muted">
                    {{row.size}}
                  </td>
                  <td class="width-150">
                    <b-progress
                      :variant="row.progress.colorClass" :value="row.progress.percent" :max="100"
                      class="progress-sm mb-xs"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-3" size="sm">Send to...</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
     <b-col lg="6">
       <Widget
         title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
         customHeader settings close
       >
         <h3>Stripped <span class="fw-semi-bold">Table</span></h3>
         <p>Each row is highlighted. You will never lost
           there. Just <code>.table-striped</code> it.</p>
         <table class="table table-striped">
           <thead>
             <tr>
               <th>
                 <div class="abc-checkbox">
                   <input type="checkbox"
                     id="checkbox1" :checked="checkboxes1[0]"
                     @change="event => checkAll(event, 'checkboxes1')"
                   />
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
                   <input type="checkbox"
                     id="checkbox2" :checked="checkboxes1[1]"
                     @change="event => changeCheck(event, 'checkboxes1', 1)"
                   />
                   <label for="checkbox2" />
                 </div>
               </td>
               <td>Mark</td>
               <td>Otto</td>
               <td><b-badge variant="success">Online</b-badge></td>
             </tr>
             <tr>
               <td>
                 <div class="abc-checkbox">
                   <input type="checkbox"
                     id="checkbox3" :checked="checkboxes1[2]"
                     @change="event => changeCheck(event, 'checkboxes1', 2)"
                   />
                   <label for="checkbox3" />
                 </div>
               </td>
               <td>Jacob <b-badge variant="warning" class="text-gray-dark">ALERT!</b-badge></td>
               <td>Thornton</td>
               <td><b-badge variant="gray">Away</b-badge></td>
             </tr>
             <tr>
               <td>
                 <div class="abc-checkbox">
                   <input type="checkbox"
                     id="checkbox4" :checked="checkboxes1[3]"
                     @change="event => changeCheck(event, 'checkboxes1', 3)"
                   />
                   <label for="checkbox4" />
                 </div>
               </td>
               <td>Larry</td>
               <td>the Bird</td>
               <td><b-badge variant="danger">Construct</b-badge></td>
             </tr>
           </tbody>
         </table>
         <br /><br />
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
                 <td><b-badge variant="primary" pill>Pending</b-badge></td>
               </tr>
               <tr>
                 <td>2</td>
                 <td>Jacob</td>
                 <td>Thornton</td>
                 <td><a href="#">fat.thor@example.com</a></td>
                 <td><b-badge variant="info" pill>Unconfirmed</b-badge></td>
               </tr>
               <tr>
                 <td>3</td>
                 <td>Larry</td>
                 <td>the Bird</td>
                 <td><a href="#">larry@example.com</a></td>
                 <td><b-badge variant="success" pill>New</b-badge></td>
               </tr>
               <tr>
                 <td>4</td>
                 <td>Peter</td>
                 <td>Horadnia</td>
                 <td><a href="#">peter@example.com</a></td>
                 <td><b-badge variant="warning" pill>Active</b-badge></td>
               </tr>
             </tbody>
           </table>
         </div>
       </Widget>
     </b-col>
     <b-col lg="6">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader ettings close
        >
          <h3>Bordered <span class="fw-semi-bold">Table</span></h3>
          <p>Each row is highlighted. You will never lost there. That&apos;s how
            all of us learned in school the table should look like. Just add
            <code>.table-bordered</code> to it.</p>
          <table class="table table-bordered table-lg mt-lg mb-0">
            <thead class="text-uppercase">
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox10" :checked="checkboxes2[0]"
                      @change="event => checkAll(event, 'checkboxes2')"
                    />
                    <label for="checkbox10" />
                  </div>
                </th>
                <th>Product</th>
                <th class="text-right">Price</th>
                <th class="text-center">Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox11" :checked="checkboxes2[1]"
                      @change="event => changeCheck(event, 'checkboxes2', 1)"
                    />
                    <label for="checkbox11" />
                  </div>
                </td>
                <td>On the Road</td>
                <td class="text-right">$25 224.2</td>
                <td class="text-center">
                  <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox12" :checked="checkboxes2[2]"
                      @change="event => changeCheck(event, 'checkboxes2', 2)"
                    />
                    <label for="checkbox12" />
                  </div>
                </td>
                <td>HP Core i7</td>
                <td class="text-right">$87 346.1</td>
                <td class="text-center">
                  <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox13" :checked="checkboxes2[3]"
                      @change="event => changeCheck(event, 'checkboxes2', 3)"
                    />
                    <label for="checkbox13" />
                  </div>
                </td>
                <td>Let&apos;s Dance</td>
                <td class="text-right">$57 944.6</td>
                <td class="text-center">
                  <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox14" :checked="checkboxes2[4]"
                      @change="event => changeCheck(event, 'checkboxes2', 4)"
                    />
                    <label for="checkbox14" />
                  </div>
                </td>
                <td>Air Pro</td>
                <td class="text-right">$118 533.1</td>
                <td class="text-center">
                  <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                      id="checkbox15" :checked="checkboxes2[5]"
                      @change="event => changeCheck(event, 'checkboxes2', 5)"
                    />
                    <label for="checkbox15" />
                  </div>
                </td>
                <td>Version Control</td>
                <td class="text-right">$72 854.5</td>
                <td class="text-center">
                  <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                </td>
              </tr>
            </tbody>
          </table>
        </Widget>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
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
                      <input type="checkbox"
                        id="checkbox20" :checked="checkboxes3[0]"
                        @change="event => checkAll(event, 'checkboxes3')"
                      />
                      <label for="checkbox20" />
                    </div>
                  </th>
                  <th>Product</th>
                  <th class="text-right">Price</th>
                  <th class="text-center">Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox21" :checked="checkboxes3[1]"
                        @change="event => changeCheck(event, 'checkboxes3', 1)"
                      />
                      <label for="checkbox21" />
                    </div>
                  </td>
                  <td>On the Road</td>
                  <td class="text-right">$25 224.2</td>
                  <td class="text-center">
                    <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox22" :checked="checkboxes3[2]"
                        @change="event => changeCheck(event, 'checkboxes3', 2)"
                      />
                      <label for="checkbox22" />
                    </div>
                  </td>
                  <td>HP Core i7</td>
                  <td class="text-right">$87 346.1</td>
                  <td class="text-center">
                    <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox23" :checked="checkboxes3[3]"
                        @change="event => changeCheck(event, 'checkboxes3', 3)"
                      />
                      <label for="checkbox23" />
                    </div>
                  </td>
                  <td>Let&apos;s Dance</td>
                  <td class="text-right">$57 944.6</td>
                  <td class="text-center">
                    <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox24" :checked="checkboxes3[4]"
                        @change="event => changeCheck(event, 'checkboxes3', 4)"
                      />
                      <label for="checkbox24" />
                    </div>
                  </td>
                  <td>Air Pro</td>
                  <td class="text-right">$118 533.1</td>
                  <td class="text-center">
                    <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input type="checkbox"
                        id="checkbox25" :checked="checkboxes3[5]"
                        @change="event => changeCheck(event, 'checkboxes3', 5)"
                      />
                      <label for="checkbox25" />
                    </div>
                  </td>
                  <td>Version Control</td>
                  <td class="text-right">$72 854.5</td>
                  <td class="text-center">
                    <Sparklines :data="getRandomData()" :options="getRandomColor()"></Sparklines>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
   </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Sparklines from '../../components/Sparklines/Sparklines'

export default {
  name: 'Tables',
  components: { Widget, Sparklines },
  data() {
    return {
      tableStyles: [
        {
          id: 1,
          picture: require('../../assets/tables/1.jpg'), // eslint-disable-line global-require
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
          picture: require('../../assets/tables/2.jpg'), // eslint-disable-line global-require
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
          picture: require('../../assets/tables/3.jpg'), // eslint-disable-line global-require
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
          picture: require('../../assets/tables/4.jpg'), // eslint-disable-line global-require
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
          picture: require('../../assets/tables/5.jpg'), // eslint-disable-line global-require
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
      ],
      checkboxes1: [false, false, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };
  },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },
    checkAll(ev, checkbox) {
      const checkboxArr = (new Array(this[checkbox].length)).fill(ev.target.checked);
      Vue.set(this, checkbox, checkboxArr);
    },
    changeCheck(ev, checkbox, id) {
      this[checkbox][id] = ev.target.checked;
      if (!ev.target.checked) {
        this[checkbox][0] = false;
      }
    },
    getRandomData() {
      const result = [];

      for (let i = 0; i <= 8; i += 1) {
        result.push(Math.floor(Math.random() * 20) + 1);
      }

      return [{data: result}];
    },
    getRandomColor() {
      const {primary, success, info, danger} = this.appConfig.colors;
      const colors = [info, primary, danger, success];
      return {colors: [colors[Math.floor(Math.random() * colors.length)]]}
    }
  },
};
</script>

<style src="./Basic.scss" lang="scss" scoped />
