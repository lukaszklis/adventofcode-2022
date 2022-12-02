import { describe, it, expect } from 'vitest'
import { getElfWithMostCalories, getThreeElvesWithMostCalories } from './01'
import rawInput from './01.input'

describe('01', () => {
  it('returns calories for elf with most calories from all', () => {
    expect(getElfWithMostCalories(rawInput)).toEqual(66186)
  })

  it('returns calories for first three elves with most calories from all', () => {
    expect(getThreeElvesWithMostCalories(rawInput)).toEqual([66186, 65638, 64980])
  })
})
