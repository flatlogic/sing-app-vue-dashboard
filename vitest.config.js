import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: ['./src/__tests__/setup.js'],
      include: ['src/**/*.{test,spec}.{js,ts}'],
      exclude: ['node_modules', 'dist', 'src/documentation/**'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: [
          'src/stores/**',
          'src/composables/**',
          'src/utils/**',
          'src/components/**/*.vue',
          'src/pages/**/*.vue'
        ]
        // Enable thresholds after Phase 3/4 tests are added:
        // thresholds: {
        //   statements: 70,
        //   branches: 60,
        //   functions: 70,
        //   lines: 70
        // }
      },
      clearMocks: true,
      restoreMocks: true
    }
  })
)
