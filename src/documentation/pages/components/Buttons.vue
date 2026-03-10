<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Buttons</h2>
      <p class="mb-4">
        Bootstrap includes several predefined button styles, each serving its own semantic purpose,
        with a few extras thrown in for more control.
      </p>
      <pre><code>// Bootstrap 5 native buttons
&lt;button class="btn btn-primary"&gt;Primary&lt;/button&gt;</code></pre>

      <!-- Example 1: Solid Buttons -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#btn-example-1"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#btn-code-1"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="btn-example-1"
            class="tab-pane fade show active"
          >
            <div class="btn-toolbar flex-wrap gap-2">
              <button class="btn btn-default width-100 mb-2">
                Default
              </button>
              <button class="btn btn-primary width-100 mb-2">
                Primary
              </button>
              <button class="btn btn-info width-100 mb-2">
                Info
              </button>
              <button class="btn btn-success width-100 mb-2">
                Success
              </button>
              <button class="btn btn-warning width-100 mb-2">
                Warning
              </button>
              <button class="btn btn-danger width-100 mb-2">
                Danger
              </button>
              <button class="btn btn-gray width-100 mb-2">
                Gray
              </button>
              <button class="btn btn-inverse width-100 mb-2">
                Inverse
              </button>
            </div>
          </div>
          <div
            id="btn-code-1"
            class="tab-pane fade"
          >
            <pre><code>&lt;button class="btn btn-default"&gt;Default&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button class="btn btn-gray"&gt;Gray&lt;/button&gt;
&lt;button class="btn btn-inverse"&gt;Inverse&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 2: Outline Buttons -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#btn-example-2"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#btn-code-2"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="btn-example-2"
            class="tab-pane fade show active"
          >
            <div class="btn-toolbar flex-wrap gap-2">
              <button class="btn btn-outline-default width-100 mb-2">
                Default
              </button>
              <button class="btn btn-outline-primary width-100 mb-2">
                Primary
              </button>
              <button class="btn btn-outline-info width-100 mb-2">
                Info
              </button>
              <button class="btn btn-outline-success width-100 mb-2">
                Success
              </button>
              <button class="btn btn-outline-warning width-100 mb-2">
                Warning
              </button>
              <button class="btn btn-outline-danger width-100 mb-2">
                Danger
              </button>
              <button class="btn btn-outline-gray width-100 mb-2">
                Gray
              </button>
              <button class="btn btn-outline-inverse width-100 mb-2">
                Inverse
              </button>
            </div>
          </div>
          <div
            id="btn-code-2"
            class="tab-pane fade"
          >
            <pre><code>&lt;button class="btn btn-outline-default"&gt;Default&lt;/button&gt;
&lt;button class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
&lt;button class="btn btn-outline-info"&gt;Info&lt;/button&gt;
&lt;button class="btn btn-outline-success"&gt;Success&lt;/button&gt;
&lt;button class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;
&lt;button class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;
&lt;button class="btn btn-outline-gray"&gt;Gray&lt;/button&gt;
&lt;button class="btn btn-outline-inverse"&gt;Inverse&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 3: Button Sizes -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#btn-example-3"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#btn-code-3"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="btn-example-3"
            class="tab-pane fade show active"
          >
            <p class="fs-mini text-muted">
              Fancy larger or smaller buttons?
              Four separate sizes available for all use cases:
              from tiny 10px button to large one.
            </p>
            <button class="btn btn-default btn-lg mb-2 me-2">
              Large button
            </button>
            <button class="btn btn-primary mb-2 me-2">
              Default button
            </button>
            <button class="btn btn-info btn-sm mb-2 me-2">
              Small button
            </button>
            <button class="btn btn-success btn-xs mb-2 me-2">
              Tiny button
            </button>
          </div>
          <div
            id="btn-code-3"
            class="tab-pane fade"
          >
            <pre><code>&lt;button class="btn btn-default btn-lg"&gt;Large button&lt;/button&gt;
&lt;button class="btn btn-primary"&gt;Default button&lt;/button&gt;
&lt;button class="btn btn-info btn-sm"&gt;Small button&lt;/button&gt;
&lt;button class="btn btn-success btn-xs"&gt;Tiny button&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/buttons/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Buttons</a>
    </p>
  </div>
</template>

<script setup>
</script>
