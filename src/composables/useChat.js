import { computed } from 'vue'
import { useChatStore, MobileChatStates } from '@/stores/chat'

export function useChat() {
  const chatStore = useChatStore()

  const mobileChatStates = MobileChatStates

  function findInterlocutor(chat) {
    if (!chat || !chat.id) {
      return null
    }
    const id = chat.users.find(uid => uid !== chatStore.user.id)
    return findUser(id)
  }

  function findUser(id) {
    return chatStore.users.find(u => u.id === id)
  }

  function changeMobileState(state) {
    chatStore.changeMobileState(state)
  }

  return {
    // Store state
    user: computed(() => chatStore.user),
    users: computed(() => chatStore.users),
    chats: computed(() => chatStore.chats),
    activeChatId: computed(() => chatStore.activeChatId),
    sendingMessage: computed(() => chatStore.sendingMessage),
    mobileState: computed(() => chatStore.mobileState),

    // Constants
    mobileChatStates,

    // Methods
    findInterlocutor,
    findUser,
    changeMobileState,
    setActiveChat: chatStore.setActiveChat,
    newMessageRequest: chatStore.newMessageRequest
  }
}

export { MobileChatStates }
