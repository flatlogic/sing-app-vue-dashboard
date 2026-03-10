import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Helper from './Helper.vue'
import { useLayoutStore, NavbarTypes, SidebarTypes, LayoutComponents } from '@/stores/layout'
import { createMockRouter } from '@/__tests__/helpers/router'

// Mock Colorpicker component
vi.mock('../Colorpicker/Colorpicker.vue', () => ({
  default: {
    name: 'Colorpicker',
    template: '<div class="colorpicker-stub" @click="$emit(\'change\', colors[0])"></div>',
    props: ['colors', 'activeColor'],
    emits: ['change']
  }
}))

// Mock config - must match the indices used in layout store
vi.mock('@/config', () => ({
  default: {
    app: {
      sidebarTransitionTime: 300,
      navbarColors: [
        ['first', '#ffffff'],
        ['second', '#E2E7EC'],
        ['third', '#C9D1FB'],
        ['fourth', '#C1C3CF']
      ],
      sidebarColors: [
        ['first', '#3D3D3D'],
        ['second', '#4B505F'],
        ['third', '#483CB6'],
        ['fourth', '#EFF2F5'],
        ['fifth', '#20AE8C']
      ]
    }
  }
}))

describe('Helper.vue', () => {
  let wrapper
  let layoutStore

  function createWrapper() {
    const pinia = createPinia()
    setActivePinia(pinia)

    layoutStore = useLayoutStore()

    const router = createMockRouter()

    return shallowMount(Helper, {
      global: {
        plugins: [pinia, router]
      }
    })
  }

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('rendering', () => {
    it('renders theme helper container', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.theme-helper').exists()).toBe(true)
    })

    it('renders toggler button', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.theme-helper-toggler').exists()).toBe(true)
    })

    it('renders spinner with cog icons', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.theme-helper-spinner').exists()).toBe(true)
      expect(wrapper.findAll('.la-cog').length).toBe(2)
    })

    it('renders navbar type section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Navbar Type')
    })

    it('renders navbar color section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Navbar Color')
    })

    it('renders sidebar type section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sidebar Type')
    })

    it('renders sidebar color section', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sidebar Color')
    })

    it('renders purchase and documentation links', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Purchase')
      expect(wrapper.text()).toContain('Documentation')
    })

    it('renders support and github links', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Support')
      expect(wrapper.text()).toContain('Github')
    })
  })

  describe('toggle functionality', () => {
    it('applies opened class when helperOpened is true', async () => {
      wrapper = createWrapper()
      layoutStore.helperOpened = true
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.theme-helper').classes()).toContain('theme-helper-opened')
    })

    it('does not apply opened class when helperOpened is false', () => {
      wrapper = createWrapper()
      layoutStore.helperOpened = false

      expect(wrapper.find('.theme-helper').classes()).not.toContain('theme-helper-opened')
    })

    it('calls toggleHelper on toggler click', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(layoutStore, 'toggleHelper')

      const toggler = wrapper.find('.theme-helper-toggler')
      await toggler.trigger('click')

      expect(spy).toHaveBeenCalledWith(true)
    })

    it('toggles helper state', async () => {
      wrapper = createWrapper()
      layoutStore.helperOpened = false

      const toggler = wrapper.find('.theme-helper-toggler')
      await toggler.trigger('click')

      expect(layoutStore.helperOpened).toBe(true)
    })
  })

  describe('navbar type radio buttons', () => {
    it('renders static navbar radio button', () => {
      wrapper = createWrapper()
      const staticRadio = wrapper.find('#navbar_static')
      expect(staticRadio.exists()).toBe(true)
    })

    it('renders floating navbar radio button', () => {
      wrapper = createWrapper()
      const floatingRadio = wrapper.find('#navbar_floating')
      expect(floatingRadio.exists()).toBe(true)
    })

    it('static radio is checked when navbarType is static', async () => {
      wrapper = createWrapper()
      layoutStore.navbarType = NavbarTypes.STATIC
      await wrapper.vm.$nextTick()

      const staticRadio = wrapper.find('#navbar_static')
      expect(staticRadio.element.checked).toBe(true)
    })

    it('floating radio is checked when navbarType is floating', async () => {
      wrapper = createWrapper()
      layoutStore.navbarType = NavbarTypes.FLOATING
      await wrapper.vm.$nextTick()

      const floatingRadio = wrapper.find('#navbar_floating')
      expect(floatingRadio.element.checked).toBe(true)
    })

    it('calls updateLayoutComponentType on navbar type change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(layoutStore, 'updateLayoutComponentType')

      const floatingRadio = wrapper.find('#navbar_floating')
      await floatingRadio.trigger('change')

      expect(spy).toHaveBeenCalledWith({
        component: LayoutComponents.NAVBAR,
        type: NavbarTypes.FLOATING
      })
    })
  })

  describe('sidebar type radio buttons', () => {
    it('renders transparent sidebar radio button', () => {
      wrapper = createWrapper()
      const transparentRadio = wrapper.find('#sidebar_transparent')
      expect(transparentRadio.exists()).toBe(true)
    })

    it('renders solid sidebar radio button', () => {
      wrapper = createWrapper()
      const solidRadio = wrapper.find('#sidebar_solid')
      expect(solidRadio.exists()).toBe(true)
    })

    it('transparent radio is checked when sidebarType is transparent', async () => {
      wrapper = createWrapper()
      layoutStore.sidebarType = SidebarTypes.TRANSPARENT
      await wrapper.vm.$nextTick()

      const transparentRadio = wrapper.find('#sidebar_transparent')
      expect(transparentRadio.element.checked).toBe(true)
    })

    it('solid radio is checked when sidebarType is solid', async () => {
      wrapper = createWrapper()
      layoutStore.sidebarType = SidebarTypes.SOLID
      await wrapper.vm.$nextTick()

      const solidRadio = wrapper.find('#sidebar_solid')
      expect(solidRadio.element.checked).toBe(true)
    })

    it('calls updateLayoutComponentType on sidebar type change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(layoutStore, 'updateLayoutComponentType')

      const transparentRadio = wrapper.find('#sidebar_transparent')
      await transparentRadio.trigger('change')

      expect(spy).toHaveBeenCalledWith({
        component: LayoutComponents.SIDEBAR,
        type: SidebarTypes.TRANSPARENT
      })
    })
  })

  describe('color pickers', () => {
    it('renders Colorpicker for navbar', () => {
      wrapper = createWrapper()
      const colorpickers = wrapper.findAllComponents({ name: 'Colorpicker' })
      expect(colorpickers.length).toBe(2)
    })

    it('passes navbarColorName to navbar colorpicker', async () => {
      wrapper = createWrapper()
      layoutStore.navbarColorName = 'dark'
      await wrapper.vm.$nextTick()

      const colorpickers = wrapper.findAllComponents({ name: 'Colorpicker' })
      expect(colorpickers[0].props('activeColor')).toBe('dark')
    })

    it('passes sidebarColorName to sidebar colorpicker', async () => {
      wrapper = createWrapper()
      layoutStore.sidebarColorName = 'blue'
      await wrapper.vm.$nextTick()

      const colorpickers = wrapper.findAllComponents({ name: 'Colorpicker' })
      expect(colorpickers[1].props('activeColor')).toBe('blue')
    })

    it('calls updateLayoutComponentColor on navbar color change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(layoutStore, 'updateLayoutComponentColor')

      const colorpickers = wrapper.findAllComponents({ name: 'Colorpicker' })
      await colorpickers[0].vm.$emit('change', ['dark', '#323232'])

      expect(spy).toHaveBeenCalledWith({
        component: LayoutComponents.NAVBAR,
        color: ['dark', '#323232']
      })
    })

    it('calls updateLayoutComponentColor on sidebar color change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(layoutStore, 'updateLayoutComponentColor')

      const colorpickers = wrapper.findAllComponents({ name: 'Colorpicker' })
      await colorpickers[1].vm.$emit('change', ['blue', '#3754a5'])

      expect(spy).toHaveBeenCalledWith({
        component: LayoutComponents.SIDEBAR,
        color: ['blue', '#3754a5']
      })
    })
  })

  describe('external links', () => {
    it('purchase link points to correct URL', () => {
      wrapper = createWrapper()
      const purchaseLink = wrapper.find('a[href*="flatlogic.com/templates"]')
      expect(purchaseLink.exists()).toBe(true)
      expect(purchaseLink.attributes('target')).toBe('_blank')
    })

    it('documentation link points to correct URL', () => {
      wrapper = createWrapper()
      const docLink = wrapper.find('a[href*="documentation"]')
      expect(docLink.exists()).toBe(true)
      expect(docLink.attributes('target')).toBe('_blank')
    })

    it('github link points to correct URL', () => {
      wrapper = createWrapper()
      const githubLink = wrapper.find('a[href*="github.com"]')
      expect(githubLink.exists()).toBe(true)
    })

    it('support link points to forum', () => {
      wrapper = createWrapper()
      const supportLink = wrapper.find('a[href*="forum"]')
      expect(supportLink.exists()).toBe(true)
    })
  })
})
