<template>
  <Widget>
    <div class="compose">
      <h4 class="mb-lg">Compose <span class="fw-semi-bold">New</span></h4>
      <b-form-input class="mb" type="text" placeholder="To" :value="data && data.from" />
      <b-form-input class="mb" type="text" placeholder="Subject" :value="data && data.theme" />
      <trumbowyg v-model="wygContent"></trumbowyg>
      <div class="text-md-right mt">
        <b-button class="ml-xs" variant="gray">Discard</b-button>
        <b-button class="ml-xs" variant="gray">Save</b-button>
        <b-button class="ml-xs" variant="danger">Send</b-button>
      </div>
    </div>
  </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Compose',
  components: { Widget },
  props: ['data'],
  data() {
    return {
      wygContent: '',
    };
  },
};
</script>
