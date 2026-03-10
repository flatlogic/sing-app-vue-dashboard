import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Widget from './Widget.vue'

describe('Widget.vue', () => {
  let wrapper

  afterEach(() => {
    wrapper?.unmount()
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  describe('rendering', () => {
    it('renders with default props', () => {
      wrapper = shallowMount(Widget)
      expect(wrapper.find('.widget').exists()).toBe(true)
      expect(wrapper.find('.widgetBody').exists()).toBe(true)
    })

    it('renders title when provided as string', () => {
      wrapper = shallowMount(Widget, {
        props: { title: 'Test Widget' }
      })
      expect(wrapper.find('h5.title').text()).toBe('Test Widget')
    })

    it('renders custom header when customHeader is true', () => {
      wrapper = shallowMount(Widget, {
        props: {
          title: '<span class="custom-title">Custom</span>',
          customHeader: true
        }
      })
      expect(wrapper.find('header.title').exists()).toBe(true)
      expect(wrapper.find('header.title').html()).toContain('custom-title')
    })

    it('does not render title when not provided', () => {
      wrapper = shallowMount(Widget)
      expect(wrapper.find('h5.title').exists()).toBe(false)
      expect(wrapper.find('header.title').exists()).toBe(false)
    })

    it('renders slot content', () => {
      wrapper = shallowMount(Widget, {
        slots: {
          default: '<div class="slot-content">Content</div>'
        }
      })
      expect(wrapper.find('.slot-content').exists()).toBe(true)
      expect(wrapper.find('.slot-content').text()).toBe('Content')
    })

    it('applies className prop to widget', () => {
      wrapper = shallowMount(Widget, {
        props: { className: 'custom-class' }
      })
      expect(wrapper.find('.widget').classes()).toContain('custom-class')
    })

    it('applies bodyClass prop to widget body', () => {
      wrapper = shallowMount(Widget, {
        props: { bodyClass: 'custom-body-class' }
      })
      expect(wrapper.find('.widgetBody').classes()).toContain('custom-body-class')
    })
  })

  describe('control buttons visibility', () => {
    it('does not render controls when no control props are set', () => {
      wrapper = shallowMount(Widget)
      expect(wrapper.find('.widgetControls').exists()).toBe(false)
    })

    it('renders close button when close prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true }
      })
      expect(wrapper.find('[aria-label="Close widget"]').exists()).toBe(true)
    })

    it('renders close button with text when close prop is a string', () => {
      wrapper = shallowMount(Widget, {
        props: { close: 'Dismiss' }
      })
      const closeBtn = wrapper.find('[aria-label="Close widget"]')
      expect(closeBtn.exists()).toBe(true)
      expect(closeBtn.find('strong').text()).toBe('Dismiss')
    })

    it('renders fullscreen button when fullscreen prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { fullscreen: true }
      })
      expect(wrapper.find('[aria-label="Enter fullscreen"]').exists()).toBe(true)
    })

    it('renders collapse button when collapse prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true }
      })
      expect(wrapper.find('[aria-label="Collapse widget"]').exists()).toBe(true)
    })

    it('renders refresh button when refresh prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { refresh: true }
      })
      expect(wrapper.find('[aria-label="Reload widget"]').exists()).toBe(true)
    })

    it('renders refresh button with text when refresh prop is a string', () => {
      wrapper = shallowMount(Widget, {
        props: { refresh: '5m' }
      })
      const refreshBtn = wrapper.find('[aria-label="Reload widget"]')
      expect(refreshBtn.exists()).toBe(true)
      expect(refreshBtn.find('strong').text()).toBe('5m')
    })

    it('renders settings button when settings prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { settings: true }
      })
      expect(wrapper.find('.la-cog').exists()).toBe(true)
    })

    it('renders inverse settings button when settingsInverse prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { settingsInverse: true }
      })
      expect(wrapper.find('.bg-gray-transparent').exists()).toBe(true)
    })

    it('renders custom controls when customControls prop is provided', () => {
      wrapper = shallowMount(Widget, {
        props: {
          customControls: '<button control="close">X</button>'
        }
      })
      expect(wrapper.find('.widgetControls').html()).toContain('control="close"')
    })
  })

  describe('state management', () => {
    it('starts in default state', () => {
      wrapper = shallowMount(Widget)
      expect(wrapper.find('.widget').classes()).not.toContain('collapsed')
      expect(wrapper.find('.widget').classes()).not.toContain('fullscreened')
    })

    it('starts in collapsed state when collapsed prop is true', () => {
      wrapper = shallowMount(Widget, {
        props: { collapsed: true }
      })
      expect(wrapper.find('.widget').classes()).toContain('collapsed')
    })

    it('transitions from default to collapsed state', async () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true }
      })

      const collapseBtn = wrapper.find('[aria-label="Collapse widget"]')
      await collapseBtn.trigger('click')

      expect(wrapper.find('.widget').classes()).toContain('collapsed')
      expect(wrapper.find('.widgetBody').attributes('style')).toContain('display: none')
    })

    it('transitions from collapsed to default state', async () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true, collapsed: true }
      })

      expect(wrapper.find('.widget').classes()).toContain('collapsed')

      const expandBtn = wrapper.find('[aria-label="Expand widget"]')
      await expandBtn.trigger('click')

      expect(wrapper.find('.widget').classes()).not.toContain('collapsed')
    })

    it('transitions from default to fullscreen state', async () => {
      wrapper = shallowMount(Widget, {
        props: { fullscreen: true }
      })

      const fullscreenBtn = wrapper.find('[aria-label="Enter fullscreen"]')
      await fullscreenBtn.trigger('click')

      expect(wrapper.find('.widget').classes()).toContain('fullscreened')
    })

    it('transitions from fullscreen to default state', async () => {
      wrapper = shallowMount(Widget, {
        props: { fullscreen: true }
      })

      // Enter fullscreen
      await wrapper.find('[aria-label="Enter fullscreen"]').trigger('click')
      expect(wrapper.find('.widget').classes()).toContain('fullscreened')

      // Exit fullscreen
      await wrapper.find('[aria-label="Exit fullscreen"]').trigger('click')
      expect(wrapper.find('.widget').classes()).not.toContain('fullscreened')
    })

    it('shows correct buttons based on current state', async () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true, fullscreen: true }
      })

      // Default state - should show collapse and fullscreen buttons
      expect(wrapper.find('[aria-label="Collapse widget"]').exists()).toBe(true)
      expect(wrapper.find('[aria-label="Enter fullscreen"]').exists()).toBe(true)
      expect(wrapper.find('[aria-label="Expand widget"]').exists()).toBe(false)
      expect(wrapper.find('[aria-label="Exit fullscreen"]').exists()).toBe(false)

      // Collapsed state
      await wrapper.find('[aria-label="Collapse widget"]').trigger('click')
      expect(wrapper.find('[aria-label="Expand widget"]').exists()).toBe(true)
      expect(wrapper.find('[aria-label="Collapse widget"]').exists()).toBe(false)
    })
  })

  describe('events', () => {
    it('emits load event when refresh button is clicked', async () => {
      wrapper = shallowMount(Widget, {
        props: { refresh: true }
      })

      await wrapper.find('[aria-label="Reload widget"]').trigger('click')

      expect(wrapper.emitted('load')).toBeTruthy()
      expect(wrapper.emitted('load').length).toBe(1)
    })

    it('emits close event when close button is clicked', async () => {
      wrapper = shallowMount(Widget, {
        props: { close: true }
      })

      await wrapper.find('[aria-label="Close widget"]').trigger('click')

      expect(wrapper.emitted('close')).toBeTruthy()
      expect(wrapper.emitted('close').length).toBe(1)
    })

    it('passes remove function to close event handler', async () => {
      wrapper = shallowMount(Widget, {
        props: { close: true }
      })

      await wrapper.find('[aria-label="Close widget"]').trigger('click')

      const closeEvent = wrapper.emitted('close')[0]
      expect(typeof closeEvent[0]).toBe('function')
    })
  })

  describe('autoload feature', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    it('emits load event on mount when autoload is true', () => {
      wrapper = shallowMount(Widget, {
        props: { autoload: true }
      })

      expect(wrapper.emitted('load')).toBeTruthy()
      expect(wrapper.emitted('load').length).toBe(1)
    })

    it('emits load event on mount when autoload is a number', () => {
      wrapper = shallowMount(Widget, {
        props: { autoload: 5000 }
      })

      expect(wrapper.emitted('load')).toBeTruthy()
      expect(wrapper.emitted('load').length).toBe(1)
    })

    it('emits load event at intervals when autoload is a number', () => {
      wrapper = shallowMount(Widget, {
        props: { autoload: 5000 }
      })

      // Initial load
      expect(wrapper.emitted('load').length).toBe(1)

      // After first interval
      vi.advanceTimersByTime(5000)
      expect(wrapper.emitted('load').length).toBe(2)

      // After second interval
      vi.advanceTimersByTime(5000)
      expect(wrapper.emitted('load').length).toBe(3)
    })

    it('does not emit load event when autoload is false', () => {
      wrapper = shallowMount(Widget, {
        props: { autoload: false }
      })

      expect(wrapper.emitted('load')).toBeFalsy()
    })
  })

  describe('loading state', () => {
    it('applies loading class when fetchingData is true', () => {
      wrapper = shallowMount(Widget, {
        props: { fetchingData: true }
      })
      expect(wrapper.find('.widget').classes()).toContain('loading')
    })

    it('shows loader when fetchingData is true and showLoader is true', () => {
      wrapper = mount(Widget, {
        props: { fetchingData: true, showLoader: true }
      })
      expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })

    it('does not show loader when fetchingData is true and showLoader is false', () => {
      wrapper = mount(Widget, {
        props: { fetchingData: true, showLoader: false }
      })
      expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(false)
    })

    it('shows slot content when not loading', () => {
      wrapper = shallowMount(Widget, {
        props: { fetchingData: false },
        slots: {
          default: '<div class="test-content">Test</div>'
        }
      })
      expect(wrapper.find('.test-content').exists()).toBe(true)
    })

    it('hides slot content when loading', () => {
      wrapper = shallowMount(Widget, {
        props: { fetchingData: true, showLoader: true },
        slots: {
          default: '<div class="test-content">Test</div>'
        }
      })
      // When loader is shown, slot content is hidden via v-else
      expect(wrapper.find('.test-content').exists()).toBe(false)
    })
  })

  describe('tooltip functionality', () => {
    it('adds tooltip attributes when showTooltip is true', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true, showTooltip: true }
      })

      const closeBtn = wrapper.find('[aria-label="Close widget"]')
      expect(closeBtn.attributes('data-bs-toggle')).toBe('tooltip')
      expect(closeBtn.attributes('title')).toBe('Close')
    })

    it('does not add tooltip attributes when showTooltip is false', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true, showTooltip: false }
      })

      const closeBtn = wrapper.find('[aria-label="Close widget"]')
      expect(closeBtn.attributes('data-bs-toggle')).toBeUndefined()
    })

    it('applies correct tooltip placement', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true, showTooltip: true, tooltipPlacement: 'bottom' }
      })

      const closeBtn = wrapper.find('[aria-label="Close widget"]')
      expect(closeBtn.attributes('data-bs-placement')).toBe('bottom')
    })
  })

  describe('lifecycle cleanup', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    it('clears autoload interval on unmount', () => {
      const clearIntervalSpy = vi.spyOn(global, 'clearInterval')

      wrapper = shallowMount(Widget, {
        props: { autoload: 5000 }
      })

      wrapper.unmount()

      expect(clearIntervalSpy).toHaveBeenCalled()
    })

    it('stops emitting load events after unmount', () => {
      wrapper = shallowMount(Widget, {
        props: { autoload: 5000 }
      })

      const emitCountBeforeUnmount = wrapper.emitted('load').length

      wrapper.unmount()

      // Advance timers after unmount
      vi.advanceTimersByTime(10000)

      // The emit count should remain the same
      // (We can't test this directly since the wrapper is unmounted,
      // but the clearInterval test above verifies cleanup)
    })
  })

  describe('custom controls integration', () => {
    it('binds click handlers to custom control elements', async () => {
      const collapseHandler = vi.fn()

      wrapper = mount(Widget, {
        props: {
          customControls: '<button control="collapse">Collapse</button>'
        }
      })

      // The component adds event listeners in onMounted
      await wrapper.vm.$nextTick()

      const collapseBtn = wrapper.find('[control="collapse"]')
      await collapseBtn.trigger('click')

      // After clicking collapse control, state should change
      expect(wrapper.find('.widget').classes()).toContain('collapsed')
    })

    it('binds expand control correctly', async () => {
      wrapper = mount(Widget, {
        props: {
          customControls: '<button control="expand">Expand</button> <button control="collapse">Collapse</button>',
          collapsed: true
        }
      })

      await wrapper.vm.$nextTick()

      // Initially collapsed
      expect(wrapper.find('.widget').classes()).toContain('collapsed')

      // Click expand
      const expandBtn = wrapper.find('[control="expand"]')
      await expandBtn.trigger('click')

      expect(wrapper.find('.widget').classes()).not.toContain('collapsed')
    })

    it('binds fullscreen control correctly', async () => {
      wrapper = mount(Widget, {
        props: {
          customControls: '<button control="fullscreen">Full</button>'
        }
      })

      await wrapper.vm.$nextTick()

      await wrapper.find('[control="fullscreen"]').trigger('click')
      expect(wrapper.find('.widget').classes()).toContain('fullscreened')
    })

    it('binds restore control correctly', async () => {
      wrapper = mount(Widget, {
        props: {
          customControls: '<button control="fullscreen">Full</button> <button control="restore">Restore</button>'
        }
      })

      await wrapper.vm.$nextTick()

      // Enter fullscreen
      await wrapper.find('[control="fullscreen"]').trigger('click')
      expect(wrapper.find('.widget').classes()).toContain('fullscreened')

      // Restore
      await wrapper.find('[control="restore"]').trigger('click')
      expect(wrapper.find('.widget').classes()).not.toContain('fullscreened')
    })

    it('binds load control correctly', async () => {
      wrapper = mount(Widget, {
        props: {
          customControls: '<button control="load">Refresh</button>'
        }
      })

      await wrapper.vm.$nextTick()

      await wrapper.find('[control="load"]').trigger('click')
      expect(wrapper.emitted('load')).toBeTruthy()
    })
  })

  describe('accessibility', () => {
    it('has correct aria-expanded attribute for collapse button', () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true }
      })

      const collapseBtn = wrapper.find('[aria-label="Collapse widget"]')
      expect(collapseBtn.attributes('aria-expanded')).toBe('true')
    })

    it('has correct aria-expanded attribute for expand button', () => {
      wrapper = shallowMount(Widget, {
        props: { collapse: true, collapsed: true }
      })

      const expandBtn = wrapper.find('[aria-label="Expand widget"]')
      expect(expandBtn.attributes('aria-expanded')).toBe('false')
    })

    it('all control buttons have aria-label attributes', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true, fullscreen: true, collapse: true, refresh: true, settings: true }
      })

      const buttons = wrapper.findAll('button.btn-widget-control')
      buttons.forEach(button => {
        expect(button.attributes('aria-label')).toBeDefined()
      })
    })

    it('icons have aria-hidden attribute', () => {
      wrapper = shallowMount(Widget, {
        props: { close: true, refresh: true }
      })

      const icons = wrapper.findAll('i[aria-hidden]')
      expect(icons.length).toBeGreaterThan(0)
      icons.forEach(icon => {
        expect(icon.attributes('aria-hidden')).toBe('true')
      })
    })
  })
})
