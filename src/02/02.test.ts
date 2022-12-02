import { describe, it, expect } from 'vitest'
import { rockPaperScissors } from './02'
import rawInput from './02.input'

describe('02', () => {
  it('returns proper score', () => {
    expect(rockPaperScissors(rawInput)).toEqual(13924)
  })
})
