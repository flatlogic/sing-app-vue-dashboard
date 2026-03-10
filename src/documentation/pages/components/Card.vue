<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Card</h2>
      <p class="mb-4">
        Cards support a wide variety of content, including images, text, list groups, links, and more.
        Below are examples of what's supported.
      </p>
      <pre><code>// Bootstrap 5 native card
&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;Card content&lt;/div&gt;
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
              data-bs-target="#card-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#card-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="card-example"
            class="tab-pane fade show active"
          >
            <div class="card border-0">
              <div class="card-body">
                <button class="btn btn-link fw-semi-bold text-success">
                  Avg Rating
                </button>
                <button class="btn btn-link fw-semi-bold text-muted">
                  All Time
                </button>
                <hr>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-warning">
                    <i class="la la-star me-sm-1" />
                    <i class="la la-star me-sm-1" />
                    <i class="la la-star me-sm-1" />
                    <i class="la la-star me-sm-1" />
                    <i class="la la-star" />
                  </div>
                  <span class="text-muted"><small>342 REVIEWS</small></span>
                </div>
                <div class="mb-3">
                  <h3 class="text-success mb-0">
                    69%
                  </h3>
                  of customers recommend this product
                </div>
                <button class="btn btn-rounded-f btn-success">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
          <div
            id="card-code"
            class="tab-pane fade"
          >
            <pre><code>&lt;div class="card border-0"&gt;
  &lt;div class="card-body"&gt;
    &lt;button class="btn btn-link fw-semi-bold text-success"&gt;Avg Rating&lt;/button&gt;
    &lt;button class="btn btn-link fw-semi-bold text-muted"&gt;All Time&lt;/button&gt;
    &lt;hr/&gt;
    &lt;div class="d-flex justify-content-between mb-3"&gt;
      &lt;div class="text-warning"&gt;
        &lt;i class="la la-star me-xs"&gt;&lt;/i&gt;
        &lt;i class="la la-star me-xs"&gt;&lt;/i&gt;
        &lt;i class="la la-star me-xs"&gt;&lt;/i&gt;
        &lt;i class="la la-star me-xs"&gt;&lt;/i&gt;
        &lt;i class="la la-star"&gt;&lt;/i&gt;
      &lt;/div&gt;
      &lt;span class="text-muted"&gt;&lt;small&gt;342 REVIEWS&lt;/small&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;h3 class="text-success mb-0"&gt;69%&lt;/h3&gt;
      of customers recommend this product
    &lt;/div&gt;
    &lt;button class="btn btn-rounded-f btn-success"&gt;Write a Review&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/card/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Card</a>
    </p>
  </div>
</template>

<script setup>
</script>
