import { describe, it, expect } from 'vitest'
import { rucksackPrioritiesPartOne } from './03'
import rawInput, { exampleInput } from './03.input'

describe('03', () => {
  describe('part 1', () => {
    it("returns proper sum of priorities for readme's example", () => {
      expect(rucksackPrioritiesPartOne(exampleInput)).toEqual(157)
    })

    it('returns proper sum of priorities for full input', () => {
      expect(rucksackPrioritiesPartOne(rawInput)).toEqual(8401)
    })
  })
})
