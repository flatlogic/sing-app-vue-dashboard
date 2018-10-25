<template>
  <div class="dynamic-tables">
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Tables Dynamic</b-breadcrumb-item>
    </b-breadcrumb>
    <h2 class="page-title">Tables - <span class="fw-semi-bold">Dynamic</span></h2>
    <Widget
      title="<h4>The <span class='fw-semi-bold'>Vue</span> Way</h4>"
      collapse close customHeader
    >
      <p>
        Fully customizable Table. Built with <a href="https://www.npmjs.com/package/vue-tables-2"
          target="_blank" rel="noopener noreferrer">vue-tables-2</a>
      </p>
      <v-client-table :data="dataDatatable" :columns="columnsDatatable" :options="optionsDatatable">
        <div slot="info" slot-scope="props">
          <small>
            Type:&nbsp;<span class="fw-semi-bold">{{props.row.info.type}}</span>
          </small>
          <br />
          <small>
            Dimensions:&nbsp;<span class="fw-semi-bold">{{props.row.info.dimensions}}</span>
          </small>
        </div>
        <a slot="description" slot-scope="props" href="#">{{props.row.description}}</a>
        <b-progress slot="status" slot-scope="props"
          :variant="props.row.status.type" :value="Number(props.row.status.progress)" :max="100" />
      </v-client-table>
    </Widget>
    <Widget
      title="<h4>Vue <span class='fw-semi-bold'>Tables</span></h4>"
      collapse close customHeader
    >
      <p>
        Another table built with <a href="https://www.npmjs.com/package/vue-tables-2"
          target="_blank" rel="noopener noreferrer">vue-tables-2</a>
      </p>
      <v-client-table :data="data" :columns="columns" :options="options" />
    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { vueTableData, vueDatatableData } from './data';

export default {
  name: 'Dynamic',
  components: { Widget },
  data() {
    return {
      columnsDatatable: ['id', 'name', 'info', 'description', 'status'],
      dataDatatable: vueDatatableData(),
      optionsDatatable: {
        perPage: 10,
        pagination: { chunk: 10, dropdown: false },
        texts: { filter: '', count: '', limit: '' },
        columnsClasses: { id: 'width-100' },
        skin: 'table table-striped',
        sortIcon: {
          base: 'fa text-muted', up: 'fa-chevron-up', down: 'fa-chevron-down', is: 'fa-sort',
        },
      },
      data: vueTableData(),
      columns: ['name', 'position', 'office', 'ext', 'startDate', 'salary'],
      options: {
        filterByColumn: true,
        perPage: 10,
        pagination: { chunk: 10, dropdown: false },
        filterable: ['name', 'position', 'office', 'ext', 'startDate', 'salary'],
      },
    };
  },
};
</script>

<style src="./Dynamic.scss" lang="scss" scoped />
