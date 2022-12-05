import { describe, it, expect } from 'vitest'
import { supplyStacksPartOne } from './05'
import rawInput, { exampleInput } from './05.input'

describe('05', () => {
  describe('part 1', () => {
    it('returns correct top stack message for example input', () => {
      expect(supplyStacksPartOne(exampleInput)).toEqual('CMZ')
    })
  })
})
