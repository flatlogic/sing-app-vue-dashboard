<template>
  <div v-if="info.name">
    <div
      class="d-lg-none chat-mobile-navigation"
      @click="changeMobileState(mobileChatStates.CHAT)"
    >
      <i class="la la-angle-left la-lg" />
      Dialog
    </div>
    <section
      v-if="!info.isGroup"
      class="chat-info-header chat-section bg-info"
    >
      <div class="d-flex mb-3">
        <header>
          <h3 class="mb-3 fw-semi-bold">
            {{ info.name }} {{ info.surname }}
          </h3>
          <h5>{{ info.company }}</h5>
          <h6>{{ info.position }}</h6>
        </header>
        <Avatar
          class="ms-auto me-3"
          :user="info"
          :size="70"
          :show-status="false"
        />
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <a
          :href="'mailto:' + info.email"
          class="text-white mt-2"
        >{{ info.email }}</a>
        <ul
          v-if="info.social"
          class="social-links mt-2"
        >
          <li class="social-link">
            <a :href="info.social.facebook"><i class="fa fa-facebook" /></a>
          </li>
          <li class="social-link">
            <a :href="info.social.twitter"><i class="fa fa-twitter" /></a>
          </li>
          <li class="social-link">
            <a :href="info.social.linkedin"><i class="fa fa-linkedin" /></a>
          </li>
        </ul>
      </footer>
    </section>
    <section
      v-if="info.isGroup"
      class="chat-info-header chat-section bg-info"
    >
      <div class="d-flex align-items-center mb-3">
        <h4 class="mb-0 fw-semi-bold">
          {{ info.name }}
        </h4>
        <ul class="avatars-row ms-auto">
          <li
            v-for="u of shortUsersList"
            :key="u.id"
          >
            <Avatar
              :show-status="false"
              :user="u"
              :size="35"
              :stroke="true"
            />
          </li>
        </ul>
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <h5
          class="text-white mb-0"
          @click="openedGroupList = true"
        >
          {{ info.users.length }} members
        </h5>
        <button class="btn btn-white text-info fw-semi-bold">
          Add people
        </button>
      </footer>
      <GroupList
        v-if="openedGroupList"
        class="group-list-modal animated fadeIn"
        :uids="info.users"
        @close="openedGroupList = false"
      />
    </section>
    <section class="chat-section chat-info-body">
      <ul class="chat-info-list">
        <li class="chat-info-item">
          <header
            class="item-header"
            @click="toggleCollapse('common-info')"
          >
            <img
              class="icon"
              :src="img.information"
              alt="icon"
            >
            <h5 class="title">
              Information
            </h5>
            <i
              class="la la-angle-up ms-auto"
              :class="{ 'la-angle-down': !collapseStates['common-info'] }"
            />
          </header>
          <div
            v-show="collapseStates['common-info']"
            class="item-body"
          >
            <div v-if="!info.isGroup">
              <p class="mb-0">
                {{ info.tel }}
              </p>
              <span class="help-block">Mobile</span>
              <p class="mb-0">
                @{{ info.username }}
              </p>
              <span class="help-block">Username</span>
            </div>
            <div v-else>
              <p class="mb-0">
                {{ info.name }}
              </p>
              <span class="help-block">Name</span>
              <p class="mb-0">
                by {{ createdBy }} on {{ createdAt }}
              </p>
              <span class="help-block">Created</span>
            </div>
          </div>
        </li>
        <li class="chat-info-item">
          <header class="item-header">
            <img
              class="icon"
              :src="img.notifications"
              alt="notifications"
            >
            <h5 class="title">
              Notifications
            </h5>
            <label
              for="checkbox-ios1"
              class="switch ms-auto mb-0"
            >
              <input
                id="checkbox-ios1"
                type="checkbox"
                :checked="info.notifications"
                class="ios form-check-input"
              >
              <i />
            </label>
          </header>
        </li>
        <li class="chat-info-item">
          <header
            class="item-header"
            @click="toggleCollapse('images')"
          >
            <img
              class="icon"
              :src="img.images"
              alt="icon"
            >
            <h5 class="title">
              Images
            </h5>
            <i
              class="la la-angle-up ms-auto"
              :class="{ 'la-angle-down': !collapseStates['images'] }"
            />
          </header>
          <div
            v-show="collapseStates['images']"
            class="item-body"
          >
            <p
              v-if="!info.images.length"
              class="text-muted"
            >
              <i>No images</i>
            </p>
          </div>
        </li>
        <li class="chat-info-item">
          <header
            class="item-header"
            @click="toggleCollapse('links')"
          >
            <img
              class="icon"
              :src="img.links"
              alt="links"
            >
            <h5 class="title">
              Links
            </h5>
            <i
              class="la la-angle-up ms-auto"
              :class="{ 'la-angle-down': !collapseStates['links'] }"
            />
          </header>
          <div
            v-show="collapseStates['links']"
            class="item-body"
          >
            <p
              v-if="!info.links.length"
              class="text-muted"
            >
              <i>No links</i>
            </p>
          </div>
        </li>
        <li class="chat-info-item">
          <header
            class="item-header"
            @click="toggleCollapse('files')"
          >
            <img
              class="icon"
              :src="img.files"
              alt="files"
            >
            <h5 class="title">
              Files
            </h5>
            <i
              class="la la-angle-up ms-auto"
              :class="{ 'la-angle-down': !collapseStates['files'] }"
            />
          </header>
          <div
            v-show="collapseStates['files']"
            class="item-body"
          >
            <p
              v-if="!info.files.length"
              class="text-muted"
            >
              <i>No links</i>
            </p>
            <ul
              v-else
              class="files-list"
            >
              <li
                v-for="file of info.files"
                :key="file.id"
                class="file-item"
              >
                <img
                  class="download-icon"
                  :src="img.download"
                  alt="download"
                >
                <a :href="file.url">{{ file.name }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { format, parseISO } from 'date-fns'
import Avatar from '../Avatar/Avatar.vue'
import GroupList from './GroupList.vue'
import { useChat } from '@/composables/useChat'

import files from '@/assets/chat/files.svg?url'
import images from '@/assets/chat/images.svg?url'
import information from '@/assets/chat/information.svg?url'
import links from '@/assets/chat/links.svg?url'
import notifications from '@/assets/chat/notifications.svg?url'
import download from '@/assets/chat/download.svg?url'

const { chats, activeChatId, mobileChatStates, changeMobileState, findUser, findInterlocutor } = useChat()

const openedGroupList = ref(false)
const img = { files, images, information, links, notifications, download }

const collapseStates = reactive({
  'common-info': true,
  'images': false,
  'links': false,
  'files': true
})

function toggleCollapse(id) {
  collapseStates[id] = !collapseStates[id]
}

const info = computed(() => {
  const chat = chats.value.find(c => c.id === activeChatId.value)
  if (chat && chat.isGroup) {
    return { ...chat }
  }
  return { ...findInterlocutor(chat), ...chat }
})

const shortUsersList = computed(() => {
  if (chatUsers.value.length <= 3) {
    return [...chatUsers.value]
  } else {
    return chatUsers.value.slice(0, 3)
  }
})

const chatUsers = computed(() => {
  return (info.value.users || []).map(uid => findUser(uid))
})

const createdBy = computed(() => {
  const u = findUser(info.value.createdBy)
  return u ? `${u.name} ${u.surname}` : ''
})

const createdAt = computed(() => {
  if (!info.value.createdAt) return ''
  return format(parseISO(info.value.createdAt), 'MMMM dd, yyyy')
})
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
