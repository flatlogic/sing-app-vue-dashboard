<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Modal</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Modal - <span class="fw-semi-bold">Examples</span></h1>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          class="mb-xlg"
          title="<h5>Live <span class='fw-semi-bold'>Demo</span></h5>"
          close collapse customHeader
        >
          <p>
            Toggle a working modal demo by clicking the button below. It
            will slide down and fade in from the top of the page.
          </p>
          <b-button class="mr-sm" variant="primary" v-b-modal.demo>Demo</b-button>
          <b-button variant="primary" v-b-modal.long>Scrolling long content</b-button>
        </Widget>
        <Widget
          title="<h5>Optional <span class='fw-semi-bold'>Sizes</span></h5>"
          close collapse customHeader
        >
          <p>
          Modals have two optional sizes, available via modifier .modal-sm and .modal-lg
          classes to be placed on a .modal-dialog. These sizes kick in at certain
          breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <b-button class="mr-sm" variant="primary" v-b-modal.large>Large modal</b-button>
          <b-button variant="primary" v-b-modal.small>Small modal</b-button>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          class="mb-xlg"
          title="<h5>Using <span class='fw-semi-bold'>Grid</span> </h5>"
          close collapse customHeader
        >
          <p>
            Utilize the Bootstrap grid system within a modal by
            nesting <code>&lt;b-container fluid&gt;</code> within
            the <code>&lt;b-modal&gt;</code>. Then, use the
            normal grid system classes as you would anywhere else.
          </p>
          <div class="bg-light p-3">
            <b-button variant="primary" v-b-modal.launch>Launch</b-button>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-container fluid&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col md="4"&gt;'}}</code>
              <code>{{'      .col-md-4'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col md="4" class="ml-auto"&gt;'}}</code>
              <code>{{'      .col-md-4 .ml-auto'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col md="3" class="ml-auto"&gt;'}}</code>
              <code>{{'      .col-md-3 .ml-auto'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col md="4" class="ml-auto"&gt;'}}</code>
              <code>{{'      .col-md-4 .ml-auto'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-success">{{'  &lt;b-row&gt;'}}</code>
              <code class="text-info">{{'    &lt;b-col md="6" class="ml-auto"&gt;'}}</code>
              <code>{{'      .col-md-6 .ml-auto'}}</code>
              <code class="text-info">{{'    &lt;/b-col&gt;'}}</code>
              <code class="text-success">{{'  &lt;/b-row&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-container&gt;'}}</code>
            </pre>
          </div>
        </Widget>
      </b-col>
    </b-row>

    <b-modal id="demo" title="Modal title" body-class="bg-white">
        ...
    </b-modal>
    <b-modal id="long" title="Long content" body-class="bg-white">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </b-modal>
    <b-modal id="large" size="lg" body-class="bg-white" title="Large modal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
      Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
      cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
    </b-modal>

    <b-modal id="small" size="sm" body-class="bg-white" title="Small modal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
      Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
      cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
    </b-modal>
    <b-modal id="launch" body-class="bg-white text-white" title="Modal">
      <b-container fluid>
        <b-row>
          <b-col md='4'>
            <div class="h-100 w-100 bg-primary p-2">.col-md-4</div>
          </b-col>
          <b-col md='4' class="ml-auto">
            <div class="h-100 w-100 bg-primary p-2">.col-md-4 .ml-auto</div>
          </b-col>
        </b-row>
        <b-row class="mt-sm">
          <b-col md='3' class="ml-auto">
            <div class="h-100 w-100 bg-primary p-2">.col-md-3 .ml-auto</div>
          </b-col>
          <b-col md='4' class="ml-auto">
            <div class="h-100 w-100 bg-primary p-2">.col-md-4 .ml-auto</div>
          </b-col>
        </b-row>
        <b-row class="mt-sm">
          <b-col md='6' class="ml-auto">
            <div class="h-100 w-100 bg-primary p-2">.col-md-6 .ml-auto</div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Modal',
  components: { Widget },
};
</script>
