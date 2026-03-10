import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Chat from './Chat.vue'
import { useLayoutStore, MessageStates } from '@/stores/layout'

// Mock image imports
vi.mock('@/assets/people/a1.jpg', () => ({ default: 'a1.jpg' }))
vi.mock('@/assets/people/a2.jpg', () => ({ default: 'a2.jpg' }))
vi.mock('@/assets/people/a3.jpg', () => ({ default: 'a3.jpg' }))
vi.mock('@/assets/people/a4.jpg', () => ({ default: 'a4.jpg' }))
vi.mock('@/assets/people/a5.jpg', () => ({ default: 'a5.jpg' }))
vi.mock('@/assets/people/a6.jpg', () => ({ default: 'a6.jpg' }))

describe('Chat.vue', () => {
  let wrapper
  let layoutStore

  function createWrapper() {
    const pinia = createPinia()
    setActivePinia(pinia)

    layoutStore = useLayoutStore()
    layoutStore.chatOpen = false
    layoutStore.chatNotificationMessageState = MessageStates.READ

    return mount(Chat, {
      global: {
        plugins: [pinia]
      }
    })
  }

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('rendering', () => {
    it('renders chat aside element', () => {
      wrapper = createWrapper()
      expect(wrapper.find('aside.chat').exists()).toBe(true)
    })

    it('renders chat header', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.chatHeader').exists()).toBe(true)
      expect(wrapper.text()).toContain('Contacts')
    })

    it('renders search input', () => {
      wrapper = createWrapper()
      const searchInput = wrapper.find('.chatSearch input')
      expect(searchInput.exists()).toBe(true)
      expect(searchInput.attributes('placeholder')).toBe('Search...')
    })

    it('renders TODAY section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('TODAY')
    })

    it('renders LAST WEEK section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('LAST WEEK')
    })

    it('renders today conversations', () => {
      wrapper = createWrapper()
      const todayList = wrapper.findAll('.chatSidebarUserGroup')[0]
      const items = todayList.findAll('.list-group-item')
      expect(items.length).toBe(5)
    })

    it('renders last week conversations', () => {
      wrapper = createWrapper()
      const lists = wrapper.findAll('.chatSidebarUserGroup')
      const lastWeekItems = lists[1].findAll('.list-group-item')
      expect(lastWeekItems.length).toBe(4)
    })
  })

  describe('conversation display', () => {
    it('displays conversation name', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Chris Gray')
    })

    it('displays last message preview', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain("Hey! What's up?")
    })

    it('displays status indicator', () => {
      wrapper = createWrapper()
      const statusIcons = wrapper.findAll('.chatSidebarUserGroup .fa-circle')
      expect(statusIcons.length).toBeGreaterThan(0)
    })

    it('displays user avatar', () => {
      wrapper = createWrapper()
      const avatars = wrapper.findAll('.chatSidebarUserGroup img')
      expect(avatars.length).toBeGreaterThan(0)
    })
  })

  describe('search functionality', () => {
    it('filters conversations by name', async () => {
      wrapper = createWrapper()

      const searchInput = wrapper.find('.chatSearch input')
      await searchInput.setValue('Chris')
      await searchInput.trigger('input')

      // Only Chris Gray should match
      const todayItems = wrapper.findAll('.chatSidebarUserGroup')[0].findAll('.list-group-item')
      expect(todayItems.length).toBe(1)
      expect(wrapper.text()).toContain('Chris Gray')
    })

    it('filters conversations by message content', async () => {
      wrapper = createWrapper()

      const searchInput = wrapper.find('.chatSearch input')
      await searchInput.setValue('summer')
      await searchInput.trigger('input')

      // Should find Jaron with "What about summer break?"
      expect(wrapper.text()).toContain('Jaron Fitzroy')
    })

    it('shows no results when search does not match', async () => {
      wrapper = createWrapper()

      const searchInput = wrapper.find('.chatSearch input')
      await searchInput.setValue('xyz123')
      await searchInput.trigger('input')

      const todayItems = wrapper.findAll('.chatSidebarUserGroup')[0].findAll('.list-group-item')
      expect(todayItems.length).toBe(0)
    })

    it('search is case insensitive', async () => {
      wrapper = createWrapper()

      const searchInput = wrapper.find('.chatSearch input')
      await searchInput.setValue('CHRIS')
      await searchInput.trigger('input')

      expect(wrapper.text()).toContain('Chris Gray')
    })
  })

  describe('message panel', () => {
    it('opens message panel on conversation click', async () => {
      wrapper = createWrapper()

      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      expect(wrapper.find('.chatMessages').classes()).toContain('chatMessageOpen')
    })

    it('displays active conversation name in messages panel', async () => {
      wrapper = createWrapper()

      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      expect(wrapper.find('.messagesTitle').text()).toContain('Chris Gray')
    })

    it('displays messages for active conversation', async () => {
      wrapper = createWrapper()

      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      expect(wrapper.text()).toContain("Hey! What's up?")
      expect(wrapper.text()).toContain('Are you there?')
    })

    it('closes message panel on back click', async () => {
      wrapper = createWrapper()

      // Open messages
      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      // Messages panel should be open (chatMessageOpen on chatMessages)
      expect(wrapper.find('.chatMessages').classes()).toContain('chatMessageOpen')

      // Click back
      const backLink = wrapper.find('.messagesTitle a')
      await backLink.trigger('click')

      // Messages panel should be closed (chatMessageOpen removed from chatMessages)
      expect(wrapper.find('.chatMessages').classes()).not.toContain('chatMessageOpen')
    })
  })

  describe('add message', () => {
    it('renders message input', async () => {
      wrapper = createWrapper()

      // Open a conversation first
      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      const input = wrapper.find('.chatFooter input')
      expect(input.exists()).toBe(true)
      expect(input.attributes('placeholder')).toBe('Type your message')
    })

    it('adds message on Enter key', async () => {
      wrapper = createWrapper()

      // Open a conversation
      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      const input = wrapper.find('.chatFooter input')
      input.element.value = 'New message'
      await input.trigger('keydown', { key: 'Enter' })

      // New message should appear
      expect(wrapper.text()).toContain('New message')
    })

    it('clears input after sending', async () => {
      wrapper = createWrapper()

      // Open a conversation
      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      const input = wrapper.find('.chatFooter input')
      input.element.value = 'New message'
      await input.trigger('keydown', { key: 'Enter' })

      expect(input.element.value).toBe('')
    })

    it('does not add empty message', async () => {
      wrapper = createWrapper()

      // Open a conversation
      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      const initialMessages = wrapper.findAll('.messageItem').length

      const input = wrapper.find('.chatFooter input')
      input.element.value = ''
      await input.trigger('keydown', { key: 'Enter' })

      expect(wrapper.findAll('.messageItem').length).toBe(initialMessages)
    })

    it('marks new message as from me', async () => {
      wrapper = createWrapper()

      const conversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await conversation.trigger('click')

      const input = wrapper.find('.chatFooter input')
      input.element.value = 'My new message'
      await input.trigger('keydown', { key: 'Enter' })

      const messages = wrapper.findAll('.messageItem')
      const lastMessage = messages[messages.length - 1]
      expect(lastMessage.classes()).toContain('fromMe')
    })
  })

  describe('notification badge', () => {
    it('shows badge when there are new messages', async () => {
      wrapper = createWrapper()
      layoutStore.chatNotificationMessageState = MessageStates.NEW
      await wrapper.vm.$nextTick()

      const badge = wrapper.find('.badge.bg-danger')
      expect(badge.exists()).toBe(true)
      expect(badge.text()).toBe('3')
    })

    it('hides badge when messages are read', () => {
      wrapper = createWrapper()
      layoutStore.chatNotificationMessageState = MessageStates.READ

      const badge = wrapper.find('.badge.bg-danger')
      expect(badge.exists()).toBe(false)
    })

    it('first conversation is active when new messages', async () => {
      wrapper = createWrapper()
      layoutStore.chatNotificationMessageState = MessageStates.NEW
      await wrapper.vm.$nextTick()

      const firstConversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      expect(firstConversation.classes()).toContain('active')
    })

    it('calls readMessage on first conversation click', async () => {
      wrapper = createWrapper()
      layoutStore.chatNotificationMessageState = MessageStates.NEW
      const spy = vi.spyOn(layoutStore, 'readMessage')

      const firstConversation = wrapper.find('.chatSidebarUserGroup .list-group-item')
      await firstConversation.trigger('click')

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('chat open state', () => {
    it('applies chatOpen class when chatOpen is true', async () => {
      wrapper = createWrapper()
      layoutStore.chatOpen = true
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.chat').classes()).toContain('chatOpen')
    })

    it('does not apply chatOpen class when chatOpen is false', () => {
      wrapper = createWrapper()
      layoutStore.chatOpen = false

      expect(wrapper.find('.chat').classes()).not.toContain('chatOpen')
    })
  })
})
