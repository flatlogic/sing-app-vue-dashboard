<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="active breadcrumb-item">UI Buttons</li>
    </ol>
    <h1 class="page-title">Buttons - <span class="fw-semi-bold">Styles </span></h1>
    <b-row>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Color <span class='fw-semi-bold'>Options</span></h5>"
          customHeader close collapse
        >
          <div>
            <p class="fs-mini text-muted">
              Use any of the available button classes to quickly create a styled button.
              Semantically distinguishable beauty.
            </p>
            <p class="text-left">
              <b-button variant="default" class="width-100 mb-xs mr-xs">Default</b-button>
              <b-button variant="primary" class="width-100 mb-xs mr-xs">Primary</b-button>
              <b-button variant="info" class="width-100 mb-xs mr-xs">Info</b-button>
              <b-button variant="success" class="width-100 mb-xs mr-xs">Success</b-button>
              <b-button variant="warning" class="width-100 mb-xs mr-xs">Warning</b-button>
              <b-button variant="danger" class="width-100 mb-xs mr-xs">Danger</b-button>
              <b-button variant="gray" class="width-100 mb-xs mr-xs">Gray</b-button>
              <b-button variant="inverse" class="width-100 mb-xs mr-xs">Inverse</b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Size <span class='fw-semi-bold'>Variants</span>/h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Fancy larger or smaller buttons?
              Four separate sizes available for all use cases:
              from tiny 10px button to large one.
            </p>
            <p>
              <b-button variant="default" size="lg" class="mb-xs mr-xs">Large button</b-button>
              <b-button variant="primary" class="mb-xs mr-xs">Default button</b-button>
              <b-button variant="info" size="sm" class="mb-xs mr-xs">Small button</b-button>
              <b-button variant="success" size="xs" class="mb-xs mr-xs">Tiny button</b-button>
            </p>
          </div>
        </Widget>
      </b-col>

      <b-col md='6' xs='12'>
        <Widget
          title="<h5> <span class='fw-semi-bold'>Buttons</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini">
              In need of a button, but not the hefty background colors they bring?
              Use <code></code> property to remove all
              background images and colors on any button.
            </p>
            <p>
              <b-button variant="outline-default" class="width-100 mb-xs mr-xs">Default</b-button>
              <b-button variant="outline-primary" class="width-100 mb-xs mr-xs">Primary</b-button>
              <b-button variant="outline-info" class="width-100 mb-xs mr-xs">Info</b-button>
              <b-button variant="outline-success" class="width-100 mb-xs mr-xs">Success</b-button>
              <b-button variant="outline-warning" class="width-100 mb-xs mr-xs">Warning</b-button>
              <b-button variant="outline-danger" class="width-100 mb-xs mr-xs">Danger</b-button>
              <b-button variant="outline-gray" class="width-100 mb-xs mr-xs">Gray</b-button>
              <b-button variant="outline-inverse" class="width-100 mb-xs mr-xs">Inverse</b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5>Rounded <span class='fw-semi-bold'>Buttons</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini">
              Use any of the available button properties to quickly create a styled button.
              Semantically distinguishable beauty. Use
              <code>.btn-rounded</code> or <code>.btn-rounded-f</code>.
            </p>
            <p>
              <b-button variant="default" class="btn-rounded-f width-100 mb-xs mr-xs">
                Default
              </b-button>
              <b-button variant="primary" class="btn-rounded-f width-100 mb-xs mr-xs">
                Primary
              </b-button>
              <b-button variant="info" class="btn-rounded-f width-100 mb-xs mr-xs">
                Info
              </b-button>
              <b-button variant="success" class="btn-rounded-f width-100 mb-xs mr-xs">
                Success
              </b-button>
              <b-button variant="outline-warning" class="btn-rounded width-100 mb-xs mr-xs">
                Warning
              </b-button>
              <b-button variant="outline-danger" class="btn-rounded width-100 mb-xs mr-xs">
                Danger
              </b-button>
              <b-button variant="outline-gray" class="btn-rounded width-100 mb-xs mr-xs">
                Gray
              </b-button>
              <b-button variant="outline-inverse" class="btn-rounded width-100 mb-xs mr-xs">
                Inverse
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Block <span class='fw-semi-bold'>Buttons</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Create block level buttons - those that span the full width
              of a parent— by adding <code>block</code>
              to <code>&lt;Button&gt;</code> component.
              Great for menu & social buttons.
            </p>
            <b-button variant="info" block>Block Button</b-button>
            <b-button variant="default" block>Show Menu &nbsp;&nbsp;&nbsp;<i
              class="fa fa-bars"
            /></b-button>
            <b-button variant="primary" block><i class="fa fa-facebook" />&nbsp;&nbsp;Login mit
              Facebook</b-button>
            <b-button variant="warning" block>Are you sure?</b-button>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Disabled <span class='fw-semi-bold'>Buttons</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Make buttons look unclickable by fading them back 50%.
              Add the <code>disabled</code> to <code>&lt;Button&gt;</code> component.
            </p>
            <p>
              <b-button variant="primary" disabled class="mr-xs">Primary button</b-button>
              <b-button variant="default" disabled class="mr-xs">Button</b-button>
            </p>
            <p>
              <b-button variant="success" size="sm" disabled class="mr-xs">Primary Link</b-button>
              <b-button variant="default" size="sm" disabled class="mr-xs">Link</b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Groups</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Group a series of buttons together on a single
              line with the button group.
              Add on optional JavaScript radio and checkbox
              style behavior with Bootstrap buttons plugin.
            </p>
            <b-button-group class="mb-xs">
              <b-button variant="default">Left</b-button>
              <b-button variant="default">Middle</b-button>
              <b-button variant="default">Right</b-button>
            </b-button-group>
            <b-button-toolbar class="mb-xs">
              <b-button-group class="mr-2">
                <b-button variant="default">1</b-button>
                <b-button variant="default">2</b-button>
                <b-button variant="default">3</b-button>
                <b-button variant="default">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2">
                <b-button variant="default">5</b-button>
                <b-button variant="default">6</b-button>
                <b-button variant="default">7</b-button>
              </b-button-group>
              <b-button-group class="mr-2">
                <b-button variant="default">8</b-button>
              </b-button-group>
            </b-button-toolbar>
          </div>
        </Widget>
      </b-col>
      <b-col md='6' xs='12'>
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Dropdowns</span></h5>"
          close collapse customHeader
        >
          <div>
            <p class="fs-mini text-muted">
              Add dropdown menus to nearly anything with
              this simple plugin, including the buttons,
              navbar, tabs, and pills.
              Both solid & segmented dropdown options available.
            </p>

            <div class="mb-xs">
              <b-dropdown variant="danger" text="One">
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown variant="gray" text="One">
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="mb-xs">
              <b-dropdown variant="primary" split text="Primary">
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="gray" split text="Gray">
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col md='12' xs='12'>
        <Widget
          title="<h6> Button <span class='fw-semi-bold'>Options</span></h6>"
          close collapse customHeader
        >
          <b-row>
            <b-col md='4' sm='6' xs='12'>
              <h4> Button <span class="fw-semi-bold">Checkboxes</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like
                toolbars.
                Use <code>ButtonGroup</code> to a group
                of checkboxes for checkbox style toggling on
                btn-group.
              </p>
              <div class="mb-xs">
                <b-button-group>
                  <b-button
                    variant="default" @click="changeCheckbox('checkboxOne', 0)"
                    :class="{ active: checkboxOne[0] }"
                  >Left way</b-button>
                  <b-button
                    variant="default" @click="changeCheckbox('checkboxOne', 1)"
                   :class="{ active: checkboxOne[1] }"
                  >Middle way</b-button>
                  <b-button
                    variant="default" @click="changeCheckbox('checkboxOne', 2)"
                    :class="{ active: checkboxOne[2] }"
                  >Right way</b-button>
                </b-button-group>
              </div>
              <div class="mb-xs">
                <b-button-group>
                  <b-button
                    variant="default" size="sm" @click="changeCheckbox('checkboxTwo', 0)"
                    :class="{ active: checkboxTwo[0] }"
                  >Left way</b-button>
                  <b-button
                    variant="default" size="sm" @click="changeCheckbox('checkboxTwo', 1)"
                   :class="{ active: checkboxTwo[1] }"
                  >Middle way</b-button>
                  <b-button
                    variant="default" size="sm" @click="changeCheckbox('checkboxTwo', 2)"
                    :class="{ active: checkboxTwo[2] }"
                  >Right way</b-button>
                </b-button-group>
              </div>
            </b-col>
            <b-col md='4' sm='12' xs='12'>
              <h4> Button <span class="fw-semi-bold">Radios</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like toolbars.
                Use <code>ButtonGroup</code> to a group of radio
                inputs for radio style toggling on btn-group.
              </p>
              <div class="mb-xs">
                <b-button-group>
                  <b-button
                    variant="default" @click="changeRadio('radioOne', 0)"
                    :class="{ active: radioOne === 0 }"
                  >Left way</b-button>
                  <b-button
                    variant="default" @click="changeRadio('radioOne', 1)"
                   :class="{ active: radioOne === 1 }"
                  >Middle way</b-button>
                  <b-button
                    variant="default" @click="changeRadio('radioOne', 2)"
                    :class="{ active: radioOne === 2 }"
                  >Right way</b-button>
                </b-button-group>
              </div>
              <div class="mb-xs">
                <b-button-group>
                  <b-button
                    variant="default" size="sm" @click="changeRadio('radioTwo', 0)"
                    :class="{ active: radioTwo === 0 }"
                  >Left way</b-button>
                  <b-button
                    variant="default" size="sm" @click="changeRadio('radioTwo', 1)"
                   :class="{ active: radioTwo === 1 }"
                  >Middle way</b-button>
                  <b-button
                    variant="default" size="sm" @click="changeRadio('radioTwo', 2)"
                    :class="{ active: radioTwo === 2 }"
                  >Right way</b-button>
                </b-button-group>
              </div>
            </b-col>
            <b-col md='4' sm='12' xs='12'>
              <h4> Use with <span class="fw-semi-bold">Icons</span></h4>
              <p class="fs-mini text-muted">
                Fontawesome and Glyph- icons may be used in buttons,
                button groups for a toolbar, navigation, or prepended form inputs.
                Let your buttons shine!
              </p>
              <div class="text-center mb-sm">
                <b-button variant="default" class="width-100 mr-xs">
                  <i class="glyphicon glyphicon-tree-conifer text-success mr-xs mb-xs" />
                  Forest
                </b-button>
                <b-button variant="default" class="width-100 mr-xs">
                  <i class="fa fa-check text-danger mr-xs mb-xs" />
                  Submit
                </b-button>
                <b-button variant="default" class="width-100 mr-xs">
                  <i class="fa fa-facebook text-primary mr-xs mb-xs" />
                  Login
                </b-button>
              </div>
              <div class="text-center">
                <b-button variant="inverse" class="width-100 mr-xs">
                  <i class="fa fa-exclamation text-warning mr-xs mb-xs" />
                  Error
                </b-button>
                <b-button variant="inverse" class="width-100 mr-xs">
                  <i class="glyphicon glyphicon-globe text-info mr-xs mb-xs" />
                  <span class="text-info">Globe</span>
                </b-button>
                <b-button variant="inverse" class="width-100 mr-xs">
                  <span class="circle bg-white mr-xs">
                    <i class="fa fa-map-marker text-gray" />
                  </span>
                  Map
                </b-button>
              </div>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Buttons',
  components: { Widget },
  data() {
    return {
      checkboxOne: [false, true, false],
      checkboxTwo: [true, false, true],
      radioOne: -1,
      radioTwo: 1,
    };
  },
  methods: {
    changeCheckbox(field, index) {
      Vue.set(this[field], index, !this[field][index]);
    },
    changeRadio(field, index) {
      Vue.set(this, field, index);
    },
  },
};
</script>
