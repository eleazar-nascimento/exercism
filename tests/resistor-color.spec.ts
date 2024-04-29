import { describe, it, expect } from 'bun:test'

import { colorCode, COLORS } from '../use-cases/resistor-color'
describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })
  it('White', () => {
    expect(colorCode('white')).toEqual(9)
  })
  it('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
})
describe('Colors', () => {
  it('returns all colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ])
  })
})