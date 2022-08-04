<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Card</h2>
      <p class="mb-4">Cards support a wide variety of content, including images, text, list groups, links, and more.
        Below are examples of what’s supported.</p>
      <vue-code-highlight>import { BCard } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-card class="border-0">
            <b-button variant="link" class="fw-semi-bold text-success">Avg Rating</b-button>
            <b-button variant="link" class="fw-semi-bold text-muted">All Time</b-button>
            <hr/>
            <div class="d-flex justify-content-between mb-3">
              <div class="text-warning">
                <i class="la la-star me-sm-1"></i>
                <i class="la la-star me-sm-1"></i>
                <i class="la la-star me-sm-1"></i>
                <i class="la la-star me-sm-1"></i>
                <i class="la la-star"></i>
              </div>
              <span class="text-muted"><small>342 REVIEWS</small></span>
            </div>
            <div class="mb-3">
              <h3 class="text-success mb-0">69%</h3>
              of customers recomend this product
            </div>
            <b-button class="btn-rounded-f" variant="success">Write a Review</b-button>
          </b-card>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-card class=&quot;border-0&quot;&gt;
  &lt;b-button variant=&quot;link&quot; class=&quot;fw-semi-bold text-success&quot;&gt;Avg Rating&lt;/b-button&gt;
  &lt;b-button variant=&quot;link&quot; class=&quot;fw-semi-bold text-muted&quot;&gt;All Time&lt;/b-button&gt;
  &lt;hr/&gt;
  &lt;div class=&quot;d-flex justify-content-between mb-3&quot;&gt;
    &lt;div class=&quot;text-warning&quot;&gt;
      &lt;i class=&quot;la la-star me-xs&quot;&gt;&lt;/i&gt;
      &lt;i class=&quot;la la-star me-xs&quot;&gt;&lt;/i&gt;
      &lt;i class=&quot;la la-star me-xs&quot;&gt;&lt;/i&gt;
      &lt;i class=&quot;la la-star me-xs&quot;&gt;&lt;/i&gt;
      &lt;i class=&quot;la la-star&quot;&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;span class=&quot;text-muted&quot;&gt;&lt;small&gt;342 REVIEWS&lt;/small&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;h3 class=&quot;text-success mb-0&quot;&gt;69%&lt;/h3&gt;
    of customers recomend this product
  &lt;/div&gt;
  &lt;b-button class=&quot;btn-rounded-f&quot; variant=&quot;success&quot;&gt;Write a Review&lt;/b-button&gt;
&lt;/b-card&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/card/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Card</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocCards',
  }
</script>
