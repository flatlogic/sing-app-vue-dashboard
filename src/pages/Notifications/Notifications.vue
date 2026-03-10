<template>
  <div>
    <h1 class="page-title">
      Messages - <span class="fw-semi-bold">Notifications</span>
    </h1>

    <Widget
      title="<h6> Vue Toastification </h6>"
      close
      collapse
      settings
      custom-header
    >
      <div class="row">
        <div class="col-lg-4 col-12">
          <h5 class="m-t-1">
            Position options
          </h5>
          <p>
            There are several position options available for notifications. You can click any of
            them to change notifications position:
          </p>
          <div class="location-selector">
            <div
              class="bit top left"
              @click="toggleLocation('top-left')"
            />
            <div
              class="bit top right"
              @click="toggleLocation('top-right')"
            />
            <div
              class="bit top"
              @click="toggleLocation('top-center')"
            />
            <div
              class="bit bottom left"
              @click="toggleLocation('bottom-left')"
            />
            <div
              class="bit bottom right"
              @click="toggleLocation('bottom-right')"
            />
            <div
              class="bit bottom"
              @click="toggleLocation('bottom-center')"
            />
          </div>
        </div>

        <div class="col-lg-4 col-12">
          <h5 class="m-t-1">
            Notification Types
          </h5>
          <p>
            Different types of notifications for lots of use cases. Custom classes are also
            supported.
          </p>
          <p>
            <button
              id="show-info-message"
              class="btn btn-info text-white"
              @click="addInfoNotification"
            >
              Info
              Message
            </button>
          </p>
          <p>
            <button
              id="show-error-message"
              class="btn btn-danger text-white"
              @click="addErrorNotification"
            >
              Error
              Message
            </button>
          </p>
          <p>
            <button
              id="show-success-message"
              class="btn btn-success"
              @click="addSuccessNotification"
            >
              Success Message
            </button>
          </p>
        </div>

        <div class="col-lg-4 col-12">
          <h5 class="m-t-1">
            Dead Simple Usage
          </h5>
          <p>
            Just few lines of code to instantiate a notifications object. Does not require
            passing any options:
          </p>
          <pre><code>import { useToast } from 'vue-toastification';
const toast = useToast();
toast("Thanks for checking out Messenger!");</code></pre>
          <p>More complex example:</p>
          <pre>
            <code>toast.error('There was an explosion while processing your request.', {
  timeout: 5000
});</code>
          </pre>
        </div>
      </div>
    </Widget>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import Widget from '@/components/Widget/Widget.vue'

const toast = useToast()

function addSuccessNotification() {
  toast.success('Showing success message was successful!')
}

function addInfoNotification() {
  toast.info('Launching thermonuclear war...', {
    timeout: 5000
  })
}

function addErrorNotification() {
  toast.error('There was an explosion while processing your request.', {
    timeout: 5000
  })
}

function toggleLocation(position = 'top-right') {
  toast(`Position changed to ${position}`, {
    position: position
  })
}

onMounted(() => {
  toast('Thanks for checking out Messenger!')
})
</script>

<style src="./Notifications.scss" lang="scss" scoped />
