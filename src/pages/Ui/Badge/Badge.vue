<template>
  <div>
    <h1 class="page-title">Badge</h1>
    <b-row>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Badge <span class='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <h1>Example heading <b-badge class="bg-primary">Primary</b-badge></h1>
          <h2>Example heading <b-badge class="bg-info">Info</b-badge></h2>
          <h3>Example heading <b-badge class="bg-warning">Warning</b-badge></h3>
          <h4>Example heading <b-badge class="bg-success">Success</b-badge></h4>
          <h5>Example heading <b-badge class="bg-danger">Danger</b-badge></h5>
          <h6>Example heading <b-badge class="bg-secondary">Secondary</b-badge></h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <b-button variant="primary">Notifications <b-badge class="bg-danger">4</b-badge></b-button>
        </Widget>
      </b-col>
      <b-col xs="12" md="6" class="px-0">
          <b-col xs="12">
            <Widget
                title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
                close collapse customHeader
            >
              <p>
                Use the <code>pill</code> property to make badges more rounded
                (with a larger border-radius and additional horizontal padding).
              </p>
              <b-badge class="me-3 mb-3 bg-primary" pill>Primary</b-badge>
              <b-badge class="me-3 mb-3 bg-info" variant="info" pill>Info</b-badge>
              <b-badge class="me-3 mb-3 bg-warning" pill>Warning</b-badge>
              <b-badge class="me-3 mb-3 bg-success" pill>Success</b-badge>
              <b-badge class="me-3 mb-3 bg-danger" pill>Danger</b-badge>
              <b-badge class="me-3 mb-3 bg-secondary" pill>Secondary</b-badge>
              <b-badge class="me-3 mb-3 bg-light text-black" pill>Light</b-badge>
              <b-badge class="me-3 mb-3 bg-dark" pill>Dark</b-badge>
            </Widget>
          </b-col>
          <b-col xs="12">
            <Widget
                title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
                close collapse customHeader
            >
              <p>
                Using the contextual <code>href=&quot;&#35;&quot;</code> classes on
                an <code>&lt;Badge&gt;</code> element quickly provide
                actionable badges with hover and focus states.
              </p>
              <b-badge class="me-3 mb-3 bg-primary" href="#">Primary</b-badge>
              <b-badge class="me-3 mb-3 bg-info" href="#">Info</b-badge>
              <b-badge class="me-3 mb-3 bg-warning" href="#">Warning</b-badge>
              <b-badge class="me-3 mb-3 bg-success" href="#">Success</b-badge>
              <b-badge class="me-3 mb-3 bg-danger" href="#">Danger</b-badge>
              <b-badge class="me-3 mb-3 bg-secondary" href="#">Secondary</b-badge>
              <b-badge class="me-3 mb-3 bg-light text-black" href="#">Light</b-badge>
              <b-badge class="me-3 mb-3 bg-dark" href="#">Dark</b-badge>
            </Widget>
          </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'BadgePage',
  components: { Widget },
};
</script>
