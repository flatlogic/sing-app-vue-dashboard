<template>
  <div class="mb-xlg">
    <Widget
      class="h-100"
      bodyClass="p-0 mt-0"
    >
      <div class="d-flex justify-content-between flex-wrap px-4">
        <h4 class='d-flex align-items-center pb-1 bigStatTitle'>
          <span :class="`circle bg-${color} me-sm-1`" :style="{ fontSize: '6px' }" />
            Statistic <span class="fw-normal ms-sm-1">{{product}}</span>
        </h4>
        <b-dropdown :text="text" variant="white" size="sm">
          <b-dropdown-item-button @click="changeText('Daily')">Daily</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Weekly')">Weekly</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Yearly')">Yearly</b-dropdown-item-button>
        </b-dropdown>
      </div>
      <div class="px-5">
        <h4 class="fw-semi-bold mt-sm mb-sm">{{total}}</h4>
        <div class="d-flex">
          <div class="w-50 py-3 pe-2">
            <div class="d-flex align-items-start">
              <h6>+{{registrations.value}}</h6>
              <i
                :class="`la la-arrow-right ms-3 text-${registrations.profit ? 'success' : 'danger'}
                rotate-${registrations.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 me-2"><small>Registrations</small></p>
          </div>
          <div class="w-50 py-3 ps-2">
            <div class="d-flex align-items-start">
              <h6>{{bounce.value}}%</h6>
              <i
                :class="`la la-arrow-right la-lg ms-2 text-${bounce.profit ? 'primary' : 'danger'}
                rotate-${bounce.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 me-0"><small>Bounce Rate</small></p>
          </div>
        </div>
      </div>
    </Widget>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'BigStat',
  props: ['product', 'color', 'total', 'registrations', 'bounce'],
  components: { Widget },
  data() {
    return {
      text: 'Daily',
    };
  },
  methods: {
    changeText(text) {
      Vue.set(this, 'text', text);
    },
  },
};
</script>

<style src="./BigStat.scss" lang="scss" scoped />
