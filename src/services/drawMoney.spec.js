import { drawMoney } from './drawMoney'

describe('#drawMoney', () => {
  it('returns banknotes of $10, $10 and $10 when value is $30', () => {
    expect(drawMoney({ value: 30 })).toEqual([10, 10, 10])
  })

  it('returns banknotes of $50, $10, $10 and $5 when value is $75', () => {
    expect(drawMoney({ value: 75 })).toEqual([50, 10, 10, 5])
  })

  it('returns banknotes of $100, $10, $10, $1, $1 and $1 when value is $163', () => {
    expect(drawMoney({ value: 163 })).toEqual([100, 50, 10, 1, 1, 1])
  })
})