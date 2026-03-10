<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Popovers</h2>
      <p class="mb-4">
        The Popover is similar to Tooltip; it is a pop-up box that appears when the user clicks on an
        element. The difference is that the popover can contain much more content.
      </p>
      <pre><code>// Bootstrap 5 native popover
&lt;button data-bs-toggle="popover" data-bs-title="Title" data-bs-content="Content"&gt;
  Click me
&lt;/button&gt;</code></pre>

      <!-- Popovers Example -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#popover-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#popover-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="popover-example"
            class="tab-pane fade show active"
          >
            <div class="btn-toolbar gap-2">
              <button
                class="btn btn-success"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-title="Popover Title"
                data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam."
              >
                Bottom
              </button>
              <button
                class="btn btn-danger"
                data-bs-toggle="popover"
                data-bs-placement="right"
                data-bs-title="Popover Title"
                data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam."
              >
                Right
              </button>
              <button
                class="btn btn-warning"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-title="Popover Title"
                data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam."
              >
                Top
              </button>
              <button
                class="btn btn-info"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-title="Popover Title"
                data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam."
              >
                Left
              </button>
            </div>
          </div>
          <div
            id="popover-code"
            class="tab-pane fade"
          >
            <pre><code>&lt;button
  class="btn btn-success"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-title="Popover Title"
  data-bs-content="Popover content here"
&gt;Bottom&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Tooltips Example -->
      <h3>Tooltips</h3>
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#tooltip-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tooltip-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="tooltip-example"
            class="tab-pane fade show active"
          >
            <div class="btn-toolbar gap-2">
              <button
                class="btn btn-success"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Hello World"
              >
                Bottom
              </button>
              <button
                class="btn btn-danger"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-title="Hello World"
              >
                Right
              </button>
              <button
                class="btn btn-warning"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Hello World"
              >
                Top
              </button>
              <button
                class="btn btn-info"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Hello World"
              >
                Left
              </button>
            </div>
          </div>
          <div
            id="tooltip-code"
            class="tab-pane fade"
          >
            <pre><code>&lt;button
  class="btn btn-success"
  data-bs-toggle="tooltip"
  data-bs-placement="bottom"
  data-bs-title="Hello World"
&gt;Bottom&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/popovers/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Popovers</a> and
      <a
        href="https://getbootstrap.com/docs/5.3/components/tooltips/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Tooltips</a>
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Popover, Tooltip } from 'bootstrap'

onMounted(() => {
  // Initialize all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  popoverTriggerList.forEach(el => new Popover(el))

  // Initialize all tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => new Tooltip(el))
})
</script>
