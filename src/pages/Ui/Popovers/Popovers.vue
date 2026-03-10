<template>
  <div>
    <h1 class="page-title">
      Popovers & Tooltips
    </h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          class="mb-xlg"
          title="<h5>Popover <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <button
            class="btn btn-danger btn-lg me-3 text-white"
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Click to toggle popover
          </button>
          <button
            class="btn btn-danger"
            disabled
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Disabled button
          </button>
        </Widget>
        <Widget
          title="<h5>Popover <span class='fw-semi-bold'>Directions</span></h5>"
          close
          collapse
          custom-header
        >
          <button
            class="btn btn-info me-3 mb-3"
            data-bs-toggle="popover"
            data-bs-placement="top"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Popover on top
          </button>
          <button
            class="btn btn-warning me-3 mb-3"
            data-bs-toggle="popover"
            data-bs-placement="right"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Popover on right
          </button>
          <button
            class="btn btn-inverse me-3 mb-3"
            data-bs-toggle="popover"
            data-bs-placement="bottom"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Popover on bottom
          </button>
          <button
            class="btn btn-default me-2 mb-3"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-title="Popover Title"
            data-bs-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          >
            Popover on left
          </button>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          class="mb-xlg"
          title="<h5>Tooltip <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <button
            class="btn btn-success btn-lg me-3"
            data-bs-toggle="tooltip"
            data-bs-title="Hello World!"
          >
            Tooltip
          </button>
          <button
            class="btn btn-success"
            disabled
            data-bs-toggle="tooltip"
            data-bs-title="Hello World!"
          >
            Disabled button
          </button>
        </Widget>
        <Widget
          title="<h5>Tooltip <span class='fw-semi-bold'>Directions</span></h5>"
          close
          collapse
          custom-header
        >
          <button
            class="btn btn-info me-3 mb-3"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Top"
          >
            Tooltip on top
          </button>
          <button
            class="btn btn-warning me-3 mb-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Right"
          >
            Tooltip on right
          </button>
          <button
            class="btn btn-inverse me-3 mb-3"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Bottom"
          >
            Tooltip on bottom
          </button>
          <button
            class="btn btn-default me-2 mb-3"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Left"
          >
            Tooltip on left
          </button>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Popover, Tooltip } from 'bootstrap';
import Widget from '@/components/Widget/Widget.vue';

onMounted(() => {
  // Initialize all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(el => new Popover(el));

  // Initialize all tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new Tooltip(el));
});
</script>
