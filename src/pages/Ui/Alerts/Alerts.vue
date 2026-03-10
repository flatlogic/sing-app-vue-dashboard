<template>
  <div>
    <h1 class="page-title">
      Alerts
    </h1>
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <Widget
          title="<h5>Alert <span class='fw-semi-bold'>Messages</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
          <div
            v-for="alert in alerts"
            :key="alert.id"
            :class="['alert', `alert-${alert.type}`, 'alert-dismissible', 'fade', 'show']"
            role="alert"
          >
            <span v-html="alert.msg" />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            />
          </div>
        </Widget>
      </div>
      <div class="col-md-12 col-lg-6">
        <Widget
          title="<h5>Transparent <span class='fw-semi-bold'>Alerts</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Transparent  alerts are available by adding <code>.alert-transparent</code> class.</p>
          <div
            v-for="alert in alerts"
            :key="alert.id"
            :class="['alert', 'alert-transparent', `alert-${alert.type}`, 'alert-dismissible', 'fade', 'show']"
            role="alert"
          >
            <span v-html="alert.msg" />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            />
          </div>
        </Widget>
      </div>
      <div class="col-md-12 col-lg-6">
        <Widget
          title="<h5>Rounded <span class='fw-semi-bold'>Alerts</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Rounded alerts are available by adding <code>.alert-rounded</code> class.</p>
          <div
            v-for="(alert, index) in alerts"
            :key="alert.id"
            :class="['alert', 'alert-rounded', `alert-${alert.type}`, 'alert-dismissible', 'fade', 'show', { 'alert-transparent': index % 2 === 0 }]"
            role="alert"
          >
            <span v-html="alert.msg" />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            />
          </div>
        </Widget>
      </div>
      <div class="col-md-12 col-lg-6">
        <Widget
          title="<h5>Additional <span class='fw-semi-bold'>Content</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Alerts can also contain additional HTML
            elements like headings, paragraphs and dividers.
          </p>
          <div
            class="alert alert-success"
            role="alert"
          >
            <h4 class="alert-heading">
              Well done!
            </h4>
            <p>
              Aww yeah, you successfully read this important
              alert message. This example text is going
              to run a bit longer so that you can see how
              spacing within an alert works with this kind
              of content.
            </p>
            <hr>
            <p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </div>
          <div
            class="alert alert-danger"
            role="alert"
          >
            <h4 class="alert-heading">
              Well done!
            </h4>
            <p>
              Aww yeah, you successfully read this important
              alert message. This example text is going
              to run a bit longer so that you can see how
              spacing within an alert works with this kind
              of content.
            </p>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Widget from '@/components/Widget/Widget.vue';

const alerts = ref([{
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
  msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-end mr" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-end me-sm-1" href="#">Take this action</a>',
  visible: [true, true, true],
}]);
</script>

<style src="./Alerts.scss" lang="scss" />
