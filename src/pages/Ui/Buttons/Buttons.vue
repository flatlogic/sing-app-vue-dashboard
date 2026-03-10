<template>
  <div>
    <h1 class="page-title">
      Buttons - <span class="fw-semi-bold">Styles </span>
    </h1>
    <div class="row">
      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Color <span class='fw-semi-bold'>Options</span></h5>"
          custom-header
          close
          collapse
        >
          <div>
            <p class="fs-mini text-muted">
              Use any of the available button classes to quickly create a styled button.
              Semantically distinguishable beauty.
            </p>
            <p class="text-start">
              <button class="btn btn-default width-100 mb-3 me-3">
                Default
              </button>
              <button class="btn btn-primary width-100 mb-3 me-3 text-white">
                Primary
              </button>
              <button class="btn btn-info width-100 mb-3 me-3">
                Info
              </button>
              <button class="btn btn-success width-100 mb-3 me-3">
                Success
              </button>
              <button class="btn btn-warning width-100 mb-3 me-3">
                Warning
              </button>
              <button class="btn btn-danger width-100 mb-3 me-3">
                Danger
              </button>
              <button class="btn btn-gray width-100 mb-3 me-3 text-white">
                Gray
              </button>
              <button class="btn btn-inverse width-100 mb-3 me-3">
                Inverse
              </button>
            </p>
          </div>
        </Widget>
      </div>
      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Size <span class='fw-semi-bold'>Variants</span>/h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Fancy larger or smaller buttons?
              Four separate sizes available for all use cases:
              from tiny 10px button to large one.
            </p>
            <p>
              <button class="btn btn-default btn-lg me-3">
                Large button
              </button>
              <button class="btn btn-primary me-3 text-white">
                Default button
              </button>
              <button class="btn btn-info btn-sm me-3">
                Small button
              </button>
              <button class="btn btn-success btn-xs me-3">
                Tiny button
              </button>
            </p>
          </div>
        </Widget>
      </div>

      <div class="col-md-6 col-12">
        <Widget
          title="<h5> <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini">
              In need of a button, but not the hefty background colors they bring?
              Use <code /> property to remove all
              background images and colors on any button.
            </p>
            <p>
              <button class="btn btn-outline-default width-100 mb-3 me-3">
                Default
              </button>
              <button class="btn btn-outline-primary width-100 mb-3 me-3">
                Primary
              </button>
              <button class="btn btn-outline-info width-100 mb-3 me-3">
                Info
              </button>
              <button class="btn btn-outline-success width-100 mb-3 me-3">
                Success
              </button>
              <button class="btn btn-outline-warning width-100 mb-3 me-3">
                Warning
              </button>
              <button class="btn btn-outline-danger width-100 mb-3 me-3">
                Danger
              </button>
              <button class="btn btn-outline-gray width-100 mb-3 me-3">
                Gray
              </button>
              <button class="btn btn-outline-inverse width-100 mb-3 me-3">
                Inverse
              </button>
            </p>
          </div>
        </Widget>
      </div>
      <div class="col-md-6 col-12">
        <Widget
          title="<h5>Rounded <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini">
              Use any of the available button properties to quickly create a styled button.
              Semantically distinguishable beauty. Use
              <code>.btn-rounded</code> or <code>.btn-rounded-f</code>.
            </p>
            <p>
              <button class="btn btn-default btn-rounded-f width-100 mb-3 me-3">
                Default
              </button>
              <button class="btn btn-primary btn-rounded-f width-100 mb-3 me-3 text-white">
                Primary
              </button>
              <button class="btn btn-info btn-rounded-f width-100 mb-3 me-3">
                Info
              </button>
              <button class="btn btn-success btn-rounded-f width-100 mb-3 me-3">
                Success
              </button>
              <button class="btn btn-outline-warning btn-rounded width-100 mb-3 me-3">
                Warning
              </button>
              <button class="btn btn-outline-danger btn-rounded width-100 mb-3 me-3 text-danger">
                Danger
              </button>
              <button class="btn btn-outline-gray btn-rounded width-100 mb-3 me-3 text-gray">
                Gray
              </button>
              <button class="btn btn-outline-inverse btn-rounded width-100 mb-3 me-3">
                Inverse
              </button>
            </p>
          </div>
        </Widget>
      </div>

      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Block <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Create block level buttons - those that span the full width
              of a parent— by adding <code>block</code>
              to <code>&lt;Button&gt;</code> component.
              Great for menu & social buttons.
            </p>
            <div class="d-grid">
              <button class="btn btn-info mb-3">
                Block Button
              </button>
              <button class="btn btn-default mb-3">
                Show Menu &nbsp;&nbsp;&nbsp;<i class="fa fa-bars" />
              </button>
              <button class="btn btn-primary mb-3">
                <i class="fa fa-facebook" />&nbsp;&nbsp;Login mit Facebook
              </button>
              <button class="btn btn-warning">
                Are you sure?
              </button>
            </div>
          </div>
        </Widget>
      </div>
      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Disabled <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Make buttons look unclickable by fading them back 50%.
              Add the <code>disabled</code> to <code>&lt;Button&gt;</code> component.
            </p>
            <p>
              <button
                class="btn btn-primary me-3 text-white"
                disabled
              >
                Primary button
              </button>
              <button
                class="btn btn-default me-sm-1 text-white"
                disabled
              >
                Button
              </button>
            </p>
            <p>
              <button
                class="btn btn-success btn-sm me-3 text-white"
                disabled
              >
                Primary Link
              </button>
              <button
                class="btn btn-default btn-sm me-sm-1 text-white"
                disabled
              >
                Link
              </button>
            </p>
          </div>
        </Widget>
      </div>

      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Groups</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Group a series of buttons together on a single
              line with the button group.
              Add on optional JavaScript radio and checkbox
              style behavior with Bootstrap buttons plugin.
            </p>
            <div class="btn-group mb-3">
              <button class="btn btn-default">
                Left
              </button>
              <button class="btn btn-default">
                Middle
              </button>
              <button class="btn btn-default">
                Right
              </button>
            </div>
            <div class="btn-toolbar mb-sm-1">
              <div class="btn-group me-3">
                <button class="btn btn-default ms-0">
                  1
                </button>
                <button class="btn btn-default">
                  2
                </button>
                <button class="btn btn-default">
                  3
                </button>
                <button class="btn btn-default">
                  4
                </button>
              </div>
              <div class="btn-group me-3">
                <button class="btn btn-default">
                  5
                </button>
                <button class="btn btn-default">
                  6
                </button>
                <button class="btn btn-default">
                  7
                </button>
              </div>
              <div class="btn-group me-2">
                <button class="btn btn-default">
                  8
                </button>
              </div>
            </div>
          </div>
        </Widget>
      </div>
      <div class="col-md-6 col-12">
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Dropdowns</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Add dropdown menus to nearly anything with
              this simple plugin, including the buttons,
              navbar, tabs, and pills.
              Both solid & segmented dropdown options available.
            </p>

            <div class="mb-3">
              <div class="dropdown d-inline-block me-3">
                <button
                  class="btn btn-danger dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  One
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Another action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Separated link</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown d-inline-block">
                <button
                  class="btn btn-gray dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  One
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Another action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-sm-1">
              <div class="btn-group me-3">
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                />
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Another action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Separated link</a>
                  </li>
                </ul>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-gray"
                >
                  Gray
                </button>
                <button
                  type="button"
                  class="btn btn-gray dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                />
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Another action</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                    >Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <Widget
          title="<h6> Button <span class='fw-semi-bold'>Options</span></h6>"
          close
          collapse
          custom-header
        >
          <div class="row">
            <div class="col-md-4 col-sm-6 col-12">
              <h4> Button <span class="fw-semi-bold">Checkboxes</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like
                toolbars.
                Use <code>ButtonGroup</code> to a group
                of checkboxes for checkbox style toggling on
                btn-group.
              </p>
              <div class="mb-sm-1">
                <div class="btn-group mb-3">
                  <button
                    class="btn btn-default"
                    :class="{ active: checkboxOne[0] }"
                    @click="changeCheckbox('checkboxOne', 0)"
                  >
                    Left way
                  </button>
                  <button
                    class="btn btn-default"
                    :class="{ active: checkboxOne[1] }"
                    @click="changeCheckbox('checkboxOne', 1)"
                  >
                    Middle way
                  </button>
                  <button
                    class="btn btn-default"
                    :class="{ active: checkboxOne[2] }"
                    @click="changeCheckbox('checkboxOne', 2)"
                  >
                    Right way
                  </button>
                </div>
              </div>
              <div class="mb-xs">
                <div class="btn-group">
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: checkboxTwo[0] }"
                    @click="changeCheckbox('checkboxTwo', 0)"
                  >
                    Left way
                  </button>
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: checkboxTwo[1] }"
                    @click="changeCheckbox('checkboxTwo', 1)"
                  >
                    Middle way
                  </button>
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: checkboxTwo[2] }"
                    @click="changeCheckbox('checkboxTwo', 2)"
                  >
                    Right way
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
              <h4> Button <span class="fw-semi-bold">Radios</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like toolbars.
                Use <code>ButtonGroup</code> to a group of radio
                inputs for radio style toggling on btn-group.
              </p>
              <div class="mb-3">
                <div class="btn-group">
                  <button
                    class="btn btn-default"
                    :class="{ active: radioOne === 0 }"
                    @click="radioOne = 0"
                  >
                    Left way
                  </button>
                  <button
                    class="btn btn-default"
                    :class="{ active: radioOne === 1 }"
                    @click="radioOne = 1"
                  >
                    Middle way
                  </button>
                  <button
                    class="btn btn-default"
                    :class="{ active: radioOne === 2 }"
                    @click="radioOne = 2"
                  >
                    Right way
                  </button>
                </div>
              </div>
              <div class="mb-sm-1">
                <div class="btn-group">
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: radioTwo === 0 }"
                    @click="radioTwo = 0"
                  >
                    Left way
                  </button>
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: radioTwo === 1 }"
                    @click="radioTwo = 1"
                  >
                    Middle way
                  </button>
                  <button
                    class="btn btn-default btn-sm"
                    :class="{ active: radioTwo === 2 }"
                    @click="radioTwo = 2"
                  >
                    Right way
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
              <h4> Use with <span class="fw-semi-bold">Icons</span></h4>
              <p class="fs-mini text-muted">
                Fontawesome and Glyph- icons may be used in buttons,
                button groups for a toolbar, navigation, or prepended form inputs.
                Let your buttons shine!
              </p>
              <div class="text-center mb-sm">
                <button class="btn btn-default width-100 me-3">
                  <i class="glyphicon glyphicon-tree-conifer text-success me-sm-1 mb-sm-2" />
                  Forest
                </button>
                <button class="btn btn-default width-100 me-3">
                  <i class="fa fa-check text-danger me-sm-1 mb-sm-2" />
                  Submit
                </button>
                <button class="btn btn-default width-100 me-sm-1">
                  <i class="fa fa-facebook text-primary me-sm-1 mb-sm-2" />
                  Login
                </button>
              </div>
              <div class="text-center">
                <button class="btn btn-inverse width-100 me-3">
                  <i class="fa fa-exclamation text-warning me-sm-1 mb-sm-2" />
                  Error
                </button>
                <button class="btn btn-inverse width-100 me-3">
                  <i class="glyphicon glyphicon-globe text-info me-sm-2 mb-sm-2" />
                  <span class="text-white">Globe</span>
                </button>
                <button class="btn btn-inverse width-100 me-sm-1">
                  <span class="circle bg-white me-sm-1">
                    <i class="fa fa-map-marker text-gray" />
                  </span>
                  Map
                </button>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

const checkboxOne = ref([false, true, false])
const checkboxTwo = ref([true, false, true])
const radioOne = ref(-1)
const radioTwo = ref(1)

function changeCheckbox(field, index) {
  if (field === 'checkboxOne') {
    checkboxOne.value[index] = !checkboxOne.value[index]
  } else {
    checkboxTwo.value[index] = !checkboxTwo.value[index]
  }
}
</script>
