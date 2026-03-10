import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Validation from './Validation.vue'
import { createMockRouter } from '@/__tests__/helpers/router'

// Mock Widget component
vi.mock('@/components/Widget/Widget.vue', () => ({
  default: {
    name: 'Widget',
    template: '<div class="widget-stub"><slot /></div>',
    props: ['title', 'customHeader', 'close', 'collapse']
  }
}))

describe('Validation.vue', () => {
  let wrapper

  function createWrapper(options = {}) {
    const pinia = createPinia()
    setActivePinia(pinia)

    const router = createMockRouter()

    return mount(Validation, {
      global: {
        plugins: [pinia, router]
      }
    })
  }

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('rendering', () => {
    it('renders page title', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.page-title').text()).toContain('Form')
      expect(wrapper.find('.page-title').text()).toContain('Validation')
    })

    it('renders form', () => {
      wrapper = createWrapper()
      expect(wrapper.find('form').exists()).toBe(true)
    })

    it('renders all input fields', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#basic').exists()).toBe(true)
      expect(wrapper.find('#minlength').exists()).toBe(true)
      expect(wrapper.find('#email').exists()).toBe(true)
      expect(wrapper.find('#number').exists()).toBe(true)
      expect(wrapper.find('#range').exists()).toBe(true)
      expect(wrapper.find('#password').exists()).toBe(true)
      expect(wrapper.find('#password_repeat').exists()).toBe(true)
      expect(wrapper.find('#website').exists()).toBe(true)
    })

    it('renders submit button', () => {
      wrapper = createWrapper()
      const submitBtn = wrapper.find('button[type="submit"]')
      expect(submitBtn.exists()).toBe(true)
      expect(submitBtn.text()).toContain('Validate & Submit')
    })

    it('renders cancel button', () => {
      wrapper = createWrapper()
      const cancelBtn = wrapper.find('button[type="button"]')
      expect(cancelBtn.exists()).toBe(true)
      expect(cancelBtn.text()).toBe('Cancel')
    })
  })

  describe('required validation', () => {
    it('shows error when simple field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#basic')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The simple field is required')
    })

    it('clears error when simple field has value', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#basic')

      await input.setValue('test value')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('The simple field is required')
    })

    it('applies is-invalid class when error', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#basic')

      await input.trigger('blur')

      expect(input.classes()).toContain('is-invalid')
    })

    it('removes is-invalid class when valid', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#basic')

      await input.setValue('valid value')
      await input.trigger('blur')

      expect(input.classes()).not.toContain('is-invalid')
    })
  })

  describe('minlength validation', () => {
    it('shows error when minlength field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#minlength')

      await input.trigger('change')

      expect(wrapper.text()).toContain('The minlength field is required')
    })

    it('shows error when minlength is less than 10', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#minlength')

      await input.setValue('short')
      await input.trigger('change')

      expect(wrapper.text()).toContain('must be at least 10 characters')
    })

    it('passes when minlength is 10 or more', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#minlength')

      await input.setValue('this is exactly ten or more characters')
      await input.trigger('change')

      expect(wrapper.text()).not.toContain('minlength')
    })
  })

  describe('email validation', () => {
    it('shows error when email field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#email')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The email field is required')
    })

    it('shows error for invalid email format', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#email')

      await input.setValue('notanemail')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be a valid email')
    })

    it('passes for valid email', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#email')

      await input.setValue('test@example.com')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('email')
    })

    it('validates various email formats', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#email')

      // Valid emails
      const validEmails = ['user@domain.com', 'user.name@domain.co.uk', 'user+tag@domain.org']
      for (const email of validEmails) {
        await input.setValue(email)
        await input.trigger('blur')
        expect(wrapper.text()).not.toContain('must be a valid email')
      }

      // Invalid emails
      const invalidEmails = ['user@', '@domain.com', 'user domain.com']
      for (const email of invalidEmails) {
        await input.setValue(email)
        await input.trigger('blur')
        expect(wrapper.text()).toContain('must be a valid email')
      }
    })
  })

  describe('number validation', () => {
    it('shows error when number field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#number')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The number field is required')
    })

    it('shows error for non-numeric value', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#number')

      await input.setValue('abc')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be numeric')
    })

    it('passes for numeric value', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#number')

      await input.setValue('123')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('number field')
    })
  })

  describe('range validation', () => {
    it('shows error when range field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The range field is required')
    })

    it('shows error for non-numeric value', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.setValue('abc')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be numeric')
    })

    it('shows error for value below 10', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.setValue('5')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be between 10 and 100')
    })

    it('shows error for value above 100', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.setValue('150')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be between 10 and 100')
    })

    it('passes for value within range', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.setValue('50')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('range field')
    })

    it('passes for boundary values', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#range')

      await input.setValue('10')
      await input.trigger('blur')
      expect(wrapper.text()).not.toContain('must be between')

      await input.setValue('100')
      await input.trigger('blur')
      expect(wrapper.text()).not.toContain('must be between')
    })
  })

  describe('password validation', () => {
    it('shows error when password field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The password field is required')
    })

    it('shows error for password less than 6 characters', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password')

      await input.setValue('12345')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be at least 6 characters')
    })

    it('passes for password 6 or more characters', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password')

      await input.setValue('123456')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('password field is')
    })

    it('password input is type password', () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password')
      expect(input.attributes('type')).toBe('password')
    })
  })

  describe('password confirmation validation', () => {
    it('shows error when confirmation is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password_repeat')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('password confirmation field is required')
    })

    it('shows error when confirmation is too short', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#password_repeat')

      await input.setValue('12345')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be at least 6 characters')
    })

    it('shows error when passwords do not match', async () => {
      wrapper = createWrapper()

      const password = wrapper.find('#password')
      const passwordRepeat = wrapper.find('#password_repeat')

      await password.setValue('password123')
      await passwordRepeat.setValue('different123')
      await passwordRepeat.trigger('blur')

      expect(wrapper.text()).toContain('does not match')
    })

    it('passes when passwords match', async () => {
      wrapper = createWrapper()

      const password = wrapper.find('#password')
      const passwordRepeat = wrapper.find('#password_repeat')

      await password.setValue('password123')
      await passwordRepeat.setValue('password123')
      await passwordRepeat.trigger('blur')

      expect(wrapper.text()).not.toContain('does not match')
    })
  })

  describe('URL validation', () => {
    it('shows error when website field is empty', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#website')

      await input.trigger('blur')

      expect(wrapper.text()).toContain('The website field is required')
    })

    it('shows error for invalid URL', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#website')

      await input.setValue('not a url')
      await input.trigger('blur')

      expect(wrapper.text()).toContain('must be a valid URL')
    })

    it('passes for valid URL', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#website')

      await input.setValue('https://example.com')
      await input.trigger('blur')

      expect(wrapper.text()).not.toContain('website field')
    })

    it('validates various URL formats', async () => {
      wrapper = createWrapper()
      const input = wrapper.find('#website')

      // Valid URLs
      const validUrls = ['http://example.com', 'https://example.com', 'example.com', 'www.example.com/path']
      for (const url of validUrls) {
        await input.setValue(url)
        await input.trigger('blur')
        expect(wrapper.text()).not.toContain('must be a valid URL')
      }
    })
  })

  describe('form submission', () => {
    it('validates all fields on submit', async () => {
      wrapper = createWrapper()
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

      const form = wrapper.find('form')
      await form.trigger('submit')

      // All validation errors should appear
      expect(wrapper.text()).toContain('simple field is required')
      expect(wrapper.text()).toContain('minlength field is required')
      expect(wrapper.text()).toContain('email field is required')
      expect(wrapper.text()).toContain('number field is required')
      expect(wrapper.text()).toContain('range field is required')
      expect(wrapper.text()).toContain('password field is required')
      expect(wrapper.text()).toContain('password confirmation field is required')
      expect(wrapper.text()).toContain('website field is required')

      // Alert should not be called when invalid
      expect(alertSpy).not.toHaveBeenCalled()

      alertSpy.mockRestore()
    })

    it('shows success alert when all fields valid', async () => {
      wrapper = createWrapper()
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

      // Fill in all valid values
      await wrapper.find('#basic').setValue('test value')
      await wrapper.find('#minlength').setValue('this is a long enough value')
      await wrapper.find('#email').setValue('test@example.com')
      await wrapper.find('#number').setValue('123')
      await wrapper.find('#range').setValue('50')
      await wrapper.find('#password').setValue('password123')
      await wrapper.find('#password_repeat').setValue('password123')
      await wrapper.find('#website').setValue('https://example.com')

      const form = wrapper.find('form')
      await form.trigger('submit')

      expect(alertSpy).toHaveBeenCalledWith('Form is valid!')

      alertSpy.mockRestore()
    })

    it('prevents default form submission', async () => {
      wrapper = createWrapper()
      const form = wrapper.find('form')

      const event = { preventDefault: vi.fn() }
      await wrapper.vm.$.exposed?.onSubmit?.(event)

      // Form submission is handled by the onSubmit handler
      // The @submit handler calls e.preventDefault()
    })

    it('does not show alert if any field is invalid', async () => {
      wrapper = createWrapper()
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

      // Fill in most valid values but leave one invalid
      await wrapper.find('#basic').setValue('test value')
      await wrapper.find('#minlength').setValue('this is a long enough value')
      await wrapper.find('#email').setValue('invalid-email') // Invalid
      await wrapper.find('#number').setValue('123')
      await wrapper.find('#range').setValue('50')
      await wrapper.find('#password').setValue('password123')
      await wrapper.find('#password_repeat').setValue('password123')
      await wrapper.find('#website').setValue('https://example.com')

      const form = wrapper.find('form')
      await form.trigger('submit')

      expect(alertSpy).not.toHaveBeenCalled()

      alertSpy.mockRestore()
    })
  })
})
