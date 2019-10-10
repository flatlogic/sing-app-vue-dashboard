<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Alerts</h2>
      <p class="mb-4">Provide contextual feedback messages for typical user actions with the handful of available
        and flexible alert messages.</p>
      <vue-code-highlight>import { BAlert } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
          <b-alert v-for="alert in alerts"
                   :key="alert.id"
                   :variant="alert.type"
                   show
                   dismissible
          >
            <span v-html="alert.msg"></span>
          </b-alert>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-alert
  :variant="warning"
  show
  dismissible
&gt;
  &lt;h1&gt;Alert Content&lt;/h1&gt;
&lt;/b-alert&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab title="Example" active>
          <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
          <b-alert v-for="alert in alerts"
                   :key="alert.id"
                   :variant="alert.type"
                   show
                   dismissible
                   class="alert-transparent"
          >
            <span v-html="alert.msg"></span>
          </b-alert>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-alert
  :variant="warning"
  show
  dismissible
  class="alert-transparent"
&gt;
  &lt;h1&gt;Alert Content&lt;/h1&gt;
&lt;/b-alert&gt;
          </vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/alert/" target="_blank"
                                            rel="noopener noreferrer">Bootstrap Vue Alerts</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocAlerts',
    data() {
      return {
        alerts: [{
          id: 'al-1',
          type: 'success',
          msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
        }, {
          id: 'al-2',
          type: 'info',
          msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
        }, {
          id: 'al-3',
          type: 'warning',
          msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
        }, {
          id: 'al-4',
          type: 'danger',
          msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
        }]
      }
    }
  }
</script>
