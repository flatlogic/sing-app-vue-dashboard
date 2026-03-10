<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Nav</h2>
      <p class="mb-4">
        Change the style of Nav component with modifiers and utilities. Mix and match as needed, or build
        your own.
      </p>
      <pre><code>// Bootstrap 5 native nav
&lt;ul class="nav"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <!-- Example 1: Basic Nav -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-example-1"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-code-1"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="nav-example-1"
            class="tab-pane fade show active"
          >
            <ul class="nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                >Active</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >Disabled</a>
              </li>
            </ul>
          </div>
          <div
            id="nav-code-1"
            class="tab-pane fade"
          >
            <pre><code>&lt;ul class="nav"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Another Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link disabled" href="#"&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 2: Vertical Nav -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-example-2"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-code-2"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="nav-example-2"
            class="tab-pane fade show active"
          >
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                >Active</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >Disabled</a>
              </li>
            </ul>
          </div>
          <div
            id="nav-code-2"
            class="tab-pane fade"
          >
            <pre><code>&lt;ul class="nav flex-column"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Another Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link disabled" href="#"&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 3: Pills Nav -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-example-3"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-code-3"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="nav-example-3"
            class="tab-pane fade show active"
          >
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                >Active</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >Disabled</a>
              </li>
            </ul>
          </div>
          <div
            id="nav-code-3"
            class="tab-pane fade"
          >
            <pre><code>&lt;ul class="nav nav-pills"&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link active" href="#"&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link" href="#"&gt;Another Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;a class="nav-link disabled" href="#"&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/navs-tabs/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Nav</a>
    </p>
  </div>
</template>

<script setup>
</script>
