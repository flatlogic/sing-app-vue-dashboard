<template>
  <div class="grid-page">
    <h1 class="page-title">
      Grid - <span class="fw-semi-bold">Options</span>
    </h1>
    <div class="row">
      <div class="col-xl-12">
        <Widget title="Draggable Grid">
          <div>
            <p>
              <strong>Widgster</strong> is a plugin that allows to easily implement
              basic widget functions that
              lots of our customers have requested. For now it has the following essential
              widget features:
            </p>
            <ul class="text-list">
              <li>
                <strong>Collapse/Expand</strong> - all widgets can be collapsed to
                fill only header's vertical space;
              </li>
              <li>
                <strong>Close</strong> - closable. Any widget may be
                removed by clicking the close btn;
              </li>
              <li>
                <strong>Full Screen</strong> - an option to make widget
                fill the whole window (just like OS);
              </li>
              <li>
                <strong>Update</strong> - the hottest option allowing
                to update widget data
                asynchronously. You just
                need to provide an api to fetch the data from. With loader delivered.
              </li>
            </ul>
          </div>
        </Widget>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6 col-12 widget-container">
        <draggable
          v-model="leftWidgets"
          :group="{ name: 'grid' }"
          handle="header"
          item-key="id"
          :animation="200"
          ghost-class="widget-placeholder"
          filter=".locked"
        >
          <template #item="{ element }">
            <Widget
              v-if="element.id === 'default'"
              :title="'<h6>Default <span class=fw-semi-bold>Widget</span></h6>'"
              refresh
              collapse
              fullscreen
              close
              custom-header
              show-tooltip
              :tooltip-placement="tooltipPlacement"
              :fetching-data="widgetFetchingData.default"
              @load="updateWidget('default')"
            >
              <div>
                <p
                  v-for="item in gridData.default"
                  :key="item.value"
                  :class="item.extraClass"
                >
                  {{ item.value }}
                </p>
              </div>
            </Widget>

            <Widget
              v-else-if="element.id === 'shares'"
              ref="sharesWidget"
              class="shares-widget"
              show-tooltip
              :tooltip-placement="tooltipPlacement"
              :title="'<h6><span class=\'badge bg-primary rounded-pill me-2\'><i class=\'fa fa-twitter\'></i></span>Latest <span class=\'fw-semi-bold\'>Shares</span></h6>'"
              close="Close"
              refresh="Reload"
              custom-header
              body-class="p-0"
              :fetching-data="widgetFetchingData.shares"
              @load="updateWidget('shares')"
            >
              <div class="list-group list-group-lg">
                <a
                  v-for="item in gridData.shares"
                  :key="item.name"
                  href="#"
                  class="list-group-item"
                  :class="item.extraClass"
                >
                  <span class="thumb-sm me-1">
                    <img
                      class="rounded-circle"
                      :src="item.img"
                      :alt="item.name"
                    >
                  </span>
                  <div>
                    <h6 class="m-0">{{ item.name }}</h6>
                    <small class="text-muted">{{ item.comment }}</small>
                  </div>
                  <i
                    class="fa fa-circle ms-auto"
                    :class="'text-' + item.type"
                  />
                </a>
              </div>
            </Widget>

            <Widget
              v-else-if="element.id === 'autoload'"
              id="autoload-widget"
              :title="'<h6>Autoload <span class=fw-semi-bold>Widget</span></h6>'"
              :show-loader="false"
              :autoload="2000"
              custom-header
              :custom-controls="autoloadControls"
              @load="updateWidget('autoload')"
            >
              <div>
                <span v-html="gridData.autoload.title" />
                <p class="lead text-muted text-center">
                  Faith makes it possible to achieve that which
                  man's mind can conceive and believe.
                </p>
                <form>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label"
                    >
                      <i class="fa fa-circle text-warning" /> Email address
                    </label>
                    <input
                      id="exampleInputEmail1"
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                    >
                  </div>
                  <div class="mb-3">
                    <label
                      for="pswd"
                      class="form-label"
                    >
                      <i class="fa fa-circle text-danger" /> Password
                    </label>
                    <input
                      id="pswd"
                      type="text"
                      class="form-control"
                      placeholder="Min 8 characters"
                    >
                  </div>
                  <p>
                    To make a widget automatically load its content you just need to set
                    <strong>autoload</strong> attribute and provide an api to update the widget content.
                  </p>
                  <pre><code>&lt;Widget :autoload="true" ...&gt;</code></pre>
                  <p>
                    <strong>autoload</strong> may be set to an integer
                    value. If set, for example, to
                    2000 will refresh widget every 2 seconds.
                  </p>
                  <div class="clearfix">
                    <div class="btn-toolbar float-end">
                      <button
                        type="button"
                        class="btn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-success"
                        :class="gridData.autoload.btnExtraClass"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Widget>

            <Widget
              v-else-if="element.id === 'customLoader'"
              :fetching-data="true"
              :title="'<h6>Custom <span class=fw-semi-bold>Loader</span></h6>'"
              custom-header
            />
          </template>
        </draggable>
      </div>

      <div class="col-xl-6 widget-container">
        <draggable
          v-model="rightWidgets"
          :group="{ name: 'grid' }"
          handle="header"
          item-key="id"
          :animation="200"
          ghost-class="widget-placeholder"
          filter=".locked"
        >
          <template #item="{ element }">
            <Widget
              v-if="element.id === 'news'"
              id="news-widget"
              :title="'<div><h6> News <span class=\'badge rounded-pill bg-success\'>17</span></h6><span class=text-muted>spinning refresh button close prompt</span></div>'"
              custom-header
              refresh
              collapse
              close
              body-class="p-0"
              :fetching-data="widgetFetchingData.news"
              :show-loader="false"
              @load="updateWidget('news')"
              @close="closePrompt"
            >
              <ul class="news-list stretchable">
                <li
                  v-for="item in gridData.news"
                  :key="item.title"
                  :class="item.extraClass"
                >
                  <span
                    class="icon text-white"
                    :class="'bg-' + item.background"
                  >
                    <i
                      class="fa"
                      :class="'fa-' + item.icon"
                    />
                  </span>
                  <div class="news-item-info">
                    <h5 class="name m-0 mb-xs">
                      <a href="#">{{ item.title }}</a>
                    </h5>
                    <p class="fs-mini">
                      {{ item.description }}
                    </p>
                    <time class="help-block">{{ item.date }}</time>
                  </div>
                </li>
              </ul>
            </Widget>

            <Widget
              v-else-if="element.id === 'collapsed'"
              class="locked"
              :title="'<h6>Collapsed by default & locked</h6>'"
              :collapsed="true"
              collapse
              close
              custom-header
            >
              <div class="widget-body">
                <blockquote>
                  There are no limits. There are plateaus, but you must not
                  stay there, you must go beyond
                  them. If it kills you, it kills you. A man must constantly exceed his level.
                  <footer>Bruce Lee</footer>
                </blockquote>
                <p>
                  To make a widget initially collapsed just add
                  <code>:collapsed="true"</code> attribute
                  to <code>&lt;Widget&gt;</code>.
                </p>
                <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
              </div>
            </Widget>

            <Widget
              v-else-if="element.id === 'jumbotron'"
              ref="jumbotronWidget"
              class="bg-inverse"
              body-class="p-0"
            >
              <div class="jumbotron handle text-white py-3">
                <div class="container">
                  <h1>Draggable story!</h1>
                  <p class="lead">
                    <em>Build</em> your own
                    interfaces! Sit back and relax.
                  </p>
                  <p class="text-center">
                    <a
                      class="btn btn-danger btn-lg text-white"
                      @click="toggleFullscreen"
                    >
                      Fullscreen me!
                      <i class="fa fa-check" />
                    </a>
                  </p>
                  <a
                    class="btn btn-danger btn-lg"
                    @click="restoreWidget"
                  >
                    Want to go back?
                  </a>
                </div>
              </div>
            </Widget>
          </template>
        </draggable>
      </div>
    </div>

    <!-- Modal for close confirmation -->
    <div
      class="modal fade"
      :class="{ show: modal, 'd-block': modal }"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Sure?
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="modal = false"
            />
          </div>
          <div class="modal-body bg-white">
            Do you really want to unrevertably remove this super news widget?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="modal = false"
            >
              No
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="confirmRemove"
            >
              Yes, remove widget
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="modal"
      class="modal-backdrop fade show"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import Widget from '@/components/Widget/Widget.vue'
