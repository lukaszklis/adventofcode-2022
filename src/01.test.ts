import { assert, test } from 'vitest'
import { getElfWithMostCalories, getThreeElvesWithMostCalories } from './01'
import rawInput from './01.input'

test('01', () => {
  test('returns calories for elf with most calories from all', () => {
    assert.equal(getElfWithMostCalories(rawInput), 66186)
  })

  test('returns calories for first three elves with most calories from all', () => {
    assert.equal(getThreeElvesWithMostCalories(rawInput), [66186, 65638, 64980])
  })
})
