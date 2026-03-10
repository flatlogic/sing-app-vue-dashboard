<template>
  <div>
    <h1 class="page-title">
      Badge
    </h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Badge <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <h1>Example heading <span class="badge bg-primary">Primary</span></h1>
          <h2>Example heading <span class="badge bg-info">Info</span></h2>
          <h3>Example heading <span class="badge bg-warning">Warning</span></h3>
          <h4>Example heading <span class="badge bg-success">Success</span></h4>
          <h5>Example heading <span class="badge bg-danger">Danger</span></h5>
          <h6>Example heading <span class="badge bg-secondary">Secondary</span></h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <button class="btn btn-primary">
            Notifications <span class="badge bg-danger">4</span>
          </button>
        </Widget>
      </div>
      <div class="col-12 col-md-6 px-0">
        <div class="col-12">
          <Widget
            title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
            close
            collapse
            custom-header
          >
            <p>
              Use the <code>rounded-pill</code> class to make badges more rounded
              (with a larger border-radius and additional horizontal padding).
            </p>
            <span class="badge me-3 mb-3 bg-primary rounded-pill">Primary</span>
            <span class="badge me-3 mb-3 bg-info rounded-pill">Info</span>
            <span class="badge me-3 mb-3 bg-warning rounded-pill">Warning</span>
            <span class="badge me-3 mb-3 bg-success rounded-pill">Success</span>
            <span class="badge me-3 mb-3 bg-danger rounded-pill">Danger</span>
            <span class="badge me-3 mb-3 bg-secondary rounded-pill">Secondary</span>
            <span class="badge me-3 mb-3 bg-light text-black rounded-pill">Light</span>
            <span class="badge me-3 mb-3 bg-dark rounded-pill">Dark</span>
          </Widget>
        </div>
        <div class="col-12">
          <Widget
            title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
            close
            collapse
            custom-header
          >
            <p>
              Using the contextual <code>href=&quot;&#35;&quot;</code> classes on
              an <code>&lt;Badge&gt;</code> element quickly provide
              actionable badges with hover and focus states.
            </p>
            <a
              class="badge me-3 mb-3 bg-primary"
              href="#"
            >Primary</a>
            <a
              class="badge me-3 mb-3 bg-info"
              href="#"
            >Info</a>
            <a
              class="badge me-3 mb-3 bg-warning"
              href="#"
            >Warning</a>
            <a
              class="badge me-3 mb-3 bg-success"
              href="#"
            >Success</a>
            <a
              class="badge me-3 mb-3 bg-danger"
              href="#"
            >Danger</a>
            <a
              class="badge me-3 mb-3 bg-secondary"
              href="#"
            >Secondary</a>
            <a
              class="badge me-3 mb-3 bg-light text-black"
              href="#"
            >Light</a>
            <a
              class="badge me-3 mb-3 bg-dark"
              href="#"
            >Dark</a>
          </Widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>
