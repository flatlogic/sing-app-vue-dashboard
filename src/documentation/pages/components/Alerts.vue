<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Alerts</h2>
      <p class="mb-4">
        Provide contextual feedback messages for typical user actions with the handful of available
        and flexible alert messages.
      </p>
      <pre><code>// Bootstrap 5 native alerts
&lt;div class="alert alert-success alert-dismissible fade show"&gt;
  Alert content
  &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <!-- Example 1: Standard Alerts -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#alert-example-1"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#alert-code-1"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="alert-example-1"
            class="tab-pane fade show active"
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
                aria-label="Close"
              />
            </div>
          </div>
          <div
            id="alert-code-1"
            class="tab-pane fade"
          >
            <pre><code>&lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
  &lt;span class="fw-semi-bold"&gt;Warning:&lt;/span&gt; Alert content here
  &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 2: Transparent Alerts -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#alert-example-2"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#alert-code-2"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="alert-example-2"
            class="tab-pane fade show active"
          >
            <p>Alerts are available for any length of text, as well as an optional dismiss button.</p>
            <div
              v-for="alert in alerts"
              :key="'transparent-' + alert.id"
              :class="['alert', `alert-${alert.type}`, 'alert-dismissible', 'fade', 'show', 'alert-transparent']"
              role="alert"
            >
              <span v-html="alert.msg" />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          </div>
          <div
            id="alert-code-2"
            class="tab-pane fade"
          >
            <pre><code>&lt;div class="alert alert-warning alert-dismissible fade show alert-transparent" role="alert"&gt;
  &lt;span class="fw-semi-bold"&gt;Warning:&lt;/span&gt; Alert content here
  &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/alerts/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Alerts</a>
    </p>
  </div>
</template>

<script setup>
const alerts = [
  {
    id: 'al-1',
    type: 'success',
    msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.',
  },
  {
    id: 'al-2',
    type: 'info',
    msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.',
  },
  {
    id: 'al-3',
    type: 'warning',
    msg: '<span class="fw-semi-bold"><strong>Warning:</strong></span> Best check yo self, you\'re not looking too good.',
  },
  {
    id: 'al-4',
    type: 'danger',
    msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again. <a class="btn btn-default btn-xs float-end me-1" href="#">Ignore</a> <a class="btn btn-danger btn-xs float-end me-sm-1" href="#">Take this action</a>',
  }
]
</script>
