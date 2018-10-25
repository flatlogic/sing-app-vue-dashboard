<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Notifications</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Messages - <span class="fw-semi-bold">Notifications</span>
    </h1>

    <Widget
      title="<h6> Messenger </h6>"
      close collapse settings customHeader
    >
      <b-row>
        <b-col lg="4" xs="12">
          <h5 class="m-t-1">Layout options</h5>
          <p>There are few position options available for notifications. You can click any of
            them
            to change notifications position:</p>
          <div class="location-selector">
            <div
              class="bit top left" @click="toggleLocation('top', 'left')"
            />
            <div
              class="bit top right" @click="toggleLocation('top', 'right')"
            />
            <div
              class="bit top" @click="toggleLocation('top', '')"
            />
            <div
              class="bit bottom left" @click="toggleLocation('bottom', 'left')"
            />
            <div
              class="bit bottom right" @click="toggleLocation('bottom', 'right')"
            />
            <div
              class="bit bottom" @click="toggleLocation('bottom', '')"
            />
          </div>
        </b-col>

        <b-col lg="4" xs="12">
          <h5 class="m-t-1">Notification Types</h5>
          <p>Different types of notifications for lost of use cases. Custom classes are also
            supported.</p>
          <p><b-button variant="info" id="show-info-message" @click="addInfoNotification">Info
            Message</b-button></p>
          <p><b-button variant="danger" id="show-error-message" @click="addErrorNotification">Error
            + Retry Message</b-button></p>
          <p><b-button
            variant="success" id="show-success-message" @click="addSuccessNotification"
          >Success Message</b-button></p>
        </b-col>

        <b-col lg="4" xs="12">
          <h5 class="m-t-1">Dead Simple Usage</h5>
          <p>Just few lines of code to instantiate a notifications object. Does not require
            passing any options:</p>
          <pre><code>Messenger().post("Thanks for checking out Messenger!");</code></pre>
          <p>More complex example:</p>
          <pre>
            <code>Messenger().post({
  message: 'There was an explosion while processing your request.',
  type: 'error',
  showCloseButton: true
});</code>
          </pre>
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import 'imports-loader?$=jquery,this=>window!messenger/build/js/messenger'; // eslint-disable-line
import Widget from '@/components/Widget/Widget';

const { Messenger } = window;

/* eslint-disable */
function initializationMessengerCode() {
  (function () {
    let $,
      FlatMessage,
      spinner_template,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) {
        for (const key in parent) {
          if (__hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
          this.constructor = child;
        }

        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      };

    $ = jQuery;

    spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

    FlatMessage = (function (_super) {
      __extends(FlatMessage, _super);

      function FlatMessage() {
        return FlatMessage.__super__.constructor.apply(this, arguments);
      }

      FlatMessage.prototype.template = function (opts) {
        let $message;
        $message = FlatMessage.__super__.template.apply(this, arguments);
        $message.append($(spinner_template));
        return $message;
      };

      return FlatMessage;
    }(Messenger.Message));

    Messenger.themes.air = {
      Message: FlatMessage,
    };
  }).call(window);
}
/* eslint-enable */

export default {
  name: 'Notifications',
  components: { Widget },
  data() {
    return {
      locationClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
    };
  },
  methods: {
    addSuccessNotification() {
      Messenger().post({
        extraClasses: this.locationClasses,
        message: 'Showing success message was successful!',
        type: 'success',
        showCloseButton: true,
      });
      return false;
    },
    addInfoNotification() {
      const msg = Messenger().post({
        extraClasses: this.locationClasses,
        message: 'Launching thermonuclear war...',
        actions: {
          cancel: {
            label: 'cancel launch',
            action: () => msg.update({
              message: 'Thermonuclear war averted', type: 'success', actions: false,
            }),
          },
        },
      });

      return false;
    },
    addErrorNotification() {
      let i = 0;
      Messenger().run({
        errorMessage: 'Error destroying alien planet',
        successMessage: 'Alien planet destroyed!',
        extraClasses: this.locationClasses,
        action(opts) {
          /* eslint-disable */
          if (++i < 3) {
            return opts.error({
              status: 500,
              readyState: 0,
              responseText: 0,
            });
          }
          /* eslint-enable */
          return opts.success();
        },
      });
    },
    toggleLocation(vertical = 'top', horizontal = '') {
      let className = `messenger-fixed messenger-on-${vertical}`;
      className += (horizontal === '') ? '' : ` messenger-on-${horizontal}`;
      this.locationClasses = className;
      Messenger.options = {
        extraClasses: className,
        theme: 'air',
      };
      Messenger();
    },
  },
  created() {
    initializationMessengerCode();
    Messenger.options = {
      extraClasses: this.locationClasses,
      theme: 'air',
    };
    Messenger().post('Thanks for checking out Messenger!');
  },
};
</script>

<style src="./Notifications.scss" lang="scss" scoped />