import mock from './mock'

const leftWidgets = ref([
  { id: 'default' },
  { id: 'shares' },
  { id: 'autoload' },
  { id: 'customLoader' }
])

const rightWidgets = ref([
  { id: 'news' },
  { id: 'collapsed' },
  { id: 'jumbotron' }
])

const gridData = ref(mock.mainData)
const updatedData = mock.updatedData
const widgetFetchingData = ref({})
const modal = ref(false)
const tooltipPlacement = 'bottom'
const jumbotronWidget = ref(null)
let closeCallback = null

const autoloadControls = `
  <div>
    <div class='dropdown'>
      <i class='fa fa-cog' id='dropdownMenuButton' data-toggle='dropdown'
        aria-haspopup='true' aria-expanded='false'></i>
      <div class='dropdown-menu dropdown-menu-end' aria-labelledby='dropdownMenuButton'>
        <button class='dropdown-item' control='load' title='Reload'>
          Reload &nbsp;&nbsp;
          <span class='badge rounded-pill bg-success animated bounceIn'>
            <strong>9</strong>
          </span>
        </button>
        <button class='dropdown-item' control='fullscreen' title='Full Screen'>
          Fullscreen
        </button>
        <button class='dropdown-item' control='restore' title='Restore'>
          Restore
        </button>
        <div class='dropdown-divider'></div>
        <button class='dropdown-item' control='close' title='Close'>Close</button>
      </div>
    </div>
  </div>
`

function closePrompt(callback) {
  modal.value = true
  closeCallback = callback
}

function confirmRemove() {
  modal.value = false
  if (closeCallback) {
    closeCallback()
  }
}

function toggleFullscreen() {
  if (jumbotronWidget.value) {
    jumbotronWidget.value.changeState({ target: {} }, 'fullscreen')
  }
}

function restoreWidget() {
  if (jumbotronWidget.value) {
    jumbotronWidget.value.changeState({ target: {} }, 'default')
  }
}

function updateWidget(widget) {
  widgetFetchingData.value = {
    ...widgetFetchingData.value,
    [widget]: true
  }
  gridData.value = {
    ...gridData.value,
    [widget]: updatedData[widget]
  }
  setTimeout(() => {
    widgetFetchingData.value = {
      ...widgetFetchingData.value,
      [widget]: false
    }
  }, 200)
}
</script>

<style src="./Grid.scss" lang="scss" />
