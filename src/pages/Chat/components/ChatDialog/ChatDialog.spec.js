import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref, computed } from 'vue'
import ChatDialog from './ChatDialog.vue'

// Mock child components
vi.mock('./ChatMessage.vue', () => ({
  default: {
    name: 'ChatMessage',
    template: '<div class="chat-message-stub" :data-owner="owner" :data-userid="message?.userId">{{ message?.text }}</div>',
    props: ['user', 'message', 'owner', 'showAvatar']
  }
}))

vi.mock('@/components/Loader/Loader.vue', () => ({
  default: {
    name: 'Loader',
    template: '<div class="loader-stub">Loading...</div>'
  }
}))

vi.mock('../OnlineStatus/OnlineStatus.vue', () => ({
  default: {
    name: 'OnlineStatus',
    template: '<div class="online-status-stub">{{ user?.status }}</div>',
    props: ['user']
  }
}))

// Mock data for useChat composable
const mockUser = {
  id: 'user1',
  name: 'John',
  surname: 'Doe',
  status: 'online'
}

const mockOtherUser = {
  id: 'user2',
  name: 'Jane',
  surname: 'Smith',
  status: 'online'
}

const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const lastWeek = new Date(today)
lastWeek.setDate(lastWeek.getDate() - 7)

const mockChatsData = ref([{
  id: 'chat1',
  name: 'Test Chat',
  isGroup: false,
  users: ['user1', 'user2'],
  messages: [
    {
      id: 'msg1',
      text: 'Hello!',
      timestamp: today.toISOString(),
      userId: 'user1'
    },
    {
      id: 'msg2',
      text: 'Hi there!',
      timestamp: today.toISOString(),
      userId: 'user2'
    }
  ]
}])

const mockActiveChatId = ref('chat1')
const mockSendingMessage = ref(false)
const mockMobileState = ref('chat')
const mockChangeMobileState = vi.fn()
const mockNewMessageRequest = vi.fn()

const MobileChatStates = {
  LIST: 'list',
  CHAT: 'chat',
  INFO: 'info'
}

vi.mock('@/composables/useChat', () => ({
  useChat: () => ({
    user: computed(() => mockUser),
    chats: mockChatsData,
    activeChatId: mockActiveChatId,
    sendingMessage: mockSendingMessage,
    mobileChatStates: MobileChatStates,
    changeMobileState: mockChangeMobileState,
    findUser: (id) => {
      if (id === 'user1') return mockUser
      if (id === 'user2') return mockOtherUser
      return null
    },
    findInterlocutor: (chat) => {
      if (!chat || !chat.users || chat.isGroup) return null
      const id = chat.users.find(uid => uid !== mockUser.id)
      if (id === 'user2') return mockOtherUser
      return null
    },
    newMessageRequest: mockNewMessageRequest
  })
}))

