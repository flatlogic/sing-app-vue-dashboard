import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { format } from 'date-fns'
import { user, chats, users } from '../pages/Chat/mock'

export const MobileChatStates = {
  LIST: 'list',
  CHAT: 'chat',
  INFO: 'info'
}

Object.freeze(MobileChatStates)

export const useChatStore = defineStore('chat', () => {
  const chatUser = ref(user)
  const chatList = ref(chats)
  const usersList = ref(users)
  const activeChatId = ref(chats[3]?.id || null)
  const sendingMessage = ref(false)
  const mobileState = ref(MobileChatStates.CHAT)

  const activeChat = computed(() => {
    return chatList.value.find(chat => chat.id === activeChatId.value)
  })

  function setActiveChat(chatId) {
    const chat = chatList.value.find(c => c.id === chatId)
    if (chat) {
      activeChatId.value = chat.id
    }
    changeMobileState(MobileChatStates.CHAT)
  }

  function newMessageRequest(payload) {
    if (!payload.message) return
    sendingMessage.value = true

    setTimeout(() => {
      const message = {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        text: payload.message,
        timestamp: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"),
        userId: chatUser.value.id
      }
      newMessageSuccess({ chatId: activeChatId.value, message })
    }, 1000)
  }

  function newMessageSuccess(payload) {
    const chat = chatList.value.find(c => c.id === activeChatId.value)
    if (chat) {
      chat.messages.push(payload.message)
    }
    sendingMessage.value = false
  }

  function changeMobileState(state) {
    if (mobileState.value === state && mobileState.value === MobileChatStates.INFO) {
      mobileState.value = MobileChatStates.CHAT
    } else {
      mobileState.value = state
    }
    if (state === MobileChatStates.LIST) {
      activeChatId.value = null
    }
  }

  return {
    user: chatUser,
    chats: chatList,
    users: usersList,
    activeChatId,
    sendingMessage,
    mobileState,
    activeChat,
    setActiveChat,
    newMessageRequest,
    newMessageSuccess,
    changeMobileState
  }
})
