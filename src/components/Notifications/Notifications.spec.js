import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Notifications from './Notifications.vue'

// Mock child components
vi.mock('./NotificationsDemo/NotificationsList.vue', () => ({
  default: {
    name: 'NotificationsList',
    template: '<div class="notifications-list-stub">NotificationsList</div>'
  }
}))

vi.mock('./NotificationsDemo/NewNotificationsList.vue', () => ({
  default: {
    name: 'NewNotificationsList',
    template: '<div class="new-notifications-list-stub">NewNotificationsList</div>'
  }
}))

vi.mock('./NotificationsDemo/Messages.vue', () => ({
  default: {
    name: 'Messages',
    template: '<div class="messages-stub">Messages</div>'
  }
}))

vi.mock('./NotificationsDemo/Progress.vue', () => ({
  default: {
    name: 'Progress',
    template: '<div class="progress-stub">Progress</div>'
  }
}))

describe('Notifications.vue', () => {
  let wrapper

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
  })

  describe('rendering', () => {
    it('renders notifications section', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.find('.notifications').exists()).toBe(true)
    })

    it('renders header with notification count', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.find('.cardHeader').exists()).toBe(true)
      expect(wrapper.text()).toContain('You have 13 notifications')
    })

    it('renders tab buttons', () => {
      wrapper = shallowMount(Notifications)
      const buttons = wrapper.findAll('#notification-b-buttons button')
      expect(buttons.length).toBe(3)
    })

    it('renders Notifications tab button', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.text()).toContain('Notifications')
    })

    it('renders Messages tab button', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.text()).toContain('Messages')
    })

    it('renders Progress tab button', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.text()).toContain('Progress')
    })

    it('renders footer', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.find('.cardFooter').exists()).toBe(true)
      expect(wrapper.text()).toContain('Synced at')
    })

    it('renders reload button in footer', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.find('.btnNotificationsReload').exists()).toBe(true)
    })
  })

  describe('tab switching', () => {
    it('shows NotificationsList by default', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.findComponent({ name: 'NotificationsList' }).exists()).toBe(true)
    })

    it('shows Messages on tab 2 click', async () => {
      wrapper = shallowMount(Notifications)

      const buttons = wrapper.findAll('#notification-b-buttons button')
      await buttons[1].trigger('click')

      expect(wrapper.findComponent({ name: 'Messages' }).exists()).toBe(true)
      expect(wrapper.findComponent({ name: 'NotificationsList' }).exists()).toBe(false)
    })

    it('shows Progress on tab 3 click', async () => {
      wrapper = shallowMount(Notifications)

      const buttons = wrapper.findAll('#notification-b-buttons button')
      await buttons[2].trigger('click')

      expect(wrapper.findComponent({ name: 'Progress' }).exists()).toBe(true)
      expect(wrapper.findComponent({ name: 'NotificationsList' }).exists()).toBe(false)
    })

    it('shows NotificationsList on tab 1 click', async () => {
      wrapper = shallowMount(Notifications)

      // Switch to tab 2
      const buttons = wrapper.findAll('#notification-b-buttons button')
      await buttons[1].trigger('click')

      // Switch back to tab 1
      await buttons[0].trigger('click')

      expect(wrapper.findComponent({ name: 'NotificationsList' }).exists()).toBe(true)
    })

    it('resets newNotifications when switching tabs', async () => {
      wrapper = shallowMount(Notifications)

      // Load notifications first
      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')
      vi.advanceTimersByTime(1600)
      await wrapper.vm.$nextTick()

      // Should show NewNotificationsList
      expect(wrapper.findComponent({ name: 'NewNotificationsList' }).exists()).toBe(true)

      // Switch tab - should reset
      const buttons = wrapper.findAll('#notification-b-buttons button')
      await buttons[1].trigger('click')

      // NewNotificationsList should be hidden
      expect(wrapper.findComponent({ name: 'NewNotificationsList' }).exists()).toBe(false)
    })
  })

  describe('loading state', () => {
    it('shows loading spinner when isLoad is true', async () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')

      expect(wrapper.find('.la-spin').exists()).toBe(true)
      expect(wrapper.text()).toContain('Loading...')
    })

    it('disables reload button when loading', async () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')

      expect(reloadBtn.classes()).toContain('disabled')
    })

    it('shows refresh icon when not loading', () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      expect(reloadBtn.find('.la-refresh').exists()).toBe(true)
      expect(reloadBtn.find('.la-spin').exists()).toBe(false)
    })
  })

  describe('loadNotifications', () => {
    it('shows NewNotificationsList after loading completes', async () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')

      // Initially loading
      expect(wrapper.find('.la-spin').exists()).toBe(true)

      // After timeout
      vi.advanceTimersByTime(1600)
      await wrapper.vm.$nextTick()

      expect(wrapper.findComponent({ name: 'NewNotificationsList' }).exists()).toBe(true)
      expect(wrapper.find('.la-spin').exists()).toBe(false)
    })

    it('hides other lists when showing new notifications', async () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')

      vi.advanceTimersByTime(1600)
      await wrapper.vm.$nextTick()

      expect(wrapper.findComponent({ name: 'NewNotificationsList' }).exists()).toBe(true)
      expect(wrapper.findComponent({ name: 'NotificationsList' }).exists()).toBe(false)
      expect(wrapper.findComponent({ name: 'Messages' }).exists()).toBe(false)
      expect(wrapper.findComponent({ name: 'Progress' }).exists()).toBe(false)
    })

    it('loading takes 1500ms', async () => {
      wrapper = shallowMount(Notifications)

      const reloadBtn = wrapper.find('.btnNotificationsReload')
      await reloadBtn.trigger('click')

      // Not done yet at 1400ms
      vi.advanceTimersByTime(1400)
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.la-spin').exists()).toBe(true)

      // Done at 1500ms
      vi.advanceTimersByTime(200)
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.la-spin').exists()).toBe(false)
    })
  })

  describe('footer sync time', () => {
    it('displays sync timestamp', () => {
      wrapper = shallowMount(Notifications)
      expect(wrapper.find('.cardFooter').text()).toContain('5 Mar 2026')
    })
  })
})
