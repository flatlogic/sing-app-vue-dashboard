<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Alerts</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Alerts</h1>
    <b-row>
      <b-col xs='12' md='8'>
        <Widget
          title="<h5>Alert <span class='fw-semi-bold'>Messages</span></h5>"
          close collapse customHeader
        >
          <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
          <b-alert
            v-for="alert in alerts"
            :key="alert.id" show dismissible
            :variant="alert.type"
          >
            <span v-html="alert.msg" />
          </b-alert>
        </Widget>
      </b-col>
      <b-col xs='12' md='8'>
        <Widget
          title="<h5>Transparent <span class='fw-semi-bold'>Alerts</span></h5>"
          close collapse customHeader
        >
          <p>Transparent  alerts are available by adding <code>.alert-transparent</code> class.</p>
          <b-alert
            class="alert-transparent"
            v-for="alert in alerts"
            :key="alert.id" show dismissible
            :variant="alert.type"
          >
            <span v-html="alert.msg" />
          </b-alert>
        </Widget>
      </b-col>
      <b-col xs='12' md='8'>
        <Widget
          title="<h5>Rounded <span class='fw-semi-bold'>Alerts</span></h5>"
          close collapse customHeader
        >
          <p>Rounded alerts are available by adding <code>.alert-rounded</code> class.</p>
          <b-alert
            :class="{ 'alert-rounded': true, 'alert-transparent': index % 2 === 0 }"
            v-for="(alert, index) in alerts"
            :key="alert.id" show dismissible
            :variant="alert.type"
          >
            <span v-html="alert.msg" />
          </b-alert>
        </Widget>
      </b-col>
      <b-col xs='12' md='8'>
        <Widget
          title="<h5>Additional <span class='fw-semi-bold'>Content</span></h5>"
          close collapse customHeader
        >
          <p>
            Alerts can also contain additional HTML
            elements like headings, paragraphs and dividers.
          </p>
          <b-alert variant="success" show>
            <h4 class="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important
              alert message. This example text is going
              to run a bit longer so that you can see how
              spacing within an alert works with this kind
              of content.
            </p>
            <hr />
            <p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </b-alert>
          <b-alert variant="danger" show>
            <h4 class="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important
              alert message. This example text is going
              to run a bit longer so that you can see how
              spacing within an alert works with this kind
              of content.
            </p>
          </b-alert>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Alerts',
  components: { Widget },
  data() {
    return {
      alerts: [{
        id: 'al-1',
        type: 'success',
        msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
        visible: [true, true, true],
      }, {
        id: 'al-2',
        type: 'info',
        msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
        visible: [true, true, true],
      }, {
        id: 'al-3',
        type: 'warning',
        msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
        visible: [true, true, true],
      }, {
        id: 'al-4',
        type: 'danger',
        msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>',
        visible: [true, true, true],
      }],
    };
  },
};
</script>
