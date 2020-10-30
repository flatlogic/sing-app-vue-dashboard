<template>
  <div>
    <h1 class="page-title">Messages - <span class="fw-semi-bold">Notifications</span>
    </h1>

    <Widget
      title="<h6> Vue Toasted </h6>"
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
                    class="bit top left" @click="toggleLocation('top-left')"
            />
            <div
                    class="bit top right" @click="toggleLocation('top-right')"
            />
            <div
                    class="bit top" @click="toggleLocation('top-center')"
            />
            <div
                    class="bit bottom left" @click="toggleLocation('bottom-left')"
            />
            <div
                    class="bit bottom right" @click="toggleLocation('bottom-right')"
            />
            <div
                    class="bit bottom" @click="toggleLocation('bottom-center')"
            />
          </div>
        </b-col>

        <b-col lg="4" xs="12">
          <h5 class="m-t-1">Notification Types</h5>
          <p>Different types of notifications for lots of use cases. Custom classes are also
            supported.</p>
          <p><b-button variant="info" id="show-info-message" @click="addInfoNotification">Info
            Message</b-button></p>
          <p><b-button variant="danger" id="show-error-message" @click="addErrorNotification">Error
            Message</b-button></p>
          <p><b-button
            variant="success" id="show-success-message" @click="addSuccessNotification"
          >Success Message</b-button></p>
        </b-col>

        <b-col lg="4" xs="12">
          <h5 class="m-t-1">Dead Simple Usage</h5>
          <p>Just few lines of code to instantiate a notifications object. Does not require
            passing any options:</p>
          <pre><code>this.$toasted.show("Thanks for checking out Messenger!");</code></pre>
          <p>More complex example:</p>
          <pre>
            <code>this.$toasted.error('There was an explosion while processing your request.', {
  duration: 5000,
  position: 'top-center'
});</code>
          </pre>
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Notifications',
  components: { Widget },
  methods: {
    addSuccessNotification() {
      this.$toasted.success('Showing success message was successful!', {
        action: {
          text: 'Close',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      })
    },
    addInfoNotification() {
      this.$toasted.info('Launching thermonuclear war...', {
        action: {
          text: 'Cancel launch',
          onClick: (e, toastObject) => {
            toastObject.text('Thermonuclear war averted').goAway(1000);
          }
        }
      });
    },
    addErrorNotification() {
      this.$toasted.error('Launching thermonuclear war...', {
        action: [
          {
            text: 'Cancel',
            onClick: (e, toastObject) => {
              toastObject.el.classList.remove('info');
              toastObject.el.classList.add('success');
              toastObject.text('Alien planet destroyed!').goAway(2000);
            }
          }
        ]
      });
    },
    toggleLocation(position = 'top-right') {
      this.$toasted.options.position = position;
      this.$toasted.show(null);
    },
  },
  created() {
    this.$toasted.show('Thanks for checking out Messenger!');
  },
};
</script>

<style src="./Notifications.scss" lang="scss" scoped />
