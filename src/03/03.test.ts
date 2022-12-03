import { describe, it, expect } from 'vitest'
import { rucksackPrioritiesPartOne, rucksackPrioritiesPartTwo } from './03'
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

  describe('part 2', () => {
    it("returns proper sum of priorities for readme's example", () => {
      expect(rucksackPrioritiesPartTwo(exampleInput)).toEqual(70)
    })

    it('returns proper sum of priorities for full input', () => {
      expect(rucksackPrioritiesPartTwo(rawInput)).toEqual(2641)
    })
  })
})
