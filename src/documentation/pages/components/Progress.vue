<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Progress</h2>
      <p class="mb-4">
        Use our custom progress component for displaying simple or complex progress bars, featuring
        support for horizontally stacked bars, animated backgrounds, and text labels.
      </p>
      <pre><code>// Bootstrap 5 native progress
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <!-- Example -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#progress-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#progress-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="progress-example"
            class="tab-pane fade show active"
          >
            <div class="text-center">
              0%
            </div>
            <div class="progress mb-3">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 0%"
              />
            </div>

            <div class="text-center">
              25%
            </div>
            <div class="progress mb-3">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%"
              />
            </div>

            <div class="text-center">
              50%
            </div>
            <div class="progress mb-3">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 50%"
              />
            </div>

            <div class="text-center">
              75%
            </div>
            <div class="progress mb-3">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 75%"
              />
            </div>

            <div class="text-center">
              100%
            </div>
            <div class="progress mb-3">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 100%"
              />
            </div>

            <div class="text-center">
              Multiple bars
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 15%"
              />
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 30%"
              />
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 25%"
              />
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 20%"
              />
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style="width: 5%"
              />
            </div>
          </div>
          <div
            id="progress-code"
            class="tab-pane fade"
          >
            <pre><code>&lt;div class="text-center"&gt;0%&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 0%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="text-center"&gt;25%&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="text-center"&gt;50%&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 50%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="text-center"&gt;75% (striped)&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped" style="width: 75%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="text-center"&gt;100% (animated)&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="text-center"&gt;Multiple bars&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" style="width: 15%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-success" style="width: 30%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-info" style="width: 25%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-warning" style="width: 20%"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-danger" style="width: 5%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/progress/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Progress</a>
    </p>
  </div>
</template>

<script setup>
</script>
