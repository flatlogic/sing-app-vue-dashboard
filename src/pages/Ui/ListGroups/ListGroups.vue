<template>
  <div class="list-groups-page">
    <h1 class="page-title">Lists - <span class="fw-semi-bold">Sortable Groups</span>
    </h1>
    <Widget
      title="<h4> Grouped <span class='fw-semi-bold'>Lists</span></h4>"
      close refresh settings customHeader
    >
      <h5>Closest <span class="fw-semi-bold">Stars</span></h5>
      <p>
        Try to play around with this list. Are you ready to pass an exam on astronomy?
      </p>
      <draggable v-model="sortableList">
          <div
            class="px-4 py-3 border mb-sm list-element d-flex
            justify-content-between align-items-center"
            v-for="element in sortableList" :key="element.id">
            <div>
              <i class="fa fa-sort me-sm-1" />
              <span class="me-sm-1">{{element.id}}</span>{{element.text}}
            </div>
            <i class="fa fa-times text-muted" />
          </div>
      </draggable>
    </Widget>
    <Widget
      title="<h4>Nestable <span class='fw-semi-bold'>List</span></h4>"
      close refresh settings customHeader
    >
      <p class="fs-mini">
        There is a scientific theory that you can arrange this list in such way that there will
        be no more saddness
        in the whole world. Can you? Touch devices supported
      </p>
      <b-row class={s.nestable}>
        <b-col md="6" xs="12" className="mb-sm-1">
          <DraggableTree class="tree" :data="nestableFirstItems"
            draggable="draggable" cross-tree="cross-tree">
            <div slot-scope="{data, store}">
              <template v-if="!data.isDragPlaceHolder">
                <div class="d-flex align-items-center">
                  <div
                    v-if="data.children && data.children.length"
                    @click="store.toggleOpen(data)"
                  >
                    <span class="bg-secondary border circle me-3 text-white">{{data.open ? '-' : '+'}}</span>
                  </div>
                  <div  :class="{ 'px-3 py-3 border list-element d-flex': true,
                    'no-child': !data.children.length }">
                    <div class="drag bg-secondary px-3 py-3">
                      <i class="fa fa-bars text-white"></i>
                    </div>
                    <span class="ml">{{data.text}}</span>
                  </div>
                </div>
              </template>
            </div>
          </DraggableTree>
        </b-col>
        <b-col md="6">
          <DraggableTree class="tree" :data="nestableSecondItems"
            draggable="draggable" cross-tree="cross-tree">
            <div slot-scope="{data, store}">
              <template v-if="!data.isDragPlaceHolder">
                <div class="d-flex align-items-center">
                  <div
                    v-if="data.children && data.children.length"
                    @click="store.toggleOpen(data)"
                  >
                    <span class="bg-secondary border circle me-3 text-white">{{data.open ? '-' : '+'}}</span>
                  </div>
                  <div  :class="{ 'px-3 py-3 border list-element d-flex': true,
                    'no-child': !data.children.length }">
                    <div class="drag bg-secondary px-3 py-3">
                      <i class="fa fa-bars text-white"></i>
                    </div>
                    <span class="ml">{{data.text}}</span>
                  </div>
                </div>
              </template>
            </div>
          </DraggableTree>
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { DraggableTree } from 'vue-draggable-nested-tree';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'ListGroups',
  components: { Widget, draggable, DraggableTree },
  data() {
    return {
      sortableList: [{
        id: '03', text: ' Barnard\'s Star',
      }, {
        id: '01', text: 'The Sun',
      }, {
        id: '04', text: 'Wolf 359',
      }, {
        id: '02', text: 'Proxima Centauri',
      }, {
        id: '05', text: 'Lalande 21185',
      }],
      nestableFirstItems: [
        { id: 1, text: 'Item 1' },
        {
          id: 2,
          expanded: true,
          text: 'Item 2',
          children: [
            { id: 3, text: 'Item 3' },
            { id: 4, text: 'Item 4' },
            {
              id: 5,
              text: 'Item 5',
              expanded: true,
              children: [
                { id: 6, text: 'Item 6' },
                { id: 7, text: 'Item 7' },
                { id: 8, text: 'Item 8' },
              ],
            },
            { id: 9, text: 'Item 9' },
          ],
        },
      ],
      nestableSecondItems: [
        { id: 13, text: 'Item 13' },
        { id: 14, text: 'Item 14' },
        {
          id: 15,
          expanded: true,
          text: 'Item 15',
          children: [
            { id: 16, text: 'Item 16' },
            { id: 17, text: 'Item 17' },
            { id: 18, text: 'Item 18' },
          ],
        },
      ],
    };
  },
};
</script>

<style src="./ListGroups.scss" lang="scss" />
