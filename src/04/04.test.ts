import { describe, it, expect } from 'vitest'
import { campCleanupPartOne } from './04'
import rawInput, { exampleInput } from './04.input'

describe('04', () => {
  describe('part 1', () => {
    it('returns correct number of pairs with fully overlapping assignments for example input', () => {
      expect(campCleanupPartOne(exampleInput)).toEqual(2)
    })

    it('returns correct number of pairs with fully overlapping assignments for raw input', () => {
      expect(campCleanupPartOne(rawInput)).toEqual(584)
    })
  })
})