describe('ChatDialog.vue', () => {
  let wrapper

  function createWrapper() {
    return mount(ChatDialog)
  }

  beforeEach(() => {
    vi.useFakeTimers()

    // Reset mock data
    mockChatsData.value = [{
      id: 'chat1',
      name: 'Test Chat',
      isGroup: false,
      users: ['user1', 'user2'],
      messages: [
        {
          id: 'msg1',
          text: 'Hello!',
          timestamp: today.toISOString(),
          userId: 'user1'
        },
        {
          id: 'msg2',
          text: 'Hi there!',
          timestamp: today.toISOString(),
          userId: 'user2'
        }
      ]
    }]
    mockActiveChatId.value = 'chat1'
    mockSendingMessage.value = false
    mockChangeMobileState.mockClear()
    mockNewMessageRequest.mockClear()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
  })

  describe('rendering', () => {
    it('renders chat dialog', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.d-flex.flex-column').exists()).toBe(true)
    })

    it('renders chat header', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.chat-dialog-header').exists()).toBe(true)
    })

    it('renders chat dialog body', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.chat-dialog-body').exists()).toBe(true)
    })

    it('renders new message form', () => {
      wrapper = createWrapper()
      expect(wrapper.find('form.new-message').exists()).toBe(true)
    })

    it('renders message input', () => {
      wrapper = createWrapper()
      const input = wrapper.find('input.form-control')
      expect(input.exists()).toBe(true)
      expect(input.attributes('placeholder')).toBe('Type Your Message')
    })

    it('renders send button', () => {
      wrapper = createWrapper()
      const sendBtn = wrapper.find('button[type="submit"]')
      expect(sendBtn.exists()).toBe(true)
      expect(sendBtn.text()).toContain('Send')
    })

    it('renders attachment button', () => {
      wrapper = createWrapper()
      const attachBtn = wrapper.find('button.attachment')
      expect(attachBtn.exists()).toBe(true)
    })

    it('renders mobile navigation', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.chat-mobile-navigation').exists()).toBe(true)
    })
  })

  describe('title display', () => {
    it('displays interlocutor name for private chat', () => {
      wrapper = createWrapper()
      expect(wrapper.find('h5').text()).toContain('Jane')
      expect(wrapper.find('h5').text()).toContain('Smith')
    })

    it('displays chat name for group chat', async () => {
      mockChatsData.value = [{
        id: 'group1',
        name: 'Team Chat',
        isGroup: true,
        users: ['user1', 'user2', 'user3'],
        messages: [
          { id: 'msg1', text: 'Hello', timestamp: new Date().toISOString(), userId: 'user1' }
        ]
      }]
      mockActiveChatId.value = 'group1'

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      expect(wrapper.find('h5').text()).toBe('Team Chat')
    })
  })

  describe('online status', () => {
    it('renders OnlineStatus for private chat', () => {
      wrapper = createWrapper()
      expect(wrapper.findComponent({ name: 'OnlineStatus' }).exists()).toBe(true)
    })

    it('does not render OnlineStatus for group chat', async () => {
      mockChatsData.value = [{
        id: 'group1',
        name: 'Team Chat',
        isGroup: true,
        users: ['user1', 'user2'],
        messages: [
          { id: 'msg1', text: 'Hello', timestamp: new Date().toISOString(), userId: 'user1' }
        ]
      }]
      mockActiveChatId.value = 'group1'

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      expect(wrapper.findComponent({ name: 'OnlineStatus' }).exists()).toBe(false)
    })
  })

  describe('message grouping (dialogParts)', () => {
    it('groups messages by date', () => {
      wrapper = createWrapper()
      const dialogDividers = wrapper.findAll('.dialog-divider')
      expect(dialogDividers.length).toBeGreaterThan(0)
    })

    it('shows "Today" for today\'s messages', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Today')
    })

    it('shows "Yesterday" for yesterday\'s messages', async () => {
      mockChatsData.value = [{
        id: 'chat1',
        name: 'Test Chat',
        isGroup: false,
        users: ['user1', 'user2'],
        messages: [
          {
            id: 'msg1',
            text: 'Old message',
            timestamp: yesterday.toISOString(),
            userId: 'user1'
          }
        ]
      }]

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Yesterday')
    })

    it('shows formatted date for older messages', async () => {
      mockChatsData.value = [{
        id: 'chat1',
        name: 'Test Chat',
        isGroup: false,
        users: ['user1', 'user2'],
        messages: [
          {
            id: 'msg1',
            text: 'Old message',
            timestamp: lastWeek.toISOString(),
            userId: 'user1'
          }
        ]
      }]

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      // Should not contain "Today" or "Yesterday"
      const dividers = wrapper.findAll('.dialog-divider')
      const dividerText = dividers[0]?.text() || ''
      expect(dividerText).not.toBe('Today')
      expect(dividerText).not.toBe('Yesterday')
    })

    it('renders ChatMessage components for each message', () => {
      wrapper = createWrapper()
      const messages = wrapper.findAllComponents({ name: 'ChatMessage' })
      expect(messages.length).toBe(2)
    })
  })

  describe('message display', () => {
    it('identifies owner messages correctly', () => {
      wrapper = createWrapper()
      const messages = wrapper.findAll('.chat-message-stub')

      // First message is from user1 (owner)
      expect(messages[0].attributes('data-owner')).toBe('true')
      // Second message is from user2 (not owner)
      expect(messages[1].attributes('data-owner')).toBe('false')
    })

    it('finds correct user for non-owner messages', () => {
      wrapper = createWrapper()
      const messages = wrapper.findAll('.chat-message-stub')

      // Second message should have user2's id
      expect(messages[1].attributes('data-userid')).toBe('user2')
    })
  })

  describe('sending messages', () => {
    it('updates input with v-model', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('input.form-control')

      await input.setValue('Hello World')
      expect(input.element.value).toBe('Hello World')
    })

    it('calls newMessageRequest on form submit', async () => {
      wrapper = createWrapper()

      const input = wrapper.find('input.form-control')
      await input.setValue('Test message')

      const form = wrapper.find('form')
      await form.trigger('submit.prevent')

      expect(mockNewMessageRequest).toHaveBeenCalledWith({ message: 'Test message' })
    })

    it('shows loader when sending message', async () => {
      mockSendingMessage.value = true
      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })

    it('shows Send text when not sending', () => {
      wrapper = createWrapper()
      expect(wrapper.find('button[type="submit"]').text()).toContain('Send')
    })
  })

  describe('mobile navigation', () => {
    it('changes mobile state to LIST on back click', async () => {
      wrapper = createWrapper()

      const backBtn = wrapper.find('.chat-mobile-navigation')
      await backBtn.trigger('click')

      expect(mockChangeMobileState).toHaveBeenCalledWith(MobileChatStates.LIST)
    })

    it('changes mobile state to INFO on info icon click', async () => {
      wrapper = createWrapper()

      const infoIcon = wrapper.find('.info-icon.d-xl-none')
      await infoIcon.trigger('click')

      expect(mockChangeMobileState).toHaveBeenCalledWith(MobileChatStates.INFO)
    })
  })

  describe('avatar display logic', () => {
    it('shows avatar for first message in group', () => {
      wrapper = createWrapper()

      // The showAvatar logic: first message or different user from previous
      const messages = wrapper.findAllComponents({ name: 'ChatMessage' })

      // First message should show avatar
      expect(messages[0].props('showAvatar')).toBe(true)
    })

    it('shows avatar when user changes', async () => {
      mockChatsData.value = [{
        id: 'chat1',
        name: 'Test Chat',
        isGroup: false,
        users: ['user1', 'user2'],
        messages: [
          { id: 'msg1', text: 'Hello', timestamp: new Date().toISOString(), userId: 'user1' },
          { id: 'msg2', text: 'Hi', timestamp: new Date().toISOString(), userId: 'user2' },
          { id: 'msg3', text: 'How are you?', timestamp: new Date().toISOString(), userId: 'user1' }
        ]
      }]

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      const messages = wrapper.findAllComponents({ name: 'ChatMessage' })
      // All messages should show avatar because user changes each time
      expect(messages[0].props('showAvatar')).toBe(true)
      expect(messages[1].props('showAvatar')).toBe(true)
      expect(messages[2].props('showAvatar')).toBe(true)
    })

    it('hides avatar for consecutive messages from same user', async () => {
      mockChatsData.value = [{
        id: 'chat1',
        name: 'Test Chat',
        isGroup: false,
        users: ['user1', 'user2'],
        messages: [
          { id: 'msg1', text: 'Hello', timestamp: new Date().toISOString(), userId: 'user1' },
          { id: 'msg2', text: 'How are you?', timestamp: new Date().toISOString(), userId: 'user1' },
          { id: 'msg3', text: 'Still there?', timestamp: new Date().toISOString(), userId: 'user1' }
        ]
      }]

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      const messages = wrapper.findAllComponents({ name: 'ChatMessage' })
      // First should show, rest should not
      expect(messages[0].props('showAvatar')).toBe(true)
      expect(messages[1].props('showAvatar')).toBe(false)
      expect(messages[2].props('showAvatar')).toBe(false)
    })
  })

  describe('empty state', () => {
    it('handles empty chat gracefully', async () => {
      mockActiveChatId.value = null
      mockChatsData.value = []

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      // Should not crash
      expect(wrapper.exists()).toBe(true)
    })

    it('returns empty dialogParts when no active chat', async () => {
      mockActiveChatId.value = 'nonexistent'

      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      // No messages should be rendered
      const messages = wrapper.findAllComponents({ name: 'ChatMessage' })
      expect(messages.length).toBe(0)
    })
  })

  describe('scroll behavior', () => {
    it('has chat dialog body ref', () => {
      wrapper = createWrapper()
      const body = wrapper.find('.chat-dialog-body')
      expect(body.exists()).toBe(true)
    })
  })
})
