<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Badges</h2>
      <p class="mb-4">
        Documentation and examples for badges, our small count and labeling component.
      </p>
      <pre><code>// Bootstrap 5 native badges
&lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;</code></pre>

      <!-- Example 1: Heading Badges -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#badge-example-1"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#badge-code-1"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="badge-example-1"
            class="tab-pane fade show active"
          >
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
          </div>
          <div
            id="badge-code-1"
            class="tab-pane fade"
          >
            <pre><code>&lt;h1&gt;Example heading
  &lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;
&lt;/h1&gt;
&lt;h2&gt;Example heading
  &lt;span class="badge bg-info"&gt;Info&lt;/span&gt;
&lt;/h2&gt;
&lt;h3&gt;Example heading
  &lt;span class="badge bg-warning"&gt;Warning&lt;/span&gt;
&lt;/h3&gt;
&lt;h4&gt;Example heading
  &lt;span class="badge bg-success"&gt;Success&lt;/span&gt;
&lt;/h4&gt;
&lt;h5&gt;Example heading
  &lt;span class="badge bg-danger"&gt;Danger&lt;/span&gt;
&lt;/h5&gt;
&lt;h6&gt;Example heading
  &lt;span class="badge bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;/h6&gt;
&lt;p&gt;Badges can be used as part of links or buttons to provide a counter.&lt;/p&gt;
&lt;button class="btn btn-primary"&gt;
  Notifications &lt;span class="badge bg-danger"&gt;4&lt;/span&gt;
&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 2: Pill Badges and Links -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#badge-example-2"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#badge-code-2"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="badge-example-2"
            class="tab-pane fade show active"
          >
            <h4>Pill badges</h4>
            <p>
              <span class="badge rounded-pill bg-primary me-1">Primary</span>
              <span class="badge rounded-pill bg-info me-1">Info</span>
              <span class="badge rounded-pill bg-warning me-1">Warning</span>
              <span class="badge rounded-pill bg-success me-1">Success</span>
              <span class="badge rounded-pill bg-danger me-1">Danger</span>
              <span class="badge rounded-pill bg-secondary me-1">Secondary</span>
              <span class="badge rounded-pill bg-light text-dark me-1">Light</span>
              <span class="badge rounded-pill bg-dark me-1">Dark</span>
            </p>
            <h4>Badges with link</h4>
            <p>
              <a
                href="#"
                class="badge bg-primary me-1"
              >Primary</a>
              <a
                href="#"
                class="badge bg-info me-1"
              >Info</a>
              <a
                href="#"
                class="badge bg-warning me-1"
              >Warning</a>
              <a
                href="#"
                class="badge bg-success me-1"
              >Success</a>
              <a
                href="#"
                class="badge bg-danger me-1"
              >Danger</a>
              <a
                href="#"
                class="badge bg-secondary me-1"
              >Secondary</a>
              <a
                href="#"
                class="badge bg-light text-dark me-1"
              >Light</a>
              <a
                href="#"
                class="badge bg-dark me-1"
              >Dark</a>
            </p>
          </div>
          <div
            id="badge-code-2"
            class="tab-pane fade"
          >
            <pre><code>&lt;span class="badge rounded-pill bg-primary"&gt;Primary&lt;/span&gt;
&lt;a href="#" class="badge bg-primary"&gt;Primary&lt;/a&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/badge/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Badge</a>
    </p>
  </div>
</template>

<script setup>
</script>
