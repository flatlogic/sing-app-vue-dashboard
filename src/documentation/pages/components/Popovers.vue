<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Popovers</h2>
      <p class="mb-4">The Popover is similar to Tooltip; it is a pop-up box that appears when the user clicks on an
        element. The difference is that the popover can contain much more content.</p>
      <vue-code-highlight>import { BPopover, BTooltip } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-button-toolbar>
            <b-button variant="success" id="popover_bottom">Bottom</b-button>
            <b-button variant="danger" id="popover_right">Right</b-button>
            <b-button variant="warning" id="popover_top">Top</b-button>
            <b-button variant="info" id="popover_left">Left</b-button>
          </b-button-toolbar>
          <b-popover :title="popoverTitle" placement="bottom" target="popover_bottom" triggers="click">
            {{popoverBody}}
          </b-popover>
          <b-popover :title="popoverTitle" placement="right" target="popover_right" triggers="click">
            {{popoverBody}}
          </b-popover>
          <b-popover :title="popoverTitle" placement="top" target="popover_top" triggers="click">
            {{popoverBody}}
          </b-popover>
          <b-popover :title="popoverTitle" placement="left" target="popover_left" triggers="click">
            {{popoverBody}}
          </b-popover>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{decodeHtml(popoverCode)}}</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab title="Example" active>
          <b-button-toolbar>
            <b-button variant="success" id="tooltip_bottom">Bottom</b-button>
            <b-button variant="danger" id="tooltip_right">Right</b-button>
            <b-button variant="warning" id="tooltip_top">Top</b-button>
            <b-button variant="info" id="tooltip_left">Left</b-button>
          </b-button-toolbar>
          <b-tooltip placement="bottom" target="tooltip_bottom" triggers="hover">
            {{tooltipBody}}
          </b-tooltip>
          <b-tooltip placement="right" target="tooltip_right" triggers="hover">
            {{tooltipBody}}
          </b-tooltip>
          <b-tooltip placement="top" target="tooltip_top" triggers="hover">
            {{tooltipBody}}
          </b-tooltip>
          <b-tooltip placement="left" target="tooltip_left" triggers="hover">
            {{tooltipBody}}
          </b-tooltip>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{decodeHtml(popoverCode)}}</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/popover/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Popovers</a> and
      <a href="https://bootstrap-vue.js.org/docs/components/tooltip/"
         target="_blank"
         rel="noopener noreferrer">Bootstrap Vue Tooltips</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocNavbar',
    data() {
      return {
        popoverCode: '<b-button variant="success" id="popover_bottom">Bottom</b-button>\n' +
          '<b-popover :title="popoverTitle" placement="bottom" target="popover_bottom" triggers="click">\n' +
          '  {{popoverBody}}\n' +
          '</b-popover>',
        tooltipCode: '<b-button variant="success" id="tooltip_bottom">Bottom</b-button>\n' +
          '<b-tooltip placement="bottom" target="tooltip_bottom" triggers="hover">\n' +
          '  {{tooltipBody}}\n' +
          '</b-tooltip>',
        popoverTitle: 'Popover Title',
        popoverBody: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        tooltipBody: 'Hello World'
      }
    }
  }
</script>
