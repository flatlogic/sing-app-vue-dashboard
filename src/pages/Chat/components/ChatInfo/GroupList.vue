<template>
  <div class="group-list-modal-wrapper">
    <div class="backdrop" />
    <section class="group-list-modal chat-section">
      <header class="group-list-header">
        <h5 class="mb-0">
          {{ users.length }} members
        </h5>
        <a
          class="text-muted"
          @click="$emit('close')"
        >
          <i class="la la-times la-lg" />
        </a>
      </header>
      <ChatSearch class="mb-2" />
      <ul class="group-list">
        <li
          v-for="groupUser of groupUsers"
          :key="groupUser.id"
        >
          <Avatar
            class="me-2"
            :user="groupUser"
            :size="40"
            :show-status="false"
          />
          <div>
            <p class="mb-0">
              {{ groupUser.name }} {{ groupUser.surname }}
            </p>
            <small>
              <OnlineStatus :user="groupUser" />
            </small>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ChatSearch from '../ChatSearch/ChatSearch.vue'
import Avatar from '../Avatar/Avatar.vue'
import OnlineStatus from '../OnlineStatus/OnlineStatus.vue'
import { useChat } from '@/composables/useChat'

const props = defineProps({
  uids: Array
})

defineEmits(['close'])

const { users, findUser } = useChat()

const groupUsers = computed(() => {
  return props.uids?.map(uid => findUser(uid)).filter(Boolean) || []
})
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
