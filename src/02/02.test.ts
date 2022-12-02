import { describe, it, expect } from 'vitest'
import { rockPaperScissorsPartOne, rockPaperScissorsPartTwo } from './02'
import rawInput from './02.input'

describe('02', () => {
  describe('part 1', () => {
    it('returns proper score', () => {
      expect(rockPaperScissorsPartOne(rawInput)).toEqual(13924)
    })
  })

  describe('part 2', () => {
    it('returns proper score', () => {
      expect(rockPaperScissorsPartTwo(rawInput)).toEqual(13448)
    })
  })
})
