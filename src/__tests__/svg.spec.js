import { describe, expect, it } from 'vitest'
import bagUrl from '@/assets/bag.svg'
import BagIcon from '@/assets/bag.svg?component'

describe('SVG asset imports', () => {
  it('provides image URLs by default for compiled img elements', () => {
    expect(typeof bagUrl).toBe('string')
    expect(bagUrl).toMatch(/^(?:data:image\/svg\+xml,|\/)/)
  })

  it('preserves explicit Vue component imports used by sidebar icons', () => {
    expect(typeof BagIcon.render).toBe('function')
  })
})
