<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Buttons</h2>
      <p class="mb-4">Bootstrap includes several predefined button styles, each serving its own semantic purpose,
        with a few extras thrown in for more control.</p>
      <vue-code-highlight>import { BButton } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-button-toolbar>
            <b-button variant="default" class="width-100 mb-2">Default</b-button>
            <b-button variant="primary" class="width-100 mb-2">Primary</b-button>
            <b-button variant="info" class="width-100 mb-2">Info</b-button>
            <b-button variant="success" class="width-100 mb-2">Success</b-button>
            <b-button variant="warning" class="width-100 mb-2">Warning</b-button>
            <b-button variant="danger" class="width-100 mb-2">Danger</b-button>
            <b-button variant="gray" class="width-100 mb-2">Gray</b-button>
            <b-button variant="inverse" class="width-100 mb-2">Inverse</b-button>
          </b-button-toolbar>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-button-toolbar&gt;
  &lt;b-button variant="default" class="width-100 mb-2"&gt;Default&lt;/b-button&gt;
  &lt;b-button variant="primary"&gt;Primary&lt;/b-button&gt;
  &lt;b-button variant="info"&gt;Info&lt;/b-button&gt;
  &lt;b-button variant="success"&gt;Success&lt;/b-button&gt;
  &lt;b-button variant="warning"&gt;Warning&lt;/b-button&gt;
  &lt;b-button variant="danger"&gt;Danger&lt;/b-button&gt;
  &lt;b-button variant="gray"&gt;Gray&lt;/b-button&gt;
  &lt;b-button variant="inverse"&gt;Inverse&lt;/b-button&gt;
&lt;/b-button-toolbar&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-button-toolbar>
            <b-button variant="outline-default" class="width-100 mb-2">Default</b-button>
            <b-button variant="outline-primary" class="width-100 mb-2">Primary</b-button>
            <b-button variant="outline-info" class="width-100 mb-2">Info</b-button>
            <b-button variant="outline-success" class="width-100 mb-2">Success</b-button>
            <b-button variant="outline-warning" class="width-100 mb-2">Warning</b-button>
            <b-button variant="outline-danger" class="width-100 mb-2">Danger</b-button>
            <b-button variant="outline-gray" class="width-100 mb-2">Gray</b-button>
            <b-button variant="outline-inverse" class="width-100 mb-2">Inverse</b-button>
          </b-button-toolbar>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-button-toolbar&gt;
  &lt;b-button variant="outline-default" class="width-100 mb-2"&gt;Default&lt;/b-button&gt;
  &lt;b-button variant="outline-primary"&gt;Primary&lt;/b-button&gt;
  &lt;b-button variant="outline-info"&gt;Info&lt;/b-button&gt;
  &lt;b-button variant="outline-success"&gt;Success&lt;/b-button&gt;
  &lt;b-button variant="outline-warning"&gt;Warning&lt;/b-button&gt;
  &lt;b-button variant="outline-danger"&gt;Danger&lt;/b-button&gt;
  &lt;b-button variant="outline-gray"&gt;Gray&lt;/b-button&gt;
  &lt;b-button variant="outline-inverse"&gt;Inverse&lt;/b-button&gt;
&lt;/b-button-toolbar&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab title="Example" active>
          <p class="fs-mini text-muted">
            Fancy larger or smaller buttons?
            Four separate sizes available for all use cases:
            from tiny 10px button to large one.
          </p>
          <b-button variant="default" size="lg" class="mb-2 me-2">Large button</b-button>
          <b-button variant="primary" class="mb-2 me-2">Default button</b-button>
          <b-button variant="info" size="sm" class="mb-2 me-2">Small button</b-button>
          <b-button variant="success" size="xs" class="mb-2 me-2">Tiny button</b-button>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-button variant="default" size="lg" class="mb-2 me-2"&gt;Large button&lt;/b-button&gt;
&lt;b-button variant="primary" class="mb-2 me-2"&gt;Default button&lt;/b-button&gt;
&lt;b-button variant="info" size="sm" class="mb-2 me-2"&gt;Small button&lt;/b-button&gt;
&lt;b-button variant="success" size="xs" class="mb-2 me-2"&gt;Tiny button&lt;/b-button&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/button/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Buttons</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocButtons',
  }
</script>
