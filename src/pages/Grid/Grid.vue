<template>
  <div class="grid-page">
    <h1 class="page-title">Grid - <span class="fw-semi-bold">Options</span></h1>
    <b-row>
      <b-col xl='7'>
        <Widget title="Draggable Grid">
          <div>
            <p>
              <strong>Widgster</strong> is a plugin that allows to easily implement
              basic widget functions that
              lots of our customers have requested. For now it has the following essential
              widget features:
            </p>
            <ul class="text-list">
              <li><strong>Collapse/Expand</strong> - all widgets can be collapsed to
                fill only header&apos;s vertical space;
              </li>
              <li><strong>Close</strong> - closable. Any widget may be
              removed by clicking the close btn;</li>
              <li><strong>Full Screen</strong> - an option to make widget
              fill the whole window (just like OS);</li>
              <li><strong>Update</strong> - the hottest option allowing
                to update widget data
                asynchronously. You just
                need to provide an api to fetch the data from. With loader delivered.
              </li>
            </ul>
          </div>
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="widget-container" xl='6' xs='12'>
        <draggable v-bind="sortOptions">
          <Widget
            title="<h6>Default <span class='fw-semi-bold'>Widget</span></h6>"
            refresh collapse fullscreen close customHeader
            showTooltip :tooltipPlacement="tooltipPlacement"
            :fetchingData="widgetFetchingData.default"
            @load="updateWidget('default')"
          >
            <div>
              <p v-for="item in gridData.default" :key="item.value" :class="item.extraClass">
                {{item.value}}
              </p>
            </div>
          </Widget>

          <Widget
            class="shares-widget"
            ref="sharesWidget"
            showTooltip :tooltipPlacement="tooltipPlacement"
            title="<h6>
              <span class='badge badge-primary'><i class'fa fa-facebook' /></span> &nbsp;
              Latest <span class='fw-semi-bold'>Shares</span>
            </h6>"
            close="Close" refresh="Reload" customHeader
            bodyClass="p-0"
            :fetchingData="widgetFetchingData.shares"
            @load="updateWidget('shares')"
          >
            <div class="list-group list-group-lg">
              <a href="#" class="list-group-item" v-for="item in gridData.shares" :key="item.name" :class="item.extraClass">
                <span class="thumb-sm mr">
                  <img class="rounded-circle" :src="item.img" alt="..." />
                </span>
                <div>
                  <h6 class="m-0">{{item.name}}</h6>
                  <small class="text-muted">{{item.comment}}</small>
                </div>
                <i class="fa fa-circle ml-auto" :class="'text-' + item.type"></i>
              </a>
            </div>
          </Widget>
          <Widget
            id="autoload-widget"
            :title="'<h6>Autoload <span class=fw-semi-bold>Widget</span></h6>'"
            :showLoader="false"
            :autoload="2000"
            @load="updateWidget('autoload')"
            customHeader
            customControls="
              <div>
                <div class='dropdown'>
                  <i class='fa fa-cog' id='dropdownMenuButton' data-toggle='dropdown'
                    aria-haspopup='true' aria-expanded='false'></i>
                  <div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                    <button class='dropdown-item' control='load' title='Reload'>
                      Reload &nbsp;&nbsp;
                      <span class='badge badge-pill badge-success animated bounceIn'>
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
            "
          >
            <div>
              <span v-html="gridData.autoload.title"></span>
              <p class="lead text-muted text-center">
                Faith makes it possible to achieve that which
                man&apos;s mind can conceive and believe.
              </p>
              <b-form>
                <b-form-group>
                  <label for="exampleInputEmail1"><i class="fa fa-circle text-warning" /> &nbsp; Email
                    address</label>
                  <b-form-input
                    type="email" id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </b-form-group>
                <b-form-group>
                  <label for="pswd"><i class="fa fa-circle text-danger" /> &nbsp; Password</Label>
                  <b-form-input id="pswd" type="text" placeholder="Min 8 characters" />
                </b-form-group>
                <p>
                  To make a widget automatically load it&apos;s content you just need to set
                  <strong>autoload</strong> attribute and provide an api to update the widget content.
                </p>
                <pre><code>&lt;Widget :autoload=&quot;true&quot; ...&gt;</code></pre>
                <p>
                  <strong>autoload</strong> may be set to an integer
                  value. If set, for example, to
                  2000 will refresh widget every 2 seconds.
                </p>
                <div class="clearfix">
                  <div class="btn-toolbar float-right">
                    <b-button variant="transparent">Cancel</b-button>
                    <b-button variant="success" :class="gridData.autoload.btnExtraClass">&nbsp;Submit&nbsp;</b-button>
                  </div>
                </div>
              </b-form>
            </div>
          </Widget>

          <Widget :fetchingData="true"
                  :title="'<h6>Custom <span class=fw-semi-bold>Loader</span></h6>'"
                  customHeader
          >
          </Widget>
        </draggable>
      </b-col>

      <b-col xl='6' class="widget-container">
        <draggable v-bind="sortOptions">
          <Widget
            id="news-widget"
            :title="'<div><h6> News <span class=badge badge-pill badge-success>17</span></h6><span class=text-muted>spinning refresh button close prompt</span></div>'"
            customHeader
            refresh collapse close
            bodyClass="p-0"
            :fetchingData="widgetFetchingData.news"
            @load="updateWidget('news')"
            @close="closePrompt"
            :showLoader="false"
          >
            <ul class="news-list stretchable">
              <li v-for="item in gridData.news" :key="item.title" :class="item.extraClass">
                <span class="icon text-white" :class="'bg-'+item.background">
                  <i class="fa" :class="'fa-'+item.icon"></i>
                </span>
                <div class="news-item-info">
                  <h5 class="name m-0 mb-xs"><a href="#">{{item.title}}</a></h5>
                  <p class="fs-mini">
                    {{item.description}}
                  </p>
                  <time class="help-block">{{item.date}}</time>
                </div>
              </li>
            </ul>
            <b-modal :change="toggleModal" v-model="modal"
              id="news-close-modal" title="Sure?" body-bg-variant="white">
              Do you really want to unrevertably remove this super news widget?
              <div slot="modal-footer" class="w-100 text-right">
                <b-button variant="default" @click="toggleModal" data-dismiss="modal">
                  No
                  </b-button>&nbsp;
                <b-button variant="danger" ref="newsWidgetRemove" @click="null">Yes,
                  remove widget</b-button>
              </div>
            </b-modal>
          </Widget>

          <Widget
            class="locked"
            :title="'<h6>Collapsed by default & locked</h6>'"
            :collapsed="true"
            collapse close customHeader
          >
            <div class="widget-body">
              <blockquote>
                There are no limits. There are plateaus, but you must not
                stay there, you must go beyond
                them. If it kills you, it kills you. A man must constantly exceed his level.
                <footer>
                  Bruce Lee
                </footer>
              </blockquote>
              <p>To make a widget initially collapsed just add
                <code>:collapsed=&quot;true&quot;</code> attribute
                to <code>&lt;Widget&gt;</code>.</p>
              <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
            </div>
          </Widget>

          <Widget ref="jumbotronWidget"
          class="bg-inverse"
          bodyClass="p-0"
        >
          <div class="jumbotron handle text-white mb-0">
            <div class="container">
              <h1>Draggable story!</h1>
              <p class="lead">
                <em>Build</em> your own
                interfaces! Sit back and relax.
              </p>
              <p class="text-center">
                <a class="btn btn-danger btn-lg" control="fullscreen" @click="$refs.jumbotronWidget.changeState($event, 'fullscreen')">
                  Fullscreen me! &nbsp;
                  <i class="fa fa-check"></i>
                </a>
              </p>
              <a class="btn btn-danger btn-lg" control="restore" @click="$refs.jumbotronWidget.changeState($event, 'default')">
                Want to go back?
              </a>
            </div>
          </div>

        </Widget>
        </draggable>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import mock from './mock';
