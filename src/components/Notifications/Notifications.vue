<template>
  <section class="notifications navbar-notifications">
    <header class="cardHeader card-header">
      <div class="text-center mb-sm">
        <strong>You have 13 notifications</strong>
      </div>
      <div
        id="notification-b-buttons"
        class="btn-group"
        role="group"
      >
        <button
          type="button"
          class="btn btn-secondary"
          @click.stop="changeNotificationsTab(1)"
        >
          Notifications
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click.stop="changeNotificationsTab(2)"
        >
          Messages
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click.stop="changeNotificationsTab(3)"
        >
          Progress
        </button>
      </div>
    </header>
    <NewNotificationsList v-if="newNotifications" />
    <NotificationsList v-else-if="notificationsTabSelected === 1" />
    <Messages v-else-if="notificationsTabSelected === 2" />
    <Progress v-else-if="notificationsTabSelected === 3" />
    <NotificationsList v-else />
    <footer class="cardFooter text-sm card-footer">
      <span class="fs-mini">Synced at: 5 Mar 2026 10:30</span>
      <button
        type="button"
        class="btn btn-link btnNotificationsReload btn-xs float-end py-0"
        :class="{ disabled: isLoad }"
        @click.stop="loadNotifications"
      >
        <span v-if="isLoad"><i class="la la-refresh la-spin" /> Loading...</span>
        <i
          v-else
          class="la la-refresh"
        />
      </button>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NotificationsList from './NotificationsDemo/NotificationsList.vue'
import NewNotificationsList from './NotificationsDemo/NewNotificationsList.vue'
import Messages from './NotificationsDemo/Messages.vue'
import Progress from './NotificationsDemo/Progress.vue'

const notificationsTabSelected = ref(1)
const newNotifications = ref(null)
const isLoad = ref(false)

function changeNotificationsTab(tab) {
  notificationsTabSelected.value = tab
  newNotifications.value = null
}

function loadNotifications() {
  isLoad.value = true

  setTimeout(() => {
    newNotifications.value = 'new notifications component'
    isLoad.value = false
  }, 1500)
}
</script>

<style src="./Notifications.scss" lang="scss" />
