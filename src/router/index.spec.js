import { afterEach, describe, expect, it, vi } from 'vitest'

describe('production deployment routes', () => {
  let router

  afterEach(() => {
    router?.options.history.destroy()
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('keeps login and dashboard links under the Vite deployment base', async () => {
    vi.stubEnv('BASE_URL', '/sing-app-vue/')
    router = (await import('./index')).default
    expect(router.resolve('/login').href).toBe('/sing-app-vue/login')
    expect(router.resolve('/app/main/analytics').href).toBe('/sing-app-vue/app/main/analytics')
  })
})