import draggable from 'vuedraggable';

export default {
  name: 'Grid',
  components: {Widget, draggable},
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
      gridData: mock.mainData,
      updatedData: mock.updatedData,
      widgetFetchingData: {},
      isOpen: false,
      modal: false,
      tooltipPlacement: 'bottom',
      sortOptions: {
        group: "grid",
        handle: "header",
        filter: ".locked",
        opacity: "0.8",
        ghostClass: "widget-placeholder",
        animation: "200",
      },
    };
  },
  methods: {
    closePrompt(callback) {
      this.modal = true;
      setTimeout(() => {
        this.$refs.newsWidgetRemove.addEventListener('click', () => {
          this.modal = false;
          callback();
        });
      });
    },
    toggleModal() {
      Vue.set(this, 'modal', !this.modal);
    },
    updateWidget(widget) {
      this.widgetFetchingData = Object.assign({}, this.widgetFetchingData, {
        [widget]: true
      });
      this.gridData = Object.assign({}, this.gridData, {
        [widget]: this.updatedData[widget]
      });
      setTimeout(() => {
        this.widgetFetchingData = Object.assign({}, this.widgetFetchingData, {
          [widget]: false
        });
      }, 200);
    }
  }
};
</script>

<style src="./Grid.scss" lang="scss" />
