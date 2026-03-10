import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useApiRequest } from './useApiRequest'

// Mock axios
vi.mock('axios', () => ({
  default: vi.fn()
}))

describe('useApiRequest', () => {
  let axios

  beforeEach(async () => {
    axios = (await import('axios')).default
    vi.clearAllMocks()
  })

  describe('initialization', () => {
    it('initializes with default state', () => {
      const api = useApiRequest()

      expect(api.data.value).toBe(null)
      expect(api.error.value).toBe(null)
      expect(api.isLoading.value).toBe(false)
      expect(api.isSuccess.value).toBe(false)
      expect(api.lastFetchedAt.value).toBe(null)
    })

    it('accepts initial data option', () => {
      const initialData = { items: [] }
      const api = useApiRequest({ initialData })

      expect(api.data.value).toEqual(initialData)
    })

    it('accepts callback options', () => {
      const onSuccess = vi.fn()
      const onError = vi.fn()

      const api = useApiRequest({ onSuccess, onError })

      expect(api).toBeDefined()
    })
  })

  describe('get method', () => {
    it('makes GET request and returns success', async () => {
      const responseData = { id: 1, name: 'Test' }
      axios.mockResolvedValue({ data: responseData })

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.success).toBe(true)
      expect(result.data).toEqual(responseData)
      expect(api.data.value).toEqual(responseData)
      expect(api.isSuccess.value).toBe(true)
    })

    it('handles GET request error', async () => {
      const error = new Error('Network error')
      error.response = { status: 500, data: { message: 'Server error' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
      expect(result.error.message).toBe('Server error')
      expect(api.error.value).toBeDefined()
    })

    it('sets loading state during request', async () => {
      let loadingDuringRequest = false

      axios.mockImplementation(() => {
        return new Promise(resolve => {
          setTimeout(() => resolve({ data: {} }), 10)
        })
      })

      const api = useApiRequest()
      const promise = api.get('/test-endpoint')

      // Check loading state immediately after calling
      loadingDuringRequest = api.isLoading.value

      await promise

      expect(loadingDuringRequest).toBe(true)
      expect(api.isLoading.value).toBe(false)
    })

    it('updates lastFetchedAt on success', async () => {
      axios.mockResolvedValue({ data: {} })

      const api = useApiRequest()
      await api.get('/test-endpoint')

      expect(api.lastFetchedAt.value).toBeDefined()
      expect(new Date(api.lastFetchedAt.value)).toBeInstanceOf(Date)
    })
  })

  describe('post method', () => {
    it('makes POST request with payload', async () => {
      const payload = { name: 'Test' }
      const responseData = { id: 1, name: 'Test' }
      axios.mockResolvedValue({ data: responseData })

      const api = useApiRequest()
      const result = await api.post('/test-endpoint', payload)

      expect(result.success).toBe(true)
      expect(axios).toHaveBeenCalledWith(expect.objectContaining({
        method: 'POST',
        url: '/test-endpoint',
        data: payload
      }))
    })

    it('handles POST request error', async () => {
      const error = new Error('Validation error')
      error.response = { status: 400, data: { error: 'Invalid data' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.post('/test-endpoint', {})

      expect(result.success).toBe(false)
      expect(result.error.message).toBe('Invalid data')
    })
  })

  describe('put method', () => {
    it('makes PUT request with payload', async () => {
      const payload = { id: 1, name: 'Updated' }
      axios.mockResolvedValue({ data: payload })

      const api = useApiRequest()
      const result = await api.put('/test-endpoint/1', payload)

      expect(result.success).toBe(true)
      expect(axios).toHaveBeenCalledWith(expect.objectContaining({
        method: 'PUT',
        url: '/test-endpoint/1',
        data: payload
      }))
    })
  })

  describe('delete method', () => {
    it('makes DELETE request', async () => {
      axios.mockResolvedValue({ data: { deleted: true } })

      const api = useApiRequest()
      const result = await api.delete('/test-endpoint/1')

      expect(result.success).toBe(true)
      expect(axios).toHaveBeenCalledWith(expect.objectContaining({
        method: 'DELETE',
        url: '/test-endpoint/1'
      }))
    })

    it('handles DELETE request error', async () => {
      const error = new Error('Not found')
      error.response = { status: 404, data: { message: 'Resource not found' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.delete('/test-endpoint/999')

      expect(result.success).toBe(false)
      expect(result.error.status).toBe(404)
    })
  })

  describe('transformResponse option', () => {
    it('transforms response data', async () => {
      const responseData = { items: [1, 2, 3] }
      axios.mockResolvedValue({ data: responseData })

      const transformResponse = (data) => data.items.map(i => i * 2)

      const api = useApiRequest({ transformResponse })
      await api.get('/test-endpoint')

      expect(api.data.value).toEqual([2, 4, 6])
    })

    it('passes transformed data to result', async () => {
      const responseData = { value: 10 }
      axios.mockResolvedValue({ data: responseData })

      const transformResponse = (data) => data.value * 2

      const api = useApiRequest({ transformResponse })
      const result = await api.get('/test-endpoint')

      expect(result.data).toBe(20)
    })
  })

  describe('callbacks', () => {
    it('calls onSuccess callback on successful request', async () => {
      const onSuccess = vi.fn()
      const responseData = { id: 1 }
      axios.mockResolvedValue({ data: responseData })

      const api = useApiRequest({ onSuccess })
      await api.get('/test-endpoint')

      expect(onSuccess).toHaveBeenCalledWith(
        responseData,
        expect.objectContaining({ data: responseData })
      )
    })

    it('calls onError callback on failed request', async () => {
      const onError = vi.fn()
      const error = new Error('Failed')
      error.response = { status: 500, data: { message: 'Server error' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest({ onError })
      await api.get('/test-endpoint')

      expect(onError).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Server error' }),
        error
      )
    })

    it('does not call onSuccess on error', async () => {
      const onSuccess = vi.fn()
      const error = new Error('Failed')
      axios.mockRejectedValue(error)

      const api = useApiRequest({ onSuccess })
      await api.get('/test-endpoint')

      expect(onSuccess).not.toHaveBeenCalled()
    })

    it('does not call onError on success', async () => {
      const onError = vi.fn()
      axios.mockResolvedValue({ data: {} })

      const api = useApiRequest({ onError })
      await api.get('/test-endpoint')

      expect(onError).not.toHaveBeenCalled()
    })
  })

  describe('retry method', () => {
    it('retries the last request', async () => {
      axios.mockResolvedValueOnce({ data: { attempt: 1 } })
      axios.mockResolvedValueOnce({ data: { attempt: 2 } })

      const api = useApiRequest()
      await api.get('/test-endpoint')

      expect(api.data.value).toEqual({ attempt: 1 })

      await api.retry()

      expect(api.data.value).toEqual({ attempt: 2 })
      expect(axios).toHaveBeenCalledTimes(2)
    })

    it('returns error when no previous request exists', async () => {
      const api = useApiRequest()
      const result = await api.retry()

      expect(result.success).toBe(false)
      expect(result.error.message).toBe('No previous request to retry')
    })

    it('retries with same configuration', async () => {
      const payload = { data: 'test' }
      axios.mockResolvedValue({ data: {} })

      const api = useApiRequest()
      await api.post('/test-endpoint', payload)
      await api.retry()

      expect(axios).toHaveBeenLastCalledWith(expect.objectContaining({
        method: 'POST',
        url: '/test-endpoint',
        data: payload
      }))
    })
  })

  describe('reset method', () => {
    it('resets state to initial values', async () => {
      axios.mockResolvedValue({ data: { id: 1 } })

      const api = useApiRequest({ initialData: [] })
      await api.get('/test-endpoint')

      expect(api.data.value).toEqual({ id: 1 })
      expect(api.isSuccess.value).toBe(true)

      api.reset()

      expect(api.data.value).toEqual([])
      expect(api.error.value).toBe(null)
      expect(api.isLoading.value).toBe(false)
      expect(api.isSuccess.value).toBe(false)
      expect(api.lastFetchedAt.value).toBe(null)
    })

    it('clears error state', async () => {
      const error = new Error('Failed')
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      await api.get('/test-endpoint')

      expect(api.error.value).not.toBe(null)

      api.reset()

      expect(api.error.value).toBe(null)
    })
  })

  describe('clearError method', () => {
    it('clears only error state', async () => {
      const error = new Error('Failed')
      axios.mockRejectedValue(error)

      const api = useApiRequest({ initialData: 'initial' })
      await api.get('/test-endpoint')

      expect(api.error.value).not.toBe(null)

      api.clearError()

      expect(api.error.value).toBe(null)
      // Data should still be initial (not reset)
      expect(api.data.value).toBe('initial')
    })
  })

  describe('error handling', () => {
    it('extracts message from response data', async () => {
      const error = new Error()
      error.response = { status: 400, data: { message: 'Custom message' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.message).toBe('Custom message')
    })

    it('extracts error field from response data', async () => {
      const error = new Error()
      error.response = { status: 400, data: { error: 'Error field' } }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.message).toBe('Error field')
    })

    it('falls back to error message', async () => {
      const error = new Error('Axios error message')
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.message).toBe('Axios error message')
    })

    it('provides fallback message when none available', async () => {
      const error = new Error()
      error.message = ''
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.message).toBe('Request failed')
    })

    it('includes status code in error', async () => {
      const error = new Error()
      error.response = { status: 403, data: {} }
      axios.mockRejectedValue(error)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.status).toBe(403)
    })

    it('includes original error reference', async () => {
      const originalError = new Error('Original')
      axios.mockRejectedValue(originalError)

      const api = useApiRequest()
      const result = await api.get('/test-endpoint')

      expect(result.error.originalError).toBe(originalError)
    })
  })

  describe('execute method', () => {
    it('accepts custom axios config', async () => {
      axios.mockResolvedValue({ data: {} })

      const api = useApiRequest()
      await api.execute({
        method: 'GET',
        url: '/custom-endpoint',
        headers: { 'X-Custom': 'header' }
      })

      expect(axios).toHaveBeenCalledWith(expect.objectContaining({
        method: 'GET',
        url: '/custom-endpoint',
        headers: { 'X-Custom': 'header' }
      }))
    })
  })
})
