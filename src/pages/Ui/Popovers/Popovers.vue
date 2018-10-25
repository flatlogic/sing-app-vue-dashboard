<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Popovers</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Popovers & Tooltips</h1>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          class="mb-xlg"
          title="<h5>Popover <span class='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <b-button
            id="p-1" class="mr-xs" size="lg" variant="danger"
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Click to toggle popover</b-button>
          <b-button
            id="p-2" variant="danger" disabled
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Disabled button</b-button>
        </Widget>
        <Widget
          title="<h5>Popover <span class='fw-semi-bold'>Directions</span></h5>"
          close collapse customHeader
        >
          <b-button
            id="p-3" class="mr-xs mb-xs" variant="info"
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Popover on top</b-button>
          <b-button
            id="p-4" class="mr-xs mb-xs" variant="warning"
            v-b-popover.right="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Popover on right</b-button>
          <b-button
            id="p-5" class="mr-xs mb-xs" variant="inverse"
            v-b-popover.bottom="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Popover on bottom</b-button>
          <b-button
            id="p-6" class="mr-xs mb-xs" variant="default"
            v-b-popover.left="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            title="Popover Title"
          >Popover on left</b-button>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          class="mb-xlg"
          title="<h5>Tooltip <span class='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <b-button id="t-1" class="mr-sm" size="lg" variant="success"
            v-b-tooltip
            title="Hello World!"
          >Tooltip</b-button>
          <b-button id="t-2" variant="success" disabled
            v-b-tooltip
            title="Hello World!"
          >Disabled button</b-button>
        </Widget>
        <Widget
          title="<h5>Tooltip <span class='fw-semi-bold'>Directions</span></h5>"
          close collapse customHeader
        >
          <b-button id="t-3" class="mr-xs mb-xs" variant="info"
            v-b-tooltip.top
            title="Top"
          >Tooltip on top</b-button>
          <b-button id="t-4" class="mr-xs mb-xs" variant="warning"
            v-b-tooltip.right
            title="Right"
          >Tooltip on right</b-button>
          <b-button id="t-5" class="mr-xs mb-xs" variant="inverse"
            v-b-tooltip.bottom
            title="Bottom"
          >Tooltip on bottom</b-button>
          <b-button id="t-6" class="mr-xs mb-xs" variant="default"
            v-b-tooltip.left
            title="Left"
          >Tooltip on left</b-button>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'PopoversPage',
  components: { Widget },
};
</script>
