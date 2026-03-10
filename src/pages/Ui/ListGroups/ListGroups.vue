<template>
  <div class="list-groups-page">
    <h1 class="page-title">
      Lists - <span class="fw-semi-bold">Sortable Groups</span>
    </h1>
    <Widget
      title="<h4> Grouped <span class='fw-semi-bold'>Lists</span></h4>"
      close
      refresh
      settings
      custom-header
    >
      <h5>Closest <span class="fw-semi-bold">Stars</span></h5>
      <p>
        Try to play around with this list. Are you ready to pass an exam on astronomy?
      </p>
      <draggable
        v-model="sortableList"
        item-key="id"
        handle=".fa-sort"
        :animation="200"
      >
        <template #item="{ element }">
          <div class="px-4 py-3 border mb-sm list-element d-flex justify-content-between align-items-center">
            <div>
              <i class="fa fa-sort me-sm-1" />
              <span class="me-sm-1">{{ element.id }}</span>{{ element.text }}
            </div>
            <i class="fa fa-times text-muted" />
          </div>
        </template>
      </draggable>
    </Widget>
    <Widget
      title="<h4>Nestable <span class='fw-semi-bold'>List</span></h4>"
      close
      refresh
      settings
      custom-header
    >
      <p class="fs-mini">
        There is a scientific theory that you can arrange this list in such way that there will
        be no more sadness
        in the whole world. Can you? Touch devices supported
      </p>
      <div class="row nestable">
        <div class="col-md-6 col-12 mb-3">
          <NestableList
            v-model:items="nestableFirstItems"
            group="nestable"
          />
        </div>
        <div class="col-md-6 col-12">
          <NestableList
            v-model:items="nestableSecondItems"
            group="nestable"
          />
        </div>
      </div>
    </Widget>
  </div>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'
import draggable from 'vuedraggable'
import Widget from '@/components/Widget/Widget.vue'

const sortableList = ref([
  { id: '03', text: " Barnard's Star" },
  { id: '01', text: 'The Sun' },
  { id: '04', text: 'Wolf 359' },
  { id: '02', text: 'Proxima Centauri' },
  { id: '05', text: 'Lalande 21185' }
])

const nestableFirstItems = ref([
  { id: 1, text: 'Item 1', children: [] },
  {
    id: 2,
    text: 'Item 2',
    open: true,
    children: [
      { id: 3, text: 'Item 3', children: [] },
      { id: 4, text: 'Item 4', children: [] },
      {
        id: 5,
        text: 'Item 5',
        open: true,
        children: [
          { id: 6, text: 'Item 6', children: [] },
          { id: 7, text: 'Item 7', children: [] },
          { id: 8, text: 'Item 8', children: [] }
        ]
      },
      { id: 9, text: 'Item 9', children: [] }
    ]
  }
])

const nestableSecondItems = ref([
  { id: 13, text: 'Item 13', children: [] },
  { id: 14, text: 'Item 14', children: [] },
  {
    id: 15,
    text: 'Item 15',
    open: true,
    children: [
      { id: 16, text: 'Item 16', children: [] },
      { id: 17, text: 'Item 17', children: [] },
      { id: 18, text: 'Item 18', children: [] }
    ]
  }
])

// Simple nestable list component using vuedraggable
const NestableList = defineComponent({
  name: 'NestableList',
  props: {
    items: {
      type: Array,
      required: true
    },
    group: {
      type: String,
      default: 'nested'
    }
  },
  emits: ['update:items'],
  setup(props, { emit }) {
    const toggleItem = (item) => {
      item.open = !item.open
    }

    const renderItem = (item) => {
      const hasChildren = item.children && item.children.length > 0

      return h('div', { class: 'd-flex align-items-start mb-2', key: item.id }, [
        hasChildren ? h('div', {
          onClick: () => toggleItem(item),
          style: { cursor: 'pointer' }
        }, [
          h('span', { class: 'bg-secondary border rounded-circle me-2 text-white d-inline-flex align-items-center justify-content-center', style: { width: '24px', height: '24px' } }, item.open ? '-' : '+')
        ]) : null,
        h('div', { class: 'flex-grow-1' }, [
          h('div', { class: 'px-3 py-3 border list-element d-flex' }, [
            h('div', { class: 'drag bg-secondary px-3 py-3 me-2', style: { cursor: 'grab' } }, [
              h('i', { class: 'fa fa-bars text-white' })
            ]),
            h('span', {}, item.text)
          ]),
          hasChildren && item.open ? h(NestableList, {
            items: item.children,
            'onUpdate:items': (val) => { item.children = val },
            group: props.group,
            class: 'ms-4 mt-2'
          }) : null
        ])
      ])
    }

    return () => h(draggable, {
      modelValue: props.items,
      'onUpdate:modelValue': (val) => {
        emit('update:items', val)
      },
      itemKey: 'id',
      group: props.group,
      animation: 200,
      handle: '.drag'
    }, {
      item: ({ element }) => renderItem(element)
    })
  }
})
</script>

<style src="./ListGroups.scss" lang="scss" />
