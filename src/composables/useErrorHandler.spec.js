import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useErrorHandler } from './useErrorHandler'

describe('useErrorHandler', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('initialization', () => {
    it('initializes with null error', () => {
      const handler = useErrorHandler()

      expect(handler.error.value).toBe(null)
    })

    it('initializes with empty error history', () => {
      const handler = useErrorHandler()

      expect(handler.errorHistory.value).toEqual([])
    })

    it('hasError returns false initially', () => {
      const handler = useErrorHandler()

      expect(handler.hasError()).toBe(false)
    })
  })

  describe('setError', () => {
    it('sets error from string', () => {
      const handler = useErrorHandler()

      handler.setError('Something went wrong')

      expect(handler.error.value.message).toBe('Something went wrong')
      expect(handler.error.value.code).toBe('ERROR')
    })

    it('sets error from Error object', () => {
      const handler = useErrorHandler()
      const error = new Error('Test error')
      error.name = 'TestError'

      handler.setError(error)

      expect(handler.error.value.message).toBe('Test error')
      expect(handler.error.value.code).toBe('TestError')
      expect(handler.error.value.stack).toBeDefined()
    })

    it('sets error from custom object', () => {
      const handler = useErrorHandler()
      const error = {
        message: 'Custom error',
        code: 'CUSTOM_ERROR',
        details: { field: 'email' }
      }

      handler.setError(error)

      expect(handler.error.value.message).toBe('Custom error')
      expect(handler.error.value.code).toBe('CUSTOM_ERROR')
      expect(handler.error.value.details).toEqual({ field: 'email' })
    })

    it('handles unknown error types', () => {
      const handler = useErrorHandler()

      handler.setError(null)

      expect(handler.error.value.message).toBe('An unknown error occurred')
      expect(handler.error.value.code).toBe('UNKNOWN_ERROR')
    })

    it('accepts context parameter', () => {
      const handler = useErrorHandler()

      handler.setError('Error', { source: 'api', action: 'fetch' })

      expect(handler.error.value.source).toBe('api')
      expect(handler.error.value.action).toBe('fetch')
    })

    it('returns the error object', () => {
      const handler = useErrorHandler()

      const result = handler.setError('Test error')

      expect(result.message).toBe('Test error')
    })
  })

  describe('error history', () => {
    it('adds error to history', () => {
      const handler = useErrorHandler()

      handler.setError('First error')
      handler.setError('Second error')

      expect(handler.errorHistory.value.length).toBe(2)
      expect(handler.errorHistory.value[0].message).toBe('First error')
      expect(handler.errorHistory.value[1].message).toBe('Second error')
    })

    it('includes timestamps in history', () => {
      const handler = useErrorHandler()

      handler.setError('Error with timestamp')

      expect(handler.errorHistory.value[0].timestamp).toBeDefined()
      expect(new Date(handler.errorHistory.value[0].timestamp)).toBeInstanceOf(Date)
    })

    it('limits history to 10 entries', () => {
      const handler = useErrorHandler()

      // Add 12 errors
      for (let i = 1; i <= 12; i++) {
        handler.setError(`Error ${i}`)
      }

      expect(handler.errorHistory.value.length).toBe(10)
      expect(handler.errorHistory.value[0].message).toBe('Error 3')
      expect(handler.errorHistory.value[9].message).toBe('Error 12')
    })

    it('clearHistory removes all history', () => {
      const handler = useErrorHandler()

      handler.setError('Error 1')
      handler.setError('Error 2')
      handler.clearHistory()

      expect(handler.errorHistory.value).toEqual([])
    })
  })

  describe('auto-clear', () => {
    it('auto-clears error after specified delay', () => {
      const handler = useErrorHandler({ clearAfter: 5000 })

      handler.setError('Will be cleared')

      expect(handler.error.value).not.toBe(null)

      vi.advanceTimersByTime(5000)

      expect(handler.error.value).toBe(null)
    })

    it('does not auto-clear when clearAfter is 0', () => {
      const handler = useErrorHandler({ clearAfter: 0 })

      handler.setError('Will not be cleared')

      vi.advanceTimersByTime(10000)

      expect(handler.error.value).not.toBe(null)
    })

    it('does not auto-clear when clearAfter not specified', () => {
      const handler = useErrorHandler()

      handler.setError('Will not be cleared')

      vi.advanceTimersByTime(60000)

      expect(handler.error.value).not.toBe(null)
    })
  })

  describe('clearError', () => {
    it('clears current error', () => {
      const handler = useErrorHandler()

      handler.setError('Error to clear')
      handler.clearError()

      expect(handler.error.value).toBe(null)
    })

    it('cancels pending auto-clear timeout', () => {
      const handler = useErrorHandler()

      handler.setError('Error')
      handler.scheduleClear(5000) // Manually schedule clear
      handler.clearError()

      // Set a new error (no auto-clear since clearAfter is 0)
      handler.setError('New error')

      // Advance timer past original scheduled clear time
      vi.advanceTimersByTime(5000)

      // New error should still be present (old timeout was cancelled)
      expect(handler.error.value.message).toBe('New error')
    })

    it('hasError returns false after clear', () => {
      const handler = useErrorHandler()

      handler.setError('Error')
      expect(handler.hasError()).toBe(true)

      handler.clearError()
      expect(handler.hasError()).toBe(false)
    })
  })

  describe('scheduleClear', () => {
    it('clears error after specified delay', () => {
      const handler = useErrorHandler()

      handler.setError('Error')
      handler.scheduleClear(3000)

      expect(handler.error.value).not.toBe(null)

      vi.advanceTimersByTime(3000)

      expect(handler.error.value).toBe(null)
    })

    it('replaces existing scheduled clear', () => {
      const handler = useErrorHandler()

      handler.setError('Error')
      handler.scheduleClear(3000)
      handler.scheduleClear(6000) // New, longer delay

      vi.advanceTimersByTime(3000)

      // Should not be cleared yet
      expect(handler.error.value).not.toBe(null)

      vi.advanceTimersByTime(3000)

      // Now it should be cleared
      expect(handler.error.value).toBe(null)
    })
  })

  describe('handleAsync', () => {
    it('returns result on success', async () => {
      const handler = useErrorHandler()
      const asyncFn = vi.fn().mockResolvedValue('success')

      const result = await handler.handleAsync(asyncFn)

      expect(result).toBe('success')
      expect(handler.error.value).toBe(null)
    })

    it('catches and sets error on failure', async () => {
      const handler = useErrorHandler()
      const error = new Error('Async error')
      const asyncFn = vi.fn().mockRejectedValue(error)

      const result = await handler.handleAsync(asyncFn)

      expect(result).toBe(null)
      expect(handler.error.value.message).toBe('Async error')
    })

    it('adds context to caught errors', async () => {
      const handler = useErrorHandler()
      const asyncFn = vi.fn().mockRejectedValue(new Error('Failed'))

      await handler.handleAsync(asyncFn, { source: 'api', action: 'save' })

      expect(handler.error.value.source).toBe('api')
      expect(handler.error.value.action).toBe('save')
    })

    it('clears previous error before executing', async () => {
      const handler = useErrorHandler()

      handler.setError('Previous error')
      expect(handler.error.value).not.toBe(null)

      const asyncFn = vi.fn().mockResolvedValue('success')
      await handler.handleAsync(asyncFn)

      expect(handler.error.value).toBe(null)
    })

    it('works with sync functions wrapped in async', async () => {
      const handler = useErrorHandler()
      const asyncFn = vi.fn().mockReturnValue(Promise.resolve(42))

      const result = await handler.handleAsync(asyncFn)

      expect(result).toBe(42)
    })
  })

  describe('onError callback', () => {
    it('calls onError when error is set', () => {
      const onError = vi.fn()
      const handler = useErrorHandler({ onError })

      handler.setError('Error occurred')

      expect(onError).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Error occurred'
      }))
    })

    it('calls onError for async errors', async () => {
      const onError = vi.fn()
      const handler = useErrorHandler({ onError })
      const asyncFn = vi.fn().mockRejectedValue(new Error('Async failed'))

      await handler.handleAsync(asyncFn)

      expect(onError).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Async failed'
      }))
    })

    it('does not call onError on clear', () => {
      const onError = vi.fn()
      const handler = useErrorHandler({ onError })

      handler.setError('Error')
      onError.mockClear()

      handler.clearError()

      expect(onError).not.toHaveBeenCalled()
    })
  })

  describe('hasError', () => {
    it('returns true when error is set', () => {
      const handler = useErrorHandler()

      handler.setError('Error')

      expect(handler.hasError()).toBe(true)
    })

    it('returns false when error is null', () => {
      const handler = useErrorHandler()

      expect(handler.hasError()).toBe(false)
    })

    it('returns false after error is cleared', () => {
      const handler = useErrorHandler()

      handler.setError('Error')
      handler.clearError()

      expect(handler.hasError()).toBe(false)
    })
  })

  describe('error normalization', () => {
    it('extracts error field from object', () => {
      const handler = useErrorHandler()

      handler.setError({ error: 'Error from error field' })

      expect(handler.error.value.message).toBe('Error from error field')
    })

    it('provides default message for empty object', () => {
      const handler = useErrorHandler()

      handler.setError({})

      expect(handler.error.value.message).toBe('An error occurred')
    })

    it('extracts status as code', () => {
      const handler = useErrorHandler()

      handler.setError({ message: 'Not found', status: 404 })

      expect(handler.error.value.code).toBe(404)
    })

    it('preserves additional error properties', () => {
      const handler = useErrorHandler()

      handler.setError({
        message: 'Validation failed',
        code: 'VALIDATION_ERROR',
        fields: ['email', 'password']
      })

      expect(handler.error.value.fields).toEqual(['email', 'password'])
    })
  })
})
