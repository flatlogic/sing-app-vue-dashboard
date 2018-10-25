<template>
  <div class="grid-page">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Grid</li>
    </ol>
    <h1 class="page-title">Grid - <span class="fw-semi-bold">Options</span></h1>

    <b-row>
      <b-col xl='7'>
        <Widget
          title="<h5>Draggable Grid &nbsp;
            <span class='badge badge-danger fw-normal'>since 2.1</span>
          </h5>"
          customHeader
        >
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
              <li><strong>Ajax Load</strong> - the hottest option allowing
                to load/reload widget content
                asynchronously. You just
                need to provide an url to fetch the data from. With loader delivered.
              </li>
            </ul>
            <p>It&apos;s available under MIT license, check out
              <a href="https://github.com/flatlogic/widgster" target="_blank" rel="noopener noreferrer"> github </a>
              to find it.</p>
            <p>
              Test it out!
            </p>
          </div>
        </Widget>
      </b-col>
    </b-row>

    <b-row class="grid-demo">
      <b-col class="widget-container" xl='6' xs='12'>
        <Widget
          title="<h6>Default <span class='fw-semi-bold'>Widget</span></h6>"
          refresh collapse fullscreen close customHeader
          showTooltip :tooltipPlacement="tooltipPlacement"
          :dataWidgster="{
            'data-widgster-load': '/demo/grid/default.php'
          }"
        >
          <div>
            <p>A timestamp this widget was created: Apr 24, 19:07:07</p>
            <p>A timestamp this widget was updated: Apr 24, 19:07:07</p>
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
          :dataWidgster="{
            'data-widgster-load': '/demo/grid/shares.php',
            'data-post-processing': true,
          }"
        >
          <div class="list-group list-group-lg">
            <a href="#" class="list-group-item ">
              <span class="thumb-sm mr">
                <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
              </span>
              <div>
                <h6 class="m-0">Maikel Basso</h6>
                <small class="text-muted">about 2 mins ago</small>
              </div>
              <i class="fa fa-circle ml-auto text-danger" />
            </a>
            <a href="#" class="list-group-item">
              <span class="thumb-sm mr">
                <img class="rounded-circle" src="../../assets/people/a2.jpg" alt="..." />
              </span>
              <div>
                <h6 class="m-0">Ianus Arendse</h6>
                <small class="text-muted">about 42 mins ago</small>
              </div>
              <i class="fa fa-circle ml-auto text-info" />
            </a>
            <a href="#" class="list-group-item">
              <span class="thumb-sm mr">
                <img class="rounded-circle" src="../../assets/people/a3.jpg" alt="..." />
              </span>
              <div>
                <h6 class="m-0">Valdemar Landau</h6>
                <small class="text-muted">one hour ago</small>
              </div>
              <i class="fa fa-circle ml-auto text-success" />
            </a>
            <a href="#" class="list-group-item mb-n-md">
              <span class="thumb-sm mr">
                <img class="rounded-circle" src="../../assets/people/a4.jpg" alt="..." />
              </span>
              <div>
                <h6 class="m-0">Rick Teagan</h6>
                <small class="text-muted">3 hours ago</small>
              </div>
              <i class="fa fa-circle ml-auto text-warning" />
            </a>
          </div>
        </Widget>
        <Widget
          id="autoload-widget"
          :dataWidgster="{
            'data-widgster-load': '/demo/grid/autoload.php',
            'data-post-processing': true,
            'data-widgster-autoload': true,
            'data-widgster-show-loader': false
          }"
          title="<h6>Autoload <span class='fw-semi-bold'>Widget</span></h6>"
          customHeader
          customControls="
            <div>
              <div class='dropdown'>
                <i class='fa fa-cog' id='dropdownMenuButton' data-toggle='dropdown'
                  aria-haspopup='true' aria-expanded='false'></i>
                <div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                  <button class='dropdown-item' data-widgster='load' title='Reload'>
                    Reload &nbsp;&nbsp;
                    <span class='badge badge-pill badge-success animated bounceIn'>
                      <strong>9</strong>
                    </span>
                  </button>
                  <button class='dropdown-item' data-widgster='fullscreen' title='Full Screen'>
                    Fullscreen
                  </button>
                  <button class='dropdown-item' data-widgster='restore' title='Restore'>
                    Restore
                  </button>
                  <div class='dropdown-divider'></div>
                  <button class='dropdown-item' data-widgster='close' title='Close'>Close</button>
                </div>
              </div>
            </div>
          "
        >
          <div>
            <h3 class="text-center m-0">Sign up, it&apos;s <strong>free</strong></h3>
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
                <strong>data-widgster-autoload</strong> attribute and provide an url.
              </p>
              <pre><code>data-widgster-load=&quot;server/ajax_widget.html&quot;
                data-widgster-autoload=&quot;true&quot;</code></pre>
              <p>
                <strong>data-widgster-autoload</strong> may be set to an integer
                value. If set, for example, to
                2000 will refresh widget every 2 seconds.
              </p>
              <div class="clearfix">
                <div class="btn-toolbar float-right">
                  <b-button variant="transparent">Cancel</b-button>
                  <b-button variant="success">&nbsp;Submit&nbsp;</b-button>
                </div>
              </div>
            </b-form>
          </div>
        </Widget>

        <Widget>
          <header>
            <h6>Custom <span class="fw-semi-bold">Loader</span></h6>
          </header>
          <div class="widget-body" :style="{ minHeight: '140px' }">
            <div class="loader animated fadeIn handle">
              <span class="spinner">
                <i class="fa fa-spinner fa-spin" />
              </span>
            </div>
          </div>
        </Widget>
      </b-col>

      <b-col xl='6' class="widget-container">
        <Widget
          id="news-widget"
          title="<div><h6> News <span class='badge badge-pill badge-success'>17</span></h6>
            <span class='text-muted'>spinning refresh button &amp; close prompt</span>
          </div>"
          customHeader
          :data-widgster="{
            'data-widgster-load': '/demo/grid/news.php',
            'data-post-processing': true
          }"
          customControls="
            <div>
              <a data-widgster='expand' title='Expan' href='#'>
                <i class='glyphicon glyphicon-chevron-up'></i>
              </a>
              <a data-widgster='collapse' title='Collapse' href='#'>
                <i class='glyphicon glyphicon-chevron-down'></i>
              </a>
              <a data-widgster='load' title='I am spinning!' href='#'>
                <i class='fa fa-refresh'></i>
              </a>
              <a data-widgster='close' title='Close' href='#'>
                <i class='glyphicon glyphicon-remove'></i>
              </a>
            </div>
          "
          bodyClass="p-0"
          :options="{
            showLoader: false,
            closePrompt: closePrompt,
          }"
        >
          <ul class="news-list stretchable">
            <li>
              <span class="icon bg-danger text-white">
                <i class="fa fa-star" />
              </span>
              <div class="news-item-info">
                <h5 class="name m-0 mb-xs"><a href="#">First Human Colony on Mars</a></h5>
                <p class="fs-mini">
                  First 700 people will take part in building first
                  human settlement outside of Earth.
                  That&apos;s awesome, right?
                </p>
                <time class="help-block">Mar 20, 18:46</time>
              </div>
            </li>
            <li>
              <span class="icon bg-info text-white">
                <i class="fa fa-microphone" />
              </span>
              <div class="news-item-info">
                <h5 class="name m-0 mb-xs"><a href="#">Light Blue reached $300</a></h5>
                <p class="fs-mini">
                  Light Blue Inc. shares just hit $300 price. &quot;This was inevitable. It should
                  have happen sooner or later&quot; - says NYSE expert.
                </p>
                <time class="help-block">Sep 25, 11:59</time>
              </div>
            </li>
            <li>
              <span class="icon bg-success text-white">
                <i class="fa fa-eye" />
              </span>
              <div class="news-item-info">
                <h5 class="name m-0 mb-xs"><a href="#">No more spying</a></h5>
                <p class="fs-mini">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <time class="help-block">Mar 20, 18:46</time>
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
              <b-button variant="danger" data-widgster="close" id="news-widget-remove">Yes,
                remove widget</b-button>
            </div>
          </b-modal>
        </Widget>

        <Widget
          class="locked"
          title="<h6>Collapsed by default & locked</h6>"
          collapse close customHeader
          :dataWidgster="{
            'data-widgster-collapsed': 'true',
          }"
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
              <code>data-widgster-collapsed=&quot;true&quot;</code> attribute
              to <code>.widget</code>.</p>
            <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
          </div>
        </Widget>

        <Widget
          class="bg-gray"
          bodyClass="p-0"
        >
          <div class="jumbotron handle bg-gray text-white mb-0">
            <div class="container">
              <h1>Draggable story!</h1>
              <p class="lead">
                <em>Build</em> your own
                interfaces! Sit back and relax.
              </p>
              <p class="text-center">
                <a class="btn btn-danger btn-lg" data-widgster="fullscreen">
                  Fullscreen me! &nbsp;
                  <i class="fa fa-check" />
                </a>
              </p>
              <a class="btn btn-danger btn-lg" data-widgster="restore">
                Want to go back?
              </a>
            </div>
          </div>

        </Widget>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import Widget from '@/components/Widget/Widget';
