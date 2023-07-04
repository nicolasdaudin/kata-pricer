import { pricer } from "./pricer"

describe('Kata Pricer', () => {
  test('1 article à 0.00 € et taxe 0% renvoit "0.00 €"', () => {
    expect(pricer(1, 0)).toEqual('0.00 €')
  })
  test('1 article à 1.00 € et taxe 0% renvoit "1.00 €"', () => {
    expect(pricer(1, 1)).toEqual('1.00 €')
  })
  test('2 articles à 1.00 € et taxe 0% renvoit "2.00 €"', () => {
    expect(pricer(2, 1)).toEqual('2.00 €')
  })

})