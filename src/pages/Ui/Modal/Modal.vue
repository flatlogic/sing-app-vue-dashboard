<template>
  <div>
    <h1 class="page-title">
      Modal - <span class="fw-semi-bold">Examples</span>
    </h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          class="mb-xlg"
          title="<h5>Live <span class='fw-semi-bold'>Demo</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Toggle a working modal demo by clicking the button below. It
            will slide down and fade in from the top of the page.
          </p>
          <button
            class="btn btn-primary me-2 text-white"
            data-bs-toggle="modal"
            data-bs-target="#demo"
          >
            Demo
          </button>
          <button
            class="btn btn-primary text-white"
            data-bs-toggle="modal"
            data-bs-target="#long"
          >
            Scrolling long content
          </button>
        </Widget>
        <Widget
          title="<h5>Optional <span class='fw-semi-bold'>Sizes</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Modals have two optional sizes, available via modifier .modal-sm and .modal-lg
            classes to be placed on a .modal-dialog. These sizes kick in at certain
            breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <button
            class="btn btn-primary me-2 text-white"
            data-bs-toggle="modal"
            data-bs-target="#large"
          >
            Large modal
          </button>
          <button
            class="btn btn-primary text-white"
            data-bs-toggle="modal"
            data-bs-target="#small"
          >
            Small modal
          </button>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          class="mb-xlg"
          title="<h5>Using <span class='fw-semi-bold'>Grid</span> </h5>"
          close
          collapse
          custom-header
        >
          <p>
            Utilize the Bootstrap grid system within a modal by
            nesting <code>&lt;div class="container-fluid"&gt;</code> within
            the modal body. Then, use the
            normal grid system classes as you would anywhere else.
          </p>
          <div class="bg-light p-3">
            <button
              class="btn btn-primary text-white"
              data-bs-toggle="modal"
              data-bs-target="#launch"
            >
              Launch
            </button>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;div class="container-fluid"&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-md-4"&gt;' }}</code>
              <code>{{ '      .col-md-4' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-md-4 ms-auto"&gt;' }}</code>
              <code>{{ '      .col-md-4 .ms-auto' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-md-3 ms-auto"&gt;' }}</code>
              <code>{{ '      .col-md-3 .ms-auto' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-md-4 ms-auto"&gt;' }}</code>
              <code>{{ '      .col-md-4 .ms-auto' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;div class="row"&gt;' }}</code>
              <code class="text-info">{{ '    &lt;div class="col-md-6 ms-auto"&gt;' }}</code>
              <code>{{ '      .col-md-6 .ms-auto' }}</code>
              <code class="text-info">{{ '    &lt;/div&gt;' }}</code>
              <code class="text-success">{{ '  &lt;/div&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/div&gt;' }}</code>
            </pre>
          </div>
        </Widget>
      </div>
    </div>

    <!-- Demo Modal -->
    <div
      id="demo"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div class="modal-body bg-white">
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Long Content Modal -->
    <div
      id="long"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Long content
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div class="modal-body bg-white">
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
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Large Modal -->
    <div
      id="large"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Large modal
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div class="modal-body bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Small Modal -->
    <div
      id="small"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Small modal
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div class="modal-body bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
            Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
            cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid Launch Modal -->
    <div
      id="launch"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Modal
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div class="modal-body bg-white text-white">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  <div class="h-100 w-100 bg-primary p-2">
                    .col-md-4
                  </div>
                </div>
                <div class="col-md-4 ms-auto">
                  <div class="h-100 w-100 bg-primary p-2">
                    .col-md-4 .ms-auto
                  </div>
                </div>
              </div>
              <div class="row mt-sm">
                <div class="col-md-3 ms-auto">
                  <div class="h-100 w-100 bg-primary p-2">
                    .col-md-3 .ms-auto
                  </div>
                </div>
                <div class="col-md-4 ms-auto">
                  <div class="h-100 w-100 bg-primary p-2">
                    .col-md-4 .ms-auto
                  </div>
                </div>
              </div>
              <div class="row mt-sm">
                <div class="col-md-6 ms-auto">
                  <div class="h-100 w-100 bg-primary p-2">
                    .col-md-6 .ms-auto
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>