import 'imports-loader?window.jQuery=jquery,this=>window!jquery-ui/ui/widgets/sortable'; //eslint-disable-line
import 'imports-loader?window.jQuery=jquery,this=>window!widgster'; // eslint-disable-line

export default {
  name: 'Grid',
  components: { Widget },
  data() {
    return {
      isOpen: false,
      modal: false,
      tooltipPlacement: 'bottom',
      sortOptions: {
        connectWith: '.widget-container',
        handle: 'header, .handle',
        cursor: 'move',
        iframeFix: false,
        items: '.widget:not(.locked)',
        opacity: 0.8,
        helper: 'original',
        revert: true,
        forceHelperSize: true,
        placeholder: 'widget widget-placeholder',
        forcePlaceholderSize: true,
        tolerance: 'pointer',
      },
    };
  },
  methods: {
    initSharesWidget() {
      $(this.$refs.sharesWidget).widgster({
        loaderTemplate: `<div class="loader animated fadeIn">
          <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>
        </div>`,
      });
    },
    initNewsWidget() {
      /**
       * Make refresh button spin when loading
       */
      $('#news-widget').bind('load.widgster', () => {
        $(this).find('[data-widgster="load"] > i').addClass('fa-spin');
      }).bind('loaded.widgster', () => {
        $(this).find('[data-widgster="load"] > i').removeClass('fa-spin');
      });
    },
    initAutoLoadWidget() {
      $('#autoload-widget').bind('load.widgster', () => {
        $(this).find('.fa-spinner').addClass('fa-spin in');
      }).bind('loaded.widgster', () => {
        $(this).find('.fa-spinner').removeClass('fa-spin in');
      }).bind('load.widgster fullscreen.widgster restore.widgster', () => {
        $(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
      });
    },
    closePrompt(callback) {
      Vue.set(this, 'modal', true);
      $('#news-widget-remove').bind('click', () => {
        Vue.set(this, 'modal', false);
        callback();
      });
    },
    toggleModal() {
      Vue.set(this, 'modal', !this.modal);
    },
  },
  mounted() {
    $('.widget-container').sortable(this.sortOptions);

    this.initSharesWidget();
    this.initAutoLoadWidget();
    this.initNewsWidget();
  },
};
</script>

<style src="./Grid.scss" lang="scss" />
