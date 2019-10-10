<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Badges</h2>
      <p class="mb-4">Documentation and examples for badges, our small count and labeling component.</p>
      <vue-code-highlight>import { BBadge } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <h1>Example heading <b-badge variant="primary">Primary</b-badge></h1>
          <h2>Example heading <b-badge variant="info">Info</b-badge></h2>
          <h3>Example heading <b-badge variant="warning">Warning</b-badge></h3>
          <h4>Example heading <b-badge variant="success">Success</b-badge></h4>
          <h5>Example heading <b-badge variant="danger">Danger</b-badge></h5>
          <h6>Example heading <b-badge variant="secondary">Secondary</b-badge></h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <b-button variant="primary">Notifications <b-badge variant="danger">4</b-badge></b-button>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;h1&gt;Example heading
  &lt;b-badge variant="primary"&gt;Primary&lt;/b-badge&gt;
&lt;/h1&gt;
&lt;h2&gt;Example heading
  &lt;b-badge variant="info"&gt;Info&lt;/b-badge&gt;
&lt;/h2&gt;
&lt;h3&gt;Example heading
  &lt;b-badge variant="warning"&gt;Warning&lt;/b-badge&gt;
&lt;/h3&gt;
&lt;h4&gt;Example heading
  &lt;b-badge variant="success"&gt;Success&lt;/b-badge&gt;
&lt;/h4&gt;
&lt;h5&gt;Example heading
  &lt;b-badge variant="danger"&gt;Danger&lt;/b-badge&gt;
&lt;/h5&gt;
&lt;h6&gt;Example heading
  &lt;b-badge variant="secondary"&gt;Secondary&lt;/b-badge&gt;
&lt;/h6&gt;
&lt;p&gt;Badges can be used as part of links or buttons to provide a counter.&lt;/p&gt;
&lt;b-button variant="primary"&gt;
  Notifications &lt;b-badge variant="danger"&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab title="Example" active>
          <h4>Pill badges</h4>
          <p>
            <b-badge class="mr-1" variant="primary" pill>Primary</b-badge>
            <b-badge class="mr-1" variant="info" pill>Info</b-badge>
            <b-badge class="mr-1" variant="warning" pill>Warning</b-badge>
            <b-badge class="mr-1" variant="success" pill>Success</b-badge>
            <b-badge class="mr-1" variant="danger" pill>Danger</b-badge>
            <b-badge class="mr-1" variant="secondary" pill>Secondary</b-badge>
            <b-badge class="mr-1" variant="light" pill>Light</b-badge>
            <b-badge class="mr-1" variant="dark" pill>Dark</b-badge>
          </p>
          <h4>Badges with link</h4>
          <p>
            <b-badge class="mr-1" href="#" variant="primary">Primary</b-badge>
            <b-badge class="mr-1" href="#" variant="info">Info</b-badge>
            <b-badge class="mr-1" href="#" variant="warning">Warning</b-badge>
            <b-badge class="mr-1" href="#" variant="success">Success</b-badge>
            <b-badge class="mr-1" href="#" variant="danger">Danger</b-badge>
            <b-badge class="mr-1" href="#" variant="secondary">Secondary</b-badge>
            <b-badge class="mr-1" href="#" variant="light">Light</b-badge>
            <b-badge class="mr-1" href="#" variant="dark">Dark</b-badge>
          </p>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-badge class="mr-1" variant="primary" pill&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class="mr-1" href="#" variant="primary"&gt;Primary&lt;/b-badge&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/badge/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Badge</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocBadges',
  }
</script>
