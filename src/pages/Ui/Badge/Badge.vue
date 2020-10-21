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
          <h1>Example heading <b-badge variant="primary">Primary</b-badge></h1>
          <h2>Example heading <b-badge variant="info">Info</b-badge></h2>
          <h3>Example heading <b-badge variant="warning">Warning</b-badge></h3>
          <h4>Example heading <b-badge variant="success">Success</b-badge></h4>
          <h5>Example heading <b-badge variant="danger">Danger</b-badge></h5>
          <h6>Example heading <b-badge variant="secondary">Secondary</b-badge></h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <b-button variant="primary">Notifications <b-badge variant="danger">4</b-badge></b-button>
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
              <b-badge class="mr-3 mb-3" variant="primary" pill>Primary</b-badge>
              <b-badge class="mr-3 mb-3" variant="info" pill>Info</b-badge>
              <b-badge class="mr-3 mb-3" variant="warning" pill>Warning</b-badge>
              <b-badge class="mr-3 mb-3" variant="success" pill>Success</b-badge>
              <b-badge class="mr-3 mb-3" variant="danger" pill>Danger</b-badge>
              <b-badge class="mr-3 mb-3" variant="secondary" pill>Secondary</b-badge>
              <b-badge class="mr-3 mb-3" variant="light" pill>Light</b-badge>
              <b-badge class="mr-3 mb-3" variant="dark" pill>Dark</b-badge>
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
              <b-badge class="mr-3 mb-3" href="#" variant="primary">Primary</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="info">Info</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="warning">Warning</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="success">Success</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="danger">Danger</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="secondary">Secondary</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="light">Light</b-badge>
              <b-badge class="mr-3 mb-3" href="#" variant="dark">Dark</b-badge>
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
