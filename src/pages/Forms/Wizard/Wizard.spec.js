import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Wizard from './Wizard.vue'
import { createMockRouter } from '@/__tests__/helpers/router'

// Mock Widget component
vi.mock('@/components/Widget/Widget.vue', () => ({
  default: {
    name: 'Widget',
    template: '<div class="widget-stub"><slot /></div>',
    props: ['title', 'customHeader', 'close', 'collapse']
  }
}))

// Mock data
vi.mock('./data', () => ({
  select2CountriesData: [
    { text: 'United States' },
    { text: 'Canada' },
    { text: 'Mexico' }
  ],
  select2ShipmentData: [
    { text: 'Standard Shipping' },
    { text: 'Express Shipping' },
    { text: 'Overnight' }
  ],
  cardTypesData: [
    { text: 'Visa' },
    { text: 'Mastercard' },
    { text: 'American Express' }
  ]
}))

describe('Wizard.vue', () => {
  let wrapper

  function createWrapper() {
    const pinia = createPinia()
    setActivePinia(pinia)

    const router = createMockRouter()

    return mount(Wizard, {
      global: {
        plugins: [pinia, router]
      }
    })
  }

  afterEach(() => {
    wrapper?.unmount()
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders wizard container', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.wizard-container').exists()).toBe(true)
    })

    it('renders progress bar', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.progress').exists()).toBe(true)
      expect(wrapper.find('.progress-bar').exists()).toBe(true)
    })

    it('renders tab navigation', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.wizard-tabs').exists()).toBe(true)
    })

    it('renders all 4 tabs', () => {
      wrapper = createWrapper()
      const tabs = wrapper.findAll('.nav-item')
      expect(tabs.length).toBe(4)
    })

    it('renders tab labels correctly', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('1. Your Details')
      expect(wrapper.text()).toContain('2. Shipping')
      expect(wrapper.text()).toContain('3. Pay')
      expect(wrapper.text()).toContain('4. Thank you!')
    })

    it('renders navigation buttons', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Previous')
      expect(wrapper.text()).toContain('Next')
    })
  })

  describe('step navigation', () => {
    it('starts on step 1 (index 0)', () => {
      wrapper = createWrapper()
      const tabs = wrapper.findAll('.nav-link')
      expect(tabs[0].classes()).toContain('active')
    })

    it('moves to next step on Next click', async () => {
      wrapper = createWrapper()

      const nextBtn = wrapper.find('button:not([disabled])')
      await wrapper.findAll('button')[1].trigger('click') // Next button

      const tabs = wrapper.findAll('.nav-link')
      expect(tabs[1].classes()).toContain('active')
    })

    it('moves to previous step on Previous click', async () => {
      wrapper = createWrapper()

      // Go to step 2
      await wrapper.findAll('button')[1].trigger('click')

      // Go back
      await wrapper.find('button').trigger('click')

      const tabs = wrapper.findAll('.nav-link')
      expect(tabs[0].classes()).toContain('active')
    })

    it('Previous button is disabled on first step', () => {
      wrapper = createWrapper()
      const prevBtn = wrapper.find('button')
      expect(prevBtn.attributes('disabled')).toBeDefined()
    })

    it('Previous button is enabled on subsequent steps', async () => {
      wrapper = createWrapper()

      await wrapper.findAll('button')[1].trigger('click')

      const prevBtn = wrapper.find('button')
      expect(prevBtn.attributes('disabled')).toBeUndefined()
    })

    it('navigates to specific step on tab click', async () => {
      wrapper = createWrapper()

      const tabs = wrapper.findAll('.nav-link')
      await tabs[2].trigger('click')

      expect(tabs[2].classes()).toContain('active')
    })

    it('marks completed steps', async () => {
      wrapper = createWrapper()

      // Go to step 2
      await wrapper.findAll('button')[1].trigger('click')

      const tabs = wrapper.findAll('.nav-link')
      expect(tabs[0].classes()).toContain('completed')
    })
  })

  describe('progress bar', () => {
    it('shows 25% progress on step 1', () => {
      wrapper = createWrapper()
      const progressBar = wrapper.find('.progress-bar')
      expect(progressBar.attributes('style')).toContain('25%')
    })

    it('shows 50% progress on step 2', async () => {
      wrapper = createWrapper()

      await wrapper.findAll('button')[1].trigger('click')

      const progressBar = wrapper.find('.progress-bar')
      expect(progressBar.attributes('style')).toContain('50%')
    })

    it('shows 75% progress on step 3', async () => {
      wrapper = createWrapper()

      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      const progressBar = wrapper.find('.progress-bar')
      expect(progressBar.attributes('style')).toContain('75%')
    })

    it('shows 100% progress on step 4', async () => {
      wrapper = createWrapper()

      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      const progressBar = wrapper.find('.progress-bar')
      expect(progressBar.attributes('style')).toContain('100%')
    })
  })

  describe('step 1: Your Details', () => {
    it('renders username field', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#username').exists()).toBe(true)
    })

    it('renders email field', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#email').exists()).toBe(true)
    })

    it('renders address field', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#address').exists()).toBe(true)
    })

    it('shows helper text for fields', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Username can contain any letters or numbers')
    })
  })

  describe('step 2: Shipping', () => {
    it('renders destination country select', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#destination').exists()).toBe(true)
    })

    it('renders shipping option select', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#shipping').exists()).toBe(true)
    })

    it('renders zip code field', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#zip').exists()).toBe(true)
    })

    it('renders destination address field', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#destAddress').exists()).toBe(true)
    })

    it('populates country options from data', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')

      const options = wrapper.find('#destination').findAll('option')
      expect(options.length).toBe(4) // including empty option
      expect(wrapper.text()).toContain('United States')
    })
  })

  describe('step 3: Pay', () => {
    it('renders card name field', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#cardname').exists()).toBe(true)
    })

    it('renders card type select', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#cardtype').exists()).toBe(true)
    })

    it('renders card number field', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#cardnumber').exists()).toBe(true)
    })

    it('renders expiration date field', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.find('#exp').exists()).toBe(true)
    })

    it('populates card type options from data', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.text()).toContain('Visa')
      expect(wrapper.text()).toContain('Mastercard')
    })
  })

  describe('step 4: Thank you', () => {
    it('shows thank you message', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.text()).toContain('Thank you!')
      expect(wrapper.text()).toContain('Your submission has been received')
    })

    it('shows Finish button instead of Next', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      expect(wrapper.text()).toContain('Finish')
      expect(wrapper.findAll('button').map(b => b.text())).not.toContain('Next')
    })

    it('Finish button is btn-success', async () => {
      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      const finishBtn = wrapper.find('.btn-success')
      expect(finishBtn.exists()).toBe(true)
      expect(finishBtn.text()).toContain('Finish')
    })

    it('calls finish on Finish button click', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      wrapper = createWrapper()
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.findAll('button')[1].trigger('click')

      const finishBtn = wrapper.find('.btn-success')
      await finishBtn.trigger('click')

      expect(consoleSpy).toHaveBeenCalledWith('Form submitted!')
      consoleSpy.mockRestore()
    })
  })

  describe('form data persistence', () => {
    it('persists zip code across step changes', async () => {
      wrapper = createWrapper()

      // Go to step 2
      await wrapper.findAll('button')[1].trigger('click')

      // Enter zip
      const zipInput = wrapper.find('#zip')
      await zipInput.setValue('12345')

      // Go to step 3 and back
      await wrapper.findAll('button')[1].trigger('click')
      await wrapper.find('button').trigger('click')

      expect(wrapper.find('#zip').element.value).toBe('12345')
    })
  })
})
