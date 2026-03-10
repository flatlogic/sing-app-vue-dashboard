<template>
  <div>
    <section class="chat-section">
      <ChatSearch />
    </section>
    <section class="chat-section group-chats d-none d-lg-block">
      <h5>Group Chats</h5>
      <ul class="chat-list">
        <ChatListItem
          v-for="chat of getChats(true)"
          :key="chat.id"
          :chat="chat"
          :is-active="chat.id === activeChatId"
          @click="setActiveChat(chat.id)"
        />
      </ul>
    </section>
    <section class="chat-section personal-chats mb-0 d-none d-lg-block">
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <ChatListItem
          v-for="chat of getChats(false)"
          :key="chat.id"
          :chat="chat"
          :is-active="chat.id === activeChatId"
          @click="setActiveChat(chat.id)"
        />
      </ul>
    </section>
    <section class="chat-section all-chats mb-0 d-lg-none">
      <h5>Group Chats</h5>
      <ul class="chat-list mb-3">
        <ChatListItem
          v-for="chat of getChats(true)"
          :key="chat.id"
          :chat="chat"
          :is-active="chat.id === activeChatId"
          @click="setActiveChat(chat.id)"
        />
      </ul>
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <ChatListItem
          v-for="chat of getChats(false)"
          :key="chat.id"
          :chat="chat"
          :is-active="chat.id === activeChatId"
          @click="setActiveChat(chat.id)"
        />
      </ul>
    </section>
  </div>
</template>

<script setup>
import ChatListItem from './ChatListItem.vue'
import ChatSearch from '../ChatSearch/ChatSearch.vue'
import { useChat } from '@/composables/useChat'

const { user, chats, activeChatId, setActiveChat, findUser } = useChat()

function getChats(isGroup) {
  return chats.value
    .filter(chat => {
      return chat.isGroup === isGroup && chat.users.indexOf(user.value.id) > -1
    })
    .map(chat => {
      const interlocutors = []
      chat.users.forEach(uid => {
        if (uid !== user.value.id) {
          interlocutors.push(findUser(uid))
        }
      })
      const lastMessage = chat.messages?.[chat.messages.length - 1] || {}
      lastMessage.owner = lastMessage.userId === user.value.id
      return {
        id: chat.id,
        isGroup,
        title: isGroup ? chat.name : interlocutors[0].name + ' ' + interlocutors[0].surname,
        interlocutors,
        lastMessage
      }
    })
    .sort((a, b) => {
      const t1 = a.lastMessage.timestamp
      const t2 = b.lastMessage.timestamp
      if (t1 > t2) {
        return -1
      } else if (t1 < t2) {
        return 1
      } else {
        return 0
      }
    })
}
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
