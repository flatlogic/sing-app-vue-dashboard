<template>
  <div class="dynamic-tables">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Dynamic</span>
    </h2>
    <Widget
      title="<h4>The <span class='fw-semi-bold'>Vue</span> Way</h4>"
      collapse
      close
      custom-header
    >
      <p>
        Fully customizable Table. Built with <a
          href="https://tanstack.com/table/latest"
          target="_blank"
          rel="noopener noreferrer"
        >TanStack Table</a>
      </p>

      <!-- First Table -->
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th
                v-for="header in datatableTable.getHeaderGroups()[0].headers"
                :key="header.id"
                :class="{ 'width-100': header.id === 'id', 'cursor-pointer': header.column.getCanSort() }"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <i
                  v-if="header.column.getCanSort()"
                  class="fa text-muted ms-1"
                  :class="{
                    'fa-sort': !header.column.getIsSorted(),
                    'fa-chevron-up': header.column.getIsSorted() === 'asc',
                    'fa-chevron-down': header.column.getIsSorted() === 'desc'
                  }"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in datatableTable.getRowModel().rows"
              :key="row.id"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
              >
                <template v-if="cell.column.id === 'info'">
                  <small>
                    Type:&nbsp;<span class="fw-semi-bold">{{ cell.getValue().type }}</span>
                  </small>
                  <br>
                  <small>
                    Dimensions:&nbsp;<span class="fw-semi-bold">{{ cell.getValue().dimensions }}</span>
                  </small>
                </template>
                <template v-else-if="cell.column.id === 'description'">
                  <a href="#">{{ cell.getValue() }}</a>
                </template>
                <template v-else-if="cell.column.id === 'status'">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      :class="`bg-${cell.getValue().type || 'primary'}`"
                      role="progressbar"
                      :style="`width: ${cell.getValue().progress}%`"
                      :aria-valuenow="cell.getValue().progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </template>
                <template v-else>
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination for first table -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          <select
            class="form-select form-select-sm"
            :value="datatableTable.getState().pagination.pageSize"
            @change="datatableTable.setPageSize(Number($event.target.value))"
          >
            <option
              v-for="size in [10, 25, 50]"
              :key="size"
              :value="size"
            >
              Show {{ size }}
            </option>
          </select>
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li
              class="page-item"
              :class="{ disabled: !datatableTable.getCanPreviousPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.previousPage()"
              >Previous</a>
            </li>
            <li
              v-for="page in datatablePaginationRange"
              :key="page"
              class="page-item"
              :class="{ active: datatableTable.getState().pagination.pageIndex === page - 1 }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.setPageIndex(page - 1)"
              >{{ page }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: !datatableTable.getCanNextPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.nextPage()"
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </Widget>

    <Widget
      title="<h4>Vue <span class='fw-semi-bold'>Tables</span></h4>"
      collapse
      close
      custom-header
    >
      <p>
        Another table built with <a
          href="https://tanstack.com/table/latest"
          target="_blank"
          rel="noopener noreferrer"
        >TanStack Table</a>
      </p>

      <!-- Second Table with Column Filtering -->
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th
                v-for="header in mainTable.getHeaderGroups()[0].headers"
                :key="header.id"
                class="cursor-pointer"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <i
                  v-if="header.column.getCanSort()"
                  class="fa text-muted ms-1"
                  :class="{
                    'fa-sort': !header.column.getIsSorted(),
                    'fa-chevron-up': header.column.getIsSorted() === 'asc',
                    'fa-chevron-down': header.column.getIsSorted() === 'desc'
                  }"
                />
              </th>
            </tr>
            <tr>
              <th
                v-for="header in mainTable.getHeaderGroups()[0].headers"
                :key="header.id + '-filter'"
              >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :placeholder="`Filter ${header.column.columnDef.header}`"
                  :value="header.column.getFilterValue() ?? ''"
                  @input="header.column.setFilterValue($event.target.value)"
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in mainTable.getRowModel().rows"
              :key="row.id"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination for second table -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          <select
            class="form-select form-select-sm"
            :value="mainTable.getState().pagination.pageSize"
            @change="mainTable.setPageSize(Number($event.target.value))"
          >
            <option
              v-for="size in [10, 25, 50]"
              :key="size"
              :value="size"
            >
              Show {{ size }}
            </option>
          </select>
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li
              class="page-item"
              :class="{ disabled: !mainTable.getCanPreviousPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="mainTable.previousPage()"
              >Previous</a>
            </li>
            <li
              v-for="page in mainPaginationRange"
              :key="page"
              class="page-item"
              :class="{ active: mainTable.getState().pagination.pageIndex === page - 1 }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="mainTable.setPageIndex(page - 1)"
              >{{ page }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: !mainTable.getCanNextPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="mainTable.nextPage()"
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </Widget>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  useVueTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  FlexRender
} from '@tanstack/vue-table'
import Widget from '@/components/Widget/Widget.vue'
import { vueTableData, vueDatatableData } from './data'

// First table (Datatable)
const datatableData = ref(vueDatatableData())
const datatableColumns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'info', header: 'Info' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'status', header: 'Status' }
]

const datatableTable = useVueTable({
  data: datatableData,
  columns: datatableColumns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: { pageSize: 10 }
  }
})

const datatablePaginationRange = computed(() => {
  const pageCount = datatableTable.getPageCount()
  const currentPage = datatableTable.getState().pagination.pageIndex + 1
  const range = []
  const delta = 2

  for (let i = Math.max(1, currentPage - delta); i <= Math.min(pageCount, currentPage + delta); i++) {
    range.push(i)
  }
  return range
})

// Second table (Main)
const mainData = ref(vueTableData())
const mainColumns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'position', header: 'Position' },
  { accessorKey: 'office', header: 'Office' },
  { accessorKey: 'ext', header: 'Ext' },
  { accessorKey: 'startDate', header: 'Start Date' },
  {
    accessorKey: 'salary',
    header: 'Salary',
    cell: ({ getValue }) => `$${getValue().toFixed(2)}`
  }
]

const mainTable = useVueTable({
  data: mainData,
  columns: mainColumns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  initialState: {
    pagination: { pageSize: 10 }
  }
})

const mainPaginationRange = computed(() => {
  const pageCount = mainTable.getPageCount()
  const currentPage = mainTable.getState().pagination.pageIndex + 1
  const range = []
  const delta = 2

  for (let i = Math.max(1, currentPage - delta); i <= Math.min(pageCount, currentPage + delta); i++) {
    range.push(i)
  }
  return range
})
</script>

<style src="./Dynamic.scss" lang="scss" />
